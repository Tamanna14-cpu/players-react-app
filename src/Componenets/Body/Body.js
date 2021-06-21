import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import Players from '../Players/Players';
import playerData from '../Players/Players.json';
import './Body.css';

const Body = () => {

    const[player, setPlayer] = useState([]);
    const[info, setInfo] = useState([]);

    useEffect(() => {
        setPlayer(playerData);
    }, [])

    const handleAddInfo = (player) =>{
        const newInfo = [...info, player];
        setInfo (newInfo);
    }

    return (
        <div className = 'body-container'>
            <div className = 'players-container'>
                {
                    player.map( players => <Players player = {players}  handleAddInfo = {handleAddInfo}></Players>)
                }
            </div>

            <div className = "info position-sticky">
                <h2>Total Players : {player.length}</h2>
               <Info info = {info}></Info>
            </div>
        </div>
    );
};

export default Body;