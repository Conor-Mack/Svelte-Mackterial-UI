<script>
  import { buildStyle } from "helpers";
  import { MDCMenu } from "@material/menu";
  import { Corner } from "@material/menu-surface";
  import { onMount, setContext, tick, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export const show = () => (instance.open = true);
  export const hide = () => (instance.open = false);
  export const toggle = () => (instance.open = !instance.open);

  let staticMenu = false;
  export { staticMenu as static };

  export let open = false;
  export let anchorCorner = Corner.BOTTOM_RIGHT;
  export let absolute = false;
  export let x = 0;
  export let y = 0;

  let menu, instance;

  onMount(async () => {
    setContext("BBMD:list:context", "menu");
    if (!!menu) {
      instance = new MDCMenu(menu);
      instance.open = staticMenu || open;
      if (absolute) {
        instance.setAbsolutePosition(x, y);
      }
      instance.setAnchorCorner(anchorCorner);
    }
  });

  async function opened() {
    dispatch("opened");
    if (staticMenu) {
      await tick(); //wait for body click listener to be applied
      instance.menuSurface_.deregisterBodyClickListener_();
    }
  }

  function closed() {
    dispatch("closed");
  }

  $: menuClass = buildStyle({ position: absolute ? "absolute" : "static" });
</script>

<style>
  .staticMenu {
    transition: none;
    display: block;
    transform: scale(1);
    opacity: 1;
  }
</style>

{#if staticMenu}
  <div
    bind:this={menu}
    class="mdc-menu mdc-menu-surface"
    class:staticMenu
    style={menuClass}
    on:MDCMenuSurface:closed={closed}
    on:MDCMenuSurface:opened={opened}>
    <slot />
  </div>
{:else}
  <div class="mdc-menu-surface--anchor">
    <slot name="anchorEl" />
    <div bind:this={menu} class="mdc-menu mdc-menu-surface">
      <slot />
    </div>
  </div>
{/if}
