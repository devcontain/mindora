import { Routes } from '@angular/router';
import { Overview } from './features/overview/overview';
import { AddTopic } from './features/add-topic/add-topic';

export const routes: Routes = [
    {
        path: '',
        component: Overview
    },
    {
        path: 'add-topic',
        component: AddTopic
    }
];
