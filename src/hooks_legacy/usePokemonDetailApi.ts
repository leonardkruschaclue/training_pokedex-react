import { useCallback, useEffect, useState } from 'react'
import { PokemonStats } from '../types/pokemon'
import { get } from './pokemonDetailApi'

export const usePokemonDetailApi = (pokemonName?: string) => {
    const [pokemon, setPokemon] = useState<PokemonStats>()
    const [loading, setLoading] = useState(false)

    const disableLoading = useCallback(() => {
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [setLoading])

    useEffect(() => {
        if (!pokemonName) {
            return
        }

        setLoading(true)
        get(pokemonName)
            .then((result) => setPokemon(result))
            .finally(() => disableLoading())
    }, [pokemonName])

    return {
        pokemon: pokemon,
        isFetching: loading,
    }
}