export type BasePokemon = {
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
} & BasePokemon

export type PokemonAbility = {
    abilities: {
        name: string
        isHidden: boolean
    }[]
} & BasePokemon

export type PokemonDetails = {
    stats: {
        name: string
        value: number
    }[]
} & BasePokemon & PokemonAbility & PokemonMove

export type PokemonMove = {
    moves: {
        name: string
    }[]
}

export type PokedexResult = {
    pokedex: BasePokemon[]
    next?: string
    previous?: string
}

export type AbilityDetailResult = {
    name: string
    flavor: string
}

export type MoveDetailResult = {
    id : number
    name: string
    accuracy: number
    power: number
    pp: number
    effect_text: string
    effect_text_short: string
    effect_chance: number
    flavor: string
    types: string[]
    critrate: number
    drain: number
    healing: number
}