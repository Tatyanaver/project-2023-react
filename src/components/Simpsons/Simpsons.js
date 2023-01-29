import React from 'react';
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            surname: 'Simpson',
            image:'https://media.npr.org/assets/img/2014/05/08/simp2006_homerarmscrossed_f_custom-ec94cc7a10463aa8260b2c5a9a3ebea29c7ecbfe.jpg',
            firstPet:  `Santa's Little Helper`,
            secondPet: 'Snowball II',
        },
        {
            id: 2,
            name: 'Marge',
            surname: 'Simpson',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2016/03/Simpsons_g2013_R1_marge-04bf0d1.jpg',
            firstPet:  `Santa's Little Helper`,
            secondPet: 'Snowball II',
        },
        {
            id: 3,
            name: 'Bart',
            surname: 'Simpson',
            image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bart-simpson-hafshah-uyainah.jpg',
            firstPet:  `Santa's Little Helper`,
            secondPet: 'Snowball II',
        },
        {
            id: 4,
            name:  'Lisa',
            surname: 'Simpson',
            image: 'https://cdn.costumewall.com/wp-content/uploads/2015/09/lisa-simpson.jpg',
            firstPet:  `Santa's Little Helper`,
            secondPet: 'Snowball II',
        },
        {
            id: 5,
            name: 'Maggie',
            surname: 'Simpson',
            image: 'https://cdnb.artstation.com/p/assets/images/images/039/038/965/large/edward-munn-edm-asset.jpg',
            firstPet:  `Santa's Little Helper`,
            secondPet: 'Snowball II',
        }
    ]
    return (
        <div>
            {simpsons.map(simpson=> <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export default Simpsons;