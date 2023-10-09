import { Move } from "./Move";

import styles from "../../../Style/Content.module.scss"
import { Dispatch, SetStateAction } from "react";
import { PokemonDetails, PokemonMove } from "../../../api/types/pokemon";

export function PokemonMoveDisplay ({moves} : PokemonMove, search : string, setSearch : Dispatch<SetStateAction<string>>) {
    return (
        <>
            {moves && (
                <div className={styles.displaywrapper}>
                    <input placeholder="Move..." value={search} onChange={event => setSearch(event.target.value)} />
                    <div className={styles.scroll}>
                        {moves.filter(move => {
                            if (search === "" || move.name.toLowerCase().includes(search.toLowerCase())) return move;
                            }).map((move) => (
                            <Move key={`${move.name}`} {...move} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
//Name for the Button
PokemonMoveDisplay.displayName = "Moves";

