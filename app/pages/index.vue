<script setup>
// One window per group in /config.json, loaded in the browser so Docker can mount it
// (not committed; copy config.example.json to public/config.json).
// Each link's "sub" becomes https://<sub>.<domain>; an empty "sub" is the bare domain
const { data: config } = useFetch("/config.json", { server: false });

const host = (link) => (link.sub ? `${link.sub}.${config.value.domain}` : config.value.domain);
</script>

<template>
  <div class="h-full">
    <!-- Windows are direct grid children, so a grabbed window can rise above the others.
         h-auto! keeps each window its own height instead of stretching to the row. -->
    <div
      class="w-full h-full grid grid-cols-[minmax(0,20rem)] md:grid-cols-[repeat(2,18rem)] lg:grid-cols-[repeat(3,18rem)] justify-center-safe content-center-safe items-start gap-2 md:gap-4 overflow-x-hidden overflow-y-auto px-4 py-24 md:py-28"
    >
      <ComputerAppContainer
        v-for="group in config?.groups"
        :key="group.group"
        :title="group.group"
        :icon="group.icon"
        movable
        class="h-auto!"
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
</template>
