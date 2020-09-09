<style>
  .card-header-title {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit;
  }
</style>

<!-- TODO: Can I not use typography components here? -->
<div class="card-header-title">
  <slot />
</div>
