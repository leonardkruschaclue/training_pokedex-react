import React, { Dispatch, SetStateAction, useState } from "react";

import { Button } from "../Button";

import styles from "../../Style/Content.module.scss"

export function MultiPageContent<T> (pages : Array<any>, arg : T) {
    const [pageNumber , setPage] = useState<number>(0)
    const [search, setSearch] = useState<string>("");
    return(
        <>
            <div className={styles.topbar}>
                {pages.map((x, i) => (
                    <Button key={`${arg}-${i}`} onClick={() => setPage(i)} disabled={i === pageNumber}>
                        {x.displayName ?? "PSDN"}
                    </Button>
                ))}
            </div>
            {pages[pageNumber](arg, search, setSearch)}
        </>
    )
}
