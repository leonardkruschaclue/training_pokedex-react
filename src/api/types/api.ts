export type PokemonResponseResult = {
    name: string
    url: string
}

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
    name: string
    accuracy: number
    power: number
    pp: number
    effect_chance: number | null
    effect_entries?: Effect[]
    flavor_text_entries?: FlavorText[]
    type: SingleType
}


type MultipleType = {
    slot: number
    type: SingleType
}

type SingleType = {
    name: string 
    url: string
}

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
    ability: { name: string; url: string }
    is_hidden: boolean
    slot: number
}

type Move = {
    move:{
        name: string
        url: string
    }
}

type FlavorText = {
    flavor_text: string
    language: Language
}

type Effect = {
    effect: string
    short_effect: string
    language: Language
}

type Language = {
        "name": string
        "url": string
}
