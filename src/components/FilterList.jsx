import React from "react";

const FilterList = ({ suggedtedList, setSearchInput }) => {
  const handleClick = (id) => setSearchInput(id);

  return (
    <ul>
      {suggedtedList?.map((location) => (
        <li onClick={() => handleClick(location.id)} key={location.id}>
          {location.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
