import FrontComp from "./FrontComp.jsx";
import BackComp from "./BackComp.jsx";
function Component1 (props) {
    return (<> 
    <h2> 리액트 모듈</h2>
    <ol>
        <FrontComp onMyEvent1/>
    </ol>
     </>)

}
export default Component1;