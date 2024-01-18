import "./PostModal.css";
import { IoClose } from "react-icons/io5";

type Props = {
  closeModal: (arg: boolean) => void;
  name: string;
  title: string;
  body: string;
};
const PostModal = ({ closeModal, name, title, body }: Props) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <IoClose className="closebtn" onClick={() => closeModal(false)} />
        <span className="userName">
          <h1>{name}</h1>
        </span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PostModal;
