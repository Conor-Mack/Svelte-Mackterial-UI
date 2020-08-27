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
    Slider
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

  let listItems = [
    {
      text: { primary: "Curry", secondary: "Chicken or Beef" },
      value: 0
    },
    {
      text: { primary: "Pastie", secondary: "Bap with Mayo" },
      value: 1,
      selected: true
    },
    { text: { primary: "Fish", secondary: "Salmon or Cod" }, value: 2 }
  ];

  let singleListItems = [
    { text: "Curry", value: 0 },
    { text: "Pastie", value: 0 },
    { text: "Fish", value: 0 }
  ];

  let open = false;

  function toggleDatePicker() {
    open = !open;
  }
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

<Row title="Buttons">

  <Group title="Colours">
    <Button variant="raised" colour="primary" text="Primary" />
    <Button variant="raised" colour="secondary" text="Secondary" />
  </Group>

  <Group title="Sizing">
    <Button variant="raised" colour="secondary" text="Small" size="small" />
    <Button variant="raised" colour="secondary" text="Medium" size="medium" />
    <Button variant="raised" colour="secondary" text="Large" size="large" />

  </Group>

  <Group title="Text Buttons">
    <Button variant="text" colour="secondary" text="Default" />
    <Button href="#" text="Link" colour="secondary" size="small" />
    <Button variant="text" colour="secondary" text="Icon" icon="reply" />
  </Group>

  <Group title="Raised Buttons">
    <Button variant="raised" colour="secondary" text="Default" />
    <Button variant="raised" colour="secondary" text="Icon" icon="reply" />
  </Group>

  <Group title="Unelevated Buttons">
    <Button variant="unelevated" colour="secondary" text="Default" />
    <Button
      variant="unelevated"
      colour="secondary"
      text="Icon"
      trailingIcon
      icon="reply" />
  </Group>

  <Group title="Outlined Buttons">
    <Button variant="outlined" colour="secondary" text="Default" />
    <Button
      variant="outlined"
      colour="secondary"
      text="Icon"
      trailingIcon
      icon="reply" />
  </Group>

  <!-- <Button variant="unelevated" colour="secondary" text="Unelevated" />
  <Button
    variant="raised"
    colour="secondary"
    text="Raised"
    on:click={() => alert('Hi')} />
  <Button variant="outlined" colour="secondary" text="Outlined" size="small" />
  <Button
    variant="unelevated"
    colour="secondary"
    text="Icon"
    icon="reply"
    size="small" />
  <Button
    variant="outlined"
    colour="secondary"
    text="Trailing Icon"
    icon="reply"
    trailingIcon
    size="small" />
  <Button
    variant="raised"
    colour="secondary"
    text="Full Width"
    fullwidth
    size="small" /> -->

</Row>
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
