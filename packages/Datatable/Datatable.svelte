<script>
  import {
    onMount,
    setContext,
    afterUpdate,
    onDestroy,
    createEventDispatcher,
  } from "svelte";
  import { MDCDataTable } from "@material/data-table";
  import ClassBuilder from "../ClassBuilder.js";
  import Cell from "./Cell.svelte";
  import Row from "./Row.svelte";
  import HeaderCell from "./HeaderCell.svelte";
  import HeaderRow from "./HeaderRow.svelte";
  import TBody from "./TBody.svelte";

  export let schema = {};
  const dispatch = createEventDispatcher();

  export let data = [];

  const cb = new ClassBuilder("data-table");
  setContext("BBMD:data-table:cb", cb);
  setContext("BBMD:data-table:on-row-select", onRowSelect);

  let datatable = null;
  let instance = null;

  function onRowSelect(data) {
    //Compare and match data with schema
    const d = schemaEntries.reduce((acc, curr, idx) => {
      const [key, definition] = curr;
      if (definition.type !== "element") {
        acc = { ...acc, [key]: data[idx] };
      }
      return acc;
    }, {});

    dispatch("rowclick", d);
  }

  onMount(() => {
    if (!!datatable) instance = new MDCDataTable(datatable);
    return () => {
      !!instance && instance.destroy();
      instance = null;
    };
  });

  $: schemaEntries = Object.entries(schema);
  $: schemaKeys = Object.keys(schema);
  $: builtWithData = schemaKeys.length > 0;
</script>

<div bind:this={datatable} class={cb.build()}>
  <table class={cb.elem`table`} aria-label="Material Design Datatable">
    {#if !builtWithData}
      <slot />
    {:else}
      <HeaderRow>
        {#each schemaKeys as key}
          <HeaderCell numeric={schema[key].type === 'numeric'}>
            {schema[key].text || key}
          </HeaderCell>
        {/each}
      </HeaderRow>
      <TBody>
        {#each data as record}
          <Row>
            {#each schemaEntries as [key, definition]}
              {#if definition.type !== 'element'}
                <Cell>{record[key] || 'Null'}</Cell>
              {:else}
                <Cell
                  element={definition.element}
                  elementProps={{ ...definition.props }} />
              {/if}
            {/each}
          </Row>
        {/each}
      </TBody>
    {/if}
  </table>
</div>
