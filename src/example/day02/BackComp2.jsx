const BackComp2 = ({setMode}) => {
    return (<>
   <li> <a href="/" onClick={(event)=>{
        event.preventDefault();
        SetMode('back');    
   }}>백엔드</a></li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>

        </>)
}
export default BackComp2