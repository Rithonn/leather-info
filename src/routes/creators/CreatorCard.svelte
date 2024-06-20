<script lang='ts'>
	import type { YouTubeCreator } from '$lib/interfaces/ContentCreator';

	//import pfpplaceholder from '$lib/images/placeholder-pfp.jpg';
	import CreatorVideo from './CreatorVideo.svelte';
	export let creator: YouTubeCreator;

</script>

<div class="bg-white mt-3 p-5 rounded">
	<div class="flex flex-col gap-5">
		<a href={creator.link} class="flex gap-3" target="_blank">
			{#if creator.profilePicture}
				<img class="w-20 h-20 rounded-full" src={creator.profilePicture} alt="placeholderpfp" />
			{:else}
				<div class="w-20 h-20 rounded-full skeleton"></div>
			{/if}

			{#if creator.displayName}
				<span class="self-center">{creator.displayName}</span>
			{:else}
				<div class="w-40 h-4 self-center rounded-lg skeleton"></div>
			{/if}
		</a>
		<div class="flex gap-3 justify-around">
			{#each creator.videos as video}
				<CreatorVideo videoLink={video.link} videoTitle={video.title} thumbnail={video.thumbnail} thumbnailLg={video.thumbnailLg}/>
			{/each}
		</div>
	</div>
</div>

<style>
	.skeleton {
		animation: skeleton-loading 2s linear infinite alternate;
	}

	@keyframes skeleton-loading {
		0% {
			background-color: hsl(200, 20%, 80%);
		}
		100% {
			background-color: hsl(200, 20%, 95%);
		}
	}
</style>
