<!-- One Shore Logo -->
<a  href="/" title="Go to One Shore home page">
	<div class="oneshore logo">  
		<span>one</span>
		<img src="/shell.png"  alt="One Shore Logo"/>
		<span>shore</span>
	</div>
</a>




<style lang="scss">
		
	.oneshore.logo {
		font-family: verdana, sans-serif;
		font-weight: 400;

			display: flex;
			flex-direction: row;
			align-items: center;
		
		img {
			height: 1.5em;
			padding: 0em 0.15em;
		}

		span {
			font-size: 1em;
			transition: ease-in-out 0.4s;
		}

		span:first-of-type {
			color: var(--oneshore-blue);
		}

		span:last-of-type {
			color: var(--oneshore-tan);
		}
	}


	a {
		text-decoration: none;
		transition:  ease-in-out 0.25s;

		&:hover {
			text-decoration: none;
		}
	}

	a .oneshore.logo:hover span:first-of-type {
		color: var(--oneshore-tan)
	}

	a .oneshore.logo:hover span:last-of-type {
		color: var(--oneshore-blue);
	}

</style>