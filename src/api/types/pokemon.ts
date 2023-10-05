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

export type MoveDetailResultBase = {
    id : number
    name: string
    types: string[]
    accuracy: number
    power: number
    pp: number
}

export type MoveDetailResultMeta = {
    critrate: number
    drain: number
    healing: number
    generation: string
    ailment: string
    ailmentChance: number
    category: string
}

export type MoveDetailResultTexts = {
    effect_text: string
    effect_text_short: string
    effect_chance: number
    flavor: string
}

export type MoveDetailResult = {
    texts: MoveDetailResultTexts
    meta: MoveDetailResultMeta
} & MoveDetailResultBase