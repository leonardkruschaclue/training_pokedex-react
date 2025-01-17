import styles from "./Button.module.scss"
import { MouseEventHandler } from "react"

export type ButtonProps = {
    onClick?: MouseEventHandler
    disabled?: boolean
} & React.PropsWithChildren

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button className={styles.button} {...props}>
        {children}
    </button>
)
