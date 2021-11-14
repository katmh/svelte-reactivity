# i am trying to debug this

the desired behavior of this website is that you can select a "recipe," which will display info about the fruits associated with that recipe. the current fruits at a given moment are in a writable svelte store called `fruits`.

the `Fruit` component displays the fruit name and some data associated with the fruit. in this example it's an array of integers called `prices`. what matters is that the `Fruit` component is also responsible for populating `prices`. i'm not 100% sure what part of the lifecycle this should happen on. `onMount` doesn't seem to get called frequently enough; trying `beforeUpdate` makes the page not work; and `afterUpdate` has been the most promising so far, but the problem is still...

changing to a different recipe doesn't result in having the correct fruits (and newly randomly generated `prices`) displayed. the `fruits` store gets updated correctly, but what shows up on the page is not the most recent version of `fruits` :(

i'm not sure why this is, since `App.svelte`, which is responsible for rendering a `Fruit` for each item in `fruits`, shoouuld update whenever anything in this reactive delcaration changes:

`$: keys = Object.keys($fruits);`
