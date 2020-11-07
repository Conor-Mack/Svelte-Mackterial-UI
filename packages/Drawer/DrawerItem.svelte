<script>
  import ClassBuilder from "../ClassBuilder.js";
  export let activated = false;
  export let href = "";
  export let icon = "";

  const cb = new ClassBuilder("list-item");

  $: modifiers = { activated };
  $: props = { modifiers };
  $: cls = cb.build(props);
</script>

<a class={cls} {href} aria-current="page" tabindex="0">
  <span class="mdc-list-item__ripple" />
  <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{icon}</i>
  <span class="mdc-list-item__text"><slot /></span>
</a>
