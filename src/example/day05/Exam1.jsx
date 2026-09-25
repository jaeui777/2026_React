import axios from "axios";
import { useState , useEffect } from "react";
import { data } from "react-router-dom";

 function RandomUser ( props ) {
    const [myJSON , setMyJSON] = useState({results:[]});
    useEffect( async function() {

        const response = await axios("https://api.randomuser.me?results=10")
        const data = response.data;
            setMyJSON(data);
    }, []); 


let trTag = myJSON.results.map((data) =>{
    return (
        <tr key={data.login.md5}>
        <td><img src={data.picture.thumbnail} alt={data.login.username} />"</td>
        <td><a href='/' onClick={(e) =>{
            e.preventDefault();
            props.onProfile(data);
        }}>{data.login.username}</a>
        </td>
        <td>{data.name.title} {data.name.first} {data.name.last} </td>
        <td>{data.nat}</td>
        <td>{data.email}</td>
        </tr>
    );
});

return (
    <div>
        <table border='1'>
            <thread>
                <tr>
                    <th> 사진 </th><th>로그인</th><th>이름</th>
                    <th> 사진 </th><th>Email</th>
                </tr>
            </thread>
            <tbody>{trTag}</tbody>
        </table>
    </div>
);

}

export default function Exam1( ) {
    return (<>
    <h2> 외부 서버 통신 </h2>
    <RandomUser onProfile={(sData) =>{
        console.log(sData);
        let info = `전화번호:${sData.cell}
        성별 :${sData.gender}
        username:${sData.login.username}
        password:${sData.login.password};`
    alert(info);    
    }}></RandomUser>
    </>);
}