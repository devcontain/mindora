import { Component, inject, signal } from '@angular/core';
import { VocabularyService } from '../../core/services/vocabulary-services';
import { Topic } from '../../models/topic-model';
import { VocabularyList } from '../vocabulary-list/vocabulary-list';
import { PartnerTraining } from '../partner-training/partner-training';
import { SoloTraining } from '../solo-training/solo-training';

@Component({
  imports: [VocabularyList, PartnerTraining, SoloTraining],
  selector: 'app-overview',
  styleUrl: './overview.scss',
  templateUrl: './overview.html',
})
export class Overview {
  vocabularyService = inject(VocabularyService);
  selectedTopic = signal<Topic | null>(null);
  selectedMode = signal<string | null>(null);
}
