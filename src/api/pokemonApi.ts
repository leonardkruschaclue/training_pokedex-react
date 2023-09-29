import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { AbilityDetailResponse, PokemonListResponse, PokemonResponse } from '../types/api'
import { PokedexResult, PokemonStats, PokemonAbility, AbilityDetailResult, PokemonMove, PokemonDetails } from '../types/pokemon'

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
        name: raw.name,
        flavor: raw.flavor_text_entries[1].flavor_text
        }
    return ability
}

const transformMove = (raw: PokemonResponse) => {
    const move: PokemonMove = {
        moves: raw.moves.map((x) => ({
            name: x.move.name
        }))
        }
    return move
}

const splitQuery = (url?: string) => `?${url?.split('?')?.[1] ?? ''}`

export const pokemonApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
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
        })

    }),
})

export const { usePokemonQuery, usePokedexQuery, useAbilityInformationQuery } = pokemonApi