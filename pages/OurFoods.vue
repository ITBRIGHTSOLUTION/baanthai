<template>
  <div class="bg-ourfoods overflow-hidden">
    <div class="relative h-4300 container mx-auto">
      <img
        src="../assets/images/foods/food_2.webp"
        alt="Stir Fried Thai Basil"
        class="absolute top-[-2.5%] left-[30%]"
        :class="{ 'grayscale-0': hoveredItem === 'sftb' }" 
        @mouseover="hoveredItem = 'sftb'" 
        @mouseout="hoveredItem = ''"
      >
      <img src="../assets/images/foods/green-sauces.webp" alt="Green Sauces" class="w-220 absolute top-[3.5%] left-[62.5%]">
      <img
        src="../assets/images/foods/Thai-Omellete.webp"
        alt="Thai Omellete"
        class="absolute top-[-2.5%] right-[-10%]"
        :class="{ 'grayscale-0': hoveredItem === 'to' }" 
        @mouseover="hoveredItem = 'to'" 
        @mouseout="hoveredItem = ''"
        >
      <img
        src="../assets/images/foods/Pad-Thai.webp" 
        alt="Pad Thai" 
        class="w-700 absolute top-[5%] left-[-5%]"
        :class="{ 'grayscale-0': hoveredItem === 'pt' }" 
        @mouseover="hoveredItem = 'pt'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/papaya-salad.webp"
        alt="Papaya Salad"
        class="w-650 absolute top-[10%] right-[5%]"
        :class="{ 'grayscale-0': hoveredItem === 'ps' }" 
        @mouseover="hoveredItem = 'ps'" 
        @mouseout="hoveredItem = ''"
      >

      <div class="uppercase of-card top-[16%] left-[50%] text-xxs sm:text-sm md:text-base lg:text-xl xl:text-2xl">
        <ul style="list-style-type:disc;" class="pl-4 md:pl-8 pb-2 md:pb-5 font-medium">
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'to' }" @mouseover="hoveredItem = 'to'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu_food1' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'ps' }" @mouseover="hoveredItem = 'ps'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu_food2' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'pt' }" @mouseover="hoveredItem = 'pt'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu_food3' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'sftb' }" @mouseover="hoveredItem = 'sftb'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu_food4' )}}
          </li>
        </ul>
        <OnlineOrderDropdown
          wrapper-class="block w-full"
          button-class="w-full bg-lightgold rounded-full uppercase py-1 md:py-2"
          label="Online Order" />
      </div>

      <img
        src="../assets/images/foods/food_5.webp"
        alt="Pineapple Fried Rice"
        class="absolute top-[21%] left-[-10%]"
        :class="{ 'grayscale-0': hoveredItem === 'pfr' }" 
        @mouseover="hoveredItem = 'pfr'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/food_7.webp"
        alt="Southern Thai Stewed Pork Belly"
        class="absolute top-[20%] left-[25%]"
        :class="{ 'grayscale-0': hoveredItem === 'stspb' }" 
        @mouseover="hoveredItem = 'stspb'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/pandan-chic.webp"
        alt="Deep Fried Pandan Chicken"
        class="absolute top-[31%] left-[10%]"
        :class="{ 'grayscale-0': hoveredItem === 'dfpc' }" 
        @mouseover="hoveredItem = 'dfpc'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/food_8.webp"
        alt="Braised Pork Leg"
        class="w-750 absolute top-[22%] right-[-5%]"
        :class="{ 'grayscale-0': hoveredItem === 'bpl' }" 
        @mouseover="hoveredItem = 'bpl'" 
        @mouseout="hoveredItem = ''"
      >

      <div class="uppercase of-card top-[35%] left-[25%] w-extra text-xxs sm:text-sm md:text-base lg:text-xl xl:text-2xl">
        <ul style="list-style-type:disc;" class="pl-4 md:pl-8 pb-2  md:pb-5 font-medium">
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'pfr' }" @mouseover="hoveredItem = 'pfr'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu2_food1' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'stspb' }" @mouseover="hoveredItem = 'stspb'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu2_food2' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'dfpc' }" @mouseover="hoveredItem = 'dfpc'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu2_food3' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'bpl' }" @mouseover="hoveredItem = 'bpl'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu2_food4' )}}</li>
        </ul>
        <OnlineOrderDropdown
          wrapper-class="block w-full"
          button-class="w-full bg-lightgold rounded-full uppercase py-1 md:py-2"
          label="Online Order" />
      </div>

      <img
        src="../assets/images/foods/Grilled-Fish-with-Salt.webp"
        alt="Grilled Fish with Salt"
        class="w-750 absolute top-[41%] left-[-20%]"
        :class="{ 'grayscale-0': hoveredItem === 'gfws' }" 
        @mouseover="hoveredItem = 'gfws'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/tomyam.webp"
        alt="Red Tomyam Soup"
        class="absolute top-[40%] left-[30%]"
        :class="{ 'grayscale-0': hoveredItem === 'rts' }" 
        @mouseover="hoveredItem = 'rts'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/food-12.webp"
        alt="FRIED FISH WITH THREE FLAVOR SAUCE"
        class="w-1000 absolute top-[40%] right-[-17%]"
        :class="{ 'grayscale-0': hoveredItem === 'ffwtfs' }" 
        @mouseover="hoveredItem = 'ffwtfs'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/food_13.webp"
        alt='Grilled Pork Neck'
        class="w-650 absolute top-[52%] left-[17.5%]"
        :class="{ 'grayscale-0': hoveredItem === 'gpn' }" 
        @mouseover="hoveredItem = 'gpn'" 
        @mouseout="hoveredItem = ''"
      >
      
      <div class="uppercase of-card top-[50%] right-[0%] text-xxs sm:text-sm md:text-base lg:text-xl xl:text-2xl">
        <ul style="list-style-type:disc;" class="pl-4 md:pl-8 pb-2  md:pb-5 font-medium">
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'gfws' }" @mouseover="hoveredItem = 'gfws'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu3_food1' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'rts' }" @mouseover="hoveredItem = 'rts'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu3_food2' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'ffwtfs' }" @mouseover="hoveredItem = 'ffwtfs'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu3_food3' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'gpn' }" @mouseover="hoveredItem = 'gpn'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu3_food4' )}}</li>
        </ul>
        <OnlineOrderDropdown
          wrapper-class="block w-full"
          button-class="w-full bg-lightgold rounded-full uppercase py-1 md:py-2"
          label="Online Order" />
      </div>

      <img 
        src="../assets/images/foods/food_14.webp"
        alt='Claypot Glass Noodle with Shrimp'
        class="absolute top-[60%] right-[17.5%]"
        :class="{ 'grayscale-0': hoveredItem === 'cgnws' }" 
        @mouseover="hoveredItem = 'cgnws'" 
        @mouseout="hoveredItem = ''"
      >
      <img 
        src="../assets/images/foods/bbq.webp"
        alt='BBQ Pork Stick'
        class="absolute top-[60%] right-[-15%]"
        :class="{ 'grayscale-0': hoveredItem === 'bbq' }" 
        @mouseover="hoveredItem = 'bbq'" 
        @mouseout="hoveredItem = ''"
      >
      <img 
        src="../assets/images/foods/food_15.webp"
        alt='Deep Fried Calamari with Garlic'
        class="w-650 absolute top-[62%] left-[-5%]"
        :class="{ 'grayscale-0': hoveredItem === 'dfcwg' }" 
        @mouseover="hoveredItem = 'dfcwg'" 
        @mouseout="hoveredItem = ''"
      >
      
      <div class="uppercase of-card top-[68%] left-[35%] w-extra text-xxs sm:text-sm md:text-base lg:text-xl xl:text-2xl">
        <ul style="list-style-type:disc;" class="pl-4 md:pl-8 pb-2  md:pb-5 font-medium">
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'cgnws' }" @mouseover="hoveredItem = 'cgnws'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu4_food1' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'bbq' }" @mouseover="hoveredItem = 'bbq'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu4_food2' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'dfcwg' }" @mouseover="hoveredItem = 'dfcwg'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu4_food3' )}}</li>
        </ul>
        <OnlineOrderDropdown
          wrapper-class="block w-full"
          button-class="w-full bg-lightgold rounded-full uppercase py-1 md:py-2"
          label="Online Order" /> 
      </div>

      <img
        src="../assets/images/foods/food_16.webp" 
        alt='Banana Flower Prawn' 
        class="w-650 absolute top-[72%] left-[28%]"
        :class="{ 'grayscale-0': hoveredItem === 'bfp' }" 
        @mouseover="hoveredItem = 'bfp'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/lime-fish.webp" 
        alt='Steam Fish with Spicy Lime Sauce' 
        class="w-650 absolute top-[75%] right-[-18%]"
        :class="{ 'grayscale-0': hoveredItem === 'sfwsls' }" 
        @mouseover="hoveredItem = 'sfwsls'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/dessert.webp" 
        alt='Red Ruby' 
        class="w-400 absolute top-[80%] left-[5%]"
        :class="{ 'grayscale-0': hoveredItem === 'rr' }" 
        @mouseover="hoveredItem = 'rr'" 
        @mouseout="hoveredItem = ''"
      >
      <img
        src="../assets/images/foods/food_19.webp" 
        alt='Mango Sticky Rice' 
        class="w-750 absolute bottom-[-4%] left-[30%] z-50"
        :class="{ 'grayscale-0': hoveredItem === 'msr' }" 
        @mouseover="hoveredItem = 'msr'" 
        @mouseout="hoveredItem = ''"
      >

      <div class="uppercase of-card top-[92%] right-[0%] z-50 text-xxs sm:text-sm md:text-base lg:text-xl xl:text-2xl">
        <ul style="list-style-type:disc;" class="pl-4 md:pl-8 pb-2  md:pb-5 font-medium">
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'bfp' }" @mouseover="hoveredItem = 'bfp'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu5_food1' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'sfwsls' }" @mouseover="hoveredItem = 'sfwsls'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu5_food2' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'rr' }" @mouseover="hoveredItem = 'rr'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu5_food3' )}}</li>
          <li class="mb-1 sm:mb-3 lg:mb-4 xl:mb-5" :class="{ 'text-lightgold': hoveredItem === 'msr' }" @mouseover="hoveredItem = 'msr'" @mouseout="hoveredItem = ''">
            {{ $t('of_menu5_food4' )}}</li>
        </ul>
        <OnlineOrderDropdown
          wrapper-class="block w-full"
          button-class="w-full bg-lightgold rounded-full uppercase py-1 md:py-2"
          label="Online Order" />
      </div>

      <img src="../assets/images/foods/pandanleave.webp" alt='Pandan Leave' class="w-825 absolute bottom-[-3%] left-[-4%]">
      <img src="../assets/images/foods/deco-leaves.webp" alt='Deco Leaves' class="w-650 absolute bottom-[-1%] right-[-12%]">
    </div>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredItem: '',
    }
  },
};
</script>
