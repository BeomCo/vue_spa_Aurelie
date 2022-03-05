<template>
    <div>

        <v-container>
            <v-spacer></v-spacer>
            <v-content>
                <div class="text-center my-5">
                    <h3 class="py-5">Port Foilo...</h3>
                    <v-row class="nav justify-center">
                        <v-col v-for="item in workItems" :key="item.id" class="col-lg-3 col-md-4 col-6">
                            <img :src="'./img/'+item.img" alt="" width="100%">
                        </v-col>
                    </v-row>
                </div>
            </v-content>
        </v-container>



    </div>

</template>



<script>
export default {
    data() {
        return {
            workItems : [
                {img:"type1.jpg",}, 
                {img:"type2.jpg",}, 
                {img:"type3.jpg",}, 
                {img:"type4.jpg",}, 
                {img:"type5.jpg",}, 
                {img:"type6.jpg",}, 
                {img:"type7.jpg",}, 
                {img:"type8.jpg",}, 
                {img:"type9.jpg",}, 
                {img:"type10.jpg",}, 
                {img:"type11.jpg",}, 
                {img:"type12.jpg",}, 
                {img:"type13.jpg",}, 
                {img:"type14.jpg",}, 
                {img:"type15.jpg",}, 
                {img:"type16.jpg",}, 
                {img:"type17.jpg",}, 
                {img:"type18.jpg",}, 
                {img:"type19.jpg",}, 
                {img:"type20.jpg",}, 
                {img:"type21.jpg",}, 
                {img:"type22.jpg",}, 
                {img:"type23.jpg",}, 
                {img:"type24.jpg",}, 
            ],
        }
    }
}
</script>