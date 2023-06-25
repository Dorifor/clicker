import { writable } from "svelte/store";

export const player = writable({
    username: 'Mao',
    clickCount: 0,
    money: 0
})