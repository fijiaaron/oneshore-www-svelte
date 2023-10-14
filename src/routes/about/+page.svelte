<script>
	import Breadcrumbs from "../../components/Breadcrumbs.svelte";
	
	let homePage = { name:"home", path:'/' };
	let currentPage = { name: "about us", path: "/about" };

	let pages = [
		homePage,
		currentPage
	];

</script>

<Breadcrumbs pages={pages}/>

<h2> { currentPage.name } </h2>

<div id="page-content">
	
Learn about One Shore...

</div>