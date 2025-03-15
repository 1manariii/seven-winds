import {Button, IconButton} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ReplyIcon from "@mui/icons-material/Reply";

export const Header = () => {
    return (
        <header className="styled-header-wrapper">
            <div className="styled-header">
                <IconButton aria-label="apps" size="large">
                    <AppsIcon />
                </IconButton>
                <IconButton aria-label="reply" size="large">
                    <ReplyIcon />
                </IconButton>
                <Button className="active">
                    Просмотр
                </Button>
                <Button>
                    Управление
                </Button>
            </div>
        </header>
    )
}