import { Route , Routes } from "react-router-dom";
import TopNavi from "./TopNavi";

export default function App( props ) {
    return (<>
    <TopNavi> </TopNavi>
    <Routes>
        <Route path ="/" element={ <useRefExam1/> } />
        <Route path ="/use-ref1" element={ <useRefExam2/> } />
         { /*<Route path="/use-ref2" element={ <UseRefExam2 /> } /> */}
    </Routes>
    </>)
}