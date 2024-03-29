import {Team} from './teams/team';

export const Teams: Team[] = [
    { 
        id: 1, 
        name: 'Team One', 
        record: '3-0',
        league: 'One',
        players: [
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
            }]
    },
    {
        id: 2,
        name: 'Team Two',
        record: '2-2',
        league: 'One',
        players: [
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
            }        
        ]
    },
    {
        id: 3,
        name: 'Team Three',
        record: '0-4',
        league: 'Two',
        players: null
    },
    {
        id: 4,
        name: 'Team Four',
        record: '1-3',
        league: 'Two',
        players: null
    }
];