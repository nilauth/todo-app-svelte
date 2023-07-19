<script lang="ts">
	import Badge from './Badge.svelte';
	import { todos } from '../../../store/stores';
	export let task: string;
	export let tags: string[] = [];
</script>

<div class="w-full rounded-md border-gray-300 bg-gray-100 pt-4 px-4 mb-2">
	<p class="pb-4">{task}</p>
	{#if tags.length > 0}
		<hr />
		<div class="w-full flex py-2 gap-2 flex-wrap">
			{#each tags as tag}
				<Badge content={tag} />
			{/each}
		</div>
	{/if}
</div>
