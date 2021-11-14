import { writable } from "svelte/store"
import generateID from "./utils/ID.js"

export const fruits = writable({
    [generateID()]: {
        type: "apple",
        prices: [],
    },
    [generateID()]: {
        type: "banana",
        prices: [],
    },
    [generateID()]: {
        type: "strawberry",
        prices: []
    }
})