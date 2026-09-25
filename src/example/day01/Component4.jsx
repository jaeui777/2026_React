function FromtComp(props) {
    const liRoews = [];
    for(let i = 0 ; i <props.propData1.length ; i++){
        liRoews.push(
            <li key={i}>{props.propData1[i]}</li>
        );
    }
    return ( <>
    <li>{props.frTitle}</li>
    <ul>
        {liRoews}
    </ul>
    </>)
}

// props 객체를 구조분해하여 필요한 것만 추출
const BackComp = ({propData2 , baTitle}) => { //원래 props 객체인데 구조분해 
    const liRows = [];
    let keyCnt=0;
    for(let row of propData2){
        liRows.push(
            <li key={keyCnt++}>{row}</li>
        );
    }
    return (<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
function Component4() {
    const frontData = ['HTML5' , 'CSS3' , 'JavaScript' , 'jQuery'];
    const backData = ['Java' , 'Oracle' , 'JSP' , 'Spring Boot'];
    return (<>
    <div>
        <h2>React-Props</h2>
        <ol>
            <FrontComp propData1={frontData} frTitle="프론트엔드"></FrontComp>
            <BackComp propData2={backData} baTitle="백엔드"/>
        </ol>
    </div>
    </>)
}
export default Component4