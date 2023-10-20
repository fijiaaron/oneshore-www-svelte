<script>
	import Breadcrumbs from "../../../components/Breadcrumbs.svelte";
	
	let homePage = { name:"home", path:'/' };
	let currentPage = { name: "contact us", path: "/contact" };

	let pages = [
		homePage,
		currentPage
	];

</script>

<Breadcrumbs pages={pages}/>

<h2> {currentPage.name} </h2>


<div id="page-content">

	<div class="horizontal contact-info">
		<div>
			Telephone
			<a href="tel:14254426974">+1 (425) 442-6974</a>
		</div>


		<div>
			Email
			<a href="mailto:contact@one-shore.com">contact@one-shore.com</a>
		</div>

		<div>
			Chat
			<a href="https://one-shore.slack.com/archives/C06120Z1MB7">Slack</a>
		</div>
		
	</div> <!-- end contact-info -->

	<div id="calendar">

		<button>Schedule a meeting</button>

		<h3> Calendar </h3>
		<a href="#calendar">
		<div style="width: 200px; height: 200px; border: 2px dashed tomato">
			...
		</div>
		</a>
	</div> <!-- end calendar -->


	<form name="contact-form">
		<h3> Contact Us </h3>

		<input name="name" placeholder="What is your name?"/>
		<input name="company" placeholder="company"/>
		<input name="email" type="email" placeholder="email"/>
		<input name="telephone" type="tel" placeholder="telephone"/>
		<!-- <select>
			<option disabled selected>topic</option>
			<option>consulting</option>
			<option>training</option>
			<option>development</option>
		</select> -->
		<textarea placeholder="How can we help?"></textarea>
		<button type="submit">send </button>
	</form> <!-- end contact form -->



</div> <!-- end page-content -->



<style lang="scss">

	.contact-info {
		font-size: 0.85rem;
	}

	#calendar {
		margin: 2rem 0;
	}
	
	form {
		display: flex;
		flex-direction: column;
		width: 48ch;
		max-width: 90%;
	
		input {
			display: block;
			margin: 0.3em 0;
		}

		textarea {
			display: block;
			margin: 0.3em 0;
			height: 20ch;
		}

		button {
			display: inline; 
			width: 10ch;
			justify-content: flex-end;
			align-items: flex-end;
		}
	}

	// @media only screen and (max-width: 600px) {
	// 	form {
	// 		width: 95%;
	// 	}
	// }
</style>