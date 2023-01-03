import Title from "../components/title/Title";
import TeamTable from "./TeamTable";
import SearchBar from "../components/searchBar/SaerchBar";
import { useState } from "react";
import CustomModal from "../components/modal/CustomModal";
const MainPage = () => {
  const [searchData, setSearchData] = useState("");
  const [selectedTeamId, setSelectedTeamId] = useState(0);
  const selectedTeam = (id) => {
    setSelectedTeamId(id);
  };
  const handelSearchInput = async (data) => {
    await setSearchData(data);
  };
  return (
    <>
      <div className="main-page">
        <Title />
        <SearchBar searchInput={handelSearchInput} />
        <TeamTable
          searchWord={searchData}
          selectedTeam={selectedTeam}
          selectedTeamId={selectedTeamId}
        />
        <CustomModal
          selectedTeamId={selectedTeamId}
          setSelectedTeamId={setSelectedTeamId}
        />
      </div>
    </>
  );
};

export default MainPage;
