import { writable } from 'svelte/store';

interface Task {
	id: string;
	title: string;
	hashtags: string[];
	state: 'pending' | 'completed' | 'deleted';
}

export const todos = writable<Task[]>([]);
