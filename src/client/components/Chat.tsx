import React, { useState, ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../types/types";
import { addNewPost } from "../store/reducer";

const Chat = () => {
  const channels = useAppSelector((state) => state.toolkit.channels);
  const dispatch = useAppDispatch();

  const activeChannelId = useAppSelector(
    (state) => state.toolkit.activeChannel
  );

  const [ message, setMessage ] = useState("");
  const { channelName, posts } = channels[activeChannelId];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="d-flex flex-column overflow-hidden h-100">
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <p className="m-0">{channelName}</p>
        <span className="text-muted">{posts.length} messages</span>
      </div>
      <div id="message__box" className="chat-messages overflow-auto px-5">
        {posts.map(({ userName, message }, index: number) => (
          <div className="text-break mb-2" key={index}>
            <b>{ userName }</b>: { message }
          </div>
        ))}
      </div>
      <div className="mt-auto px-5 py-3">
        <form noValidate className="py-1 border rounded-2">
          <div className="input-group has-validation">
            <input
              name="body"
              className="border-0 p-0 ps-2 form-control"
              aria-label="Новое сообщение"
              placeholder="Text message..."
              value={message}
              onChange={handleChange}
            />
            <button
              type="button"
              className="text-primary btn btn-group-vertical"
              onClick={() =>
                dispatch(addNewPost({ userName: "Xazik", message }))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
