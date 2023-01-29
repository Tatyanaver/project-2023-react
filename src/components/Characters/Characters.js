import React from 'react';
import {Character} from '../Character/Character'

const Characters = () => {
    const characters = [
        {"id":10,"name":"Alan Rails","status":"Dead","species":"Human","type":"Superhuman (Ghost trains summoner)","gender":"Male","location":{"name":"Worldender's lair","url":"https://rickandmortyapi.com/api/location/4"},"image":"https://rickandmortyapi.com/api/character/avatar/10.jpeg","created":"2017-11-04T20:19:09.017Z"},
        {"id":100,"name":"Bubonic Plague","status":"Dead","species":"Disease","type":"","gender":"unknown","location":{"name":"Anatomy Park","url":"https://rickandmortyapi.com/api/location/5"},"image":"https://rickandmortyapi.com/api/character/avatar/100.jpeg","created":"2017-12-01T12:02:21.611Z"},
        {"id":200,"name":"Lawyer Morty","status":"unknown","species":"Human","type":"","gender":"Male","location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/200.jpeg","created":"2017-12-30T12:49:52.971Z"},
        {"id":300,"name":"Roger","status":"Dead","species":"Human","type":"","gender":"Male","location":{"name":"Anatomy Park","url":"https://rickandmortyapi.com/api/location/5"},"image":"https://rickandmortyapi.com/api/character/avatar/300.jpeg","created":"2017-12-31T20:39:35.047Z"},
        {"id":400,"name":"Giant Judge","status":"Alive","species":"Mythological Creature","type":"Giant","gender":"Male","location":{"name":"Giant's Town","url":"https://rickandmortyapi.com/api/location/14"},"image":"https://rickandmortyapi.com/api/character/avatar/400.jpeg","created":"2018-04-15T17:36:11.295Z"},
        {"id":500,"name":"Fascist Mr. President","status":"Alive","species":"Human","type":"","gender":"Male","location":{"name":"Earth (Fascist Dimension)","url":"https://rickandmortyapi.com/api/location/77"},"image":"https://rickandmortyapi.com/api/character/avatar/500.jpeg","created":"2020-05-02T11:25:26.903Z"},
    ]
    return (
        <div>
            {
                characters.map(character=> <Character key={character.id} character={character}/> )
            }
        </div>
    );
};

export default Characters;