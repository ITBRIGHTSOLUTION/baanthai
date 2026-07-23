<template>
  <div class="oo-dropdown relative" :class="wrapperClass" ref="root">
    <button type="button" :class="buttonClass" @click="toggle">
      {{ label || $t('header5') }}
    </button>

    <transition name="oo-fade">
      <ul v-show="open" class="oo-menu" :class="menuClass">
        <li>
          <a :href="branches.puduUlu" target="_blank" rel="noopener"
            @click="handleClick('pudu_ulu', branches.puduUlu)">
            Baan Thai @ Pudu Ulu
          </a>
        </li>
        <li>
          <a :href="branches.kuchaiLama" target="_blank" rel="noopener"
            @click="handleClick('kuchai_lama', branches.kuchaiLama)">
            Baan Thai @ Kuchai Lama
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  // Classes for the trigger button (matches the button it replaces).
  buttonClass: { type: String, default: '' },
  // Classes for the outer wrapper (e.g. "block w-full" for full-width triggers).
  wrapperClass: { type: String, default: 'inline-block' },
  // Extra classes for the dropdown menu (e.g. alignment overrides).
  menuClass: { type: String, default: '' },
  // Button label; falls back to the shared "Online Order" translation.
  label: { type: String, default: '' },
})

const branches = {
  puduUlu: 'https://eorder.zeoniq.store/K68MN4A/my/store/2/002?OrderType=PICKUP',
  kuchaiLama: 'https://bit.ly/BTwebOO',
}

const { trackButtonClick } = useButtonTracking()

const open = ref(false)
const root = ref(null)

const toggle = () => {
  open.value = !open.value
}

const close = () => {
  open.value = false
}

const handleClick = (branch, url) => {
  trackButtonClick('online_order_button', {
    branch,
    destination_url: url,
    link_type: 'external',
    action: 'redirect',
  })
  close()
}

const onClickOutside = (event) => {
  if (root.value && !root.value.contains(event.target)) {
    close()
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>

<style scoped>
.oo-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  z-index: 60;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  text-align: center;
}

.oo-menu li + li {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.oo-menu a {
  display: block;
  padding: 12px 20px;
  color: #4a2c1a;
  font-weight: 600;
  text-transform: none;
  white-space: nowrap;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.oo-menu a:hover {
  background: #d4af37;
  color: #ffffff;
}

.oo-fade-enter-active,
.oo-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.oo-fade-enter-from,
.oo-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-4px);
}
</style>
