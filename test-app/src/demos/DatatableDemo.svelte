<script>
  import {
    Datatable,
    HeaderRow,
    HeaderCell,
    Row as TRow,
    Cell,
    TBody,
    Button,
  } from "@BBMD";
  import Group from "../Group.svelte";
  import Row from "../Row.svelte";

  const schema = {
    id: {
      key: "id",
      type: "numeric",
      text: "Id",
    },
    forename: {
      key: "forename",
      type: "text",
      text: "Forename",
    },
    surname: {
      key: "surname",
      type: "text",
      text: "Surname",
    },
    height: {
      key: "height",
      type: "numeric",
      text: "Height",
    },
    el: {
      type: "element",
      text: "Action",
      element: Button,
      props: {
        text: "SELECT",
        variant: "unelevated",
        colour: "secondary",
        size: "small",
      },
    },
  };

  const data = [
    { id: 123, forename: "Conor", surname: "McKeown", height: 6.1 },
    { id: 456, forename: "Joe", surname: "Bloggs", height: 5.9 },
    { id: 789, forename: "David", surname: "Smith", height: 5.7 },
  ];
</script>

<Row title="Datatables">
  <Datatable {schema} {data} />
  <Datatable>
    <HeaderRow>
      <HeaderCell>Id</HeaderCell>
      <HeaderCell>First Name</HeaderCell>
      <HeaderCell>Second Name</HeaderCell>
      <HeaderCell>Gender</HeaderCell>
      <HeaderCell>Address</HeaderCell>
      <HeaderCell>Actions</HeaderCell>
    </HeaderRow>
    <TBody>
      <TRow>
        <Cell>123456</Cell>
        <Cell>Conor</Cell>
        <Cell>McKeown</Cell>
        <Cell>Male</Cell>
        <Cell>5 Suave Avenue</Cell>
        <Cell
          element={Button}
          elementProps={{ text: 'Select', variant: 'unelevated', colour: 'secondary', size: 'small' }} />
      </TRow>
      <TRow>
        <Cell>789101</Cell>
        <Cell>Joe</Cell>
        <Cell>Bloggs</Cell>
        <Cell>Male</Cell>
        <Cell>2 Cool Street</Cell>
        <Cell
          element={Button}
          elementProps={{ text: 'Select', variant: 'unelevated', colour: 'secondary', size: 'small' }} />
      </TRow>
      <TRow>
        <Cell>987</Cell>
        <Cell>Barry</Cell>
        <Cell>White</Cell>
        <Cell>Male</Cell>
        <Cell>5 Leg End</Cell>
        <Cell
          element={Button}
          elementProps={{ text: 'Select', variant: 'unelevated', colour: 'secondary', size: 'small' }} />
      </TRow>
    </TBody>
  </Datatable>
</Row>
