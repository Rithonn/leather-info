<script lang="ts">
	//https://www.youtube.com/watch?v=ADmWZ0E4YiM
	export let videoLink: string; 
	export let videoTitle: string;
	export let thumbnail: string | null = null;
	export let thumbnailLg: string;
</script>

<a class="flex flex-col" href={videoLink} target="_blank">
	{#if videoLink}
		<img class="w-[305px] h-[172px] rounded-lg" src={thumbnail} alt="Video"/>
	{:else}
		<div class="w-[305px] h-[172px] rounded-lg skeleton"></div>
	{/if}

	{#if videoTitle}
		<span class="w-[305px] mt-2">{videoTitle}</span>
	{:else}
    	<div class="w-1/4 h-4 mt-2 rounded-lg skeleton"></div>
	{/if}
</a>

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