<script>
	import FormTask from '$lib/components/FormTask.svelte';
	import SidePanel from '$lib/components/SidePanel.svelte';
	import CardTask from '$lib/components/ui/CardTask.svelte';
	import { todos } from '../store/stores';

	$: reversedTodos = [...$todos].reverse();
</script>

<main class="h-screen flex flex-col w-full items-center pt-40">
	<FormTask />
	<section class="w-full grid grid-cols-12 gap-4 mt-3 max-w-6xl">
		<div class="col-start-3 col-span-6">
			{#each reversedTodos as todo}
				<CardTask id={todo.id} task={todo.title} tags={todo.hashtags} />
			{/each}
		</div>
	</section>
</main>

<!-- <SidePanel /> -->
