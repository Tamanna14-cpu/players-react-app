import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './Players.css';

const Players = (props) => {

    const {name, image, salary} = props.player;
    const handleAddInfo = props.handleAddInfo;

    return (
        <div className ="d-flexs justify-content-start"  className = 'player'>
            <div>
                <img style = {{height : '100px'}} src= {image} alt=""/>
            </div>

            <div>
                <h3 className = 'player-name'> {name} </h3>
                 <h4> Salary : {salary}bdt</h4>
                 <button onClick = {() => handleAddInfo(props.player)}  type="button" className ="btn btn-secondary">
                <FontAwesomeIcon icon ={ faPlusSquare } /> Select this cricketer
                </button>
            </div>
        </div>
    );
};

export default Players;