import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Appfilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import "./app.css";

function App() {
  const data = [
    { name: "John C.", salary: 800, increase: true, id: 1 },
    { name: "Nur S.", salary: 300, incresae: false, id: 2 },
    { name: "Carl W.", salary: 5000, increase: true, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <Appfilter />
      </div>
      <EmployersList data={data} />
      <div className="employersAddForm">
        <EmployersAddForm />
      </div>
    </div>
  );
}

export default App;
