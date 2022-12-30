import Header from "../components/table-header/Header";
import Rows from "../components/table-items/Rows";
import { useState, useEffect } from "react";
const TableCards = ({ teamData, startIndex, endIndex }) => {
  const [selectFrom, SetSelectFrom] = useState(0);
  const [selectTo, SetSelectTo] = useState(8);
  const entireData = teamData.slice(startIndex, endIndex);
  return (
    <>
      <div className="card-arrange">
        <Header />
        {entireData &&
          entireData.map((data) => {
            return <Rows data={data} />;
          })}
      </div>
    </>
  );
};

export default TableCards;
