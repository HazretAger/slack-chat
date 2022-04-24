import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="chat">
      <div className="h-100" id="chat">
        <div className="d-flex flex-column h-100">
          <Header />
          <div className="container h-100 my-4 overflow-hidden rounded shadow">
            <div className="row h-100 bg-white flex-md-row">
              <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
                <Sidebar />
              </div>
              <div className="col p-0 h-100">
                <Chat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
