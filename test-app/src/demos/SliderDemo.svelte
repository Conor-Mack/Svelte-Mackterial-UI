<script>
  import Row from "../Row.svelte";
  import { Slider } from "@BBMD";
</script>

<style>
  div {
    width: 400px;
  }
</style>

<Row title="Sliders">
  <div>
    <Slider />
  </div>

  <div>
    <Slider variant="discrete" value={85} />
  </div>

  <div>
    <Slider variant="discrete" showTicks value={5} />
  </div>
</Row>
