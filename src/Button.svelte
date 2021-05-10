<script>
	export let label, tall = false, long = false;
</script>

<input type="button" value={label} class:tall class:long on:click />

<style>
    input {
        font-size: 14pt;
    }
	.tall {
		grid-row: span 2;
	}
	.long {
		grid-column: span 2;
	}
</style>