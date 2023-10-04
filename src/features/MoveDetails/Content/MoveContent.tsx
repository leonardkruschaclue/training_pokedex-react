import { MoveDetailResult } from "../../../api/types/pokemon"
import { DetailHeader } from "../../Headers/DetailHeader/DetailHeader"
import { formateEffectChanceString } from "../../../Utility/Converters"
import { GeneralHeader } from "../../Headers/GeneralHeader/GeneralHeader"
import { StatBar } from "../../../components/StatBar/StatBar"

import styles from "../../../Style/Content.module.scss"
import { MultiPageContent } from "../../../components/MultiPageContent/MultiPageContent"


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
                    <MultiPageContent arg={move} pages={[MoveDetailDisplay]} / >
                </div>
            </div>
    );
}

const MoveDetailDisplay : React.FC<MoveDetailResult> = (move) => {
    return (
        <>
            <div className={styles.scroll}>
                <p>
                    {formateEffectChanceString(move.effect_text, move.effect_chance)}
                </p>
            </div>
        </>
    );
}
MoveDetailDisplay.displayName = "Full Effect"