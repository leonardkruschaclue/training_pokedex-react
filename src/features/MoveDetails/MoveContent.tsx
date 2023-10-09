import { MoveDetailResult } from "../../api/types/pokemon"
import { DetailHeader } from "../Headers/DetailHeader/DetailHeader"
import { formateEffectChanceString } from "../../Utility/Converters"
import { StatBar } from "../../components/StatBar/StatBar"
import { MultiPageContent } from "../../components/MultiPageContent/MultiPageContent"
import { MoveFullEffect } from "./MoveFullEffect"

import styles from "../../Style/Content.module.scss"
import { MoveMetaDisplay } from "./MoveMetaDisplay"
import { MoveKnownBy } from "./MoveKnownBy"


export const MoveContent: React.FC<MoveDetailResult> = (move) => {
    //Pages:
    const pages = new Array<any>();
    pages[0] = MoveFullEffect;
    pages[1] = MoveMetaDisplay;
    
    return (
        <div className={styles.contentbox}>
                <div className={styles.centercolum}>
                    <DetailHeader {...move} />
                    <p>
                        {move.texts.flavor}
                    </p>
                    <p>
                        Effect: {formateEffectChanceString(move.texts.effect_text_short, move.texts.effect_chance)}
                    </p>
                    <StatBar name="Accuracy" value={move.accuracy} maxValue={100} defaultValue={100} />
                    <StatBar name="Power" value={move.power} maxValue={250} defaultValue={0} />
                    <StatBar name="PP" value={move.pp} maxValue={64} defaultValue={0} />
                </div>
                <div className={styles.centercolum}>
                    {MultiPageContent<MoveDetailResult>(pages, move)}
                </div>
            </div>
    );
}