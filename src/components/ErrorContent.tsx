import LoopIcon from "@mui/icons-material/Loop";


interface IProps {
    error: string | null;
}

export const ErrorContent = ({error}:IProps) => {
    return (
        <div className="loading__wrapper">
            <h1>Ошибка...</h1>
            <p>{error}</p>
        </div>
    );
}