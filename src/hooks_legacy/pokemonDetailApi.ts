import { PokemonResponse } from '../api/types/api'
import { PokemonStats } from '../api/types/pokemon'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const get = async (name: string): Promise<PokemonStats> => {
    const pokemonUrl = `${baseUrl}${name}`
    const data = await fetch(pokemonUrl)
    const rawPokemon: PokemonResponse = await data.json()

    const pokemon: PokemonStats = {
        id: rawPokemon.id,
        name: rawPokemon.name,
        types: rawPokemon.types.map((x) => x.type.name),
        stats: rawPokemon.stats.map((x) => ({
            name: x.stat.name.replace('-', ' '),
            value: x.base_stat,
        })),
        imageSrc: rawPokemon.sprites.other['official-artwork'].front_default,
    }

    return pokemon
}