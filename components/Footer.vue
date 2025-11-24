<template>
  <div class="bg-brown text-white grow z-50 footer">
    <section class="container mx-auto">
      <div class="md:grid md:grid-cols-4 lg:pb-5 mt-16 mb-5 mx-5 md:mx-7 lg:mx-10 border-b border-b-white border-opacity-10">
        <div class="mx-auto text-center text-xs lg:text-base">
          <nuxt-link  to="/">
            <img src="../assets/images/Baan_Thai_Logo.webp" alt="" class="max-w-[250px] w-full lg:w-auto mx-auto mb-3" />
          </nuxt-link>
          <div>
            <a href="https://weborder.zeoniq.com/one/init-b" target="_blank">
              <button class="bg-lightgold rounded-full py-2 mb-3 min-w-[120px] lg:min-w-[180px]">
                {{ $t('header5') }}
              </button>
            </a>
            
          </div>
          <div>
            <nuxt-link to="/vipreserve">
              <button class="bg-lightgold rounded-full py-2 mb-3 min-w-[120px] lg:min-w-[180px]">
                {{ $t('header4') }}
              </button>
            </nuxt-link>
          </div>
        </div>
        <div class="my-12 md:my-0">
          <p class="text-base lg:text-lg font-normal mb-4 lg:mb-6">{{ $t('quickMenu') }}</p>
          <ul class="font-thin text-xs lg:text-base mt-4 rounded-lg md:flex-row md:mt-0 md:border-0">
            <li class="mb-3">
              <nuxt-link class="nav-link" to="/ourstory" exact-active-class="active">{{ $t('header') }}</nuxt-link>
            </li>
            <li class="mb-3">
              <nuxt-link class="nav-link" to="/ourfoods" exact-active-class="active">{{ $t('header0') }}</nuxt-link>
            </li>
            <li class="mb-3">
              <nuxt-link class="nav-link" to="/gallery" exact-active-class="active">{{ $t('header1') }}</nuxt-link>
            </li>
            <li class="mb-3">
              <nuxt-link class="nav-link" to="/contact" exact-active-class="active">{{ $t('header2') }}</nuxt-link>
            </li>
            <li class="mb-3">
              <nuxt-link class="nav-link" to="/points" exact-active-class="active">{{ $t('header3') }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-span-2">
          <p class="text-base lg:text-lg font-normal mb-4 lg:mb-6">{{ $t('quickContact') }}</p>
          <div class="grid grid-cols-2">
            <div class="text-xs lg:text-base">
              <p class="text-yellow font-medium">Baan Thai @ Pudu Ulu</p>
              <p class="text-sm font-normal" style="color: #f4f4f4">Baan Thai 1 Restaurant Sdn Bhd</p>
              <p class="text-xs font-normal" style="color: #f4f4f4">(1368888-K)</p>
              <div>12.00pm - 4.30am daily</div>
              <a href="tel:018-911 6315" class="hover:underline">018-911 6315</a>
              <div class="flex mt-2 mb-5 px-1">
                <a href="https://www.facebook.com/BaanThaiRestaurantCheras/" target="_blank">
                  <img src="../assets/images/facebook.webp" alt="" class="invert w-[20px] mr-5">
                </a>
                <a href="https://www.instagram.com/baanthai_pudu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                  <img src="../assets/images/instagram.webp" alt="" class="invert w-[20px]">
                </a>
              </div>
            </div>
            <!-- <div class="text-xs lg:text-base px-1">
              <p class="text-yellow font-medium">Baan Thai@Publika</p>
              <div>11.00am - 9.00pm daily</div>
              <div>018-664 9135</div>
              <div class="flex mt-2 mb-5 px-1">
                <a href="https://www.facebook.com/baanthaipublika" target="_blank">
                  <img src="../assets/images/facebook.webp" alt="" class="invert w-[20px] mr-5">
                </a>
                <a href="https://www.instagram.com/baanthai_publika?igsh=OGQ5ZDc2ODk2ZA==" target="_blank">
                  <img src="../assets/images/instagram.webp" alt="" class="invert w-[20px]">
                </a>
              </div>
            </div> -->
            <div class="text-xs lg:text-base px-1">
              <p class="text-yellow font-medium">Baan Thai @ Kuchai Lama</p>
              <p class="text-sm font-normal" style="color: #f4f4f4">Baan Thai 2 Seafood & Thai Cuisine Sdn Bhd</p>
              <p class="text-xs font-normal" style="color: #f4f4f4">(1265400-P)</p>
              <div>12.30pm - 2.30am daily</div>
              <a href="tel:018-315 3323" class="hover:underline">018-315 3323</a>
              <div class="flex mt-2 mb-5">
                <a href="https://www.facebook.com/baanthai2thaicuisinekuchailama" target="_blank">
                  <img src="../assets/images/facebook.webp" alt="" class="invert w-[20px] mr-5">
                </a>
                <a href="https://www.instagram.com/baanthai2_kuchai?igsh=OGQ5ZDc2ODk2ZA==" target="_blank">
                  <img src="../assets/images/instagram.webp" alt="" class="invert w-[20px]">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="container mx-auto my-8">
      <div class="lg:mx-52 text-xs md:text-sm lg:text-base text-center">
        <ul class="font-thin mt-4 rounded-lg md:mt-0 flex justify-center">
          <li class="border-r px-2 md:px-16">
            <nuxt-link class="nav-link" @click.once="handleOnlineOrder" to="https://bit.ly/BTwebOO" exact-active-class="active" target="_blank">{{ $t('onlineOrder') }}</nuxt-link>
          </li>
          <li class="border-r px-2 md:px-16">
            <nuxt-link class="nav-link" @click.once="handleVipReservation" to="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12" exact-active-class="active">{{ $t('onlineReservation') }}</nuxt-link>
          </li>
          <li class="px-2 md:px-16">
            <nuxt-link class="nav-link" to="/terms" exact-active-class="active">{{ $t('termsAndConditions') }}</nuxt-link>
          </li>
          <!-- <li class="px-2 md:px-16">
            <nuxt-link class="nav-link" to="/" exact-active-class="active">Delivery Policy</nuxt-link>
          </li> -->
        </ul>
      </div>
      <div class="text-center mt-5 mb-10 text-sm lg:text-base">&copy; 2024 All rights reserved by Baan Thai Malaysia</div>
    </section>
  </div>

</template>

<script setup>
const { trackButtonClick } = useButtonTracking()

const handleOnlineOrder = () => {
  trackButtonClick('online_order_button', {
    destination_url: 'https://bit.ly/BTwebOO',
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