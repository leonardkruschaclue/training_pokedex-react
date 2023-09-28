import { PokemonListResponse, PokemonResponse } from '../types/api'
import { PokedexResult, PokemonDetails } from '../types/pokemon'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const get = async (url?: string): Promise<PokedexResult> => {
    const data = await fetch(url ?? baseUrl)
    const rawList: PokemonListResponse = await data.json()

    const pokedex = await Promise.all(rawList.results.map((x) => enrichPokemon({ url: x.url })))

    return {
        pokedex,
        next: rawList.next,
        previous: rawList.previous,
    }
}

const enrichPokemon = async ({ id, url }: { id?: number; url?: string }): Promise<PokemonDetails> => {
    const pokemonUrl = url ?? `${baseUrl}${id}`
    const data = await fetch(pokemonUrl)
    const rawPokemon: PokemonResponse = await data.json()

    const pokemon: PokemonDetails = {
        id: rawPokemon.id,
        name: rawPokemon.name,
        types: rawPokemon.types.map((x) => x.type.name),
        imageSrc: rawPokemon.sprites.other['official-artwork'].front_default,
        stats: rawPokemon.stats.map((x) => ({
            name: x.stat.name.replace('-', ' '),
            value: x.base_stat,
        })),
        abilities: rawPokemon.abilities.map((x) => ({
            name: x.ability.name.replace('-', ' '),
            isHidden: x.is_hidden,
        })),
        moves: rawPokemon.moves.map((x) => ({
            name: x.move.name.replace('-', ' ')
        })),
    }

    return pokemon
}