import styles from "../../Style/Content.module.scss"

import { DetailResultTexts } from "../../api/types/pokemon";
import { formateEffectChanceString } from "../../Utility/Converters";

export function MoveFullEffect ({texts} : {texts: DetailResultTexts}) {
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