import Header from "../components/table-header/Header";
import Rows from "../components/table-items/Rows";
import { useState, useEffect } from "react";
const TableCards = ({ teamData, startIndex, endIndex,selectedTeam }) => {
  const entireData = teamData.slice(startIndex, endIndex);
  return (
    <>
      <div className="card-arrange">
        <Header />
        {entireData &&
          entireData.map((data) => {
            return <Rows data={data} selectedTeam={selectedTeam} key={data.id} />;
          })}
      </div>
    </>
  );
};

export default TableCards;
