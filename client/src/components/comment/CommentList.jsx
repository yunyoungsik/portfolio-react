import React, { useEffect, useRef, useState } from 'react'

const CommentList = () => {
    // const [repleList, setRepleList] = useState([]);

    // useEffect(() => {
    //     let body = {
    //         postId: props.postId,
    //     }
    //     axios.post("/api/reple/getReple", body)
    //         .then((response) => {
    //             if (response.data.success) {
    //                 setRepleList([...response.data.repleList]);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [props.postId])
    const [modalFlag, setModalFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false);
    // const [reple, setReple] = useState(props.reple.reple);

    const ref = useRef();
    useOnClickOutside(ref, () => setModalFlag(false));

    const SubmitHandler = (e) => {
        // e.preventDefault();
        // let body = {
        //     uid: user.uid,
        //     reple: reple,
        //     postId: props.reple.postId,
        //     repleId: props.reple._id
        // }

        // axios.post("/api/reple/edit", body)
        //     .then((response) => {
        //         if (response.data.success) {
        //             alert("댓글 수정되었습니다.");
        //         } else {
        //             alert("댓글 수정에 실패했습니다.");
        //         }
        //         return window.location.reload();
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }

    const DeleteHandler = (e) => {
        // e.preventDefault();
        // if (window.confirm("정말로 삭제하시겠습니까?")) {
        //     let body = {
        //         repleId: props.reple._id,
        //         postId: props.reple.postId
        //     }
        //     axios.post("/api/reple/delete", body)
        //         .then((response) => {
        //             if (response.data.success) {
        //                 alert("댓글이 삭제되었습니다.");
        //                 window.location.reload();
        //             }
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //             alert("댓글 삭제에 실패했습니다.");
        //         })
        // }
    }

    return (
        <>
            <ul>
                <li className='reple'>
                    <div className="reple__header">
                        <p className='author'>작성자</p>
                        <div className='reple-Info'>
                            <p className='modify' onClick={() => {
                                setEditFlag(true)
                                setModalFlag(false)
                            }}>수정</p>
                            <p className='delete' onClick={(e) => DeleteHandler(e)}>삭제</p>
                        </div>
                    </div>
                    {editFlag ? (
                        <div>
                            <form>
                                <input
                                    style={{ border: "1px solid #000", padding: "10px 20px" }}
                                    type='text'
                                // value={reple}
                                // onChange={(e) => { setReple(e.currentTarget.value) }}
                                />
                                <button
                                    type='submit'
                                    onClick={(e) => { SubmitHandler(e) }}
                                >수정</button>
                                /
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    setEditFlag(false)
                                }}>취소</button>
                            </form>
                        </div>
                    ) : (
                        <p className='cont'>댓글 내용이 들어가요 댓글 내용이 들어가요 댓글 내용이 들어가요 댓글 내용이 들어가요</p>
                        // <p>{props.reple.reple}</p>
                    )}
                </li>
            </ul>
            {/* {repleList.map((reple, idx) => {
                return (
                    <RepleContent reple={reple} key={idx} />
                )
            })} */}
        </>
    )
}

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default CommentList