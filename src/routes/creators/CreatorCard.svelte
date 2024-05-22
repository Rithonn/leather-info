<script>
	import pfpplaceholder from '$lib/images/placeholder-pfp.jpg'
    
    // Export props
	const link = 'https://www.youtube.com/@80ProofGoods';
	const name = '80 Proof Goods';

	// These two links are to the thumbnails for a youtube video
	// https://i.ytimg.com/vi/{VIDEO ID}/hqdefault.jpg
	// https://i.ytimg.com/vi/{VIDEO ID}/maxresdefault.jpg
</script>

<div class="bg-white p-5 rounded">
	<div class="flex flex-col">
		<!-- Name row-->
		<div class="flex">
			<!--pfp-->
            <img class="w-20 h-20 rounded-full" src={pfpplaceholder} alt="placeholderpfp"/>
			<span>{name}</span>
		</div>
		<!--Video row-->
		<div class="flex">
			<div>Video One</div>
			<div>Video two</div>
		</div>
	</div>
</div>
