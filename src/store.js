import { writable } from 'svelte/store';

export const currNum = writable("");
export const secNum = writable("0");
export const currAction = writable(null);