<script>
  import { buildStyle } from "helpers";
  export let url = "https://via.placeholder.com/200x300?text=Card+Image";

  export let contentColor = "";

  $: style = buildStyle({
    backgroundImage: `url(${url})`,
    color: contentColor,
  });
</script>

<style>
  .card-image__content {
    position: absolute;
    color: white;
    bottom: 16px;
    left: 16px;
  }
</style>

<div
  style={`background-image: url(${url});`}
  class="mdc-card__media mdc-card__media--16-9">
  <div style={`color: ${contentColor}`} class="card-image__content">
    <slot />
  </div>
</div>
