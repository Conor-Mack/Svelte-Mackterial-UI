<script>
  import { setContext } from "svelte";
  import { Button, Icon } from "@BBMD";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    width: 600px;
    margin: 0 auto;
    border: 1px solid red;
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
    href="https://www.youtube.com/watch?v=BUS6nKpddec"
    variant="unelevated"
    text="Link Me"
    colour="secondary"
    size="small"
    disabled />
  <Button text="Raised" icon="alarm_on" trailingIcon />
  <Button variant="outlined" text="Outlined" colour="secondary" size="small" />
  <Button text="Nothing" size="large" colour="secondary" fullBleed />
</main>
