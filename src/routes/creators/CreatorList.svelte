<script lang='ts'>
	import type { YouTubeCreator } from "$lib/interfaces/ContentCreator";
    import CreatorCard from "./CreatorCard.svelte";
    export let creators: YouTubeCreator[];
</script>

<div>
    {#each creators as creator}
        <CreatorCard creator={creator}/>
    {/each}
</div>