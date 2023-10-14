<script>

	/**
	 * @type {any}
	 */
	 export let pages;

</script>


<nav class="breadcrumbs">
	<ul>
		{#each pages as page}

		<li><a href={page.path}>{page.name}</a></li>
	
		{/each}
	</ul>
</nav>


<style lang="scss">
	nav.breadcrumbs {
		border: 1px dotted lightgray;
		width: 100%;
		font-size: 0.7rem;
		
		ul {
			margin: 0;
			padding: 0.5em 0.5em;
		
			list-style-type: none;
			display: flex;
			align-items: center;
			

			li:not(:first-of-type) {
				display: inline;
				
				margin-left: 2em;
								
				&:before {
					position: relative;
  					left: -1em;
					color: var(--oneshore-blue);
					content: '⇾';
				}
			}
		}
	}
</style>