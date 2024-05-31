<script>
	import pfpplaceholder from '$lib/images/placeholder-pfp.jpg';

	// Export props
	const link = 'https://www.youtube.com/@80ProofGoods';
	const name = '80 Proof Goods';
	const tags = [''];
	// These two links are to the thumbnails for a youtube video
	// https://i.ytimg.com/vi/{VIDEO ID}/hqdefault.jpg
	// https://i.ytimg.com/vi/{VIDEO ID}/maxresdefault.jpg
</script>

<div class="bg-white p-5 rounded">
	<div class="flex flex-col gap-5">
		<!-- Name row-->
		<div class="flex gap-3">
			<!--pfp-->
			<img class="w-12 h-12 rounded-full skeleton" src={pfpplaceholder} alt="placeholderpfp" />
			<span class="self-center">{name}</span>
		</div>
		<!--Video row-->
		<div class="flex gap-3 justify-around">
			<div class="flex flex-col">
				<div class="w-[305px] h-[172px] rounded-lg skeleton"></div>
				<div class="w-1/4 h-4 mt-2 rounded-lg skeleton"></div>
			</div>
			<div class="flex flex-col">
				<div class="w-[305px] h-[172px] rounded-lg skeleton"></div>
				<div class="w-1/4 h-4 mt-2 rounded-lg skeleton"></div>
			</div>
			<div class="flex flex-col">
				<div class="w-[305px] h-[172px] rounded-lg skeleton"></div>
				<div class="w-1/4 h-4 mt-2 rounded-lg skeleton"></div>
			</div>
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
