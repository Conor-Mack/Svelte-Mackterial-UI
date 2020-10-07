<script>
  import ClassBuilder from "../ClassBuilder.js";
  import { buildStyle } from "helpers";
  import { MDCMenu } from "@material/menu";
  import { Corner, MDCMenuSurface } from "@material/menu-surface";
  import {
    onMount,
    setContext,
    getContext,
    tick,
    createEventDispatcher,
  } from "svelte";

  const dispatch = createEventDispatcher();
  const cb = new ClassBuilder("menu");

  export const show = () => (instance.open = true);
  export const hide = () => (instance.open = false);
  export const toggle = () => (instance.open = !instance.open);

  let context = getContext("BBMD:menu:context");

  let staticMenu = false;
  export { staticMenu as static };

  export let open = false;
  export let anchorCorner = Corner.BOTTOM_RIGHT;
  export let absolute = false;
  export let x = 0;
  export let y = 0;

  let menu, instance;
  setContext("BBMD:list:context", "menu");

  onMount(async () => {
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
    dispatch("open");
    if (staticMenu) {
      await tick(); //wait for body click listener to be applied
      instance.menuSurface_.deregisterBodyClickListener_();
    }
  }

  function closed() {
    dispatch("closed");
  }

  $: props = { extras: ["mdc-menu-surface", context] };
  $: menuClass = cb.build({ props });
  $: style = buildStyle({ position: absolute ? "absolute" : "static" });
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
    class={menuClass}
    class:staticMenu
    {style}
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
