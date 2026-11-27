import { Injectable, signal } from '@angular/core';
import { Topic } from '../../models/topic-model';
import { everyday } from '../../data/english/everyday';
import { Flashcard } from '../../models/flashcard-model';

@Injectable({
    providedIn: 'root'
})
export class VocabularyService {

    topics = signal<Topic[]>([
        everyday
    ]);

    shuffleCards(cards: Flashcard[]): Flashcard[] {
        const shuffled = [...cards];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

}