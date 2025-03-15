import {TableCell, TableRow} from "@mui/material";
import {IRowEntity} from "../types/row";
import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import {GroupButtonRow} from "./GroupButtonRow";
import {GroupInputRow} from "./GroupInputRow";
import {updateRow} from "../services/row";

interface IProps {
    row: IRowEntity,
    level: number,
    activeId: number | null,
    setActiveId: Dispatch<SetStateAction<null | number>>,
    isEdit: number | null,
    setIsEdit: Dispatch<SetStateAction<null | number>>,
    setRows: Dispatch<SetStateAction<[] | IRowEntity[]>>,
}

export const TreeRow = ({ row, level, activeId, setActiveId, setRows, isEdit, setIsEdit}: IProps) => {
    const hasChildren = row.child && row.child.length > 0;
    const [isActiveButtons, setIsActiveButtons] = useState(false)
    const [isActiveInputs, setIsActiveInputs] = useState(false)

    const [editRow, setEditRow] = useState<IRowEntity>(row);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditRow((prevData) => ({
            ...prevData,
            [name]: name === 'rowName' ? value : Number(value),
        }));
    };

    const onChangeIsActiveButtons = () => {
        setActiveId(()=>row.id)
        setIsEdit(()=>null)
        setIsActiveButtons((prevState)=>!prevState)
    }

    const onChangeIsActiveInputs = () => {
        setActiveId(()=>row.id)
        setIsEdit(() => null)
        setIsActiveInputs((prevState)=>!prevState)
    }

    const onChangeIsActiveEdit = () => {
        setActiveId(() => null)
        setIsEdit(()=>row.id)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setRows((rows) => updateRow({ id: row.id, rows, newValue: editRow }));
                console.log('Нажимает Escape')
                setIsEdit(()=>null);
            }
        };

        if (isEdit===row.id) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isEdit, editRow]);

    return (
        <>
            <TableRow
                key={row.id}
                onDoubleClick={()=>onChangeIsActiveEdit()}
            >
                <TableCell align="right">
                    <GroupButtonRow onChangeIsActiveButtons={onChangeIsActiveButtons} id={row.id} level={level} onChangeIsActiveInputs={onChangeIsActiveInputs} activeId={activeId} setRows={setRows} />
                </TableCell>
                <TableCell align="right">
                    {isEdit == row.id ? (
                        <input
                            type="text"
                            name="rowName"
                            value={editRow.rowName}
                            onChange={handleInputChange} />
                    ) : (
                        row.rowName
                    )}
                </TableCell>
                <TableCell align="right">
                    {isEdit === row.id ? (
                        <input
                            type="number"
                            name="salary"
                            value={editRow.salary}
                            onChange={handleInputChange} />
                    ) : (
                        row.salary
                    )}
                </TableCell>
                <TableCell align="right">
                    {isEdit === row.id ? (
                        <input
                            type="number"
                            name="equipmentCosts"
                            value={editRow.equipmentCosts}
                            onChange={handleInputChange} />
                    ) : (
                        row.equipmentCosts
                    )}
                </TableCell>
                <TableCell align="right">
                    {isEdit === row.id ? (
                        <input
                            type="number"
                            name="overheads"
                            value={editRow.overheads}
                            onChange={handleInputChange} />
                    ) : (
                        row.overheads
                    )}
                </TableCell>
                <TableCell align="right">
                    {isEdit === row.id ? (
                        <input
                            type="number"
                            name="estimatedProfit"
                            value={editRow.estimatedProfit}
                            onChange={handleInputChange} />
                    ) : (
                        row.estimatedProfit
                    )}
                </TableCell>
            </TableRow>
            {isActiveInputs && row.id === activeId && (
                <GroupInputRow level={level} parentId={row.id} isActiveInputs={isActiveInputs} setActiveId={setActiveId} isActiveButtons={isActiveButtons} setRows={setRows} />
            )}
           {hasChildren &&
                row.child.map((item) => (
                    <TreeRow key={item.id} row={item} level={level + 1} activeId={activeId} setActiveId={setActiveId} setRows={setRows} isEdit={isEdit} setIsEdit={setIsEdit} />
                ))
            }
        </>
    );
};