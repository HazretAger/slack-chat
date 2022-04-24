import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChannel } from "../store/reducers/channelReducer";

const Modalbox = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add new channel
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form action="">
              <input
                className="form-control mb-2"
                name="name"
                id="name"
                value={text}
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(addChannel(text))}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;
