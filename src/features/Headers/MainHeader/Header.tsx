import styles from "./Header.module.scss";

import { BASENAME } from "../../../Constants";

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
