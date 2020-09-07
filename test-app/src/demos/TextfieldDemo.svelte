<script>
  import Group from "../Group.svelte";
  import Row from "../Row.svelte";
  import { Textfield, DatePicker } from "@BBMD";
  // TODO: Organise Datepicker in with the single textfields and display 2 x 2 grid
</script>

<Row title="Textfields">
  <Group title="Variants" orientation="col">
    <Textfield label="Default with Icon" icon="input" trailingIcon />
    <Textfield label="Outlined" variant="outlined" />
    <Textfield label="Filled" variant="filled" />
  </Group>
  <Group title="Textarea">
    <Textfield label="Outlined" rows={8} textarea />
  </Group>
  <Group title="Datepicker Textfield">
    <DatePicker />
  </Group>
</Row>
