import {IRowEntity} from "../../types/row";

interface IProps {
    parentId: number,
    rows: IRowEntity[],
    newRow: IRowEntity
}

const findRowAndCreate = ({rows, parentId, newRow}:IProps): IRowEntity[] => {
    return rows.map(row => {
        if (row.id === parentId) {
            return {
                ...row,
                child: [newRow, ...row.child]
            }
        } else {
            return {
                ...row,
                child: row.child && findRowAndCreate({rows: row.child, parentId, newRow})
            }
        }
    })
};

const createRow = ({parentId, rows, newRow}:IProps):IRowEntity[] => {
    return findRowAndCreate({rows, parentId, newRow});
}

export default createRow;