<script lang="ts">
	let task = '';

	function handleClick() {
		console.log(task);
	}
</script>

<input
	type="text"
	placeholder="Type task here.."
	class="input input-bordered input-sm w-full rounded h-10 col-span-3"
	bind:value={task}
/>
<button on:click={handleClick} class="bg-black hover:bg-gray-900 text-white py-2 px-4 rounded h-10">
	Add task
</button>
