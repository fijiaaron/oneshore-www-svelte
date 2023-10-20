<nav class="breadcrumbs">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/services">Services</a></li>
		<li><a href="/services/test-automation">Test Automation</a></li>
	</ul>
</nav>

<h1>Test Automation Solutions</h1>


<p>This site is under construction</p>

<p>Visit <a href="https://one-shore.com">oneshore.com</a> for the production version.</p>



<style lang="scss">
	nav.breadcrumbs {
		border: 1px dotted gray;
		width: 100%;
		font-size: 0.7rem;
		
		ul {
			margin: 0;
			padding: 0.5em 0;
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
					font-family: "Material Icons";
					content: '⇾';
				}

			}
		}
	}
</style>