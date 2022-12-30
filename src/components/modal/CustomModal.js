import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import Button from "react-bootstrap/Button";
const CustomModal = ({ selectedTeamId, setSelectedTeamId }) => {
  const [show, setShow] = useState(false);
  const [gameData, setGameData] = useState([]);
  const [requestedTeam, setRequestedTeam] = useState({});
  const [totalGame, setTotalGame] = useState(0);
  const fetchGame = (id) => {
    axios(
      `https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=${id}`
    ).then(async (resp) => {
      const { data } = resp.data;
      await setGameData(data);
      await setTotalGame(data.length);
    });
  };
  const fetchTeam = (id) => {
    axios(`https://www.balldontlie.io/api/v1/teams/${id}`).then(
      async (resp) => {
        const { data } = resp;
        await setRequestedTeam(data);
        console.log("===============>", data);
      }
    );
  };

  const fetcheDetail = async (id) => {
    await fetchGame(id);
    await fetchTeam(id);
    await setShow(true);
  };
  useEffect(() => {
    selectedTeamId ? fetcheDetail(selectedTeamId) : setShow(false);
  }, [selectedTeamId]);
  return (
    <>
      <Modal open={show}>
        <div>
          <div className="modal--header-box">
            <span className="modal--header">Celtics</span>
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

          <span>Team Full Name</span>
          <span>{requestedTeam.full_name}</span>
          <span>Total Games in 2021</span>
          <span>{totalGame}</span>
          <span>Random Game Details:</span>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
