import { BASENAME } from "../../../Constants";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
    return(
        <>
        <div className={styles.header}>
            <a href={BASENAME}>
                React Pokedex
            </a>
        </div>
    </>
    );
};
