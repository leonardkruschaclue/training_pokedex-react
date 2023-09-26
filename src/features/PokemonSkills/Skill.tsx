import styles from './Skill.module.scss'

import { PokemonSkills } from '../../types/pokemon'

export const Skill: React.FC<PokemonSkills['abilitys'][0]> = (ability) => {

    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.name}>
                {ability.name}: Hidden: {`${ability.isHidden}`}
            </div>
        </div>
        </>
    )
}