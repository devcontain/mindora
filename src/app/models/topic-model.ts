import { Flashcard } from './flashcard-model';

export interface Topic {
    id: number;
    name: string;
    cards: Flashcard[];
}