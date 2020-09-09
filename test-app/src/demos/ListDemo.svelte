<script>
  import { List } from "@BBMD";
  import Row from "../Row.svelte";

  let listItems = [
    {
      text: { primary: "Curry", secondary: "Chicken or Beef" },
      value: 0,
    },
    {
      text: { primary: "Pastie", secondary: "Bap with Mayo" },
      value: 1,
      selected: true,
    },
    { text: { primary: "Fish", secondary: "Salmon or Cod" }, value: 2 },
  ];

  let singleListItems = [
    { text: "Curry", value: 0 },
    { text: "Pastie", value: 0 },
    { text: "Fish", value: 0 },
  ];
</script>

<Row>
  <List items={singleListItems} />
</Row>
