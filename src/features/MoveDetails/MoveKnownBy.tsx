import styles from "../../Style/Content.module.scss"

import { MoveDetailResult } from "../../api/types/pokemon";
import { MovePokemonItem } from "./MovePokemonItem";

export const MoveKnownBy : React.FC<MoveDetailResult> = (move) => {
    return (
        <div className={styles.scroll}>
            {move.learnedBy.map((x) => <MovePokemonItem key={x} name={x}  />)}
        </div>
    );
}