import React, { useState } from "react";

import { Button } from "../Button";

import styles from "../../Style/Content.module.scss"

export const MultiPageContent : React.FC<{arg : any, pages : React.FC<any>[]}> = ({arg, pages}) => {
    const [pageNumber , setPage] = useState<number>(0)
    return(
        <>
            <div className={styles.topbar}>
                {pages.map((x, i) => (
                    <Button key={`${arg.name}-${i}`} onClick={() => setPage(i)} disabled={i === pageNumber}>
                        {x.displayName ?? "PSDN"}
                    </Button>
                ))}
            </div>
            {pages[pageNumber]({...arg})}
        </>
    )
}