<script>
  import { List } from "../List";
  import { MDCMenu } from "@material/menu";
  import { onMount, setContext } from "svelte";
  import createItemsStore from "../Common/ItemStore.js";

  //TODO: Svelte events
  export let onSelect = (selectedItems) => {};

  export let width = "400px";
  export let open = true;
  export let useFixedPosition = false;
  export let useAbsolutePosition = false;
  export let absolutePositionX = 0;
  export let absolutePositionY = 0;

  let menu = null;
  let menuList = null;
  let instance = null;
  let selectedItemsStore;

  onMount(() => {
    //TODO: Handle context properly here
    // _bb.setContext("BBMD:list:context", "menu")
    // _bb.setContext("BBMD:list:props", { singleSelection: true })

    //TODO: Remove create items store
    selectedItemsStore = createItemsStore(() => onSelect($selectedItemsStore));
    // _bb.setContext("BBMD:list:selectItemStore", selectedItemsStore)

    if (!!menu) {
      instance = new MDCMenu(menu);
      instance.open = open;
      if (useFixedPosition) {
        instance.setFixedPosition(true);
      } else if (useAbsolutePosition) {
        instance.setAbsolutePosition(absolutePositionX, absolutePositionY);
      }
    }
  });
</script>

{#if useFixedPosition || useAbsolutePosition}
  <div
    bind:this={menu}
    class="mdc-menu mdc-menu-surface"
    style={`width: ${width}`}>
    <!-- TODO: Adapt to make proper use of List component -->
    <ul bind:this={menuList} class="mdc-list" role="menu" />
  </div>
{:else}
  <div class="mdc-menu-surface--anchor">
    <!--TODO: Will automatically anchor to slotted element. Test this -->
    <slot />
    <div
      bind:this={menu}
      class="mdc-menu mdc-menu-surface"
      style={`width: ${width}`}>
      <h4>fewwrgre</h4>
      <ul bind:this={menuList} class="mdc-list" role="menu" />
    </div>
  </div>
{/if}
