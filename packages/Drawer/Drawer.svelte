<script>
  import { MDCDrawer } from "@material/drawer";
  import { MDCList } from "@material/list";
  import { List } from "../List";
  import { onMount } from "svelte";
  import ClassBuilder from "../ClassBuilder.js";

  const cb = new ClassBuilder("drawer");

  export const toggle = () => {
    if (variant) {
      mdcDrawer.open = !mdcDrawer.open;
    }
  };

  export let drawer, list, mdcList;

  export let mdcDrawer = null;
  export let variant = null; //modal || dismissable
  export let header = "";
  export let subtitle = "";
  export let adjustClass = "";

  onMount(() => {
    if (!variant) {
      mdcList = MDCList.attachTo(list);
      mdcList.wrapFocus = true;
    } else {
      mdcDrawer = MDCDrawer.attachTo(drawer);
    }
    return () => {
      mdcList && mdcList.destroy();
      mdcDrawer && mdcDrawer.destroy();
    };
  });

  $: modifiers = { variant };
  $: props = { modifiers, extras: [adjustClass] };
  $: drawerClass = cb.build({ props });
</script>

<aside class={drawerClass} bind:this={drawer}>
  {#if header}
    <div class="mdc-drawer __header">
      <h3 class="mdc-drawer__title">{header}</h3>
      <h6 class="mdc-drawer__subtitle">{subtitle}</h6>
    </div>
  {/if}
  <div class="mdc-drawer__content">
    <nav bind:this={list} class="mdc-list">
      <slot />
    </nav>
  </div>
</aside>

{#if variant === 'modal'}
  <div class="mdc-drawer-scrim" />
{/if}
