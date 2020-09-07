<script>
  import CardHeader from "./CardHeader.svelte";
  import CardBody from "./CardBody.svelte";
  import CardImage from "./CardImage.svelte";
  import CardFooter from "./CardFooter.svelte";
  import { H2, Body2 } from "../Typography";
  import { Button } from "../Button";
  import { IconButton } from "../IconButton";
  import ClassBuilder from "../ClassBuilder.js";

  export let width = "350px";
  export let height = "350px";
  export let variant = "standard";

  let card;

  const cb = new ClassBuilder("card", ["standard"]);

  $: modifiers = { variant };
  $: props = { modifiers };
  $: cardClass = cb.build({ props });

  // $: card && _bb.attachChildren(card)
</script>

<div
  bind:this={card}
  style={`width: ${width}; height: ${height}`}
  class={cardClass}>
  <CardHeader title="My First Card" subtitle="This is a test" />
  <CardBody>
    <CardImage url="https://picsum.photos/350" />
    <H2 text="Header 1" />
    <Body2 text="Something mc Something" />
  </CardBody>
  <CardFooter>
    <Button label="Save" />
    <Button label="Cancel" />
  </CardFooter>
</div>
