<script>
	import OneShoreLogo from "./OneShoreLogo.svelte";
</script>


<div class="oneshore footer">
	<div id="footer-content">
		<h4>
			<a href="/" id="footer-tagline">
				<div>
					<OneShoreLogo/>
				</div>
				<p>
					&nbsp;
					-
					&nbsp;
				</p>
					Test Automation Solutions
			</a>
		</h4>
		
	</div>

	
	<div id="legal">

		<div class="copyright">
			<span>
				2007-2023
			</span>
			&nbsp;&nbsp;&nbsp;
			<span>
			ONE SHORE INC.
			</span>
		</div>
		
		<div>
			<a href="/privacy-policy">Privacy Policy</a>
			<a href="/terms-of-service">Terms of Service</a>
		</div>
	</div>

</div>

<style lang="scss">
	.oneshore.footer {
		font-size: 0.8rem;
	}

	#footer-content {

		filter: grayscale(75%);

		#footer-tagline {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}

		a:hover {
			filter: grayscale(50%);
			color: #EEE;
		}
	}

	#legal {
		font-size: 0.7rem;
		opacity: 75%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		div.copyright {
			text-transform: uppercase;
			&::before {
				content: '©'
			}
		}

		div {
			display: flex;
			a {
				padding-left: 2em;
			}
		}
	}



	@media only screen and (max-width: 800px) {
		#legal { 
			display: none
		}
	}

</style>