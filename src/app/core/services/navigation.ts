import { Service, signal, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category-model';
import { Topic } from '../../models/topic-model';

@Service()
export class Navigation {

    private router = inject(Router);

    selectedCategory = signal<Category | null>(null);
    selectedTopic = signal<Topic | null>(null);
    selectedMode = signal<string | null>(null);

    canGoBack = computed(() =>
        !!this.selectedCategory() ||
        !!this.selectedTopic() ||
        !!this.selectedMode() ||
        this.router.currentNavigation() === null && this.router.url === '/add-topic'
    );

    canGoToSubjects = computed(() =>
        !!this.selectedCategory() &&
        !!this.selectedTopic()
    );

    home(): void {
        this.selectedMode.set(null);
        this.selectedTopic.set(null);
        this.selectedCategory.set(null);

        void this.router.navigate(['/']);
    }

    back(): void {
        if (this.router.url !== '/') {
            this.home();
            return;
        }

        if (this.selectedMode()) {
            this.selectedMode.set(null);
        } else if (this.selectedTopic()) {
            this.selectedTopic.set(null);
        } else if (this.selectedCategory()) {
            this.selectedCategory.set(null);
        }
    }

    subjects(): void {
        this.selectedMode.set(null);
        this.selectedTopic.set(null);

        void this.router.navigate(['/']);
    }

    addTopic(): void {
        this.selectedMode.set(null);
        this.selectedTopic.set(null);
        this.selectedCategory.set(null);

        void this.router.navigate(['/add-topic']);
    }
}