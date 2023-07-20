<script>
	import FormTask from '$lib/components/FormTask.svelte';
	import SidePanel from '$lib/components/SidePanel.svelte';
	import CardTask from '$lib/components/ui/CardTask.svelte';
	import { todos } from '../store/stores';

	$: reversedTodos = [...$todos].reverse();

	$: numberPendingTasks = $todos.reduce((acc, todo) => {
		if (todo.state === 'pending') {
			acc += 1;
		}
		return acc;
	}, 0);

	$: numberCompletedTasks = $todos.reduce((acc, todo) => {
		if (todo.state === 'completed') {
			acc += 1;
		}
		return acc;
	}, 0);
</script>

<main class="h-screen flex flex-col w-full items-center pt-40">
	<FormTask />
	<section class="w-full grid grid-cols-12 gap-4 mt-3 max-w-6xl">
		<div class="col-start-3 col-span-6">
			<a href="/pending" class="text-xl">Pending {numberPendingTasks}</a>
			{#each reversedTodos as todo}
				{#if todo.state === 'pending'}
					<CardTask state={todo.state} id={todo.id} task={todo.title} tags={todo.hashtags} />
				{/if}
			{/each}
			<a href="/completed" class="font-inter text-xl">Completed {numberCompletedTasks}</a>
			{#each reversedTodos as todo}
				{#if todo.state === 'completed'}
					<CardTask state={todo.state} id={todo.id} task={todo.title} tags={todo.hashtags} />
				{/if}
			{/each}
		</div>
	</section>
</main>

<!-- <SidePanel /> -->
