<script>
	import Badge from './Badge.svelte';
</script>

<div class="w-7/12 max-w-xl rounded-md border-gray-300 bg-gray-100 pt-4 px-4">
	<p class="pb-4">This is a task that needs to be done the 14 of September</p>
	<hr />
	<div class="w-full flex py-2 gap-2 flex-wrap">
		<Badge content="#school" />
		<Badge content="#work" />
	</div>
</div>
