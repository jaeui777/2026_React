
export default function UseRefExam( props ) {


const UseRefExam = () => {
    const [stateNum, setStateNum] = useState(0);
    const refNum = useRef(0);
    let myNum = 0;

    const plustState = () => {
        setStateNum( stateNum + 1);
        console.log( 'State증가' , stateNum );
    }
    const plusRef = () => {
        refNum.current = refNum.current + 1;
        console.log('Ref증가', refNum.current);
    }
    const plusMyNum = () => {
        console.log('일반 변수 증가' , ++MyNum);
    };

    return(<>
    <h2> useRef 사용하기1 </h2>
    <div>
        <p>State : {stateNum} </p>
        <p> Ref : {refNum.current} </p>
        <p>myNum : {myNum} </p>
        <button onClick={plustState}>State증가</button>
        <button onClick={plustRef}>Ref증가</button>
        <button onClick={plusMyNum}>myNum증가</button>
    </div>
    </>);
}

}