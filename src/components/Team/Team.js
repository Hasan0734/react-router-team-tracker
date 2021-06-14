import React from "react";
import "./Team.css";
const Team = (props) => {
  console.log(props.team);
  const { strTeam, strTeamBadge, strSport } = props.team;
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-content">
          <div className="d-flex justify-content-center p-4">
            <img className="img-fluid w-50" src={strTeamBadge} alt="" />
          </div>
          <div className="text-center pb-4">
            <h3>{strTeam} </h3>
            <p>Sports Type {strSport}</p>
            <button className="btn btn-primary">Explore →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
