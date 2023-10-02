import { MoveDetailResult } from "../../../api/types/pokemon"
import { DetailHeader } from "../../Headers/DetailHeader/DetailHeader"
import { MoveStat } from "./MoveStat"
import { formateEffectChanceString } from "../../../Utility/Converters"

import styles from "../../../Style/Content.module.scss"
import { GeneralHeader } from "../../Headers/GeneralHeader/GeneralHeader"


export const MoveContent: React.FC<MoveDetailResult> = (move) => {
    return (
        <div className={styles.contentbox}>
                <div className={styles.centercontent}>
                    <DetailHeader {...move} />
                    <p>
                        {move.flavor}
                    </p>
                    <p>
                        Effect: {formateEffectChanceString(move.effect_text_short, move.effect_chance)}
                    </p>
                    <MoveStat name="Accuracy" value={move.accuracy} maxValue={100} />
                    <MoveStat name="Power" value={move.power} maxValue={250} />
                    <MoveStat name="PP" value={move.pp} maxValue={64} />
                </div>
                <div className={styles.centercontent}>
                    <GeneralHeader title="Full Effect" subtitle="" />
                    <div style={{height: 26.4}} />
                    <div className={styles.scroll}>
                        <p>
                            {formateEffectChanceString(move.effect_text, move.effect_chance)}
                        </p>
                    </div>
                </div>
            </div>
    );
}