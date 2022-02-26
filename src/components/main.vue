<template>
    <div>
        <v-carousel height="75vh" color="grey">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-trasition="fade-transition" transition="fade-transition"></v-carousel-item>
        </v-carousel>

        <v-container>
            <v-spacer></v-spacer>
            <v-content>
                <div class="text-center my-5">
                    <h3 class="py-5">Works...</h3>
                    <v-row class="nav justify-center">
                        <v-col v-for="item in workItems" :key="item.id" class="col-lg-3 col-md-4 col-6">
                            <img :src="'./img/'+item.img" alt="" width="100%">
                        </v-col>
                    </v-row>
                </div>
            </v-content>
        </v-container>

        <div class="mb-9 bottom_banner" style="height:300px; background-image:url(./img/bottom_banner.jpg); background-size:cover; background-position:50% 50%; "></div>


    </div>

</template>



<script>
export default {
    data() {
        return {
            items : [
                {
                    src : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148769293/settings_images/mzS8Hd0XQrGu8k1k6jYR_AM_Banner_Chalk2000px.jpg", 
                },
                {
                    src : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148769293/settings_images/37hBYt1ZTIOhzeBrwoyM_AM_Banner_Textile2_2000px.jpg", 
                },
                {
                    src : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148769293/settings_images/6lp5VxLXQgucPrzdCJbg_AM_Banner_Retro_2000px.jpg", 
                },
                {
                    src : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148769293/settings_images/cv4l79HQRrSdYI0xW4GY_AM_Banner_3D_2000px.jpg", 
                },
            ],
            workItems : [
                {img:"cont1.jpg", title:"Retro Symbol"}, 
                {img:"cont2.jpg", title:"Retro Sign"}, 
                {img:"cont3.jpg", title:"Days of Type"}, 
                {img:"cont4.jpg", title:"Murals"}, 
                {img:"cont5.jpg", title:"Wedding Invitations"}, 
                {img:"cont6.jpg", title:"Watercolour Lettering"}, 
                {img:"cont7.jpg", title:"Days of Type"}, 
                {img:"cont8.jpg", title:"Chalk Typography"},
            ],
        }
    }
}
</script>