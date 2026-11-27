import { Topic } from '../../../models/topic-model';

export const cybersecurity: Topic = {
    id: 27,
    name: 'Cybersecurity',
    cards: [
        { id: 1, front: 'authentication', back: 'Authentifizierung' },
        { id: 2, front: 'authorisation', back: 'Autorisierung' },
        { id: 3, front: 'credentials', back: 'Zugangsdaten' },
        { id: 4, front: 'access control', back: 'Zugriffskontrolle' },
        { id: 5, front: 'encryption', back: 'Verschlüsselung' },
        { id: 6, front: 'decryption', back: 'Entschlüsselung' },
        { id: 7, front: 'public key', back: 'Öffentlicher Schlüssel' },
        { id: 8, front: 'private key', back: 'Privater Schlüssel' },
        { id: 9, front: 'digital signature', back: 'Digitale Signatur' },
        { id: 10, front: 'hash function', back: 'Hashfunktion' },
        { id: 11, front: 'firewall', back: 'Firewall' },
        { id: 12, front: 'vulnerability', back: 'Sicherheitslücke' },
        { id: 13, front: 'threat', back: 'Bedrohung' },
        { id: 14, front: 'malware', back: 'Schadsoftware' },
        { id: 15, front: 'ransomware', back: 'Erpressungssoftware' },
        { id: 16, front: 'phishing', back: 'Betrügerischer Datendiebstahl' },
        { id: 17, front: 'data breach', back: 'Datenschutzverletzung' },
        { id: 18, front: 'security patch', back: 'Sicherheitsupdate' },
        { id: 19, front: 'two-factor authentication', back: 'Zwei-Faktor-Authentifizierung' },
        { id: 20, front: 'password manager', back: 'Passwortverwaltung' },
        { id: 21, front: 'backup', back: 'Datensicherung' },
        { id: 22, front: 'data recovery', back: 'Datenwiederherstellung' },
        { id: 23, front: 'integrity', back: 'Unversehrtheit' },
        { id: 24, front: 'confidentiality', back: 'Vertraulichkeit' },
        { id: 25, front: 'least privilege', back: 'Prinzip der geringsten Rechte' }
    ]
};