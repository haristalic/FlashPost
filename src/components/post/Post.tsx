import React, { useEffect, useState } from "react";
import "./Post.css";
import PostModal from "../modal/PostModal";
import { FaRegUser, FaComment, FaShare } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { ICombinedData } from "../../models/ICombinedData";
import { IComments, ICommentsState } from "../../models/IComments";
import { PostsService } from "../../services/PostsService";

const Post = (props: ICombinedData) => {
  const [openModal, setOpenModal] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentsState, setCommentsState] = useState<ICommentsState>({
    loading: false,
    comments: [] as IComments[],
    errorMsg: "",
  });

  useEffect(() => {
    setCommentsState({ ...commentsState, loading: true });
    PostsService.getAllCommentsFromPost(props.id)
      .then((res) =>
        setCommentsState({
          ...commentsState,
          loading: false,
          comments: res.data,
        })
      )
      .catch((err) =>
        setCommentsState({
          ...commentsState,
          loading: false,
          errorMsg: err.message,
        })
      );
  }, []);

  const {loading,comments,errorMsg} = commentsState;

  const [like, setLike] = useState(false);
  return (
    <>
      <div className="container">
        <div className="post-container">
          <div className="user-container">
            <FaRegUser />
            <p>{props.name}</p>
          </div>
          <p className="post-tittle" onClick={() => setOpenModal(true)}>
            {props.title}
          </p>
          <div className="icons-container">
            <FaComment
              className={showComments ? "activeIcon" : ""}
              onClick={() => {
                setShowComments(!showComments);
              }}
            />
            <FaShare />
            <GrLike
              className={like ? 'activeIcon' : ''}
              onClick={() => setLike(!like)}
            />
          </div>
        </div>
        { showComments && comments.map((comment) => ( 
          <>
            <div className="comment-container">
              <span className="comment-user">
                <p>{comment.name}</p>
                <p>{comment.email}</p>
              </span>
              <p>
               {comment.body}
              </p>
            </div>
          </>
          ))}
      </div>

      {openModal && (
        <PostModal
          name={props.name}
          title={props.title}
          body={props.body}
          closeModal={setOpenModal}
        />
      )}
    </>
  );
};

export default Post;
