
import { LinkButton } from "../LinkButton";
import styles from "./NavigationButtons.module.scss"

export const NavigationButtons : React.FC<{id : number, baseurl : string, suburl : string}> = ({id, baseurl, suburl}) => {
    return (
        <div className={styles.actions}>
        <LinkButton to={`${baseurl}/${suburl}/${id - 1}`} disabled={id === 1}>
            &laquo; Previous
        </LinkButton>
        <LinkButton to={baseurl}>Overview</LinkButton>
        <LinkButton to={`${baseurl}/${suburl}/${id + 1}`}>Next &raquo;</LinkButton>
    </div>
    );
}