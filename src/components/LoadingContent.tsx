import LoopIcon from "@mui/icons-material/Loop";


export const LoadingContent = () => {
    return (
        <div className="loading__wrapper">
            <h1>Загрузка...</h1>
            <LoopIcon className="loading-icon" />
        </div>
    );
}