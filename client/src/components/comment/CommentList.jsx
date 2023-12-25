import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CommentList = () => {
    const [repleList, setRepleList] = useState([]);
    const [editIndex, setEditIndex] = useState("");
    const [modifyCont, setModifyCont] = useState("");
    const [deleteIndex, setDeleteIndex] = useState("");
    const [deletePass, setDeletePass] = useState("")
    
    // list
    useEffect(() => {
        axios.post("/api/reple/list")
            .then((response) => {
                if (response.data.success) {
                    setRepleList([...response.data.repleList]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [repleList])

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
    
    const SubmitHandler = (e, index) => {
        e.preventDefault();
        let body = {
            content: modifyCont,
            repleNum: repleList[index].repleNum,
            repleId: repleList[index]._id
        }

        axios.post("/api/reple/modify", body)
            .then((response) => {
                if (response.data.success) {
                    alert("댓글 수정되었습니다.");
                } else {
                    alert("댓글 수정에 실패했습니다.");
                }
                return window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // 삭제
    const DeleteHandler = (e, index) => {
        e.preventDefault();
        if (deletePass === repleList[index].password) {
          let body = {
            repleId: repleList[index]._id
          };
          axios
            .post("/api/reple/delete", body)
            .then((response) => {
              if (response.data.success) {
                alert("댓글이 삭제되었습니다.");
                window.location.reload();
              }
            })
            .catch((err) => {
              console.log(err);
              alert("댓글 삭제에 실패했습니다.");
            });
        } else {
          alert("비밀번호가 일치하지 않습니다.");
        }
      };
      

    return (
        <>
            <ul>
                {repleList.map((reple, index) => {
                    return (
                        <li className='reple' key={index}>
                            <div className="reple__header">
                                <p className='author'>{reple.author}</p>
                                <div className='reple-Info'>
                                    {deleteIndex === index ? (
                                        <>
                                            <form className='deleteForm'>
                                                <label htmlFor="deletePass" className='blind'>비밀번호</label>
                                                <input
                                                    type="password"
                                                    name='deletePass'
                                                    id='deletePass'
                                                    placeholder='비밀번호'
                                                    autoComplete='off'
                                                    required
                                                    onChange={(e) => setDeletePass(e.currentTarget.value)}
                                                />
                                                <button
                                                    className='delete'
                                                    onClick={(e) => DeleteHandler(e, index)}
                                                >
                                                    삭제
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setDeleteIndex(null);
                                                    }}
                                                >
                                                    취소
                                                </button>
                                            </form>
                                        </>
                                    ) : (
                                        <>
                                            <p
                                                className='modify'
                                                onClick={() => {
                                                    setEditIndex(index);
                                                }}
                                            >
                                                수정
                                            </p>
                                            <p
                                                className='delete'
                                                onClick={() =>{
                                                    setDeleteIndex(index);
                                                }}
                                            >
                                                삭제
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                            {editIndex === index ? (
                                <>
                                    <form className='modifyForm'>
                                        <input
                                            type='text'
                                            // value={reple.content}
                                            onChange={(e) => { setModifyCont(e.currentTarget.value) }}
                                        />
                                        <div className="modifyForm__btn">
                                            <button
                                                type='submit'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    SubmitHandler(e, index);
                                                }}
                                            >
                                                수정
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setEditIndex(null);
                                                }}
                                            >
                                                취소
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <p className='cont'>{reple.content}</p>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default CommentList