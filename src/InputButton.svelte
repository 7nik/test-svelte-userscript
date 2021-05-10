<script>
	import Button from "./Button.svelte";
	import { currNum } from "./store.js";
	
	export let label;
	
	function addDigit () {
		const newNum = $currNum + label;
		if (!isNaN(newNum)) currNum.set(newNum);
	}
</script>

<Button on:click={addDigit} label={$$props.label} tall={$$props.tall} long={$$props.long} />