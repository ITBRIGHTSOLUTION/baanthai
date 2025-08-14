<template>
  <div>
    <img src="../assets/images/VIP-Reservation-Banner.webp" alt="vip-banner" class="w-full">
    <section class="bg-marblr bg-center">
      <div class="container mx-auto">
        <section class="grid lg:grid-cols-2 pt-12 lg:py-20 items-center mx-5 lg:mx-12">
          <h1 class="text-3xl xl:text-5xl text-brown font-bold border-l-10 border-lightgold py-3 px-7 mb-5 lg:mb-0">
            Book a <br>VIP Room
          </h1>
          <div class="font-medium">
            <!-- <p class="mb-7">
              Restaurant will be open for all days, from 5 p.m. to 4 a.m. All booking payment is secured with credit
              card, no charges will be apply for online booking.
            </p>
            <p>Booking request 018-3153323 or book it online.</p> -->
            <p class="mb-7 italic text-sm lg:text-base">
              Experience the ease of securing your spot at our dining haven. From the convenience of your device,
              reserve your table effortlessly, and embark on a culinary journey with the assurance that your
              reservation is as seamless as the moments you'll spend with us.
            </p>
          </div>
        </section>

        <section class="grid lg:grid-cols-2">
          <div class="m-5 lg:m-8">
            <img src="../assets/images/Room1.webp" alt="room type 1" class="rounded-md"> 
            <p class="text-xl text-brown font-bold text-center mt-7 mb-7 lg:mb-12">Baan Thai 2 Seafood & Thai Cuisine <br> (VIP ROOM Type 1)</p>
            <div class="grid xl:grid-cols-12 items-center text-sm xl:text-center mx-auto lg:mx-5 max-w-[500px] xl:max-w-[1000px]">
              <div class="flex xl:col-span-3 items-center mb-3 xl:mb-0">
                <img src="../assets/images/vip-pax.webp" alt="pax-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>14 Pax Per Room</p>
              </div>
              <div class="flex xl:col-span-6 items-center xl:px-4 mb-3 xl:mb-0">
                <img src="../assets/images/vip-resources.webp" alt="resources-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>Air Conditioned, without karaoke, Rooms can be combined if needed</p>
              </div>
              <div class="flex xl:col-span-3 items-center xl:justify-end">
                <img src="../assets/images/vip-receipt.webp" alt="receipt-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>No Minimum Spend</p>
              </div>
            </div>
            <div class="text-center">
              <a @click.once="handleVipReservation" href="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12" target="_blank">
                <button class="bg-brown rounded-full lg:text-lg text-white my-5 lg:my-10 py-2 px-12 lg:px-28">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          <div class="m-5 lg:m-8">
            <img src="../assets/images/bt2-room2.webp" alt="room type 1">
            <p class="text-xl text-brown font-bold text-center mt-7 mb-7 lg:mb-12">Baan Thai 2 Seafood & Thai Cuisine <br> (VIP ROOM Type 2)</p>
            <div class="grid xl:grid-cols-12 items-center text-sm xl:text-center mx-auto lg:mx-5 max-w-[500px] xl:max-w-[1000px]">
              <div class="flex xl:col-span-3 items-center mb-3 xl:mb-0">
                <img src="../assets/images/vip-pax.webp" alt="pax-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>14 Pax Per Room</p>
              </div>
              <div class="flex xl:col-span-6 items-center xl:px-4 mb-3 xl:mb-0">
                <img src="../assets/images/vip-resources.webp" alt="resources-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>Air Conditioned, without karaoke, Tatami Style (not recommended for elderly)</p>
              </div>
              <div class="flex xl:col-span-3 items-center xl:justify-end">
                <img src="../assets/images/vip-receipt.webp" alt="receipt-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>No Minimum Spend</p>
              </div>
            </div>
            <div class="text-center">
              <a @click.once="handleVipReservation" href="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12" target="_blank">
                <button class="bg-brown rounded-full lg:text-lg text-white my-5 lg:my-10 py-2 px-12 lg:px-28">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          <div class="m-5 lg:m-8">
            <img src="../assets/images/bt2-room3.webp" alt="room type 1">
            <p class="text-xl text-brown font-bold text-center mt-7 mb-7 lg:mb-12">Baan Thai 2 Seafood & Thai Cuisine <br> (VIP ROOM Type 3)</p>
            <div class="grid xl:grid-cols-12 items-center text-sm xl:text-center mx-auto lg:mx-5 max-w-[500px] xl:max-w-[1000px]">
              <div class="flex xl:col-span-3 items-center mb-3 xl:mb-0">
                <img src="../assets/images/vip-pax.webp" alt="pax-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>28 Pax Per Room</p>
              </div>
              <div class="flex xl:col-span-6 items-center xl:px-4 mb-3 xl:mb-0">
                <img src="../assets/images/vip-resources.webp" alt="resources-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>without karaoke, Pool Table, Bar Table, Sofa Area</p>
              </div>
              <div class="flex xl:col-span-3 items-center xl:justify-end">
                <img src="../assets/images/vip-receipt.webp" alt="receipt-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>Minimum Spending RM1,200</p>
              </div>
            </div>
            <div class="text-center">
              <a @click.once="handleVipReservation" href="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12" target="_blank">
                <button class="bg-brown rounded-full lg:text-lg text-white my-5 lg:my-10 py-2 px-12 lg:px-28">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          <div class="m-5 lg:m-8">
            <img src="../assets/images/bt2-room4.webp" alt="room type 4">
            <p class="text-xl text-brown font-bold text-center mt-7 mb-7 lg:mb-12">Baan Thai 2 Seafood & Thai Cuisine <br> (VIP ROOM Type 4)</p>
            <div class="grid xl:grid-cols-12 items-center text-sm xl:text-center mx-auto lg:mx-5 max-w-[500px] xl:max-w-[1000px]">
              <div class="flex xl:col-span-3 items-center mb-3 xl:mb-0">
                <img src="../assets/images/vip-pax.webp" alt="pax-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>40 Pax Per Room</p>
              </div>
              <div class="flex xl:col-span-6 items-center xl:px-4 mb-3 xl:mb-0">
                <img src="../assets/images/vip-resources.webp" alt="resources-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>Air Conditioned, without karaoke, Pool table, In-door
                  dining and out-door area. Balcony view. (not recommended for elderly)</p>
              </div>
              <div class="flex xl:col-span-3 items-center xl:justify-end">
                <img src="../assets/images/vip-receipt.webp" alt="receipt-icon" class="mr-5 xl:mr-2 w-[25px] h-[25px]">
                <p>Minimum Spending RM2,000</p>
              </div>
            </div>
            <div class="text-center">
              <a @click.once="handleVipReservation" href="https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12" target="_blank">
                <button class="bg-brown rounded-full lg:text-lg text-white my-5 lg:my-10 py-2 px-12 lg:px-28">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
const { trackButtonClick } = useButtonTracking()

const handleVipReservation = () => {
  trackButtonClick('vip_reservation_button', {
    destination_url: 'https://letsumai.com/widget/baan-thai-2?party_size=2&date=2024-08-12',
    link_type: 'external',
    action: 'redirect'
  })
}
</script>