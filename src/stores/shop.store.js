import { writable } from "svelte/store";

export const shop = writable([
    {
        id: 1,
        type: 'click-value',
        title: 'Click Value +1',
        description: 'Add 1 to your click value',
        value: 1,
        basePrice: 40,
        amountSold: 0
    },
    {
        id: 2,
        type: 'click-value',
        title: 'Click Value +10',
        description: 'Add 10 to your click value',
        value: 10,
        basePrice: 380,
        amountSold: 0
    },
    {
        id: 3,
        type: 'click-value',
        title: 'Click Value +50',
        description: 'Add 50 to your click value',
        value: 50,
        basePrice: 1900,
        amountSold: 0
    },
])