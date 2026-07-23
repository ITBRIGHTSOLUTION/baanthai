<template>
  <div class="menu-bar sticky top-0 z-50"> 
    <nav class="bg-brown relative z-50">
      <div class="container flex flex-wrap items-center justify-between mx-auto py-1 px-3 lg:px-2 xl:px-3">
        <nuxt-link @click="closeMenu()" to="/" class="flex items-center">
          <img src="../assets/images/Baan_Thai_Logo.webp" class="md:h-20 lg:h-16 h-12 xl:mr-3" alt="Baan Thai Logo" />
        </nuxt-link>

        <div class="flex items-center justify-center">
          <OnlineOrderDropdown
            button-class="lg:hidden rounded-full text-white text-xs bg-lightgold px-4 py-2 mx-2" />

          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-lightgold rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-default" aria-expanded="false" @click="toggleMenu">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        
        <div class="w-full lg:flex lg:w-auto uppercase items-center text-center menu" id="navbar-default" v-show="isMenuOpen" ref="menu">
          <ul class="font-medium flex flex-col p-4 lg:p-0 xl:mr-5 mt-4 rounded-lg lg:flex-row lg:space-x-6 xl:space-x-8 lg:mt-0">
            <li class="my-2 lg:my-0">
              <nuxt-link @click="closeMenu()" class="nav-link text-lightgold" to="/ourstory" exact-active-class="active" >{{ $t('header') }}</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link @click="closeMenu()" class="nav-link text-lightgold" to="/ourfoods" exact-active-class="active">{{ $t('header0') }}</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link @click="closeMenu()" class="nav-link text-lightgold" to="/gallery" exact-active-class="active">{{ $t('header1') }}</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link @click="closeMenu()" class="nav-link text-lightgold" to="/contact" exact-active-class="active">{{ $t('header2') }}</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <a href="https://app.simpleloyalty.com/baan-thai-2" class="nav-link text-lightgold" @click.once="handleClickPoint" target="_blank">
                {{ $t('header3') }}
              </a>
            </li>
          </ul>
          <div class="text-center text-xs md:text-base">
            <!-- <nuxt-link @click="closeMenu('vipreserve')" to="/vipreserve">
              <button class="rounded-full text-white bg-lightgold px-4 xl:px-6 py-2 mx-2 my-3 lg:my-0">{{ $t('header4') }}</button>
            </nuxt-link> -->
            <a href="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12" @click.once="handleVipReservation" target="_blank">
              <button class="rounded-full text-white bg-lightgold px-4 xl:px-6 py-2 mx-2 my-3 lg:my-0">{{ $t('header4') }}</button>
            </a>
            <OnlineOrderDropdown
              button-class="hidden lg:inline-flex rounded-full text-white bg-lightgold px-4 xl:px-6 py-2 mx-2" />
          </div>
          <select v-model="locale" class="selectbox">
            <option value="en">English</option>
            <option value="cn">中文</option>
            <option value="th">แบบไทย</option>
          </select>
        </div>

        

      </div>
    </nav>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const { trackButtonClick } = useButtonTracking()

const handleClickPoint = () => {
  trackButtonClick('points_button', {
    destination_url: 'https://app.simpleloyalty.com/baan-thai-2',
    link_type: 'external',
    action: 'redirect'
  })
}

const handleVipReservation = () => {
  trackButtonClick('vip_reservation_button', {
    destination_url: 'https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12',
    link_type: 'external',
    action: 'redirect'
  })
}
</script>

<script>
// import { onMounted } from 'vue'
import { initCollapses } from 'flowbite'

// initialize components based on data attribute selectors
// onMounted(() => {
//     initCollapses();
// })

export default {

  data() {
    return {
      isMenuOpen: false,
    };
  },

  mounted() {
    // initCollapses();
  },

  methods: {

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        // Add a click event listener to the document when the menu is open
        document.addEventListener('click', this.closeMenuOnClickOutside);
      } else {
        // Remove the click event listener when the menu is closed
        document.removeEventListener('click', this.closeMenuOnClickOutside);
      }
    },

    closeMenuOnClickOutside(clickEvent) {
      const header = this.$el; // Reference to the header element
      const menu = this.$refs.menu; // Reference to the menu element
      // Check if the click occurred outside the header and the menu
      if (!header.contains(clickEvent.target) && !menu.contains(clickEvent.target)) {
        this.isMenuOpen = false;
        // Remove the click event listener
        document.removeEventListener('click', this.closeMenuOnClickOutside);
      }
    },

    // Close the menu when a navigation link is clicked
    closeMenu(type = null) {
      this.isMenuOpen = false;
      if (type) {
        useTrackEvent(type, {
          method: 'Website'
        })
      }
    },


  },
};
</script>