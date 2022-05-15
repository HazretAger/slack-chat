import React, { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../types/types";
import { addNewChannel } from "../../store/reducer";

const Modalbox = () => {
  const dispatch = useAppDispatch();
  const [channelName, setChannelName] = useState("");
  const newChannel = {
    channelName: `#${channelName}`,
    posts: [],
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChannelName(e.target.value);
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
                value={channelName}
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
              onClick={() => dispatch(addNewChannel(newChannel))}
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
