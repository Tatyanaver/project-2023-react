import React from 'react';

const Character = ({character}) => {
    const {id, name, status, species, type, gender, location, image, created}= character
    return (
        <div>
            <div>id) {id}</div>
            <div>name - {name}</div>
            <div>status - {status}</div>
            <div>species - {species}</div>
            <div>type - {type}</div>
            <div>gender - {gender}</div>
            <div>location - {location.name}</div>
            <a href={location.url}>location</a>
            <div>created - {created}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};