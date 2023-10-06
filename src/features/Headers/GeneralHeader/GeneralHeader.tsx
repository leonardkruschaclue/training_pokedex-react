import styles from "../Header.module.scss"

export const GeneralHeader : React.FC<{title : string, subtitle : string}> = ({title,subtitle}) => {
    return (
        <>
            <h1 className={styles.header}>{title}</h1>
            {subtitle && (<p style={{textTransform: "uppercase"}}>{subtitle}</p>)}
        </>
    );
}