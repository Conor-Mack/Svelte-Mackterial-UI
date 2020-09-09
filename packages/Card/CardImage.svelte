<script>
  import buildStyle from "../";
  import CardTitle from "./CardTitle.svelte";
  export let url = "https://picsum.photos/200/300";
</script>

<div
  class="mdc-card__media mdc-card__media--16-9 demo-card__media"
  style={`background-image: url(${url})`} />
