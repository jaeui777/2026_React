// Component3.jsx
// 변수 : 하나의 값  저장하는 수
// 매개변수 : 함수/메소드에서 (인수)받아서 함수 안에서 사용하는 변수
// 인수/인자값 : 함수가 실행될 때 함수에게 전달하는 값
function plus(x , y){ } // 함수 정의 , x/y매개변수
plus( 3, 4) //함수호출 , 3/4 인수
// 즉] 3(인수)를 x(매개변수)에 대입
// 프롭스 : 상위컴포넌트에서 하위컴포넌트에게 전달하는 객체 props , 읽기모드
function plus2 ( props ) {}
    plus2( { v1:3 , v2:4})
// ------------------------------------------------------------------
export default function Component3(props) {
    let name = "유재석";
    //---------return 부터 jsx 문법 구역 , 주석주의 주석 : { /* 주석 */}
    // jsx 에서는 html 문법 {JS 표현식} HTML 문법 { JS 표현식 }
    return (<>
        {/* JSX주석 */}
        <div> {name} </div> <div> { 10 + 20 } </div>
        <input type="text" value="안녕" name="입력상자" />
        <SubComp1 name="유재석" age = "40"/>
    </>)
    function SubComp1(props) {          //--하위요소      
        console.log(props);
        return (<>
            <h4>{props.name}</h4>
            <h4>{props.age}</h4>
        </>)
    }
    function SubComp2 ( { name , age}) {
        return (<>
            <h4>{name}님 {age}세 </h4>
        </>)
    }
}