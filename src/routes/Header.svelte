<script>
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import NavContainer from 'flowbite-svelte/NavContainer.svelte';
	$: activeUrl = $page.url.pathname;
</script>



<header>
	<Navbar color="primary" let:NavContainer fluid>
		<NavContainer class="ml-0 px-10 justify-between md:justify-start">
			<NavBrand >
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Leather Repo</span>
			</NavBrand>
			<NavHamburger />
			<NavUl {activeUrl} class="ml-5">
				<NavLi href="/">Home</NavLi>
				<NavLi href="/shops">Shops</NavLi>
				<NavLi href="/knowledge">Knowledge</NavLi>
				<NavLi href="/creators">Creators</NavLi>
			</NavUl>
		</NavContainer>
	</Navbar>
</header>
