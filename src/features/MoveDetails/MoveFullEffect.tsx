import { MoveDetailResult } from "../../api/types/pokemon";
import { formateEffectChanceString } from "../../Utility/Converters";

import styles from "../../Style/Content.module.scss"

export const MoveFullEffect : React.FC<MoveDetailResult> = (move) => {
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
//Name for Button
MoveFullEffect.displayName = "Full Effect"