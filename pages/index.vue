<template>
  <div> 
    <section class="relative">
      <swiper
        slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/images/HomeBanner_1.webp" alt="" class="w-full">
          <!-- <img src="../assets/images/MIX&MATCH-SLIDER-01.webp" alt="" class="w-full"> -->
          <!-- <img src="../assets/images/BT-CNY-HOMEPAGE-01.webp" alt="" class="w-full"> -->
          <div class="swiper-button text-xs md:text-xl lg:text-3xl font-medium text-white text-center mx-auto">
            <!-- <a href="https://weborder.zeoniq.com/one/init-b">
              <button class="block bg-lightgold py-1 lg:py-2 px-3 lg:px-8 rounded-full mb-2 lg:mb-8 shadow-lg">Order Now</button>
            </a>
            <a href="https://www.tableapp.com/baan-thai-2-seafood-thai-cuisine?utm_source=Official+Website&utm_campaign=Tableapp&utm_medium=Tableapp">
              <button class="block bg-lightgold py-1 lg:py-2 px-3 lg:px-8 rounded-full mb-2 lg:mb-8 shadow-lg">VIP Reservation</button>
            </a> -->
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/HomeBanner_2.webp" alt="" class="w-full">
          <!-- <img src="../assets/images/MIX&MATCH-SLIDER-02.webp" alt="" class="w-full"> -->
          <!-- <img src="../assets/images/BT-CNY-HOMEPAGE-02.webp" alt="" class="w-full"> -->
          <div class="swiper-button text-xs md:text-xl lg:text-3xl font-medium text-white text-center mx-auto">
            <!-- <a href="https://weborder.zeoniq.com/one/init-b">
              <button class="block bg-lightgold py-1 lg:py-2 px-3 lg:px-8 rounded-full mb-2 lg:mb-8 shadow-lg">Order Now</button>
            </a>
            <a href="https://www.tableapp.com/baan-thai-2-seafood-thai-cuisine?utm_source=Official+Website&utm_campaign=Tableapp&utm_medium=Tableapp">
              <button class="block bg-lightgold py-1 lg:py-2 px-3 lg:px-8 rounded-full mb-2 lg:mb-8 shadow-lg">VIP Reservation</button>
            </a> -->
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <img src="../assets/images/CNY_Banner.webp" alt="" class="w-full">
          <div class="swiper-button text-xs md:text-xl lg:text-3xl font-medium text-white text-center mx-auto">
          </div>
        </swiper-slide> -->
        <!-- <swiper-slide>
          <img src="../assets/images/Slider3.webp" alt="" class="w-full max-h-[75vh]">
          <div class="swiper-button text-xs md:text-xl lg:text-3xl font-medium text-white text-center mx-auto">
            <a href="https://weborder.zeoniq.com/one/init-b">
              <button class="block bg-lightgold py-1 lg:py-2 px-3 lg:px-8 rounded-full mb-2 lg:mb-8 shadow-lg">Order Now</button>
            </a>
            <a href="https://www.tableapp.com/baan-thai-2-seafood-thai-cuisine?utm_source=Official+Website&utm_campaign=Tableapp&utm_medium=Tableapp">
              <button class="block bg-lightgold py-1 lg:py-2 px-3 lg:px-8 rounded-full mb-2 lg:mb-8 shadow-lg">VIP Reservation</button>
            </a>
          </div>
        </swiper-slide> -->
      </swiper>
    </section>
   
    <section class="bg-main py-10 md:py-20">
      <div class="md:grid md:grid-cols-2 container px-8 md:px-3 lg:px-5 2xl:px-0 md:mx-auto pb-8 md:pb-14 items-center">
        <h1 class="uppercase text-2xl lg:text-5xl text-brown font-bold border-l-8 lg:border-l-10 border-lightgold py-1 lg:py-3 px-7 mb-5 md:mb-0" v-html="$t('mp_title')"></h1>
        <div class="text-justify">
          <p class="text-sm md:text-base font-medium mb-3">
            {{ $t('mp_content') }}
          </p>
          <p class="text-sm md:text-base font-medium">
            {{ $t('mp_content2') }}
          </p>
        </div>
      </div>
      <div class="container mx-auto relative">
        <div class="lg:w-7/12 lg:mx-auto md:flex md:justify-center">
          <img src="../assets/images/environment.webp" alt="" class="md:w-[300px] lg:w-[375px] xl:w-[450px] lg:mx-5 px-8 md:px-2 my-3 md:my-0">
          <img src="../assets/images/environment2.webp" alt="" class="md:w-[300px] lg:w-[375px] xl:w-[450px] lg:mx-5 px-8 md:px-2 my-3 md:my-0">
        </div>
        <!-- <nuxt-link to="/ourstory">
          <img src="../assets/images/next-button.webp" alt="" class="w-[50px] h-[50px] img_next-btn">
        </nuxt-link> -->
        
      </div>
      
      
      <!-- <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          
        </swiper-slide>
        <swiper-slide>
          <div class="lg:w-7/12 lg:mx-auto md:flex md:justify-center">
            <img src="../assets/images/environment2.webp" alt="" class="md:w-[300px] lg:w-[375px] xl:w-[450px] lg:mx-5 px-8 md:px-2 my-3 md:my-0">
            <img src="../assets/images/environment.webp" alt="" class="md:w-[300px] lg:w-[375px] xl:w-[450px] lg:mx-5 px-8 md:px-2 my-3 md:my-0">
          </div>
        </swiper-slide>
        <SwiperControls class="next-button-place"  />
      </swiper> -->
      
    </section>

    <section class="bg-gray py-16 lg:py-24">
      <h1 class="uppercase text-2xl lg:text-5xl text-black font-bold text-center mb-5 lg:mb-12">{{ $t('exploreOurFoods') }}</h1>
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 container mx-auto px-0 md:px-16 lg:px-0">
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">{{ $t('mp_food') }}</p>
            <p class="text-sm md:text-base">
              {{ $t('mp_food_detail') }}
            </p>
          </div>
        </div>
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food2.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">{{ $t('mp_food2') }}</p>
            <p class="text-sm md:text-base">
              {{ $t('mp_food2_detail') }}
            </p>
          </div>
        </div>
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food3.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">{{ $t('mp_food3') }}</p>
            <p class="text-sm md:text-base">
              {{ $t('mp_food3_detail') }}
            </p>
          </div>
        </div>
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food4.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">{{ $t('mp_food4') }}</p>
            <p class="text-sm md:text-base">
              {{ $t('mp_food4_detail') }}
            </p>
          </div>
        </div>
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food5.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">{{ $t('mp_food5') }}</p>
            <p class="text-sm md:text-base">
              {{ $t('mp_food5_detail') }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 md:mt-8">
        <nuxt-link to="/ourfoods"> 
          <button class="bg-brown text-white rounded-full px-16 py-1 lg:py-2 text-sm md:text-base lg:text-xl">{{ $t('exploreNow') }}</button>
        </nuxt-link>  
      </div>
    </section>

    <section class="bg-marblr py-16 md:pt-36 md:pb-24">
      <h1 class="uppercase text-2xl lg:text-5xl text-black font-bold text-center mb-5 lg:mb-12">{{ $t('mp_title3') }}</h1>
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 container mx-auto px-0 md:px-16 lg:px-0">
        <div class="mx-2">
          <img src="../assets/images/gallery.webp" alt="" class="p-2 xl:p-0 rounded-lg">
        </div>
        <div class="mx-2">
          <img src="../assets/images/gallery2.webp" alt="" class="p-2 xl:p-0 rounded-lg">
        </div>
        <div class="mx-2">
          <img src="../assets/images/gallery4.webp" alt="" class="p-2 xl:p-0 rounded-lg">
        </div>
        <div class="mx-2">
          <img src="../assets/images/gallery3.webp" alt="" class="p-2 xl:p-0 rounded-lg">
        </div>
        <div class="mx-2">
          <img src="../assets/images/gallery5.webp" alt="" class="p-2 xl:p-0 rounded-lg">
        </div>
        
      </div>

      <div class="text-center mt-16 lg:mt-12">
        <nuxt-link to="/gallery">
          <button class="bg-brown text-white rounded-full px-16 py-1 lg:py-2 text-sm md:text-base lg:text-xl">{{ $t('viewNow') }}</button>
        </nuxt-link>
      </div>
    </section>

    <!-- <section class="bg-vip-reserve py-40">
      <h1 class="uppercase text-5xl text-brown font-bold text-center mb-40">VIP RESERVE</h1>
      <div class="container mx-auto">
        <div class="grid grid-cols-2">
          <img src="../assets/images/vip-reserve-room.webp" alt="" class="w-4/5 px-5">
          <div class="bg-white h-3/4 w-full my-auto ml-[-30%] flex flex-col items-center justify-center">
            <div>
              <p class="text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> (VIP ROOM Type 1)</p>
              <button class="bg-brown text-white rounded-full px-16 py-1 mt-12">View Now</button>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="bg-vip-reserve py-16 lg:py-40">
      <h1 class="uppercase text-2xl lg:text-5xl text-brown font-bold text-center mb-5 lg:mb-20">{{ $t('mp_title4') }}</h1>
      <div class="mx-auto max-w-[1200px]">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :modules="modules"
          class="mySwiper px-4 lg:px-0"
        >
          <swiper-slide class="bg-transparent">
            <div class="grid md:grid-cols-2">
              <img src="../assets/images/type1.webp" alt="" class="px-5">
              <div class="bg-white md:h-3/4 md:w-full my-auto md:ml-[-10%] flex flex-col items-center justify-center lg:text-left mx-8 md:mx-0">
                <div class="my-5 md:my-0">
                  <p class="text-lg lg:text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> ({{ $t('vipRoomType') }} 1)</p>
                  <nuxt-link @click.once="handleVipReservation" to="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12">
                    <button class="bg-brown text-white rounded-full px-20 py-1 lg:py-2 mt-12 text-xs md:text-base lg:text-xl">{{ $t('viewNow') }}</button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid md:grid-cols-2">
              <img src="../assets/images/type2.webp" alt="" class="px-5">
              <div class="bg-white md:h-3/4 md:w-full my-auto md:ml-[-10%] flex flex-col items-center justify-center lg:text-left mx-8 md:mx-0">
                <div class="my-5 md:my-0">
                  <p class="text-lg lg:text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> ({{ $t('vipRoomType') }} 2)</p>
                  <nuxt-link @click.once="handleVipReservation" to="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12">
                    <button class="bg-brown text-white rounded-full px-20 py-1 lg:py-2 mt-12 text-xs md:text-base lg:text-xl">{{ $t('viewNow') }}</button>
                  </nuxt-link>
                </div>
              </div>
            </div></swiper-slide>
          <swiper-slide>
            <div class="grid md:grid-cols-2">
              <img src="../assets/images/type3.webp" alt="" class="px-5">
              <div class="bg-white md:h-3/4 md:w-full my-auto md:ml-[-10%] flex flex-col items-center justify-center lg:text-left mx-8 md:mx-0">
                <div class="my-5 md:my-0">
                  <p class="text-lg lg:text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> ({{ $t('vipRoomType') }} 3)</p>
                  <nuxt-link @click.once="handleVipReservation" to="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12">
                    <button class="bg-brown text-white rounded-full px-20 py-1 lg:py-2 mt-12 text-xs md:text-base lg:text-xl">{{ $t('viewNow') }}</button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid md:grid-cols-2">
              <img src="../assets/images/type4.webp" alt="" class="px-5">
              <div class="bg-white md:h-3/4 md:w-full lg:w-[95%] my-auto md:ml-[-10%] flex flex-col items-center justify-center lg:text-left mx-8 md:mx-0">
                <div class="my-5 md:my-0">
                  <p class="text-lg lg:text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> ({{ $t('vipRoomType') }} 4 )</p>
                  <nuxt-link @click.once="handleVipReservation" to="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12">
                    <button class="bg-brown text-white rounded-full px-20 py-1 lg:py-2 mt-12 text-xs md:text-base lg:text-xl">{{ $t('viewNow') }}</button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </swiper-slide>

          <SwiperControls :style="1" />
        </swiper>
      </div>
    </section>

    <section class="bg-marblr py-16 md::pt-36 md:pb-24 px-3 lg:px-0">
      <div class="max-w-[1200px] mx-auto">
        <h1 class="uppercase text-2xl lg:text-5xl text-brown font-bold text-right border-r-8 border-lightgold py-1 lg:py-3 px-7" v-html="$t('whatCustomerThinkAboutUs')"></h1>
        <iframe src="https://widget-36e5bf48b8e7465ab734eda0096ff837.elfsig.ht" frameborder="0" width="100%" class="h-[500px] mt-12 lg:mt-16 overflow-hidden" ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';


  const modules = [Autoplay, Pagination, Navigation];

  // export default {
  //   components: {
  //     Swiper,
  //     SwiperSlide,
  //   },
  //   setup() {
  //     return {
  //       modules: [Autoplay, Pagination, Navigation],

  //     };
      
  //   },
  // };
const { trackButtonClick } = useButtonTracking()

const handleVipReservation = () => {
  trackButtonClick('vip_reservation_button', {
    destination_url: 'https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12',
    link_type: 'external',
    action: 'redirect'
  })
}
</script>
