import { Component, inject, computed, OnInit } from '@angular/core';
import { VocabularyService } from '../../core/services/vocabulary-services';
import { Navigation } from '../../core/services/navigation';
import { Category } from '../../models/category-model';
import { VocabularyList } from '../vocabulary-list/vocabulary-list';
import { PartnerTraining } from '../partner-training/partner-training';
import { SoloTraining } from '../solo-training/solo-training';

@Component({
  imports: [VocabularyList, PartnerTraining, SoloTraining],
  selector: 'app-overview',
  styleUrl: './overview.scss',
  templateUrl: './overview.html',
})
export class Overview implements OnInit {

  vocabularyService = inject(VocabularyService);
  navigation = inject(Navigation);

  selectedCategory = this.navigation.selectedCategory;
  selectedTopic = this.navigation.selectedTopic;
  selectedMode = this.navigation.selectedMode;

  topicCount = computed(() => this.vocabularyService.topics().length);

  flashcardCount = computed(() => {
    return this.vocabularyService.topics().reduce(
      (total, topic) => total + topic.cards.length, 0
    );
  });

  getCategoryFlashcardCount(category: Category): number {
    return category.topics.reduce(
      (total, topic) => total + topic.cards.length, 0
    );
  }

  ngOnInit(): void {
    void this.vocabularyService.loadCategories();
  }
}