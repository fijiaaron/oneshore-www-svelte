<script>
	import Breadcrumbs from "../../components/Breadcrumbs.svelte";
	
	let homePage = { name:"home", path:'/' };
	let currentPage = { name: "blog", path: "/blog" };

	let pages = [
		homePage,
		currentPage
	];

</script>

<Breadcrumbs pages={pages}/>


<h2> { currentPage.name } </h2>

One Shore Blog


