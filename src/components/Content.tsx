import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Tree} from "./Tree";

export const Content = () => {
    return (
        <div className="styled-main-content">
            <div className="styled-main-content-title">
                <span className="active">Строительно-монтажные работы</span>
            </div>
            <div className="styled-main-content-project">
                <TableContainer>
                    <Table aria-label="Таблица работ">
                        <TableHead>
                            <TableRow>
                                <TableCell>Уровень</TableCell>
                                <TableCell align="right">Наименование работ</TableCell>
                                <TableCell align="right">Основная з/п</TableCell>
                                <TableCell align="right">Оборудование</TableCell>
                                <TableCell align="right">Накладные расходы</TableCell>
                                <TableCell align="right">Сметная прибыль</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Tree />
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}