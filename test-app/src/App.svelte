<script>
  import ButtonDemo from "./demos/ButtonDemo.svelte";
  import RadioDemo from "./demos/RadioDemo.svelte";
  import CheckDemo from "./demos/CheckDemo.svelte";
  import TextfieldDemo from "./demos/TextfieldDemo.svelte";
  import CardDemo from "./demos/CardDemo.svelte";
  import DatatableDemo from "./demos/DatatableDemo.svelte";
  import ListDemo from "./demos/ListDemo.svelte";
  import SliderDemo from "./demos/SliderDemo.svelte";
  import MenuDemo from "./demos/MenuDemo.svelte";
  import TypographyDemo from "./demos/TypographyDemo.svelte";
  import IconButtonDemo from "./demos/IconButtonDemo.svelte";
  import SelectDemo from "./demos/SelectDemo.svelte";
  import { Topappbar, Drawer, DrawerItem } from "@BBMD";

  let adjustClass = "";
  let scrollTarget;

  let drawer;
</script>

<style>
  :global(body) {
    display: flex;
    height: 100vh;
  }

  .mdc-drawer-app-content {
    flex: auto;
    overflow: auto;
    position: relative;
  }

  main {
    overflow: auto;
    height: 100%;
  }
</style>

<Topappbar
  bind:adjustClass
  on:nav-click={drawer.toggle}
  title="Svelte Mackterial UI" />

<Drawer bind:this={drawer} variant="modal" {adjustClass}>
  <DrawerItem activated>Buttons</DrawerItem>
  <DrawerItem>Textfields</DrawerItem>
  <DrawerItem>Drawer</DrawerItem>
  <DrawerItem>Select</DrawerItem>
</Drawer>

<div class={`mdc-drawer-app-content ${adjustClass}`}>
  <main bind:this={scrollTarget}>
    <CardDemo />
    <SelectDemo />
    <IconButtonDemo />
    <MenuDemo />
    <SliderDemo />
    <ButtonDemo />
    <CheckDemo />
    <RadioDemo />
    <TextfieldDemo />
    <DatatableDemo />
    <ListDemo />
    <TypographyDemo />
  </main>
</div>
