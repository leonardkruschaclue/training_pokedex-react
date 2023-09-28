import { PokemonDetails } from "../../../../../types/pokemon";
import { Stat } from "./Stat";


export const PokemonStatDisplay : React.FC<PokemonDetails> = (pokemon) => {
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