<script>
  import { onMount, setContext, createEventDispatcher } from "svelte";
  import { MDCTopAppBar } from "@material/top-app-bar";
  import ClassBuilder from "../ClassBuilder";

  const cb = new ClassBuilder("top-app-bar");
  const dispatch = createEventDispatcher();

  setContext("BBMD:icon-button:context", "mdc-top-app-bar__navigation-icon");

  let appBarEl, instance;

  export let adjustClass = "mdc-top-app-bar";
  export let scrollTarget = null;

  export let navOpen = true;
  export let title = "";
  export let icon = "menu";
  export let variant = "";
  export let collapsed = false;

  export let contextual = false;
  export let contextualTitle = "";
  export let contextualIcon = "";

  onMount(() => {
    if (appBarEl) {
      instance = new MDCTopAppBar(appBarEl);
      adjustClass += !variant
        ? "mdc-top-app-bar--fixed-adjust"
        : `mdc-top-app-bar--${variant}-fixed-adjust`;
    }
  });

  function handleNavClick() {
    navOpen = !navOpen;
    dispatch("nav-click", navOpen);
  }

  $: shortCollapsed =
    collapsed && variant === "short" ? "short-collapsed" : null;

  $: if (instance && scrollTarget) {
    instance.setScrollTarget(scrollTarget);
  }

  $: modifiers = { variant, shortCollapsed };
  $: props = { modifiers };
  $: topbarClass = cb.build({ props });
</script>

<style>
  .mdc-top-app-bar {
    z-index: 7;
  }
</style>

<header bind:this={appBarEl} class={topbarClass}>
  <div class="mdc-top-app-bar__row">
    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <button
        on:click={handleNavClick}
        class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
        aria-label="Open navigation menu">
        {contextual && contextualIcon ? contextualIcon : icon}
      </button>
      <span class="mdc-top-app-bar__title">
        {contextual && contextualTitle ? contextualTitle : title}
      </span>
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
