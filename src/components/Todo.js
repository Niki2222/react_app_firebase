import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { text } = props;
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function cancelHandle() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={cancelHandle} onConfirm={cancelHandle}/>}
      {modalIsOpen && <Backdrop onCancel={cancelHandle}/>}
    </div>
  );
}

export default Todo;
