
export function toQuery(input : string) : string {
    return input.replace(' ', '-');
}

export function toDisplay(input : string) : string {
    return input.replace('-', ' ');
}

export function formateEffectChanceString( input : string | undefined, chance : number | undefined = 0) : string {
    
    return (input ?? "").replace('$effect_chance', `${chance ?? 100}`);
}