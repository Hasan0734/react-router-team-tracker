import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";
const Team = (props) => {
  const { strTeam, strTeamBadge, strSport,idTeam } = props.team;
 console.log(props.team.idTeam)
  return (
    <div className="col-12 col-sm-4">
      <div className="card">
        <div className="card-content">
          <div className="d-flex justify-content-center p-4">
            <img className="img-fluid w-50" src={strTeamBadge} alt="" />
          </div>
          <div className="text-center pb-4">
            <h3>{strTeam} </h3>
            <p>Sports Type {strSport}</p>
            <Link to={`/team-info/team-id-${idTeam}`}>
            <button className="btn btn-primary">Explore →</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
