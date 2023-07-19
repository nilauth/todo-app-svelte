<script lang="ts">
	import Button from './ui/Button.svelte';
	import { extractTitleAndHashtags } from '$lib/taskUtils';

	import { todos } from '../../store/stores';

	let inputValue = '';

	function handleSubmit(event: SubmitEvent) {
		const { title, hashtags } = extractTitleAndHashtags(inputValue);

		console.log(title);

		console.log(hashtags);

		todos.update((todos) => [
			...todos,
			{
				id: 'id-' + Date.now(),
				title: title,
				hashtags: hashtags,
				state: 'pending'
			}
		]);
		console.log($todos);
		inputValue = '';
	}
</script>

<form class="w-full grid grid-cols-12 gap-4 max-w-6xl" on:submit={handleSubmit}>
	<input
		class="rounded-md h-10 border-gray-300 col-start-3 col-span-6"
		type="text"
		placeholder="Go for a walk #health"
		bind:value={inputValue}
	/>
	<div class="flex justify-start col-span-2">
		<Button content="Add task" />
	</div>
</form>
