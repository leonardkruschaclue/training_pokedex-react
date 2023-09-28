import { PokemonDetails } from "../../../../../types/pokemon";
import { Move } from "./Move";

import styles from "../Content.module.scss"

export const PokemonMoveDisplay : React.FC<PokemonDetails> = (pokemon) => {
    return (
        <>
            {pokemon && (
                <div className={styles.scroll}>
                    {pokemon.moves.map((move) => (
                        <Move key={`${pokemon.name}-${move.name}`} {...move} />
                    ))}
                </div>
            )}
        </>
    );
}