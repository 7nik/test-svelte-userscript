console.log(GM.info);

import App from './App.svelte';

const container = document.createElement("div");
container.style.position = "fixed";
container.style.top = "0";
container.style.left = "0";
container.style.width = "100%";
container.style.height = "100%";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.background = "rgba(0,0,0,0.5)";

document.body.append(container);

new App({
	target: container,
});
