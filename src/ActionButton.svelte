<script>
	import Button from "./Button.svelte";
	import { currNum, secNum, currAction } from "./store.js";
	
	export let action;
	
	function act () {
		if ($currAction) {
			const res = $currAction(+$secNum, +$currNum);
			if (!Number.isFinite(res)) throw new Error(`Bad result: ${res}`);
			currNum.set(res);
		}
		currAction.set(action);
		if ($currNum) {
			secNum.set($currNum);
			currNum.set("");
		}
	}
</script>

<Button on:click={act} label={$$props.label} tall={$$props.tall} long={$$props.long} />