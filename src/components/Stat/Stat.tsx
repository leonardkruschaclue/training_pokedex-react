import styles from "../../Style/AnimatedBars.module.scss"

export const Stat: React.FC<{name : string, value : number, percentageValue : number}> = ({name, value, percentageValue}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>
                {name}: {value}
            </div>
            <div className={styles.valueContainer}>
                <div style={{ width: `${percentageValue}%` }}></div>
            </div>
        </div>
    )
}