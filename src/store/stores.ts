import { writable } from 'svelte/store';

interface Todo {
	id: string;
	text: string;
}

export const todos = writable<Todo[]>([]);
