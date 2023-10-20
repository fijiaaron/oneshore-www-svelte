<script>
	import OneShoreLogo from "./OneShoreLogo.svelte";
</script>

<div id="oneshore-header">
	
	<OneShoreLogo/>
	
	<!-- primary menu -->
	<nav id="primary-menu">
		<a href="/services">Services</a>
		<a href="/about">About</a>
		<a href="/blog">Blog</a>
		<a href="/contact">Contact</a>
	</nav>	


	<div id="toggle-menu">

		<label for="menu-toggle">menu</label>
		<input type="checkbox" id="menu-toggle"/>

		<nav id="toggle-menu-items">
			<a href="/services">Services</a>
			<a href="/about">About</a>
			<a href="/blog">Blog</a>
			<a href="/contact">Contact</a>
		</nav>	

	</div>

</div>



<style lang="scss">

		

	#oneshore-header {

		font-size: 1.8rem;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	
		#primary-menu {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 48ch;
			font-size: 0.9rem;
			// border: 2px dotted blue;
		}

		// #menu-button {
		// 	display: none;
		// }

		// #secondary-menu {
		// 	display: none;
		// }


		#toggle-menu {
			display: none;
		}

		@media screen and (max-width: 800px) {
			#primary-menu {
				border: 2px dotted orange;
				display: none;
			}

			// #menu-button {
			// 	font-family: "Material Icons";
			// 	display: flex;
			// }

			// #secondary-menu {
			// 	display: flex;
			// 	flex-direction: column;
			// 	font-size: 0.8rem;
			// 	// transform: 0.5s ease-in-out;
			// }

			#toggle-menu {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				width: 100%;
				
				label {
					font-family: "Material Icons";
					cursor: pointer;
				}
				
				#menu-toggle {
					display: none;
				}

				#toggle-menu-items {
					transition: all 0.5s ease-in-out;
					font-size: 1.0rem;

					width: 100%;

					display: flex;
					flex-direction: column;
					align-items: flex-end;

					// background-color: var(--oneshore-blue);
					// color: white;
					// color: var(--oneshore-dark);

					a {
						// color: white;
						padding-right: 0.5em;
					}
					
					overflow: hidden;
					max-height: 0;
					padding: 0;
					margin: 0 auto;
				}

				#menu-toggle:checked + #toggle-menu-items {
					max-height: 100px;
					padding-top: 0.3em;
					padding-bottom: 1em;
					padding-left: 1em;
					max-width: calc(100% - 1em);
				}
			}

		}
	}
</style>

