import React from "react";
import "./TeamDetailBody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faFutbol,
  faFlag,
  faCalendar,

} from "@fortawesome/free-solid-svg-icons";
import manImg from "../../images/male.png";
import femaleImg from "../../images/female.png";
import facebook from '../../images/icon/Facebook.png';
import youtube from '../../images/icon/YouTube.png';
import twitter from '../../images/icon/Twitter.png';
import { Link } from "react-router-dom";
const TeamDetailBody = (props) => {

  const { strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strStadiumDescription, strFacebook, strTwitter, strYoutube } =
    props.team;

  const photos = () => {
    if (strGender === "Male") {
      return <img className="w-100" src={manImg} alt="" />
    } else if (strGender === "Female") {
      return  <img className="w-100 " src={femaleImg} alt="" />
    }
  }
  return (
    <div className="teams">
      <div className="container pt-5">
        <div className="row team-description mx-1 p-2 d-flex">
          <div className="col-12 col-sm-6 d-flex align-items-center">
            <div className="text-light">
              <h1 className="team-name">{strTeam}</h1>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> Founded: {intFormedYear}
              </p>
              <p>
                <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
              </p>
              <p>
                <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
              </p>
              <p>
                <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 my-3 my-sm-0 d-flex justify-content-end py-2 ">

            {
              photos() 
            }


          </div>
        </div>
        <div className="summary">
          <p>{strDescriptionEN}</p>
          <br />
          <p>{strStadiumDescription}</p>
        </div>

        <footer className="text-center py-3">
          <a href={`https://${strTwitter}`} target="_blank"><img  src={twitter} alt="" /></a>
          <a href={`https://${strFacebook}`} target="_blank"><img  src={facebook} alt="" /></a>
          <a href={`https://${strYoutube}`} target="_blank"><img  src={youtube} alt="" /></a>
        </footer>
      </div>
    </div>
  );
};

export default TeamDetailBody;
