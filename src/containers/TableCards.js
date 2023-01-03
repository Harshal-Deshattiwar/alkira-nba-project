import Header from "../components/table-header/Header";
import Rows from "../components/table-items/Rows";
const TableCards = ({
  teamData,
  startIndex,
  endIndex,
  selectedTeam,
  sortType,
  sortChange,
  selectedTeamId,
}) => {
  const entireData = teamData.slice(startIndex, endIndex);

  const sortTypeChangeHandeler = (sort) => {
    sortChange(sort);
  };
  return (
    <>
      <div className="card-arrange">
        <Header
          sortType={sortType}
          sortTypeChangeHandeler={sortTypeChangeHandeler}
        />
        {entireData &&
          entireData.map((data) => {
            return (
              <Rows
                key={data.id}
                data={data}
                selectedTeam={selectedTeam}
                selectedTeamId={selectedTeamId}
              />
            );
          })}
      </div>
    </>
  );
};

export default TableCards;
