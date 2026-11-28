import { Service } from '@angular/core';
import { Category } from '../../models/category-model';

interface DatabaseFlashcard {
    id: number;
    whitecard: string;
    greencard: string;
    explanation: string | null;
    example: string | null;
}

interface DatabaseSubject {
    id: number;
    name: string;
    cards: DatabaseFlashcard[];
}

interface DatabaseTopic {
    id: number;
    name: string;
    icon: string | null;
    subjects: DatabaseSubject[];
}

interface LearningResponse {
    success: boolean;
    csrf_token?: string;
    topics?: DatabaseTopic[];
    id?: number;
    error?: string;
}

type LearningType = 'topic' | 'subject' | 'flashcard';

@Service()
export class Learning {

    private csrf = '';

    private async request(
        data: Record<string, unknown>
    ): Promise<LearningResponse> {

        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        };

        if (this.csrf) {
            headers['X-CSRF-Token'] = this.csrf;
        }

        const response = await fetch('/api/learning.php', {
            method: 'POST',
            credentials: 'same-origin',
            cache: 'no-store',
            headers,
            body: JSON.stringify(data)
        });

        if (response.status === 401) {
            window.location.replace('/');
            throw new Error('Session expired.');
        }

        const result: LearningResponse = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(result.error ?? 'Request failed.');
        }

        if (result.csrf_token) {
            this.csrf = result.csrf_token;
        }

        return result;
    }

    async loadCategories(): Promise<Category[]> {

        const result = await this.request({
            action: 'read'
        });

        return (result.topics ?? []).map(topic => ({
            id: topic.id,
            name: topic.name,
            icon: topic.icon ?? 'icons/layers.svg',
            topics: topic.subjects.map(subject => ({
                id: subject.id,
                name: subject.name,
                cards: subject.cards.map(card => ({
                    id: card.id,
                    front: card.whitecard,
                    back: card.greencard,
                    explanation: card.explanation ?? undefined,
                    example: card.example ?? undefined
                }))
            }))
        }));
    }

    async create(
        type: LearningType,
        data: Record<string, unknown>
    ): Promise<number> {

        const result = await this.request({
            ...data,
            action: 'create',
            type
        });

        if (result.id === undefined) {
            throw new Error('Missing ID.');
        }

        return result.id;
    }

    async update(
        type: LearningType,
        id: number,
        data: Record<string, unknown>
    ): Promise<void> {

        await this.request({
            ...data,
            action: 'update',
            type,
            id
        });
    }

    async move(
        type: 'subject' | 'flashcard',
        id: number,
        targetid: number
    ): Promise<void> {

        await this.request({
            action: 'move',
            type,
            id,
            target_id: targetid
        });
    }

    async delete(
        type: LearningType,
        id: number
    ): Promise<void> {

        await this.request({
            action: 'delete',
            type,
            id,
            confirmed: true
        });
    }
}