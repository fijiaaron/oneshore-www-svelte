<script>
	import Breadcrumbs from "../../components/Breadcrumbs.svelte";
	
	let currentPage = { name:"home", path:'/' };

	let pages = [
		currentPage
	];

</script>

<Breadcrumbs pages={pages}/>


<div id="page-content">
	
	<div id="home">		

		<h1>Test Automation Solutions</h1>


		<div id="hero">
			<p> We help companies leverage test automation, continuous delivery, and cloud test environments to <em>Build Better Software, Faster.</em>

			<button>Learn More</button>
		</div>


		<p>This site is under construction</p>

		<p>Visit <a href="https://one-shore.com">oneshore.com</a> for the production version.</p>

	</div>

	
	
</div>




<style lang="scss">
	
	div#home {
		border: 2px dotted black;
		align-self: flex-end;
	}


	#hero {
		align-self: flex-end;	

		p {
			max-width: 54ch;
		}

		em {
			display: block;
			padding: 0.5rem 0;
			font-size: 2em;
			font-style: normal;
			color: #99AACC;
		}
		button {
			margin: 1rem 0;
			float: right;
		}
		min-height: 40vh;
		border-radius: 3px;
	}
</style>