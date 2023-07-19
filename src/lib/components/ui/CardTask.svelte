<script lang="ts">
	import Badge from './Badge.svelte';
	import { todos } from '../../../store/stores';
	import IconClose from '~icons/ic/baseline-close';
	import IconDelete from '~icons/ic/baseline-delete';

	export let task: string;
	export let tags: string[] = [];
</script>

<div class="w-full rounded-md border-gray-300 bg-gray-100 pt-4 pl-4 mb-2">
	<div class="grid grid-cols-12">
		<p class="pb-4 col-span-10 break-words">{task}</p>
		<IconClose class="cursor-pointer" />
		<IconDelete class="cursor-pointer" />
	</div>

	{#if tags.length > 0}
		<hr />
		<div class="w-full flex py-2 gap-2 flex-wrap">
			{#each tags as tag}
				<Badge content={tag} />
			{/each}
		</div>
	{/if}
</div>
