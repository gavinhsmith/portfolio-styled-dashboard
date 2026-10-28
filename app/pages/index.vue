<script setup>
// One window per group in app/data/links.json; edit that file to change the links.
import groups from "~/data/links.json";

// Show "proxmox.home.lan:8006" under each link, without the protocol
const host = (url) => url.replace(/^[a-z]+:\/\//, "").replace(/\/$/, "");
</script>

<template>
  <div class="h-full">
    <!-- Windows are direct grid children, so a grabbed window can rise above the others.
         h-auto! keeps each window its own height instead of stretching to the row. -->
    <div
      class="w-full h-full grid grid-cols-[minmax(0,20rem)] md:grid-cols-[repeat(2,18rem)] lg:grid-cols-[repeat(3,18rem)] justify-center-safe content-center-safe items-start gap-2 md:gap-4 overflow-x-hidden overflow-y-auto px-4 py-24 md:py-28"
    >
      <ComputerAppContainer
        v-for="group in groups"
        :key="group.group"
        :title="group.group"
        :icon="group.icon"
        movable
        class="h-auto!"
      >
        <ul
          class="w-full h-full flex flex-col p-4 gap-3 bg-surface text-ink text-xs md:text-sm font-mono"
        >
          <li v-for="link in group.links" :key="link.url">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener"
              class="group flex flex-row items-center gap-3"
            >
              <Icon :name="link.icon || 'tabler:link'" class="shrink-0" />
              <span class="flex flex-col leading-tight min-w-0">
                <span class="group-hover:underline">{{ link.name }}</span>
                <span class="text-[10px] md:text-xs italic opacity-60 truncate">{{
                  host(link.url)
                }}</span>
              </span>
            </a>
          </li>
        </ul>
      </ComputerAppContainer>
    </div>
  </div>
</template>
