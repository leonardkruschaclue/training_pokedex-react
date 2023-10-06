import React, { useState } from "react";

import { Button } from "../Button";

import styles from "../../Style/Content.module.scss"

export function MultiPageContent<T> (arg : T, pages : Array<React.FC<T>>) {
    const [pageNumber , setPage] = useState<number>(0)
    return(
        <>
            <div className={styles.topbar}>
                {pages.map((x, i) => (
                    <Button key={`${arg}-${i}`} onClick={() => setPage(i)} disabled={i === pageNumber}>
                        {x.displayName ?? "PSDN"}
                    </Button>
                ))}
            </div>
            {pages[pageNumber]({...arg})}
        </>
    )
}
