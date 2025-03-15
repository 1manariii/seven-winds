import {IRowEntity} from "../types/row";
import {TreeRow} from "./TreeRow";
import {useEffect, useState} from "react";
import {httpGetRows} from "../api/row/row.api";

export const Tree = () => {
    const [rows, setRows] = useState<IRowEntity[] | []>([])
    const [activeId, setActiveId] = useState<null | number>(null)
    const [isEdit, setIsEdit] = useState<number | null>(null)

    useEffect(()=>{
        const props = {
            setRows
        }
        httpGetRows(props)
    }, [])
    return (
        <>
            {rows?.map((row) => (
                <TreeRow key={row.id} row={row}  level={0} activeId={activeId} setActiveId={setActiveId} setRows={setRows} rows={rows} isEdit={isEdit} setIsEdit={setIsEdit} />
            ))}
        </>
    );
};