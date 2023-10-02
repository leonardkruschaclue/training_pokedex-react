import { MoveDetailResult } from "../../../api/types/pokemon"
import { DetailHeader } from "../../Headers/ContentHeader/DetailHeader"
import { MoveStat } from "./MoveStat"

import styles from "../../../Style/Content.module.scss"


export const MoveContent: React.FC<MoveDetailResult> = (move) => {
    return (
            <div className={styles.contenbox}>
                <DetailHeader {...move} />
                <div className={styles.centercontent}>
                    <MoveStat name="Accuracy" value={move.accuracy} maxValue={100} />
                    <MoveStat name="Power" value={move.power} maxValue={250} />
                    <MoveStat name="PP" value={move.pp} maxValue={64} />
                </div>
            </div>
    );
}