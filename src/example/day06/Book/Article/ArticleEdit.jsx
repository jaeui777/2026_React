export default function ArticleEdit(props) {
    return (
        <>
            <article>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();

                        const title = event.target.title.value;
                        const writer = event.target.writer.value;
                        const contents = event.target.contents.value;
                        props.editAction(title, writer, contents);
                    }}
                >
                    <table id="boardTable">
                        <tbody>
                            <tr>
                                <th>작성자</th>
                                <td>
                                    <input
                                        type="text"
                                        name="writer"
                                        defaultValue={
                                            props.selectRow.writer
                                        }
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th>제목</th>
                                <td>
                                    <input
                                        type="text"
                                        name="title"
                                        defaultValue={
                                            props.selectRow.title
                                        }
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th>내용</th>
                                <td>
                                    <textarea
                                        name="contents"
                                        cols="22"
                                        rows="3"
                                        defaultValue={
                                            props.selectRow.contents
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <input
                        type="submit"
                        value="수정하기"
                    />
                </form>
            </article>
        </>
    );
}