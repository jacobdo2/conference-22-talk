<script lang="ts">
  export let label: string;
  export let name: string;
</script>

<div>
  <label for="{name}">{label}</label>
  <input type="text" name="{name}" />
</div>

<style>
  div {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
  }
</style>
