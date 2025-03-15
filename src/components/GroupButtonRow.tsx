import newIcon from "../../public/Icon.png";
import deleteIcon from "../../public/delete.png";
import {Dispatch, SetStateAction} from "react";
import {IRowEntity} from "../types/row";
import {deleteRow} from "../services/row";

interface IProps {
    level: number,
    id: number,
    onChangeIsActiveButtons: ()=>void,
    onChangeIsActiveInputs: ()=>void,
    activeId: number | null,
    setRows: Dispatch<SetStateAction<[] | IRowEntity[]>>,
}

export const GroupButtonRow = ({onChangeIsActiveButtons, onChangeIsActiveInputs, level, id, activeId, setRows}:IProps) => {

    const onClickDeleteRow = () => {
        setRows((rows)=>deleteRow({id, rows}))
    }

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", marginLeft: `${level * 20}px`, position: "relative", background: `${activeId === id ? 'rgba(65, 65, 68, 1)' : "none"}`, width: "fit-content", borderRadius: '6px', padding: '4px 0'}}>
                {activeId===id ? (
                        <button onClick={()=>onChangeIsActiveInputs()}>
                            <img
                                src={newIcon}
                                alt="icon"
                                style={{ width: 20, height: 20 }}
                            />
                        </button>
                    ) : (
                        <button onClick={()=>onChangeIsActiveButtons()}>
                            <img
                                src={newIcon}
                                alt="icon"
                                style={{ width: 20, height: 20 }}
                            />
                        </button>
                    )}

                <button
                    style={{display: `${id !== 115773 ? 'block' : 'none'}`}}
                    onClick={onClickDeleteRow}
                >
                    <img
                        src={deleteIcon}
                        alt="icon"
                        style={{ width: 16, height: 16,
                            opacity: `${activeId === id ? 1 : 0}`}}
                    />
                </button>
            </div>
        </>
    )
}