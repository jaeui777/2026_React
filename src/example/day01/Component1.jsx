/*
    1. 컴포넌트명.jsx 파일 생성한다.
    2. export default function 컴포넌트명( props ){ }
        export default : 내보내기 , 다른 파일에서 import 할 수 있도록
        컴포넌트명 : 첫글자 무조건 대문자 (카멜 표기)
    3. { }안에 return 에서는 JSX 문법 가능 , 그 외 JS문법
        return 에서는 2줄 이상 입력시 (<> <>) 묶는다.
*/
    function Footer(props){
        return <div> 푸터구역 </div>
    }


    function Header(props){
        return <div> 헤더구역 </div>
    }


    export default function Component1( props) {
        return ( <>
        <Header></Header>
            <div> 메인페이지 </div>
        <Footer></Footer>
        </>)
    }