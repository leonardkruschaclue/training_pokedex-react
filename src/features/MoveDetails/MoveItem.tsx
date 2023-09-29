import styles from "./MoveItem.module.scss"

export const MoveItem: React.FC<{name : string, value: number, maxValue: number}> = ({name, value , maxValue}) => {
    const percentageValue = Math.min(Math.round((value / maxValue) * 100), 100)
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