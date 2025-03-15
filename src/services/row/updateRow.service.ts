import {IRowEntity} from "../../types/row";

interface IProps {
    id: number,
    rows: IRowEntity[],
    newValue: IRowEntity
}

const findRowAndUpdate = ({id, rows, newValue}:IProps):IRowEntity[] => {
    return rows.map((row) => {
        if (row.id === id) {
            return {...newValue};
        } else {
            return {
                ...row,
                child: row.child && findRowAndUpdate({id, newValue, rows: row.child})
            }
        }
    })
};
const updateRow = ({id, rows, newValue}:IProps): IRowEntity[] => {
    return findRowAndUpdate({id, newValue, rows});
}

export default updateRow;