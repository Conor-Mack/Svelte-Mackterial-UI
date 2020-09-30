<script>
  import { List, ListItem, ListSeparator, Checkbox, Radiobutton } from "@BBMD";
  import Row from "../Row.svelte";
</script>

<Row>
  <List>
    <ListItem leadingIcon="label_important" text="Conor" />
    <ListItem leadingIcon="label_important" text="Joe" />
    <ListItem leadingIcon="label_important" text="Billy" />
  </List>

  <List twoLine>
    <ListItem
      text="Conor"
      secondaryText="conor@conormack.com"
      actionElement={Checkbox}
      leadingIcon="account_circle" />
    <ListItem
      text="Joe"
      secondaryText="joe@joe.com"
      actionElement={Checkbox}
      leadingIcon="account_circle" />
    <ListItem
      text="Billy"
      secondaryText="bill@billy.com"
      actionElement={Checkbox}
      leadingIcon="account_circle" />
  </List>
</Row>
