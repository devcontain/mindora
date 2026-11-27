import { Component, input, signal, computed, inject } from '@angular/core';
import { Topic } from '../../models/topic-model';
import { Flashcard } from '../../models/flashcard-model';
import { VocabularyService } from '../../core/services/vocabulary-services';

@Component({
  imports: [],
  selector: 'app-partner-training',
  styleUrl: './partner-training.scss',
  templateUrl: './partner-training.html',
})
export class PartnerTraining {

  vocabularyService = inject(VocabularyService);

  topic = input.required<Topic>();
  currentIndex = signal(0);

  shuffledCards = signal<Flashcard[] | null>(null);

  cards = computed(() => {
    return this.shuffledCards() ?? this.topic().cards;
  });

  currentCard = computed(() => {
    return this.cards()[this.currentIndex()];
  });

  shuffleCards() {
    this.shuffledCards.set(
      this.vocabularyService.shuffleCards(this.cards())
    );

    this.currentIndex.set(0);
  }

  nextCard() {
    if (this.currentIndex() < this.cards().length - 1) {
      this.currentIndex.update(index => index + 1);
    }
  }

  previousCard() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(index => index - 1);
    }
  }
}
