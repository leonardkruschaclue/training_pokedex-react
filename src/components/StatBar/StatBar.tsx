import styles from "../../Style/AnimatedBars.module.scss"

export const StatBar: React.FC<{name : string, value : number, maxValue : number, defaultValue : number}> = ({name, value, maxValue, defaultValue}) => {
    
    const percentageValue =  Math.min(Math.round((Math.abs(value ?? defaultValue) / maxValue) * 100), 100)
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>
                {name}: {value ?? defaultValue}
            </div>
            <div className={value >= 0 ? styles.positiveValueContainer : styles.negativeValueContainer}>
                <div style={{ width: `${percentageValue}%` }}></div>
            </div>
        </div>
    )
}