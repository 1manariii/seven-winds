import axios from "axios";
import {IRowEntity} from "../../types/row";
import {Dispatch, SetStateAction} from "react";

interface IProps {
    setRows: Dispatch<SetStateAction<[] | IRowEntity[]>>
}

export const httpGetRows = async ({setRows}:IProps) => {
    const {data} = await axios.get('http://185.244.172.108:8081/v1/outlay-rows/entity/150600/row/list')
    setRows(data)
}