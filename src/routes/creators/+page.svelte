<script lang='ts'>
	import CreatorList from "./CreatorList.svelte";
	export let data;

</script>


<svelte:head>
	<title>Content Creators</title>
	<meta name="description" content="Repository of content creators" />
</svelte:head>

<div class="">
	{#await data.streamed.creators}
		<span> loading</span>
	{:then creators}
		<CreatorList creators={creators}/>
	{/await}
</div>

