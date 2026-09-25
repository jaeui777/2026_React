import { useState } from "react";


import ArticleList from "./example/day06/Book/Article/ArticleList";
import ArticleView from "./example/day06/Book/Article/ArticleView";
import ArticleWrite from "./example/day06/Book/Article/ArticleWrite";
import ArticleEdit from "./example/day06/Book/Article/ArticleEdit";

import NavList from "./example/day06/Book/Navigation/NavList";
import NavView from "./example/day06/Book/Navigation/NavView";
import NavWrite from "./example/day06/Book/Navigation/NavWrite";
import NavEdit from "./example/day06/Book/Navigation/NavEdit";

function Header(props) {
    return (
        <>
            <header>
                <h2>{props.title}</h2>
            </header>
        </>
    );
}

export default function App() {
    const [boardData, setBoardData] = useState([
        {
            no: 1,
            title: "오늘은 React 공부하는 날",
            writer: "낙짜쌤",
            date: "2025-01-01",
            contents: "React를 뽀개봅시당",
        },
        {
            no: 2,
            title: "어제는 Javascript 공부했음!",
            writer: "유겸쌤",
            date: "2025-02-02",
            contents: "Javascript는 할 게 너무 많아요",
        },
        {
            no: 3,
            title: "내일은 Project 해야징",
            writer: "미르쌤",
            date: "2025-03-03",
            contents: "Project는 뭘 만들어볼까?",
        },
    ]);


    const [mode, setMode] = useState("list");
    const [no, setNo] = useState(null);
    const [nextNo, setNextNo] = useState(4);

    let articleComp,  navComp, titleVar, selectRow;

     // 1. 게시글 목록
     if (mode === "list") {
        titleVar = "게시판-목록";
        navComp = (
            <NavList
                onChangeMode={() => {
                    setMode("write");
                }}
            />
        );

        articleComp = (
            <ArticleList
                boardData={boardData}
                onChangeMode={(selectedNo) => {
                    setNo(selectedNo);
                    setMode("view");
                }}
            />
        );
    }

     // 2. 게시글 열람
     else if (mode === "view") {
        titleVar = "게시판-열람";
        navComp = (
            <NavView
                onChangeMode={(nextMode) => {
                    setMode(nextMode);
                }}
            />
        );

         selectRow = boardData.find((row) => {
            return no === row.no;
        });
        articleComp = (
            <ArticleView
                selectRow={selectRow}
            />
        );
    }

     // 3. 게시글 작성
     else if (mode === "write") {
        titleVar = "게시판-쓰기";
        navComp = (
            <NavWrite
                onChangeMode={() => {
                    setMode("list");
                }}
            />
        );

        articleComp = (
            <ArticleWrite
                writeAction={(title, writer, contents) => {
                     const nowDate = new Date()
                        .toISOString()
                        .slice(0, 10);

                     const addBoardData = {
                        no: nextNo,
                        title: title,
                        writer: writer,
                        date: nowDate,
                        contents: contents,
                    };
                     const copyBoardData = [...boardData];
                     copyBoardData.push(addBoardData);
                     setBoardData(copyBoardData);
                     setNextNo(nextNo + 1);
                     setMode("list");
                }}
            />
        );
    }

     // 4. 게시글 삭제
     else if (mode === "delete") {
        const newBoardData = [];
         for (let i = 0; i < boardData.length; i++) {
            if (no !== boardData[i].no) {
                newBoardData.push(boardData[i]);
            }
        }
         setBoardData(newBoardData);
         setNo(null);
         setMode("list");
    }

     // 5. 게시글 수정
     else if (mode === "edit") {
        titleVar = "게시판-수정";

        navComp = (
            <NavEdit
                 onChangeMode={() => {
                    setMode("list");
                }}

                 onBack={() => {
                    setMode("view");
                }}
            />
        );

         for (let i = 0; i < boardData.length; i++) {
            if (no === boardData[i].no) {
                selectRow = boardData[i];
            }
        }

        articleComp = (
            <ArticleEdit
                selectRow={selectRow}
                editAction={(title, writer, contents) => {
                    const newBoardData = [];

                     for (let i = 0; i < boardData.length; i++) {
                         if (no === boardData[i].no) {
                            const editBoardData = {
                                ...boardData[i],
                                title: title,
                                writer: writer,
                                contents: contents,
                            };
                            newBoardData.push(editBoardData);
                        }
                         else {
                            newBoardData.push(boardData[i]);
                        }
                    }
                     setBoardData(newBoardData);
                     setMode("view");
                }}
            />
        );
    }

    return (
        <>
            <Header title={titleVar} />
            {navComp}
            {articleComp}
        </>
    );
}