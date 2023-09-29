import styles from './Move.module.scss'

import { PokemonDetails } from '../../../../../types/pokemon'
import { LinkButton } from '../../../../../components/LinkButton'

export const Move: React.FC<PokemonDetails['moves'][0]> = (move) => {
    //const {data: moveDetails} = useMoveInformationQuery(move.name)
    return (
        <>
        {/* {moveDetails && ( */
            <div className={styles.wrapper}>
                <div className={styles.name}>
                    <p>
                        {move.name}
                    </p> 
                    <p>
                        {/*moveDetails.flavor*/}
                    </p>
                </div>
            </div>
        /*)} */}
        </>
    )
}