<script>
  import { t, locale } from "$lib/lang";

  export let data;
</script>

<div p-6>
  <div flex gap-2>
    {#each data.pages as path}
      <a href={path} btn>{path}</a>
    {/each}
  </div>
  {$t("intro")}
  <slot />
</div>
