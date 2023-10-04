import styles from "../../Style/AnimatedBars.module.scss"

export const StatBar: React.FC<{name : string, value : number, maxValue : number, defaultValue : number}> = ({name, value, maxValue, defaultValue}) => {
    const percentageValue =  Math.min(Math.round(((value ?? defaultValue) / maxValue) * 100), 100)
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>
                {name}: {value ?? defaultValue}
            </div>
            <div className={styles.valueContainer}>
                <div style={{ width: `${percentageValue}%` }}></div>
            </div>
        </div>
    )
}