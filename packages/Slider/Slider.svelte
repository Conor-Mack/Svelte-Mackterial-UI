<script>
  import { MDCSlider } from "@material/slider";
  import { onMount } from "svelte";
  import ClassBuilder from "../ClassBuilder.js";

  const cb = new ClassBuilder("slider", ["continuous"]);

  let slider, instance;

  export let value = "1";

  export let variant = "continuous"; //or discrete
  export let showTicks = false;
  export let min = "0";
  export let max = "100";
  export let step = "1";
  export let disabled = false;
  export let label = "";

  onMount(() => {
    instance = new MDCSlider(slider);
    if (instance) {
      if (value) instance.value = value;
      instance.listen(
        "MDCSlider:change",
        (event) => (value = event.detail.value)
      );
      return () => instance.destroy();
    }
  });

  $: displayMarkers = variant === "discrete" && showTicks;

  $: modifiers = { variant, displayMarkers };
  $: props = { modifiers };
  $: sliderCls = cb.build({ props });
</script>

<div
  bind:this={slider}
  class={sliderCls}
  tabindex="0"
  role="slider"
  aria-valuemin={min}
  aria-valuemax={max}
  data-step={step}
  aria-disabled={disabled}
  aria-label={label}>
  <div class="mdc-slider__track-container">
    <div class="mdc-slider__track" />
    {#if displayMarkers}
      <div class="mdc-slider__track-marker-container" />
    {/if}
  </div>
  <div class="mdc-slider__thumb-container">
    {#if variant === 'discrete'}
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker" />
      </div>
    {/if}
    <svg class="mdc-slider__thumb" width="21" height="21">
      <circle cx="10.5" cy="10.5" r="7.875" />
    </svg>
    <div class="mdc-slider__focus-ring" />
  </div>
</div>
