<svelte:options tag="my-button" />

<script lang="ts">
  let count = 0;
  console.log('button');

  function handleClick() {
    count += 1;
  }
</script>

<button on:click="{handleClick}">
  clicks: {count}
</button>
