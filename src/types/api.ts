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
