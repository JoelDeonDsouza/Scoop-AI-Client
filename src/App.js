import React, { useState } from "react"
import './App.css';
import "./normal.css"
import ChatResponse from "./Component/ChatResponse"

function App() {
  const [input, setInput] = useState("");
  const [aiLogs, setAiLogs] = useState("");
  // submit function//
  async function handleSubmit(e) {
    e.preventDefault();
    setAiLogs([...aiLogs, { user: "user", message: `${input}` }])
    setInput(" ");
  }
  // submit function//
  return (
    <div className="App">
      <aside className="sidebar-menu">
        <div className="sidebar-menu-create">
          <text className="add-text">New Scoop</text>
          <span>⚡︎</span>
        </div>
      </aside>
      {/* Search Section */}
      <section className="search-container">
        <div className="response-log">
          <ChatResponse message={massage} />
          <div className="response-massage ai-response">
            <div className="response-massage-center">
              <div className="avatar ai-response">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2.5em"
                  width="2.6em"
                >
                  <path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 00-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 001.99 12v2a1 1 0 001 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 001-1v-1.938a1.006 1.006 0 00-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z" />
                  <path d="M10 12 A1.5 2 0 0 1 8.5 14 A1.5 2 0 0 1 7 12 A1.5 2 0 0 1 10 12 z" />
                  <path d="M17 12 A1.5 2 0 0 1 15.5 14 A1.5 2 0 0 1 14 12 A1.5 2 0 0 1 17 12 z" />
                  <path d="M8 16h8v2H8z" />
                </svg>
              </div>
              <div className="message">
                Hello From AI
                </div>
            </div>
          </div>
        </div>
        <div className="search-input-container">
          <form onSubmit={handleSubmit}>
            <input rows="1" className="search-input-text-field" placeholder="Scoop here" value={input} onChange={() => setInput(input) = e.target.value} />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
