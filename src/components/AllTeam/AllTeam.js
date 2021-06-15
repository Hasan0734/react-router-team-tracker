import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './AllTeam.css'

const AllTeam = () => {
    const [teams, setTeams] = useState([]);
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTeams(data.teams)
                setLoader(false)
            })

    }, [])

    return (
        <div className="teams">
            <div className="container">
                <div className="row pt-5">

                    {
                        loader ? <div class="d-flex justify-content-center my-4">
                            <div class="spinner-border text-primary" role="status">
                            </div>
                            <span class="sr-only text-light px-2">Loading...</span>
                        </div>
                            :
                            teams.map(tem => <Team team={tem}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTeam;