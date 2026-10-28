<script setup>
// One window per group in /config.json, loaded in the browser so Docker can mount it
// (not committed; copy config.example.json to public/config.json).
// Each link's "sub" becomes https://<sub>.<domain>; an empty "sub" is the bare domain
const { data: config } = useFetch("/config.json", { server: false });

const host = (link) => (link.sub ? `${link.sub}.${config.value.domain}` : config.value.domain);
</script>

<template>
  <div class="h-full">
    <!-- Windows are direct flex children, so a grabbed window can rise above the others.
         Up to 3 per row (max-w fits 3 x 18rem), windows in a row share its height, the last row is centered. -->
    <div class="w-full h-full flex overflow-x-hidden overflow-y-auto px-4 py-24 md:py-28">
      <div class="m-auto w-full max-w-[56rem] flex flex-wrap justify-center gap-2 md:gap-4">
      <ComputerAppContainer
        v-for="group in config?.groups"
        :key="group.group"
        :title="group.group"
        :icon="group.icon"
        movable
        class="h-auto! w-full max-w-80 md:w-72"
      >
        <ul
          class="w-full h-full flex flex-col p-4 gap-3 bg-surface text-ink text-xs md:text-sm font-mono"
        >
          <li v-for="link in group.links" :key="link.sub">
            <a
              :href="`https://${host(link)}`"
              target="_blank"
              rel="noopener"
              class="group flex flex-row items-center gap-3"
            >
              <Icon :name="link.icon || 'tabler:link'" class="shrink-0" />
              <span class="flex flex-col leading-tight min-w-0">
                <span class="group-hover:underline">{{ link.name }}</span>
                <span class="text-[10px] md:text-xs italic opacity-60 truncate">{{
                  host(link)
                }}</span>
              </span>
            </a>
          </li>
        </ul>
      </ComputerAppContainer>
      </div>
    </div>
  </div>
</template>
