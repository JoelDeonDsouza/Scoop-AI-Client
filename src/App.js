import './App.css';
import "./normal.css"

function App() {
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
        <div className="search-input-container">
          <input rows="1" className="search-input-text-field" placeholder="Scoop here" />
        </div>
      </section>
    </div>
  );
}

export default App;
