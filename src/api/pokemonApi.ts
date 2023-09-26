import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { PokemonListResponse, PokemonResponse } from '../types/api'
import { PokedexResult, PokemonDetail, PokemonSkills } from '../types/pokemon'

const transformPokemon = (raw: PokemonResponse) => {
    const pokemon: PokemonDetail = {
        id: raw.id,
        name: raw.name,
        types: raw.types.map((x) => x.type.name),
        stats: raw.stats.map((x) => ({
            name: x.stat.name.replace('-', ' '),
            value: x.base_stat,
        })),
        imageSrc: raw.sprites.other['official-artwork'].front_default,
    }

    return pokemon
}

const transformPokemonSkills = (raw: PokemonResponse) => {
    const pokemon: PokemonSkills = {
        id: raw.id,
        name: raw.name,
        abilitys: raw.abilities.map((x) => ({
            name: x.ability.name.replace('-', ' '),
            isHidden: x.isHidden,
        })),

        }
    return pokemon
}

const splitQuery = (url?: string) => `?${url?.split('?')?.[1] ?? ''}`

export const pokemonApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon/' }),
    endpoints: (builder) => ({
        pokedex: builder.query<PokedexResult, string>({
            async queryFn(arg, _queryApi, _extraOptions, fetchWithBQ) {
                const response = await fetchWithBQ(arg)

                if (response.error) {
                    return { error: response.error }
                }

                const pokedexResult = response.data as PokemonListResponse

                const result = await Promise.all(pokedexResult.results.map((x) => fetchWithBQ(x.name)).map((x) => x))

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
        pokemon: builder.query<PokemonDetail, number | string | void>({
            query: (pokemon) => {
                return `${pokemon}`
            },
            transformResponse: transformPokemon,
        }),
        skills: builder.query<PokemonSkills, number | string | boolean | void>({
            query: (pokemon) => {
                return `${pokemon}`
            },
            transformResponse: transformPokemonSkills,
        })

    }),
})

export const { usePokemonQuery, usePokedexQuery, useSkillsQuery } = pokemonApi