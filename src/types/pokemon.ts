export type Pokemon = {
    id: number
    name: string
    types: string[]
    imageSrc: string
}

export type PokemonDetail = {
    stats: {
        name: string
        value: number
    }[]
} & Pokemon

export type PokemonSkills = {
    id: number
    name: string
    abilitys: {
        name: string
        isHidden: boolean
    }[]
}

export type PokedexResult = {
    pokedex: Pokemon[]
    next?: string
    previous?: string
}