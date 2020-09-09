<script>
  import { onMount, setContext } from "svelte";
  import { MDCDataTable } from "@material/data-table";
  import DatatableRow from "./DatatableRow.svelte";
  import DatatableCell from "./DatatableCell.svelte";
  import { Button } from "../Button";
  import ClassBuilder from "../ClassBuilder.js";

  /*
    TODO: generate table from schema with data
    Could have different elements text, numeric, checkbox, radiobutton, button, link, etc.
    If type element could accept component instance and use svelte:component
    - elements (checkboxes, buttons etc) - use svelte:component, spread props in. Error if no / invalid  ComponentInstance passed
    - Elements take row data and pass back when selected
    example type schema [{key: {type: text | numeric | element, text: string, props: {}}}]
  */
  export let schema = [];

  /* 
    TODO: Order data via schema. 
    - data - numeric and text values - 
    example data structure - [{id: 1, forename: "Conor", lastname: "McKeown"}]
    each over schema, use key to get value from object. Elements not part of DS as are handled by the schema
  */
  export let data = [];

  //TODO: Ability to build chart statically using components if no schema or data is passed

  const cb = new ClassBuilder("data-table");
  setContext("BBMD:data-table:cb", cb);

  //TODO: Single or multi select rows for table

  let datatable = null;
  let instance = null;

  onMount(() => {
    if (!!datatable) instance = new MDCDataTable(datatable);
    return () => {
      !!instance && instance.destroy();
      instance = null;
    };
  });

  $: notBuiltWithData = schema.length === 0;
</script>

<div bind:this={datatable} class={cb.build()}>
  <table class={cb.elem`table`} aria-label="Material Design Datatable">
    <thead>
      <DatatableRow headercell>
        <DatatableCell headercell>Id</DatatableCell>
        <DatatableCell headercell>First Name</DatatableCell>
        <DatatableCell headercell>Second Name</DatatableCell>
        <DatatableCell headercell>Gender</DatatableCell>
        <DatatableCell headercell>Address</DatatableCell>
        <DatatableCell headercell>Actions</DatatableCell>
      </DatatableRow>
    </thead>
    <tbody class={cb.elem`content`}>
      <DatatableRow>
        <DatatableCell>123456</DatatableCell>
        <DatatableCell>Conor</DatatableCell>
        <DatatableCell>McKeown</DatatableCell>
        <DatatableCell>Male</DatatableCell>
        <DatatableCell>1 Cool Street</DatatableCell>
        <DatatableCell>
          <Button
            text="Select"
            variant="unelevated"
            colour="secondary"
            size="small" />
        </DatatableCell>
      </DatatableRow>
      <DatatableRow>
        <DatatableCell>789101</DatatableCell>
        <DatatableCell>Joe</DatatableCell>
        <DatatableCell>Bloggs</DatatableCell>
        <DatatableCell>Male</DatatableCell>
        <DatatableCell>2 Cool Street</DatatableCell>
        <DatatableCell>
          <Button
            text="Select"
            variant="unelevated"
            colour="secondary"
            size="small" />
        </DatatableCell>
      </DatatableRow>
    </tbody>
  </table>
</div>
