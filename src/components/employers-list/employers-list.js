import EmployersListItem from "../employers-list-item/employers-list-item";

import "../employers-list/employers-list.css";
const EmployersList = () => {
  return (
    <ul className="app-list list-group">
      {/* Here we import users li  */}
      <EmployersListItem />
      <EmployersListItem />
      <EmployersListItem />
    </ul>
  );
};
export default EmployersList;
