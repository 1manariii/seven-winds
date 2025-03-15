import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";


export const NavBar = () => {
    return (
        <div className="styled-main-navbar">
            <div className="styled-main-title-chapter">
                <span>Название проекта <br/> Аббревиатура</span>
                <IconButton aria-label="ArrowDown" className="active" size="large">
                    <KeyboardArrowDownIcon />
                </IconButton>
            </div>
            <div className="styled-main-list-chapter">
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>По проекту</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Объекты</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>РД</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>МТО</span>
                </div>
                <div className="styled-main-list-item active">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>СМР</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>График</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>МиМ</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Рабочие</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Кап. вложения</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Бюджет</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Финансирование</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Панорамы</span>
                    </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Камеры</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Камеры</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Поручения</span>
                </div>
                <div className="styled-main-list-item">
                    <IconButton aria-label="dashbord">
                        <DashboardIcon />
                    </IconButton>
                    <span>Контрагенты</span>
                </div>
            </div>
        </div>
    )
}