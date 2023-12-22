import React from 'react'

const CommentWrite = () => {
    // const [reple, setReple] = useState("");
    // const user = useSelector((state) => state.user);

    // const SubmitHandler = (e) => {
    //     e.preventDefault();

    //     if (!reple) {
    //         return alert("댓글을 작성해주세요.");
    //     }
    //     let body = {
    //         reple: reple,
    //         uid: user.uid,
    //         postId: props.postId,
    //     }
    //     axios.post("/api/reple/submit", body)
    //         .then((response) => {
    //             if (response.data.success) {
    //                 alert("댓글 작성에 성공했습니다.");
    //                 window.location.reload();
    //             } else {
    //                 alert("댓글 작성에 실패했습니다.");
    //             }
    //         }
    //         )
    // }

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
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="replePw">비밀번호</label>
                        <input
                            type="password"
                            name='replePw'
                            id='replePw'
                            placeholder='비밀번호'
                        />
                    </div>
                </div>
                <label htmlFor="repleCont" className='blind'>내용</label>
                <input
                    name='repleCont'
                    id='repleCont'
                    type="text"
                    placeholder='댓글을 작성해주세요.'
                />
                <button
                    type='submit'
                >
                    작성
                </button>
            </form>
            {/* <form>
                <input
                    type='text'
                    value={reple}
                    onChange={(e) => { setReple(e.currentTarget.value) }}
                />
                <button
                    type='submit'
                    onClick={(e) => { SubmitHandler(e) }}
                >작성</button>
            </form> */}
        </>
    )
}

export default CommentWrite