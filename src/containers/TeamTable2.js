import { useEffect, useState } from "react";
import axios from "axios";
import TableCards from "./TableCards";
import Pagination from "../components/pagination/Pagination";
import "./styles.css";
const CONTENT_PER_PAGE = 8;
const TeamTable2 = () => {
  const [teamData, setTeamData] = useState([]);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [countArray, setCountArray] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(CONTENT_PER_PAGE - 1);
  useEffect(() => {
    axios
      .get("https://www.balldontlie.io/api/v1/teams")
      .then(async (resp) => {
        const { data } = resp.data;
        await setTeamData(data);
        await HandelCount(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HandelCount = async (data) => {
    const PageCount = Math.ceil(data.length / CONTENT_PER_PAGE);
    setTotalPageCount(PageCount);
    let arr = [
      { start: 0, end: 0 },
      { start: 0, end: CONTENT_PER_PAGE - 1 },
    ];
    for (let i = 2; i < PageCount + 1; i++) {
      arr.push({
        start: arr[i - 1].end + 1,
        end: CONTENT_PER_PAGE * i - 1,
      });
    }
    await setCountArray(arr);
  };
  const pageDecrease = () => {
    if (currentPage !== 1) {
      setCurrentPage((state) => {
        setStartIndex(countArray[state - 1].start);
        setEndIndex(countArray[state - 1].end);
        return state - 1;
      });
    }
  };
  const pageIncrease = () => {
    if (currentPage !== totalPageCount) {
      setCurrentPage((state) => {
        setStartIndex(countArray[state + 1].start);
        setEndIndex(countArray[state + 1].end);
        return state + 1;
      });
    }
  };
  return (
    <>
      <div className="table">
        <TableCards
          teamData={teamData}
          startIndex={startIndex}
          endIndex={endIndex}
        />
        <div className="pagination-position">
          <Pagination
            totalPage={totalPageCount}
            currentPage={currentPage}
            pageDecrease={pageDecrease}
            pageIncrease={pageIncrease}
          />
        </div>
      </div>
    </>
  );
};

export default TeamTable2;
