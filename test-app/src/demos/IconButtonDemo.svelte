<script>
  import Row from "../Row.svelte";
  import { IconButton, Icon } from "@BBMD";
</script>

<Row title="Icon Buttons">
  <IconButton size="large">
    <Icon>share</Icon>
  </IconButton>

  <IconButton size="large" toggle>
    <Icon on>alarm_on</Icon>
    <Icon>alarm_off</Icon>
  </IconButton>

  <IconButton size="large" disabled>
    <Icon>get_app</Icon>
  </IconButton>
</Row>
