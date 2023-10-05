import styles from "../../../Style/Display.module.scss"

import { PokemonDetails } from "../../../api/types/pokemon"
import { LinkButton } from "../../../components/LinkButton"
import { useMoveInformationQuery } from "../../../api/pokemonApi"
import { formateEffectChanceString, toQuery } from "../../../Utility/Converters"

export const Move: React.FC<PokemonDetails['moves'][0]> = (move) => {
    const {data: moveDetails} = useMoveInformationQuery(toQuery(move.name))
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.name}> 
                        {move.name}
                    <p>{formateEffectChanceString(moveDetails?.effect_text_short , moveDetails?.effect_chance)}</p>
                </div>
                <div>
                    <LinkButton to={`../move/${toQuery(move.name)}`} className={styles.detailsButton}>
                        Details
                    </LinkButton>
                </div>
            </div>
        </>
    )
}