export type PokemonResponseResult = {
    //EMPTY
} & Base

export type PokemonListResponse = {
    count: number
    next?: string
    previous?: string
    results: PokemonResponseResult[]
}

export type PokemonResponse = {
    id: number
    name: string
    types: MultipleType[]
    sprites: Sprites
    stats: Stat[]
    abilities: Ability[]
    moves: Move[]
}

export type AbilityDetailResponse = {
    name: string
    flavor_text_entries: FlavorText[]
}

export type MoveDetailResponse = {
    id: number
    name: string
    accuracy: number
    power: number
    pp: number
    effect_chance: number | null
    effect_entries?: Effect[]
    flavor_text_entries?: FlavorText[]
    type: SingleType
    meta: MoveMeta
    generation: Base
}


type MultipleType = {
    slot: number
    type: SingleType
}

type SingleType = {
    //EMPTY
} & Base

type Sprites = {
    other: {
        'official-artwork': {
            front_default: string
        }
    }
}

type Stat = {
    base_stat: number
    stat: {
        name: string
    }
}

type Ability = {
    ability: Base
    is_hidden: boolean
    slot: number
}

type Move = {
    move: Base
}

type FlavorText = {
    flavor_text: string
    language: Base
}

type Effect = {
    effect: string
    short_effect: string
    language: Base
}

type MoveMeta = {
    crit_rate: number
    drain: number
    healing: number
    ailment: Base
    ailment_chance: number
    category: Base
}


type Base = {
        "name": string
        "url": string
}
