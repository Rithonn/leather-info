<script lang='ts'>
	//import pfpplaceholder from '$lib/images/placeholder-pfp.jpg';
	import CreatorVideo from './CreatorVideo.svelte';
	const profilePicture = '';

	const link = 'https://www.youtube.com/@80ProofGoods';
	const name = '80 Proof Goods';
	const tags = [''];

</script>

<div class="bg-white p-5 rounded">
	<div class="flex flex-col gap-5">
		<div class="flex gap-3">
			{#if profilePicture}
				<img class="w-20 h-20 rounded-full" src={profilePicture} alt="placeholderpfp" />
			{:else}
				<div class="w-20 h-20 rounded-full skeleton"></div>
			{/if}

			{#if name}
				<span class="self-center">{name}</span>
			{:else}
				<div class="w-40 h-4 self-center rounded-lg skeleton"></div>
			{/if}
		</div>
		<div class="flex gap-3 justify-around">
			<CreatorVideo videoLink={'https://www.youtube.com/watch?v=ADmWZ0E4YiM'} videoTitle={'The Art of Making a Leather Carry-On Duffle Bag'}/>
			<CreatorVideo videoLink={'https://www.youtube.com/watch?v=Zrigh2w3TIU'} videoTitle={'Unboxing 5 HIDES of Our Most Popular Leather - English Tan Harvest'}/>
			<CreatorVideo videoLink={'https://www.youtube.com/watch?v=9TjuWlv4_1Q'} videoTitle={'Leather CORDS WRAPS for Cable Management!'}/>
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
