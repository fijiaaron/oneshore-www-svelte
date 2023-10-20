<script>
	import Breadcrumbs from "../../../components/Breadcrumbs.svelte";
	
	let homePage = { name:"home", path:'/' };
	let currentPage = { name: "terms of service", path: "/terms-of-service" };

	let pages = [
		homePage,
		currentPage
	];

</script>

<Breadcrumbs pages={pages}/>

<h2> Terms of Service </h2>
We don't do anything with your information.