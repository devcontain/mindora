import { Component, input } from '@angular/core';
import { Topic } from '../../models/topic-model';

@Component({
  imports: [],
  selector: 'app-vocabulary-list',
  styleUrl: './vocabulary-list.scss',
  templateUrl: './vocabulary-list.html',
})
export class VocabularyList {
  topic = input.required<Topic>();
}
