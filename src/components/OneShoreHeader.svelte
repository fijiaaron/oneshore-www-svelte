<script>
	import OneshoreLogo from "./OneShoreLogo.svelte";
</script>

<header class="oneshore header">
	
	<OneshoreLogo/>

	<!-- primary menu -->
	<nav class="primary menu">
		<a href="#services">Services</a>
		<a href="#about">About</a>
		<a href="#blog">Blog</a>
		<a href="#contact">Contact</a>
	</nav>	

</header>

<style lang="scss">
	
	.oneshore.header {

		font-size: 1rem;
		
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	
		.primary.menu {
			font-size: 0.9rem;
			text-transform: capitalize;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}

</style>