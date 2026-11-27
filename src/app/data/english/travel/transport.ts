import { Topic } from '../../../models/topic-model';

export const transport: Topic = {
    id: 13,
    name: 'Public Transport',
    cards: [
        { id: 1, front: 'bus', back: 'Bus' },
        { id: 2, front: 'train', back: 'Zug' },
        { id: 3, front: 'tram', back: 'Straßenbahn' },
        { id: 4, front: 'underground', back: 'U-Bahn' },
        { id: 5, front: 'railway station', back: 'Bahnhof' },
        { id: 6, front: 'bus stop', back: 'Bushaltestelle' },
        { id: 7, front: 'platform', back: 'Bahnsteig' },
        { id: 8, front: 'track', back: 'Gleis' },
        { id: 9, front: 'ticket', back: 'Fahrkarte' },
        { id: 10, front: 'ticket machine', back: 'Fahrkartenautomat' },
        { id: 11, front: 'single ticket', back: 'Einzelfahrkarte' },
        { id: 12, front: 'return ticket', back: 'Hin- und Rückfahrkarte' },
        { id: 13, front: 'season ticket', back: 'Zeitkarte' },
        { id: 14, front: 'fare', back: 'Fahrpreis' },
        { id: 15, front: 'passenger', back: 'Fahrgast' },
        { id: 16, front: 'driver', back: 'Fahrer' },
        { id: 17, front: 'ticket inspector', back: 'Fahrkartenkontrolleur' },
        { id: 18, front: 'timetable', back: 'Fahrplan' },
        { id: 19, front: 'connection', back: 'Verbindung' },
        { id: 20, front: 'destination', back: 'Fahrtziel' },
        { id: 21, front: 'replacement bus service', back: 'Schienenersatzverkehr mit Bussen' },
        { id: 22, front: 'to board', back: 'einsteigen' },
        { id: 23, front: 'to get off', back: 'aussteigen' },
        { id: 24, front: 'to change trains', back: 'umsteigen' },
        { id: 25, front: 'rush hour', back: 'Hauptverkehrszeit' }
    ]
};