<script>
  import { setContext } from "svelte";
  import { Button, Icon, Textfield } from "@BBMD";
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
    text="Link Me"
    colour="secondary"
    size="small" />
  <Button text="Raised" on:click={() => alert('Hi')} />
  <Button variant="outlined" text="Outlined" colour="secondary" size="small" />
  <Button text="Nothing" size="large" colour="secondary" fullBleed />

  <h1>TextFields</h1>
  <!-- <Textfield
    label="Surname"
    variant="filled"
    helperText="Please add your surname" /> -->
  <br />
  <Textfield
    label="Forename"
    variant="outlined"
    fullwidth
    textarea
    helperText="Please add your forename"
    useCharCounter
    persistent />

</main>
