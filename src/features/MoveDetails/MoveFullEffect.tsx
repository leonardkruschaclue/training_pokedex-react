import { MoveDetailResult, MoveDetailResultTexts } from "../../api/types/pokemon";
import { formateEffectChanceString } from "../../Utility/Converters";

import styles from "../../Style/Content.module.scss"

export const MoveFullEffect : React.FC<{texts : MoveDetailResultTexts}> = ({texts}) => {
    return (
        <>
            <div className={styles.scroll}>
                <p>
                    {formateEffectChanceString(texts.effect_text, texts.effect_chance)}
                </p>
            </div>
        </>
    );
}
//Name for Button
MoveFullEffect.displayName = "Full Effect"