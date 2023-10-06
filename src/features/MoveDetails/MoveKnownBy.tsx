import { MoveDetailResult } from "../../api/types/pokemon";
import { MovePokemonItem } from "./MovePokemonItem";

import styles from "../../Style/Content.module.scss"

export const MoveKnownBy : React.FC<MoveDetailResult> = (move) => {
    return (
        <div className={styles.scroll}>
            {move.learnedBy.map((x) => <MovePokemonItem key={x} name={x}  />)}
        </div>
    );
}