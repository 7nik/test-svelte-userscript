<script>
	import InputButton from "./InputButton.svelte";
	import ActionButton from "./ActionButton.svelte";
	import { currNum, secNum } from "./store.js";

	let value;
	currNum.subscribe(n => { value = n || $secNum; });
</script>

<div>
	<input {value} />
	<ActionButton label="%" action={(a,b) => a % b} />
	<ActionButton label="/" action={(a,b) => a / b} />
	<ActionButton label="*" action={(a,b) => a * b} />
	<ActionButton label="-" action={(a,b) => a - b} />
	<InputButton label="7" />
	<InputButton label="8" />
	<InputButton label="9" />
	<ActionButton label="+" tall action={(a,b) => a + b} />
	<InputButton label="4" />
	<InputButton label="5" />
	<InputButton label="5" />
	<InputButton label="1" />
	<InputButton label="2" />
	<InputButton label="3" />
	<ActionButton label="=" tall action={null} />
	<InputButton label="0" long />
	<InputButton label="." />
</div>

<style>
	div {
		display: grid;
		grid-gap: 10px;
		padding: 10px;
		background: white;
	    grid-template-columns: repeat(4, 40px);
	    grid-template-rows: repeat(5, 30px);
	}
	input {
		grid-area: 1/1 / 2/5;
		text-align: right;
	}
</style>