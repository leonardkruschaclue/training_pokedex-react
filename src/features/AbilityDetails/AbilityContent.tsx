import styles from "../../Style/Content.module.scss"

import { AbilityDetailResult } from "../../api/types/pokemon"
import { formateEffectChanceString } from "../../Utility/Converters"
import { GeneralHeader } from "../Headers/GeneralHeader/GeneralHeader"


export const AbilityContent: React.FC<AbilityDetailResult> = (ability) => {
    return (
        <div className={styles.contentbox}>
                <div className={styles.centercolum}>
                    <GeneralHeader title={ability.name} subtitle={ability.generation} />
                    <p>
                        {ability.texts.flavor}
                    </p>
                    <p>
                        Effect: {formateEffectChanceString(ability.texts.effect_text, ability.texts.effect_chance)}
                    </p>
                </div>
            </div>
    );
}