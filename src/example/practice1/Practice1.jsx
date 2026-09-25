// REACT Practice1 : Practice1 과 Profile 컴포넌트를 구현하여 그림과 같이 완성하시오.
// AXIOS 이용하여 서버로 부터 받은 데이터/자료 가정
// 1. main.jsx 에서 컴포넌트 import  한다.


export default function Practice1( props ){ // 상위
  const data = [
    { name: 'Hedy Lamarr', imageUrl: 'https://i.pravatar.cc/150?img=47' },
    { name: 'Grace Hopper', imageUrl: 'https://i.pravatar.cc/150?img=48' },
    { name: 'Ada Lovelace', imageUrl: 'https://i.pravatar.cc/150?img=49' },
    { name: 'Margaret Hamilton', imageUrl: 'https://i.pravatar.cc/150?img=50' }
  ];

  return (<> 
      <Profile name ={ data[0].name} imageUrl={data[0].imageUrl}></Profile>
      <Profile name ={ data[1].name} imageUrl={data[1].imageUrl} />
      {
        data.map( ( i ) => {return(<>
         <Profile name={i.name} imageUrl = { i.imageUrl}></Profile>
            
        
        </>)}
        )
      }

  </>)
} // func end 

function Profile( props ) { // 하위
  return (<>
    <h3> { props.name} </h3>
    <img src = {props.imageUrl} />
  </> );
} // func end 