<script lang="ts">
	import Task from '$lib/components/Task.svelte';
	import InputTask from '$lib/components/InputTask.svelte';
	import { todos } from '../store/stores';

	$: reversed = [...$todos].reverse();
</script>

<section class="max-w-2xl mx-auto grid grid-cols-4 px-8 gap-x-4">
	<InputTask />
	{#each reversed as { text, id }, index (id)}
		<Task task={text} /> {id} {index}
	{/each}
</section>
