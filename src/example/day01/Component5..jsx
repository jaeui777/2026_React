export default function Component5(props) {

    function event1() {alert('이벤트발생');}
    const event2 = function() {alert('이벤트발생2');}
    const event3 = ()=>{alert('이벤트발생3');}
    return (
        <>
            <button onClick={event1}>이벤트1</button>
            <button onClick={event2}>이벤트2</button>
            <button onClick={event2}>이벤트3</button>
            <button onClick={( )=> { alert('이벤트4 발생'); } }>이벤트4</button>     
        </>
    )
}