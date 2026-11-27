import { Topic } from './topic-model';

export interface Category {
    id: number;
    name: string;
    icon: string;
    topics: Topic[];
}