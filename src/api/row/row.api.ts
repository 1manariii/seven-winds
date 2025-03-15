import axios from "axios";
import {IRowEntity} from "../../types/row";

export const httpGetRows = async ():Promise<IRowEntity[]> => {
    const {data} = await axios.get('http://185.244.172.108:8081/v1/outlay-rows/entity/150600/row/list')
    return data
}