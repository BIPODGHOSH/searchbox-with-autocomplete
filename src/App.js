import "./App.css";
import Searchbox from "./components/Searchbox";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <div className="App">
      <div id="search-container">
        <Searchbox />
        <SearchResult />
      </div>
    </div>
  );
}

export default App;
