<script>
	import Breadcrumbs from "../../components/Breadcrumbs.svelte";
	
	let homePage = { name:"home", path:'/' };
	let currentPage = { name: "privacy policy", path: "/privacy-policy" };

	let pages = [
		homePage,
		currentPage
	];

</script>

<Breadcrumbs pages={pages}/>
<h2>Privacy Policy</h2>
We don't do anything with your information.