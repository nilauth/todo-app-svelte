<script lang="ts">
	import Task from '$lib/components/Task.svelte';
	import InputTask from '$lib/components/InputTask.svelte';
</script>

<main class="mt-56">
	<section class="flex gap-4 min-w-full justify-center" />
</main>

<section class="max-w-2xl mx-auto grid grid-cols-4 px-8 gap-x-4 gap-y-2">
	<InputTask />
	<Task task={'Buy milk'} />
	<Task task={'Pay bills'} />
	<Task task={'Go for a walk'} />
	<Task task={'Read a book'} />
	<Task task={'Call a friend'} />
</section>
