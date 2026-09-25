import { Route, Routes } from "react-router-dom";
import Lifecycle from "./LifeCycle";
import TopNavi from "./TopNavi";

export default function App(props) {
    return(<>
        <TopNavi></TopNavi>
        <Routes>
            <Route path ='/' element={<Lifecycle/>} />
        </Routes>
    </>)
}