import { PokemonStats } from "../../../../types/pokemon";
import { Stat } from "./Stat";


export function PokemonStatDisplay(pokemon : PokemonStats) {
    return (
        <>
            <div>
                <span>Base Stat Total: {pokemon.stats.reduce((sum, stat) => sum + stat.value, 0)}</span>
                {pokemon.stats.map((stat) => (
                    <Stat key={`${pokemon.name}-${stat.name}`} {...stat} />
                ))}
            </div>
        </>
    );
}