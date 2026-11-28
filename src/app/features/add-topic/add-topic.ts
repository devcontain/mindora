import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Learning } from '../../core/services/learning';
import { VocabularyService } from '../../core/services/vocabulary-services';

type LearningType = 'topic' | 'subject' | 'flashcard';

@Component({
  imports: [FormsModule],
  selector: 'app-add-topic',
  styleUrl: './add-topic.scss',
  templateUrl: './add-topic.html',
})
export class AddTopic implements OnInit {

  private learning = inject(Learning);
  vocabularyService = inject(VocabularyService);

  selectedTopicId = signal<number | null>(null);
  selectedSubjectId = signal<number | null>(null);
  selectedCardId = signal<number | null>(null);

  selectedTopic = computed(() =>
    this.vocabularyService.categories().find(
      topic => topic.id === this.selectedTopicId()
    )
  );

  subjects = computed(() =>
    this.selectedTopic()?.topics ?? []
  );

  selectedSubject = computed(() =>
    this.subjects().find(
      subject => subject.id === this.selectedSubjectId()
    )
  );

  cards = computed(() =>
    this.selectedSubject()?.cards ?? []
  );

  selectedCard = computed(() =>
    this.cards().find(
      card => card.id === this.selectedCardId()
    )
  );

  type = signal<LearningType>('topic');
  mode = signal<'create' | 'edit' | 'move' | 'delete' | null>(null);

  name = signal('');
  icon = signal('assets/svg/layers.svg');
  whitecard = signal('');
  greencard = signal('');
  explanation = signal('');
  example = signal('');

  targetId = signal<number | null>(null);

  busy = signal(false);
  error = signal('');
  success = signal('');

  icons = [
    'assets/svg/layers.svg',
    'assets/svg/coffee.svg',
    'assets/svg/plane.svg',
    'assets/svg/briefcase.svg',
    'assets/svg/cpu.svg',
    'assets/svg/languages.svg',
    'assets/svg/code.svg'
  ];

  moveTargets = computed(() => {

    if (this.type() === 'subject') {
      return this.vocabularyService.categories().filter(
        topic => topic.id !== this.selectedTopicId()
      );
    }

    return this.vocabularyService.categories().flatMap(
      topic => topic.topics
        .filter(subject => subject.id !== this.selectedSubjectId())
        .map(subject => ({
          id: subject.id,
          name: `${topic.name} / ${subject.name}`
        }))
    );
  });

  deleteMessage = computed(() => {

    if (this.type() === 'topic') {

      const subjects = this.subjects();
      const count = subjects.reduce(
        (sum, subject) => sum + subject.cards.length, 0
      );

      return `This permanently deletes the topic, ${subjects.length} subjects and ${count} flashcards.`;
    }

    if (this.type() === 'subject') {
      return `This permanently deletes the subject and ${this.cards().length} flashcards.`;
    }

    return 'This permanently deletes the selected flashcard.';
  });

  ngOnInit(): void {
    void this.vocabularyService.loadCategories();
  }

  selectTopic(id: number | null): void {
    this.selectedTopicId.set(id);
    this.selectedSubjectId.set(null);
    this.selectedCardId.set(null);
    this.closeForm();
  }

  selectSubject(id: number | null): void {
    this.selectedSubjectId.set(id);
    this.selectedCardId.set(null);
    this.closeForm();
  }

  selectCard(id: number | null): void {
    this.selectedCardId.set(id);
    this.closeForm();
  }

  openForm(
    type: LearningType,
    mode: 'create' | 'edit' | 'move' | 'delete'
  ): void {

    this.closeForm();
    this.type.set(type);
    this.mode.set(mode);

    if (mode !== 'edit') return;

    if (type === 'topic') {
      this.name.set(this.selectedTopic()?.name ?? '');
      this.icon.set(
        this.selectedTopic()?.icon ?? 'assets/svg/layers.svg'
      );
    }

    if (type === 'subject') {
      this.name.set(this.selectedSubject()?.name ?? '');
    }

    if (type === 'flashcard') {

      const card = this.selectedCard();

      this.whitecard.set(card?.front ?? '');
      this.greencard.set(card?.back ?? '');
      this.explanation.set(card?.explanation ?? '');
      this.example.set(card?.example ?? '');
    }
  }

  closeForm(): void {

    this.mode.set(null);
    this.name.set('');
    this.icon.set('assets/svg/layers.svg');
    this.whitecard.set('');
    this.greencard.set('');
    this.explanation.set('');
    this.example.set('');
    this.targetId.set(null);
    this.error.set('');
    this.success.set('');
  }

  getSelectedId(): number | null {

    switch (this.type()) {
      case 'topic': return this.selectedTopicId();
      case 'subject': return this.selectedSubjectId();
      case 'flashcard': return this.selectedCardId();
    }
  }

  getFormData(): Record<string, unknown> {

    switch (this.type()) {

      case 'topic':
        return {
          name: this.name().trim(),
          icon: this.icon()
        };

      case 'subject':
        return {
          name: this.name().trim(),
          topic_id: this.selectedTopicId()
        };

      case 'flashcard':
        return {
          subject_id: this.selectedSubjectId(),
          whitecard: this.whitecard().trim(),
          greencard: this.greencard().trim(),
          explanation: this.explanation().trim(),
          example: this.example().trim()
        };
    }
  }

  isValid(): boolean {

    if (this.mode() === 'delete') {
      return this.getSelectedId() !== null;
    }

    if (this.mode() === 'move') {
      return this.getSelectedId() !== null &&
        this.targetId() !== null;
    }

    if (this.mode() === 'edit' && this.getSelectedId() === null) {
      return false;
    }

    if (this.type() === 'flashcard') {
      return this.selectedSubjectId() !== null &&
        !!this.whitecard().trim() &&
        !!this.greencard().trim();
    }

    if (this.type() === 'subject') {
      return this.selectedTopicId() !== null &&
        !!this.name().trim();
    }

    return !!this.name().trim();
  }

  async save(): Promise<void> {

    if (this.busy() || !this.isValid()) return;

    this.busy.set(true);
    this.error.set('');

    const type = this.type();
    const mode = this.mode();
    const id = this.getSelectedId();
    const target = this.targetId();

    try {

      if (mode === 'create') {
        await this.learning.create(type, this.getFormData());
      }

      if (mode === 'edit' && id !== null) {
        await this.learning.update(type, id, this.getFormData());
      }

      if (
        mode === 'move' &&
        type !== 'topic' &&
        id !== null &&
        target !== null
      ) {
        await this.learning.move(type, id, target);
      }

      if (mode === 'delete' && id !== null) {
        await this.learning.delete(type, id);
      }

      await this.vocabularyService.loadCategories();

      if (mode === 'delete' || mode === 'move') {

        if (type === 'topic') {
          this.selectedTopicId.set(null);
          this.selectedSubjectId.set(null);
          this.selectedCardId.set(null);
        }

        if (type === 'subject') {
          this.selectedSubjectId.set(null);
          this.selectedCardId.set(null);
        }

        if (type === 'flashcard') {
          this.selectedCardId.set(null);
        }
      }

      this.closeForm();

      this.success.set(
        this.vocabularyService.error()
          ? 'Changes saved. Content could not be refreshed.'
          : 'Changes saved successfully.'
      );

    } catch (error) {

      this.error.set(
        error instanceof Error
          ? error.message
          : 'Request failed.'
      );

    } finally {
      this.busy.set(false);
    }
  }
}