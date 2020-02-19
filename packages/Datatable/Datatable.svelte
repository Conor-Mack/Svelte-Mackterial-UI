<script>
  import { onMount, setContext } from "svelte";
  import { MDCDataTable } from "@material/data-table";
  import DatatableRow from "./DatatableRow.svelte";
  import DatatableCell from "./DatatableCell.svelte";
  import { Button } from "../Button";
  import ClassBuilder from "../ClassBuilder.js";

  const cb = new ClassBuilder("data-table");
  setContext("BBMD:data-table:cb", cb);

  let datatable = null;
  let instance = null;

  onMount(() => {
    if (!!datatable) instance = new MDCDataTable(datatable);
    return () => {
      !!instance && instance.destroy();
      instance = null;
    };
  });
</script>

<div bind:this={datatable} class={cb.build()}>
  <table class={cb.elem`table`} aria-label="Material Design Datatable">
    <thead>
      <DatatableRow isHeader>
        <DatatableCell isHeader>Id</DatatableCell>
        <DatatableCell isHeader>First Name</DatatableCell>
        <DatatableCell isHeader>Second Name</DatatableCell>
        <DatatableCell isHeader>Gender</DatatableCell>
        <DatatableCell isHeader>Address</DatatableCell>
        <DatatableCell isHeader>Actions</DatatableCell>
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
