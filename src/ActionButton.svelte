<script>
	import Button from "./Button.svelte";
	import { currNum, secNum, currAction } from "./store.js";
	
	export let action;
	
	function act () {
		if ($currAction) currNum.set($currAction(+$secNum, +$currNum)); 
		currAction.set(action);
		if ($currNum) {
			secNum.set($currNum);
			currNum.set("");
		}
	}
</script>

<Button on:click={act} label={$$props.label} tall={$$props.tall} long={$$props.long} />