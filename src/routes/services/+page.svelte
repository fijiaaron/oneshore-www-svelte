<script>
	import { page } from "$app/stores";
	import Breadcrumbs from "../../components/Breadcrumbs.svelte";
	
	let homePage = { name:"home", path:'/' };
	let currentPage = { name: "services", path: "/services" };

	let pages = [
		homePage,
		currentPage
	];

</script>

<Breadcrumbs pages={pages}/>


<h2>{currentPage.name}</h2>

<div id="page-content">
		
	<h3>
		Training
	</h3>


	<h3>
		Consulting
	</h3>

	<h3>Development</h3>


</div>

<style>
	
</style>