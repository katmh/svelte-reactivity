<script>
    import { fruits } from "./stores.js";
    import Fruit from "./components/Fruit.svelte";
    import generateID from "./utils/ID.js";

    $: keys = Object.keys($fruits);

    let recipe;
    const handleSelectRecipe = () => {
        console.log(recipe);

        fruits.update((_) => {
            let newFruits = {};
            recipe.fruits.forEach((fruit) => {
                newFruits[generateID()] = {
                    type: fruit,
                    prices: [],
                };
            });
            return newFruits;
        });

        console.log($fruits);
    };

    const recipes = [
        {
            name: "apple_banana",
            label: "Apple and banana",
            fruits: ["apple", "banana"],
        },
        {
            name: "guava_kiwi_strawberry",
            label: "Guava, kiwi, and strawberry",
            fruits: ["guava", "kiwi", "strawberry"],
        },
    ];
</script>

<main>
    <div id="menu">
        <label for="recipe">select a recipe:</label>
        <select
            name="recipe"
            id="recipe"
            bind:value={recipe}
            on:change={handleSelectRecipe}
        >
            <option value="" />
            {#each recipes as recipe}
                <option value={recipe}>{recipe.label}</option>
            {/each}
        </select>
    </div>

    <div id="fruits">
        {#each keys as key}
            <Fruit id={key} />
        {/each}
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
