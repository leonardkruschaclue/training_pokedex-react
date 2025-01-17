import { QUERYBASEURL } from '../Constants'

import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { AbilityDetailResponse, MoveDetailResponse, PokemonListResponse, PokemonResponse } from './types/api'
import { PokedexResult, AbilityDetailResult, PokemonDetails, MoveDetailResult } from './types/pokemon'

const transformPokemon = (raw: PokemonResponse) => {
    const pokemon: PokemonDetails = {
        id: raw.id,
        name: raw.name,
        types: raw.types.map((x) => x.type.name),
        stats: raw.stats.map((x) => ({
            name: x.stat.name.replace('-', ' '),
            value: x.base_stat,
        })),
        abilities: raw.abilities.map((x) => ({
            name: x.ability.name.replace('-', ' '),
            isHidden: x.is_hidden,
        })),
        moves: raw.moves.map((x) => ({
            name: x.move.name.replace('-', ' ')
        })),
        imageSrc: raw.sprites.other['official-artwork'].front_default,
    }

    return pokemon
}


const transformAbility = (raw: AbilityDetailResponse) => {
    const ability: AbilityDetailResult = {
        id: raw.id,
        name: raw.name,
        generation: raw.generation.name,
        texts: {
            effect_text: raw.effect_entries?.filter((x) => x.language.name === "en").at(0)?.effect ?? "",
            effect_text_short: raw.effect_entries?.filter((x) => x.language.name === "en").at(0)?.short_effect ?? "",
            effect_chance: raw.effect_chance ?? 100,
            flavor: raw.flavor_text_entries?.filter((x) => x.language.name === "en").at(0)?.flavor_text ?? "",
            }
        }
    return ability
}

const transformMove = (raw: MoveDetailResponse) => {
    const move: MoveDetailResult = {
        id: raw.id,
        name: raw.name,
        types: [raw.type.name],
        accuracy: raw.accuracy,
        power: raw.power,
        pp: raw.pp,
        texts: {
            effect_text: raw.effect_entries?.filter((x) => x.language.name === "en").at(0)?.effect ?? "",
            effect_text_short: raw.effect_entries?.filter((x) => x.language.name === "en").at(0)?.short_effect ?? "",
            effect_chance: raw.effect_chance ?? 100,
            flavor: raw.flavor_text_entries?.filter((x) => x.language.name === "en").at(0)?.flavor_text ?? "",
            },
        meta: {
            generation: raw.generation.name,
            critrate: raw.meta?.crit_rate ?? 0,
            drain: raw.meta?.drain ?? 0,
            healing: raw.meta?.healing ?? 0,
            ailment: raw.meta?.ailment.name ?? "",
            ailmentChance: raw.meta?.ailment_chance ?? 0,
            category: raw.meta?.category.name ?? "",
            target: raw.target.name,
            },
        learnedBy: raw.learned_by_pokemon.map((x) => x.name)
        }
    return move
}

const splitQuery = (url?: string) => `?${url?.split('?')?.[1] ?? ''}`

export const pokemonApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: QUERYBASEURL }),
    endpoints: (builder) => ({
        pokedex: builder.query<PokedexResult, string>({
            async queryFn(arg, _queryApi, _extraOptions, fetchWithBQ) {
                const response = await fetchWithBQ(`pokemon/${arg}`)

                if (response.error) {
                    return { error: response.error }
                }

                const pokedexResult = response.data as PokemonListResponse

                const result = await Promise.all(pokedexResult.results.map((x) => fetchWithBQ(`pokemon/${x.name}`)).map((x) => x))

                return result.some((x) => x.error) ?
                { error: result.find((x) => x.error) as FetchBaseQueryError }
                : {
                    data:{
                        count: pokedexResult.count,
                        pokedex: result.map((x) => transformPokemon(x.data as PokemonResponse)),
                        next: splitQuery(pokedexResult.next),
                        previous: splitQuery(pokedexResult.previous),
                    } as PokedexResult,
                }
            },
                
        }),
        pokemon: builder.query<PokemonDetails, number | string | void>({
            query: (pokemon) => {
                return `pokemon/${pokemon}`
            },
            transformResponse: transformPokemon,
        }),
        abilityInformation: builder.query<AbilityDetailResult, number | string | boolean | void>({
            query: (ability) => {
                return `ability/${ability}`
            },
            transformResponse: transformAbility,
        }),
        moveInformation: builder.query<MoveDetailResult, number | string | boolean | void>({
            query: (move) => {
                return `move/${move}`
            },
            transformResponse: transformMove,
        })

    }),
})

export const { usePokemonQuery, usePokedexQuery, useAbilityInformationQuery, useMoveInformationQuery } = pokemonApi