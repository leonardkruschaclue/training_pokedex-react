import { MoveDetailResult } from "../../api/types/pokemon"
import { DetailHeader } from "../Headers/DetailHeader/DetailHeader"
import { formateEffectChanceString } from "../../Utility/Converters"
import { StatBar } from "../../components/StatBar/StatBar"
import { MultiPageContent } from "../../components/MultiPageContent/MultiPageContent"
import { MoveFullEffect } from "./MoveFullEffect"

import styles from "../../Style/Content.module.scss"


export const MoveContent: React.FC<MoveDetailResult> = (move) => {
    return (
        <div className={styles.contentbox}>
                <div className={styles.centercoulum}>
                    <DetailHeader {...move} />
                    <p>
                        {move.flavor}
                    </p>
                    <p>
                        Effect: {formateEffectChanceString(move.effect_text_short, move.effect_chance)}
                    </p>
                    <StatBar name="Accuracy" value={move.accuracy} maxValue={100} defaultValue={100} />
                    <StatBar name="Power" value={move.power} maxValue={250} defaultValue={0} />
                    <StatBar name="PP" value={move.pp} maxValue={64} defaultValue={0} />
                </div>
                <div className={styles.centercoulum}>
                    <MultiPageContent arg={move} pages={[MoveFullEffect]} / >
                </div>
            </div>
    );
}