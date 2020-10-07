<script>
  import { Select, Option } from "@BBMD";
  import Row from "../Row.svelte";
</script>

<Row title="Selects">
  <Select label="Whos The Top Bloke">
    <Option text="Conor" />
    <Option text="Anto" />
    <Option text="Mack" />
  </Select>

  <Select variant="outlined">
    <Option text="Conor" />
    <Option text="Anto" />
    <Option text="Mack" />
  </Select>

  <Select label="Whos The Top Bloke" shaped>
    <Option text="Conor" />
    <Option text="Anto" />
    <Option text="Mack" />
  </Select>

  <Select variant="outlined" shaped>
    <Option text="Conor" />
    <Option text="Anto" />
    <Option text="Mack" />
  </Select>
</Row>
