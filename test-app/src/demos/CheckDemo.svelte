<script>
  import Group from "../Group.svelte";
  import Row from "../Row.svelte";
  import { Checkbox } from "@BBMD";

  let checkgroup = [];
  let checkSingle = null;

  let selected = false;
</script>

<Row title="Checkbox">
  <Group title="Single Checkboxes">
    <Checkbox bind:checked={checkSingle} label="Default" value="default" />
    <Checkbox label="Align End" alignEnd value="end" />
    <Checkbox label="Indeterminate" indeterminate value="ind" />
  </Group>

  <Group title="Checkbox Groups">
    <Checkbox bind:group={checkgroup} label="Facebook" value="Facebook" />
    <Checkbox bind:group={checkgroup} label="Email" value="Email" />
    <Checkbox bind:group={checkgroup} label="Twitter" value="Twitter" />
  </Group>
</Row>
