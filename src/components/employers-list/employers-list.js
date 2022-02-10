import EmployersListItem from "../employers-list-item/employers-list-item";

import "../employers-list/employers-list.css";
const EmployersList = ({ data }) => {
  const elements = data.map((item) => {
    // id for optimization, react will be change only changed values 
    const { id, ...itemProps } = item;
    return <EmployersListItem key={id} {...itemProps} />;
  });

  return (
    <ul className="app-list list-group">
      {/* Here we import users li  */}
      {elements}
    </ul>
  );
};
export default EmployersList;
