import React from 'react';
import Radium from 'radium';

const Profile = props => (
    <div>
        <h3>{props.userProfile.name}</h3>
        <h4>{props.userProfile.login}</h4>
        <img src = {props.userProfile.avatar_url}
             style = {styles.img}
             className = "img-thumbnail"/>
        <p>View <a href = {props.userProfile.html_url}>{props.userProfile.name}'s profile </a></p>
    </div>
);

const styles = {
    img: {
        height: '200px',
        width: '200px'
    }
}

export default Radium(Profile);
