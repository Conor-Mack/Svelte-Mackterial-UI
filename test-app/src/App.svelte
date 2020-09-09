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
  import TextfieldDemo from "./demos/TextfieldDemo.svelte";
  import CardDemo from "./demos/CardDemo.svelte";
  import DatatableDemo from "./demos/DatatableDemo.svelte";
  import ListDemo from "./demos/ListDemo.svelte";

  let fullwidth = false;
  let checked = true;
  let indeterminate = true;

  let radioItems = [{ label: "Male" }, { label: "Female" }];
  let checkItems = [
    { label: "Facebook", indeterminate },
    { label: "Twitter", checked },
    { label: "Instagram" },
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
<TextfieldDemo />
<CardDemo />
<Datatable />
<ListDemo />
