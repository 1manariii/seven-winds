import {TableCell, TableRow} from "@mui/material";
import newIcon from "../../public/Icon.png";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {IRowEntity} from "../types/row";
import {createRow} from "../services/row";

interface IProps {
    isActiveButtons: boolean,
    isActiveInputs: boolean,
    parentId: number,
    level: number,
    setRows: Dispatch<SetStateAction<[] | IRowEntity[]>>,
    setActiveId: Dispatch<SetStateAction<null | number>>,
}

export const GroupInputRow = ({isActiveButtons, isActiveInputs, parentId, level, setRows, setActiveId}:IProps) => {
    const [newRow, setNewRow] = useState<IRowEntity>({
        id: Date.now(),
        rowName: '',
        salary: 0,
        equipmentCosts: 0,
        overheads: 0,
        estimatedProfit: 0,
        child: [],
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        supportCosts: 0,
        total: 0,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewRow((prevData) => ({
            ...prevData,
            [name]: name === 'rowName' ? value : Number(value),
        }));
    };

    const onClickCreateRow = () => {
        setRows(rows => createRow({parentId, rows, newRow}))
        setActiveId(null)
    }
    return (
        <>
            {isActiveButtons && isActiveInputs && (
                <TableRow key={parentId}>
                    <TableCell align="right">
                        <div style={{ display: "flex", alignItems: "center", marginLeft: `${(level+1) * 20}px`, position: "relative" }}>
                            <button style={{background: "none", border: "none"}} onClick={onClickCreateRow}>
                                <img
                                    src={newIcon}
                                    alt="icon"
                                    style={{ width: 20, height: 20, marginRight: 10 }}
                                />
                            </button>
                        </div>
                    </TableCell>
                    <TableCell align="right" sx={{width: '40%'}}>
                        <input
                            type="text"
                            name="rowName"
                            value={newRow.rowName}
                            onChange={handleInputChange} />
                    </TableCell>
                    <TableCell align="right">
                        <input
                            type="number"
                            name="salary"
                            value={newRow.salary}
                            onChange={handleInputChange} />
                    </TableCell>
                    <TableCell align="right">
                        <input
                            type="number"
                            name="equipmentCosts"
                            value={newRow.equipmentCosts}
                            onChange={handleInputChange} />
                    </TableCell>
                    <TableCell align="right">
                        <input
                            type="number"
                            name="overheads"
                            value={newRow.overheads}
                            onChange={handleInputChange} />
                    </TableCell>
                    <TableCell align="right">
                        <input
                            type="number"
                            name="estimatedProfit"
                            value={newRow.estimatedProfit}
                            onChange={handleInputChange} />
                    </TableCell>
                </TableRow>
            )}
        </>
    )
}