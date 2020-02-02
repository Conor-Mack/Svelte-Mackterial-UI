<script>
  import { setContext } from "svelte";
  import { Button } from "@BBMD";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>BUTTONS!</h1>
  <Button
    href="#efef"
    variant="unelevated"
    text="Unelevated"
    colour="secondary"
    size="small"
    disabled />
  <Button variant="outlined" text="Raised" />
  <Button variant="outlined" text="Outlined" colour="secondary" size="small" />
  <Button text="Nothing" colour="secondary" />
</main>
