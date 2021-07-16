import React from 'react';
import {FaTimes, FaRegCircle} from 'react-icons/fa';

import './Icon.css';

class Icon extends React.Component{
    render(){
        const choice = this.props.choice;
        switch(choice){
            case "X":
                return <FaTimes className="icon" />
            case "O":
                return <FaRegCircle className="icon" />
            default:
                return ""
        }
    }
}

export default Icon;