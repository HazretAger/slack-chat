import React from "react";
import Header from "./Header";
import Sidebar from "./navbar/Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="h-100" id="chat">
      <div className="d-flex flex-column h-100">
        <Header />
        <div className="container my-4 overflow-hidden rounded shadow h-100">
          <div className="row bg-white flex-md-row h-100">
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
  );
}

export default App;
