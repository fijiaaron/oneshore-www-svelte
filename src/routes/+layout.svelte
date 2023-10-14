<script>
	import "../oneshore.css";
	import "../page.css";
	
	import OneShoreHeader from "../components/OneShoreHeader.svelte";
	import OneShoreFooter from "../components/OneShoreFooter.svelte";

</script>

<header>
	<OneShoreHeader/>
</header>

<main>
	<slot/>	
</main>

<footer>
	<OneShoreFooter/>
</footer>