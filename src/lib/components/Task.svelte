<script lang="ts">
	import { fly } from 'svelte/transition';

	export let task = '';
</script>

<div
	in:fly={{ y: -10, duration: 1500, delay: 100 }}
	class="bg-gray-100 border col-span-3 h-10 px-4 flex items-center"
>
	{task}
</div>
