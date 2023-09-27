export type Pokemon = {
    id: number
    name: string
    types: string[]
    imageSrc: string
}

export type PokemonStats = {
    stats: {
        name: string
        value: number
    }[]
} & Pokemon

export type PokemonAbility = {
    abilities: {
        name: string
        isHidden: boolean
    }[]
} & Pokemon

export type PokemonMove = {
    moves: {
        name: string
    }[]
}

export type PokedexResult = {
    pokedex: Pokemon[]
    next?: string
    previous?: string
}

export type AbilityDetailResult = {
    name: string
    flavor: string
}