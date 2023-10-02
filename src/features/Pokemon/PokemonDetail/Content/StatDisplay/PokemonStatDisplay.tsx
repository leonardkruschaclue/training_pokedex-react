import { PokemonDetails } from "../../../../../api/types/pokemon";
import { PokemonStat} from "./PokemonStat";


export const PokemonStatDisplay : React.FC<PokemonDetails> = (pokemon) => {
    return (
        <>
            <div>
                <span>Base Stat Total: {pokemon.stats.reduce((sum, stat) => sum + stat.value, 0)}</span>
                {pokemon.stats.map((stat) => (
                    <PokemonStat key={`${pokemon.name}-${stat.name}`} {...stat} />
                ))}
            </div>
        </>
    );
}