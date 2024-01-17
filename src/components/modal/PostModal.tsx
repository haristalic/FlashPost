import "./PostModal.css";
import { IoClose } from "react-icons/io5";

const PostModal = (props:any) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <IoClose className="closebtn" onClick={() => props.closeModal(false)} />
        <span className="userName">
          <h1>{props.name}</h1>
        </span>
        <h2>{props.tittle}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default PostModal;
