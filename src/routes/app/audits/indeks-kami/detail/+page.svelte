<script>
  import { loading } from "$lib/store";
  import { onMount } from "svelte";
  import { db } from "$lib/db";
  import { t } from "$lib/lang";
  import { fnSelect } from "$lib/ui/fnSelect";

  /**
   * @type {import("pocketbase").ListResult<import("pocketbase").RecordModel>}
   */
  let collections;
  onMount(async () => {
    await refresh();
  });

  async function refresh() {
    $loading = true;
    collections = await db.collection("templatesQuestions").getList(1, 30, {
      // fields: "code,question,options,meta,expand",
      filter: "",
      expand: "auditsDetails(question)",
      sort: "code",
      requestKey: "ikami",
    });
    setTimeout(() => ($loading = false), 500);
  }
</script>

<div>
  <div sticky top-0 z-10 bg-base-a pt-15 pb-3>
    <div flex gap-5>
      <h1 text-xl>{$t("audit.indekskami.title")}</h1>
      <button
        on:click={refresh}
        btn="~ sm circle outline"
        aria-label="Refresh"
        p-.5
      >
        <i i-bx-refresh animate-reverse class:animate-spin={$loading} />
      </button>
    </div>
  </div>
  <div bg-base>
    <div overflow-auto h-80vh>
      <table table class:opacity-50={$loading}>
        {#each collections?.items || [] as item}
          {#if item.meta.title}
            <tr sticky top-0 bg-base-b h-20>
              <th>
                <div text-center>{item.code.split("..").at(0)}</div>
              </th>
              <th />
              <td>{item.question}</td>
              <td />
            </tr>
          {:else}
            {@const opt = Object.entries(item.options).map(([name, id]) => ({
              name,
              id,
            }))}
            <tr>
              <td text-center>
                <div>{item.code}</div>
              </td>
              <td>
                {item.meta.level || ""}
              </td>
              <td>{item.question}</td>
              <td w-64>
                <!-- <div use:fnSelect={opt}>
                  <textarea input filter placeholder="Pilih Opsi" min-h-8/>
                  <input type="hidden" selected />
                  <div relative w-full>
                    <ul
                      menu
                      top-0
                      hidden
                      absolute
                      bg-base
                      h-48
                      z-10
                      overflow-auto
                      rounded-box
                      shadow
                    >
                      <li option>
                        <label flex gap-2 cursor-pointer>
                          <input
                            type="checkbox"
                            checkbox
                            shrink-0
                            tabindex="-1"
                          />
                          <div option-label />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div> -->
              </td>
              <!-- <td>{JSON.stringify(item.options)}</td> -->
            </tr>
          {/if}
        {/each}
      </table>
    </div>
  </div>
</div>
