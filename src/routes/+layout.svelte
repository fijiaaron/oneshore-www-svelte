<script>
	import "../oneshore.css";
	import OneShoreHeader from "../components/OneShoreHeader.svelte";
	import OneShoreFooter from "../components/OneShoreFooter.svelte";
</script>


<OneShoreHeader/>

<main>
	<slot/>	
</main>

<OneShoreFooter/>