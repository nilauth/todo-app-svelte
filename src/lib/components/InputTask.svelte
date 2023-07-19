<script lang="ts">
	import { todos } from '../../store/stores';

	let task = '';
	let idTask = 10000;

	function handleClick() {
		if (task.trim() !== '') {
			$todos = [...$todos, { id: 'id-' + Date.now(), text: task }];
			console.log($todos);
			task = '';
			idTask -= 1;
		}
	}
</script>

<input
	type="text"
	placeholder="Type task here.."
	class="mb-3 input input-bordered input-sm w-full rounded h-10 col-span-3"
	bind:value={task}
/>
<button on:click={handleClick} class="bg-black hover:bg-gray-900 text-white py-2 px-4 rounded h-10">
	Add task
</button>
