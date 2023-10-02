import styles from './Type.module.scss'

export const Type: React.FC<{ type: string }> = ({ type }) => {
    return <div className={styles[type]}>{type}</div>
}