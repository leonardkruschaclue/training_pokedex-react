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
    types: Type[]
    sprites: Sprites
    stats: Stat[]
    abilities: Ability[]
    moves: Move[]
}

export type AbilityDetailResponse = {
    name: string
    flavor_text_entries: FlavorText[]
}


type Type = {
    slot: number
    type: { name: string; url: string }
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
    name: string
    url: string
}

type FlavorText = {
    flavor_text: string
}
