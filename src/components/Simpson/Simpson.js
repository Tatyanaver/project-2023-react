import React from 'react';


const Simpson = ({simpson}) => {
    const {id, name, surname, image, firstPet, secondPet} = simpson
    return (
        <div>
            <div>id) {id}</div>
            <div>name - {name}</div>
            <div>surname - {surname}</div>
            <div>firstPet - {firstPet}</div>
            <div>secondPet - {secondPet}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Simpson};