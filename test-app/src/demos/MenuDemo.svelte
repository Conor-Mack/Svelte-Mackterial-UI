<script>
  import { List, ListItem, Button, ListDivider } from "@BBMD";
  import { Menu, MenuSelectionGroup, Corner } from "@BBMD/Menu";
  import Row from "../Row.svelte";

  let menu, multiSelect, row;
</script>

<Row bind:this={row} title="Menus">
  <Menu static>
    <List singleSelection>
      <ListItem text="Conor" />
      <ListItem text="Anthony" />
      <ListItem text="Mack" />
    </List>
  </Menu>

  <div>
    <Menu bind:this={menu} anchorCorner={Corner.TOP_RIGHT}>
      <div slot="anchorEl">
        <Button text="Open" on:click={menu.show} />
      </div>
      <List singleSelection>
        <ListItem text="Conor" />
        <ListItem text="Anthony" />
        <ListItem text="Mack" />
      </List>
    </Menu>
  </div>

  <div>
    <Menu bind:this={multiSelect} anchorCorner={Corner.TOP_RIGHT}>
      <div slot="anchorEl">
        <Button text="Multi Open" on:click={multiSelect.show} />
      </div>
      <List singleSelection>
        <MenuSelectionGroup>
          <ListItem leadingIcon="check" text="Conor" />
          <ListItem leadingIcon="check" text="Anthony" />
          <ListItem leadingIcon="check" text="Mack" />
        </MenuSelectionGroup>
        <ListDivider />
        <MenuSelectionGroup>
          <ListItem leadingIcon="check" text="Joe" />
          <ListItem leadingIcon="check" text="Bobby" />
          <ListItem leadingIcon="check" text="Bloggs" />
        </MenuSelectionGroup>
      </List>
    </Menu>
  </div>
</Row>
