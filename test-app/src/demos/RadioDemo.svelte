<script>
  import Group from "../Group.svelte";
  import Row from "../Row.svelte";
  import { Radiobutton } from "@BBMD";

  let radiogroup = [];
  let radiosingle = null;
  let radiosingle2 = null;
</script>

<Row title="Radiobuttons">
  <Group title="Single Radiobuttons">
    <Radiobutton bind:group={radiosingle} label="Facebook" value="fb" />
    <Radiobutton label="Disabled" disabled value="tw" />
    <Radiobutton
      bind:group={radiosingle2}
      label="Align End"
      alignEnd
      value="insta" />
  </Group>

  <Group title="Radiobutton Group">
    <Radiobutton bind:group={radiogroup} label="Twitter" value="tw" />
    <Radiobutton bind:group={radiogroup} label="Facebook" value="fb" />
    <Radiobutton bind:group={radiogroup} label="Instagram" value="insta" />
  </Group>
</Row>
