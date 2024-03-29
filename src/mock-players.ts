// import { Player } from './players/player';
import {Player} from './app/players/player';

export const Players: Player[] = [
    { 
        id: "1", 
        name: 'William Ganley', 
        nickname: "Bill", 
        email: 'wag945@psu.edu',
        phone: '1234567890',
        age: 39,
        handicap: 14,
        league: 'one',
        holes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    },
    { 
        id: "2", 
        name: 'Peter Jester', 
        nickname: "Pete", 
        email: 'peter.jester@gmail.com',
        phone: '1234567890',
        age: 25,
        handicap: 18,
        league: 'one',
        holes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    },
    { 
        id: "3",
        name: 'Craig Roland',
        nickname: 'Craig',
        email: 'craig.roland@gmail.com',
        phone: '2345678901',
        age: 25,
        handicap: 4,
        league: 'one',
        holes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    },
    {
        id: "4",
        name: 'Daniel Castellucci',
        nickname: 'Dan',
        email: 'dan.castellucci@gmail.com',
        phone: '3456789012',
        age: 25,
        handicap: 15,
        league: 'one',
        holes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    }
];