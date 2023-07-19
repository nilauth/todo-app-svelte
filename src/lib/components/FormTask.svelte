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

<form class="w-full flex justify-center gap-4 my-4" on:submit={handleSubmit}>
	<input
		class="w-7/12 max-w-xl rounded-md h-10 border-gray-300"
		type="text"
		placeholder="Go for a walk #health"
		bind:value={inputValue}
	/>
	<Button content="Add task" />
</form>
