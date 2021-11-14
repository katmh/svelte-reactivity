<script>
    import { fruits } from "../stores.js";
    import { onMount, afterUpdate } from "svelte";

    export let id = "";
    const type = $fruits[id].type;
    const getRandInt = () => Math.floor(Math.random() * 10);

    afterUpdate(() => {
        fruits.update((fruits) => {
            return {
                ...fruits,
                [id]: {
                    ...fruits[id],
                    prices: [getRandInt(), getRandInt(), getRandInt()],
                },
            };
        });
    });
</script>

<div class="fruit">
    <h1>{type}</h1>
    <p>{$fruits[id].prices}</p>
</div>

<style>
    .fruit {
        padding: 1rem;
        border: 1px solid #aaa;
        margin: 1rem;
    }
</style>
