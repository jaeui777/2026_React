const BackComp = ( onMyEvent2 ) => {
        <>
        <li> <a href = "/" onClick={ (event) => {
            event.preventDefault(); // 깜빡거림 제거
            onMyEvent2('백엔드 클릭됨(함수는 전달받음)');
        }}></a> 백엔드</li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>

}
export default BackComp;


/* */