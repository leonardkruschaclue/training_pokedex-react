import { PokemonDetails } from "../../../api/types/pokemon";
import { Move } from "./Move";

import styles from "../../../Style/Content.module.scss"

export const PokemonMoveDisplay : React.FC<PokemonDetails> = (pokemon) => {
    return (
        <>
            {pokemon && (
                <div className={styles.scroll}>
                    {pokemon.moves.map((move) => (
                        <Move key={`${move.name}`} {...move} />
                    ))}
                </div>
            )}
        </>
    );
}
//Name for the Button
PokemonMoveDisplay.displayName = "Moves";