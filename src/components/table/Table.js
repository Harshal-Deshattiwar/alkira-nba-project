import "./table.css";
import { useEffect, useState } from "react";
const Table = ({ teamData }) => {
  const entireData = teamData.slice(0, 7);

  return (
    <>
      <table>
        <thead className="table-header-row table-row-data">
          <tr>
            <th width="292px">Team Name</th>
            <th width="214px">City</th>
            <th width="193px">Abbreviation</th>
            <th width="183px">Conference</th>
            <th width="164px">Division</th>
          </tr>
        </thead>
        <tbody>
          {entireData &&
            entireData.map((team) => {
              return (
                <tr key={team.id} className="table-data-row">
                  <td>{team.name}</td>
                  <td>{team.city}</td>
                  <td>{team.conference}</td>
                  <td>{team.abbreviation}</td>
                  <td>{team.division}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
