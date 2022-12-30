import Table from "../components/table/Table.js";
import { useEffect, useState } from "react";
import axios from "axios";
const TeamTable = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.balldontlie.io/api/v1/teams")
      .then(async(resp) => {
        const { data } = resp.data;
        await setTeamData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Table teamData={teamData}/>
    </>
  );
};

export default TeamTable;
