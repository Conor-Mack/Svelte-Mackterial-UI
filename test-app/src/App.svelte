<script>
  import { setContext } from "svelte";
  import {
    Button,
    Icon,
    Textfield,
    H3,
    Checkbox,
    CheckboxGroup,
    Radiobutton,
    RadiobuttonGroup
  } from "@BBMD";

  let fullwidth = false;
  let checked = true;
  let indeterminate = true;

  let radioItems = [{ label: "Male" }, { label: "Female" }];
  let checkItems = [
    { label: "Curry", indeterminate },
    { label: "Chips", checked },
    { label: "Garlic Bread" }
  ];
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1em;
    width: 800px;
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
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  <div>
    <H3 text="Checkboxes" />
    <CheckboxGroup
      items={checkItems}
      label="Whats your favourite?"
      orientation="row"
      alignEnd
      onChange={s => console.log('SELECTED ITEMS', s)} />
  </div>

  <div>
    <H3 text="Radiobuttons" />
    <RadiobuttonGroup
      items={radioItems}
      label="Whats your gender?"
      alignEnd
      onChange={s => console.log(s)} />
  </div>

</main>
<!-- 
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

  </div> -->
