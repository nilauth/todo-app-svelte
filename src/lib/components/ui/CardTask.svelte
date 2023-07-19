<script lang="ts">
	import Badge from './Badge.svelte';
	import { todos } from '../../../store/stores';
	import IconDone from '~icons/ic/outline-done';
	import IconDelete from '~icons/ic/baseline-delete';
	import getCompletedId from '$lib/utils/completeTask';
	export let task: string;
	export let tags: string[] = [];
	export let id = '';
	export let state = 'pending';

	function completeTask(event: MouseEvent) {
		const completedTaskId = getCompletedId(event);

		todos.update((oldTodos) => {
			oldTodos.map((todo) => {
				if (todo.id === completedTaskId) {
					todo.state = 'completed';
				}
			});
			console.log($todos);

			return [...oldTodos];
		});
	}
</script>

<div class="w-full rounded-md border-gray-300 bg-gray-100 pt-4 pl-4 mb-2">
	<div class="grid grid-cols-12">
		<p class="pb-4 col-span-10 break-words">
			<span class={state === 'completed' ? 'line-through' : ''}>
				{task}
			</span>
		</p>
		<button {id} class="w-fit h-5 mt-[2px]" on:click={(event) => completeTask(event)}>
			<IconDone class="cursor-pointer" />
		</button>
		<button class="w-fit h-5 mt-[2px]">
			<IconDelete
				class="cursor-pointer
			"
			/>
		</button>
	</div>

	{#if tags.length > 0}
		<hr class="mr-4" />
		<div class="w-full flex py-2 gap-2 flex-wrap">
			{#each tags as tag}
				<Badge content={tag} />
			{/each}
		</div>
	{/if}
</div>
