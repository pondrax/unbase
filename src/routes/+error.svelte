<script lang="ts">
  import { page } from "$app/stores";
</script>

<div flex items-center justify-center h-screen>
  {$page.status}
  |
  {$page.error?.message}
</div>
