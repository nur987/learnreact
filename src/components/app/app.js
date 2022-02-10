import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Appfilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import "./app.css";

function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <Appfilter />
      </div>
      <EmployersList />
      <div className="employersAddForm">
        <EmployersAddForm />
      </div>
    </div>
  );
}

export default App;
