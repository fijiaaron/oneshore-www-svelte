
<footer class="oneshore footer">
	<div id="footer-content">
		
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
			<a href="/privacy-policy">Terms of Service</a>
		</div>
	</div>

</footer>

<style lang="scss">
	.oneshore.footer {
		font-size: 0.7rem;
	}

	#legal {
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
</style>