<script>
  import { onMount, setContext, createEventDispatcher } from "svelte";
  import { MDCTopAppBar } from "@material/top-app-bar";
  import ClassBuilder from "../ClassBuilder";

  const cb = new ClassBuilder("top-app-bar");
  const dispatch = createEventDispatcher();

  setContext("BBMD:icon-button:context", "mdc-top-app-bar__navigation-icon");

  let appBarEl, instance;

  export let navOpen = false;
  export let title = "";
  export let variant = "";
  export let collapsed = false;
  export let fixedAdjust = false;

  export let contextual = false;

  onMount(() => {
    if (appBarEl) {
      instance = new MDCTopAppBar(appBarEl);
    }
  });

  function handleNavClick() {
    navOpen = !navOpen;
    dispatch("nav-click");
  }

  $: shortCollapsed =
    collapsed && variant === "short" ? "short-collapsed" : null;
  $: fixedAd = fixedAdjust && variant ? `${variant}-fixed-adjust` : null;

  $: modifiers = { variant, shortCollapsed, fixedAd };
  $: props = { modifiers };
  $: topbarClass = cb.build({ props });
</script>

<header bind:this={appBarEl} class={topbarClass}>
  <div class="mdc-top-app-bar__row">
    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <button
        on:click={handleNavClick}
        class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
        aria-label="Open navigation menu">menu</button>
      {#if title}<span class="mdc-top-app-bar__title">{title}</span>{/if}
      <slot name="title-content" />
    </section>
    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
      role="toolbar">
      {#if !contextual}
        <slot name="actions" />
      {:else}
        <slot name="contextual-actions" />
      {/if}
    </section>
  </div>
</header>
