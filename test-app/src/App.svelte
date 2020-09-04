<script>
  import { setContext } from "svelte";
  import Row from "./Row.svelte";
  import Group from "./Group.svelte";
  import {
    Button,
    Icon,
    Textfield,
    H3,
    Checkbox,
    CheckboxGroup,
    Radiobutton,
    RadiobuttonGroup,
    Datatable,
    List,
    Menu,
    DatePicker,
    IconButton,
    Card,
    Slider,
  } from "@BBMD";
  import ButtonDemo from "./demos/ButtonDemo.svelte";
  import RadioDemo from "./demos/RadioDemo.svelte";
  import CheckDemo from "./demos/CheckDemo.svelte";

  let fullwidth = false;
  let checked = true;
  let indeterminate = true;

  let radioItems = [{ label: "Male" }, { label: "Female" }];
  let checkItems = [
    { label: "Facebook", indeterminate },
    { label: "Twitter", checked },
    { label: "Instagram" },
  ];

  let listItems = [
    {
      text: { primary: "Curry", secondary: "Chicken or Beef" },
      value: 0,
    },
    {
      text: { primary: "Pastie", secondary: "Bap with Mayo" },
      value: 1,
      selected: true,
    },
    { text: { primary: "Fish", secondary: "Salmon or Cod" }, value: 2 },
  ];

  let singleListItems = [
    { text: "Curry", value: 0 },
    { text: "Pastie", value: 0 },
    { text: "Fish", value: 0 },
  ];

  let open = false;

  let selected = [];
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1em;
  }

  main:first-child {
    border-bottom: 1px solid #c1c1c1;
  }
</style>

<main />

<ButtonDemo />
<CheckDemo />
<RadioDemo />

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
