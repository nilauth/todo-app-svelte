<script>
	import FormTask from '$lib/components/FormTask.svelte';
	import SidePanel from '$lib/components/SidePanel.svelte';
	import CardTask from '$lib/components/ui/CardTask.svelte';
	import { todos } from '../store/stores';

	$: reversedTodos = [...$todos].reverse();
</script>

<main class="h-screen flex flex-col justify-center items-center">
	<FormTask />
	{#each reversedTodos as todo}
		<CardTask task={todo.title} tags={todo.hashtags} />
	{/each}
</main>
<!-- <SidePanel /> -->
