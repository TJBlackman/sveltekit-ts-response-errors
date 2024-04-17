<script lang="ts">
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<h1>Server Response Test</h1>

<form method="post">
  <div class="input-group">
    <p>How many <b>moons</b> does Earth have?</p>
    <input type="text" name="moons" placeholder="moons" />
    <!-- How do I type-narrow this to say "moons" is there? -->
    {#if form?.fieldErrors?.moons}
      <p class="error">{form.fieldErrors.moons}</p>
    {/if}
  </div>

  <div class="input-group">
    <p>How many <b>oceans</b> does Earth have?</p>
    <input type="text" name="oceans" placeholder="oceans" />
    <!-- How do I type-narrow this to say "oceans" is there? -->
    {#if form?.fieldErrors?.oceans}
      <p class="error">{form.fieldErrors.oceans}</p>
    {/if}
  </div>

  <button type="submit">Submit</button>
</form>

{#if form?.success}
  <p>Congratulations! You answered both questions successfully!</p>
{/if}

<style>
  p {
    margin: 0 0 4px 0;
  }
  input {
    display: block;
    margin: 0 0 14px 0;
  }
  button {
    display: block;
    margin: 20px 0 8px 0;
  }
</style>
