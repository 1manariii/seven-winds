import { createRoot } from 'react-dom/client'
import { App } from "./App"
import {BrowserRouter, Route, Routes} from "react-router";

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
)
