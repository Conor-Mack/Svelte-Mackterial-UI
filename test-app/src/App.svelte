<script>
  import { setContext } from "svelte";
  import { Button, Icon, Textfield, H3 } from "@BBMD";

  let fullwidth = false;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    width: 600px;
    margin: 0 auto;
    border: 1px solid red;
  }
  /* 
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  } */

  div {
    display: flex;
    flex-flow: row wrap;
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
  <Button text="Nothing" size="large" colour="secondary" fullwidth />

  <H3 text="TextFields" />

  <div>
    <Textfield
      label="Primary"
      colour="primary"
      helperText="Please add your forename" />

    <Textfield
      label="Secondary Filled"
      colour="secondary"
      variant="filled"
      helperText="Please add your surname" />

    <Textfield label="Primary Outlined" variant="outlined" />

    <Textfield
      label="Secondary Outlined"
      icon="alarm_on"
      variant="outlined"
      colour="secondary" />

    <Textfield
      label="Full Width"
      helperText="I don't use a label"
      icon="alarm_on"
      useCharCounter
      fullwidth
      persistent />

    <Textfield label="Textarea" textarea />

    <Textfield
      label="Textarea Secondary"
      colour="secondary"
      icon="alarm_on"
      textarea />

    <Textfield
      label="Textarea Fullwidth"
      textarea
      fullwidth
      useCharCounter
      maxLength={500} />

  </div>

</main>
