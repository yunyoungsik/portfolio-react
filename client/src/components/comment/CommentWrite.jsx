import React, { useState } from 'react'
import axios from 'axios'

const CommentWrite = () => {
    const [author, setAuthor] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (author === "" || password === "" || content === "") {
            return alert("빈칸을 채워주세요.");
        }

        let body = {
            author: author,
            password: password,
            content: content,
        }

        axios.post("/api/reple/write", body)
            .then((resopnse) => {
                if (resopnse.data.success) {
                    alert("댓글 작성이 완료되었습니다.");
                } else {
                    alert("글 작성이 실패하였습니다.");
                }
            })
    }

    return (
        <>
            <form className='repleWrite'>
                <div className="repleWriteHeader">
                    <div className="author">
                        <label htmlFor="repleAuthor">작성자</label>
                        <input
                            type="text"
                            name='repleAuthor'
                            id='repleAuthor'
                            placeholder='작성자'
                            value={author}
                            onChange={(e) => setAuthor(e.currentTarget.value)}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="replePw">비밀번호</label>
                        <input
                            type="password"
                            name='replePw'
                            id='replePw'
                            placeholder='비밀번호'
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <label htmlFor="repleCont" className='blind'>내용</label>
                <input
                    name='repleCont'
                    id='repleCont'
                    type="text"
                    maxLength={100}
                    placeholder='댓글은 100글자까지 작성가능합니다.'
                    value={content}
                    onChange={(e) => setContent(e.currentTarget.value)}
                />
                <button
                    type='submit'
                    onClick={(e) => onSubmit(e)}
                >
                    작성
                </button>
            </form>
        </>
    )
}

export default CommentWrite