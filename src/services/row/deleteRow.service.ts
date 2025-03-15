import {IRowEntity} from "../../types/row";

interface IProps {
    id: number,
    rows: IRowEntity[],
}

const findRowAndDelete = ({id, rows}: IProps):IRowEntity[] => {
    return rows
        .filter(row => row.id !== id)
        .map(row => ({
            ...row,
            child: findRowAndDelete({id, rows: row.child})
        }));
};

const deleteRow = ({id, rows}: IProps): IRowEntity[] => {
    return findRowAndDelete({id, rows});
};

export default deleteRow;
