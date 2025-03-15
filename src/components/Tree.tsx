import {IRowEntity} from "../types/row";
import {TreeRow} from "./TreeRow";
import {useEffect, useState} from "react";
import {httpGetRows} from "../api/row/row.api";
import {LoadingContent} from "./LoadingContent";
import {ErrorContent} from "./ErrorContent";

export const Tree = () => {
    const [rows, setRows] = useState<IRowEntity[] | []>([])
    const [activeId, setActiveId] = useState<null | number>(null)
    const [isEdit, setIsEdit] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const rows = await httpGetRows(); // rows — это массив
            setRows(rows)
            setIsLoading(false)
        } catch (error) {
            setError(`Ошибка при получении данных: ${error}`)
            setRows([])
        }
    };

    useEffect(()=>{
        fetchData()
    }, [])

    if (isLoading) {
        return (
            <LoadingContent />
        );
    }

    if (error) {
        return <ErrorContent error={error} />
    }

    return (
        <>
            {rows?.map((row) => (
                <TreeRow key={row.id} row={row}  level={0} activeId={activeId} setActiveId={setActiveId} setRows={setRows} isEdit={isEdit} setIsEdit={setIsEdit} />
            ))}
        </>
    );
};