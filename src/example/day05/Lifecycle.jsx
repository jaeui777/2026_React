import { useEffect, useState } from "react"

function MoveBox( props ){
    const [ position , setPosition ] = useState(props.initPosition); // position상태/변수에 50대입
    const [leftCount , setLeftCount ] = useState( 1 ); // leftCount 상태 / 변수에 1 대입
    const boxStyle = {
        backgroundColor : 'red' , position : 'relative' , testAlign : 'center',
        width:'100px' , height:'100px', margin: '10px', lineHeight: '100px',
        left: `${position}px`
    }
    const moveLeft = ( ) => { 
        setPosition( ()=> position-20 ); 
        setLeftCount( () => leftCount +1 );
    }
    const moveRight = () => { setPosition( ()=> position + 20 ) }
    useEffect( ()=>{
        console.log( 'useEffect 실행 --> 마운트')
        return ()=>{
            console.log( 'useEffect 실행 --> 언마운트')
        }
    // } ); // [1] 의존성 배열 생략 : 최초 실행 , 업데이트 될 때마다 실행 
    //  }, []); // [2] 의존성 배열에 빈 배열 지정 : 최초 1번 실행
 } , [leftCount]); //[3] 의존성 배열 특정 변수 : 최초 1번 실행 , 특정변수업데이트
    console.log( 'return실행 --> 렌더링 ')
    return (<>
        <div style={ boxStyle }>{ leftCount }</div>
        <button onClick={ moveLeft }> 좌측이동 </button>
        <button onClick={ moveRight }> 우측이동 </button>
    </>)
}

export default function Lifecycle( props ){
    return (<>
        <MoveBox initPosition={50} ></MoveBox>
    </>)
}