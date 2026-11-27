import { Injectable, signal } from '@angular/core';
import { Topic } from '../../models/topic-model';
import { Flashcard } from '../../models/flashcard-model';
import { everyday } from '../../data/english/everyday-life/everyday';
import { family } from '../../data/english/everyday-life/family';
import { home } from '../../data/english/everyday-life/home';
import { food } from '../../data/english/everyday-life/food';
import { shopping } from '../../data/english/everyday-life/shopping';
import { health } from '../../data/english/everyday-life/health';
import { feelings } from '../../data/english/everyday-life/feelings';
import { weather } from '../../data/english/everyday-life/weather';
import { hobbies } from '../../data/english/everyday-life/hobbies';
import { time } from '../../data/english/everyday-life/time';
import { airport } from '../../data/english/travel/airport';
import { hotel } from '../../data/english/travel/hotel';
import { transport } from '../../data/english/travel/transport';
import { directions } from '../../data/english/travel/directions';
import { restaurants } from '../../data/english/travel/restaurants';
import { emergencies } from '../../data/english/travel/emergencies';
import { office } from '../../data/english/professional/office';
import { applications } from '../../data/english/professional/applications';
import { business } from '../../data/english/professional/business';
import { meetings } from '../../data/english/professional/meetings';
import { finance } from '../../data/english/professional/finance';
import { customerService } from '../../data/english/professional/customer-service';
import { hardware } from '../../data/english/technical/hardware';
import { software } from '../../data/english/technical/software';
import { web } from '../../data/english/technical/web';
import { networking } from '../../data/english/technical/networking';
import { cybersecurity } from '../../data/english/technical/cybersecurity';
import { mechanical } from '../../data/english/technical/mechanical';
import { electrical } from '../../data/english/technical/electrical';
import { maintenance } from '../../data/english/technical/maintenance';
import { verbs } from '../../data/english/essentials/verbs';
import { adjectives } from '../../data/english/essentials/adjectives';
import { irregularVerbsOne } from '../../data/english/essentials/irregular-verbs-one';
import { irregularVerbsTwo } from '../../data/english/essentials/irregular-verbs-two';
import { phrasalVerbsOne } from '../../data/english/essentials/phrasal-verbs-one';
import { phrasalVerbsTwo } from '../../data/english/essentials/phrasal-verbs-two';
import { connectingWords } from '../../data/english/essentials/connecting-words';
import { expressions } from '../../data/english/essentials/expressions';

@Injectable({
    providedIn: 'root'
})
export class VocabularyService {

    topics = signal<Topic[]>([
        everyday,
        family,
        home,
        food,
        shopping,
        health,
        feelings,
        weather,
        hobbies,
        time,
        airport,
        hotel,
        transport,
        directions,
        restaurants,
        emergencies,
        office,
        applications,
        business,
        meetings,
        finance,
        customerService,
        hardware,
        software,
        web,
        networking,
        cybersecurity,
        mechanical,
        electrical,
        maintenance,
        verbs,
        adjectives,
        irregularVerbsOne,
        irregularVerbsTwo,
        phrasalVerbsOne,
        phrasalVerbsTwo,
        connectingWords,
        expressions
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