<script>
  import Row from "../Row.svelte";
  import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Body1,
    Body2,
    Sub1,
    Sub2,
    Caption,
    Overline,
  } from "@BBMD";

  const text = "The quick brown fox";
</script>

<Row style="flex-direction: column;" title="Typography">
  <div>
    <H1>{text}</H1>
  </div>
  <div>
    <H2>{text}</H2>
  </div>
  <div>
    <H3>{text}</H3>
  </div>
  <div>
    <H4>{text}</H4>
  </div>
  <div>
    <H5>{text}</H5>
  </div>
  <div>
    <H6>{text}</H6>
  </div>
  <div>
    <Body1>{text}</Body1>
  </div>
  <div>
    <Body2>{text}</Body2>
  </div>
  <div>
    <Sub1>{text}</Sub1>
  </div>
  <div>
    <Sub2>{text}</Sub2>
  </div>
  <div>
    <Caption>{text}</Caption>
  </div>
  <div>
    <Overline>{text}</Overline>
  </div>
</Row>
