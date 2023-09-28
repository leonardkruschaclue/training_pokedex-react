import styles from './Stat.module.scss'

import { PokemonStats } from '../../../../../types/pokemon'

export const Stat: React.FC<PokemonStats['stats'][0]> = (stat) => {
    const maxValue = stat.name === 'hp' ? 250 : 150
    const percentageValue = Math.min(Math.round((stat.value / maxValue) * 100), 100)

    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>
                {stat.name}: {stat.value}
            </div>
            <div className={styles.valueContainer}>
                <div style={{ width: `${percentageValue}%` }}></div>
            </div>
        </div>
    )
}