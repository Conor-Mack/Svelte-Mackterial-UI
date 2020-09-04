<script>
  import Group from "../Group.svelte";
  import Row from "../Row.svelte";
  import { Button } from "@BBMD";
</script>

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
</Row>
