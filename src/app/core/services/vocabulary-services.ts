import { Service, signal, computed, inject } from '@angular/core';
import { Topic } from '../../models/topic-model';
import { Flashcard } from '../../models/flashcard-model';
import { Category } from '../../models/category-model';
import { Learning } from './learning';

@Service()
export class VocabularyService {

    private learning = inject(Learning);

    categories = signal<Category[]>([]);
    loading = signal(false);
    error = signal('');

    topics = computed<Topic[]>(() =>
        this.categories().flatMap(category => category.topics)
    );

    async loadCategories(): Promise<void> {

        this.loading.set(true);
        this.error.set('');

        try {
            const categories = await this.learning.loadCategories();

            this.categories.set(categories);

        } catch (error) {

            this.error.set(
                error instanceof Error
                    ? error.message
                    : 'Learning content could not be loaded.'
            );

        } finally {
            this.loading.set(false);
        }
    }

    shuffleCards(cards: Flashcard[]): Flashcard[] {

        const shuffled = [...cards];

        for (let i = shuffled.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }
}