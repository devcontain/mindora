import { Topic } from '../../../models/topic-model';

export const maintenance: Topic = {
    id: 30,
    name: 'Industrial Maintenance',
    cards: [
        { id: 1, front: 'maintenance', back: 'Instandhaltung' },
        { id: 2, front: 'inspection', back: 'Inspektion' },
        { id: 3, front: 'repair', back: 'Instandsetzung' },
        { id: 4, front: 'preventive maintenance', back: 'Vorbeugende Instandhaltung' },
        { id: 5, front: 'predictive maintenance', back: 'Vorausschauende Instandhaltung' },
        { id: 6, front: 'troubleshooting', back: 'Systematische Fehlersuche' },
        { id: 7, front: 'malfunction', back: 'Funktionsstörung' },
        { id: 8, front: 'wear', back: 'Verschleiß' },
        { id: 9, front: 'corrosion', back: 'Korrosion' },
        { id: 10, front: 'lubrication', back: 'Schmierung' },
        { id: 11, front: 'lubricant', back: 'Schmierstoff' },
        { id: 12, front: 'leakage', back: 'Leckage' },
        { id: 13, front: 'spare part', back: 'Ersatzteil' },
        { id: 14, front: 'assembly', back: 'Montage' },
        { id: 15, front: 'disassembly', back: 'Demontage' },
        { id: 16, front: 'alignment', back: 'Ausrichtung' },
        { id: 17, front: 'calibration', back: 'Kalibrierung' },
        { id: 18, front: 'commissioning', back: 'Inbetriebnahme' },
        { id: 19, front: 'shutdown', back: 'Außerbetriebnahme' },
        { id: 20, front: 'root cause analysis', back: 'Ursachenanalyse' },
        { id: 21, front: 'maintenance schedule', back: 'Instandhaltungsplan' },
        { id: 22, front: 'work order', back: 'Arbeitsauftrag' },
        { id: 23, front: 'service life', back: 'Nutzungsdauer' },
        { id: 24, front: 'operational reliability', back: 'Betriebszuverlässigkeit' },
        { id: 25, front: 'personal protective equipment', back: 'Persönliche Schutzausrüstung' }
    ]
};