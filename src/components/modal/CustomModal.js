import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Modal from "./Modal";
import Loader from "../loader/Loader";
const CustomModal = ({ selectedTeamId, setSelectedTeamId }) => {
  const modalRef = useRef(null);
  const [show, setShow] = useState(false);
  const [isLoadingGame, setIsLoadingGame] = useState(true);
  const [isLoadingTeam, setIsLoadingTeam] = useState(true);
  const [gameData, setGameData] = useState([
    {
      home_team: { name: "name" },
      date: "date_to_show",
      home_team_score: 125,
      visitor_team: { name: "name" },
      visitor_team_score: 99,
    },
  ]);
  const [requestedTeam, setRequestedTeam] = useState({});
  const [totalGame, setTotalGame] = useState(0);
  const fetchGame = (id) => {
    setIsLoadingGame(true);
    axios(
      `https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=${id}`
    )
      .then(async (resp) => {
        const { data } = resp.data;
        await setGameData(data);
        await setTotalGame(data.length);
        await setIsLoadingGame(false);
      })
      .catch((err) => {});
  };
  const fetchTeam = (id) => {
    setIsLoadingTeam(true);
    axios(`https://www.balldontlie.io/api/v1/teams/${id}`)
      .then(async (resp) => {
        const { data } = resp;
        await setRequestedTeam(data);
        await setIsLoadingTeam(false);
      })
      .catch((err) => {});
  };

  const fetcheDetail = async (id) => {
    await setShow(true);
    await fetchGame(id);
    await fetchTeam(id);
  };
  useEffect(() => {
    selectedTeamId ? fetcheDetail(selectedTeamId) : setShow(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTeamId]);

  const handelClickAway = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShow(false);
      setSelectedTeamId(0);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handelClickAway, true);
    return () => {
      document.addEventListener("click", handelClickAway, true);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Modal open={show}>
        <div className="custom-modal" ref={modalRef}>
          <div className="modal--header-box">
            <span className="modal--header" cy-data="modal-title">
              {isLoadingTeam && isLoadingGame
                ? "Loading......."
                : requestedTeam.name}
            </span>
            <button
              className="modal--header-cross"
              onClick={() => {
                setShow(false);
                setSelectedTeamId(0);
              }}
            >
              X
            </button>
          </div>
          {isLoadingTeam && isLoadingGame ? (
            <Loader />
          ) : (
            <>
              <span className="custom-modal--team-name">
                <span>Team Full Name</span>
                <span cy-data="team-full-name">{requestedTeam.full_name}</span>
              </span>
              <span className="custom-modal--total-games">
                <span>Total Games in 2021</span>
                <span>{totalGame}</span>
              </span>
              <span className="custom-modal-random-game-detials">
                Random Game Details:
              </span>
              <span className="custom-modal--date">
                <span style={{ "margin-right": "230px" }}>Date</span>
                <span>{gameData[0].date.slice(0, 10)}</span>
              </span>
              <span className="custom-modal--home-team-name">
                <span style={{ "margin-right": "150px" }}>Home Team</span>
                <span>{gameData[0].home_team.name}</span>
              </span>
              <span className="custom-modal--home-team-score">
                <span style={{ "margin-right": "85px" }}>Home Team Score</span>
                <span>{gameData[0].home_team_score}</span>
              </span>
              <span className="custom-modal--visitor-team-name">
                <span style={{ "margin-right": "150px" }}>Visitor Team</span>
                <span>{gameData[0].visitor_team.name}</span>
              </span>
              <span className="custom-modal--visitor-team-score">
                <span style={{ "margin-right": "90px" }}>Home Team Score</span>
                <span>{gameData[0].visitor_team_score}</span>
              </span>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
