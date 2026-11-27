import { Component, input, signal, computed, inject } from '@angular/core';
import { Topic } from '../../models/topic-model';
import { Flashcard } from '../../models/flashcard-model';
import { VocabularyService } from '../../core/services/vocabulary-services';

@Component({
  imports: [],
  selector: 'app-solo-training',
  styleUrl: './solo-training.scss',
  templateUrl: './solo-training.html',
})
export class SoloTraining {

  vocabularyService = inject(VocabularyService);

  topic = input.required<Topic>();
  currentIndex = signal(0);
  flipped = signal(false);
  englishFirst = signal(true);

  shuffledCards = signal<Flashcard[] | null>(null);

  private lasttap = 0;

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
    this.flipped.set(false);
    this.lasttap = 0;
  }

  setLanguage(english: boolean) {
    this.englishFirst.set(english);
    this.flipped.set(false);
    this.lasttap = 0;
  }

  flipCard() {
    this.flipped.update(value => !value);
  }

  nextCard() {
    if (this.currentIndex() < this.cards().length - 1) {
      this.currentIndex.update(index => index + 1);
      this.flipped.set(false);
      this.lasttap = 0;
    }
  }

  previousCard() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(index => index - 1);
      this.flipped.set(false);
      this.lasttap = 0;
    }
  }

  handleTap() {
    const now = Date.now();

    if (this.lasttap !== 0 && now - this.lasttap <= 300) {
      this.flipCard();
      this.lasttap = 0;
    } else {
      this.lasttap = now;
    }
  }
}
