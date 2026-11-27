import { Topic } from '../../../models/topic-model';

export const emergencies: Topic = {
    id: 16,
    name: 'Emergencies & Assistance',
    cards: [
        { id: 1, front: 'emergency', back: 'Notfall' },
        { id: 2, front: 'accident', back: 'Unfall' },
        { id: 3, front: 'ambulance', back: 'Rettungswagen' },
        { id: 4, front: 'hospital', back: 'Krankenhaus' },
        { id: 5, front: 'emergency department', back: 'Notaufnahme' },
        { id: 6, front: 'first aid', back: 'Erste Hilfe' },
        { id: 7, front: 'first aid kit', back: 'Erste-Hilfe-Kasten' },
        { id: 8, front: 'police station', back: 'Polizeiwache' },
        { id: 9, front: 'police officer', back: 'Polizist' },
        { id: 10, front: 'fire brigade', back: 'Feuerwehr' },
        { id: 11, front: 'fire extinguisher', back: 'Feuerlöscher' },
        { id: 12, front: 'emergency exit', back: 'Notausgang' },
        { id: 13, front: 'emergency number', back: 'Notrufnummer' },
        { id: 14, front: 'theft', back: 'Diebstahl' },
        { id: 15, front: 'robbery', back: 'Raub' },
        { id: 16, front: 'witness', back: 'Zeuge' },
        { id: 17, front: 'danger', back: 'Gefahr' },
        { id: 18, front: 'warning', back: 'Warnung' },
        { id: 19, front: 'rescue', back: 'Rettung' },
        { id: 20, front: 'assistance', back: 'Hilfe / Unterstützung' },
        { id: 21, front: 'embassy', back: 'Botschaft' },
        { id: 22, front: 'travel insurance', back: 'Reiseversicherung' },
        { id: 23, front: 'missing person', back: 'Vermisste Person' },
        { id: 24, front: 'lost property office', back: 'Fundbüro' },
        { id: 25, front: 'breakdown', back: 'Fahrzeugpanne' }
    ]
};