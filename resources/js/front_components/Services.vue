<template lang="">
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12">
                <h2>Our Servicesa</h2>
                <div v-for="item in services" :key="item.id">
                    <h4>{{item.name}}</h4>
                    <p>{{item.details}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {

    data(){
        return{
            services:[]
        }
    },

    methods:{
        GetAllServices(){
            axios.get('/getservices').then((response) => {
                // console.log(response.data.services);
                this.services = response.data.services;
            })
        }

    
    },
    mounted() {
            this.GetAllServices();
        },
}
</script>
<style lang="">
    
</style>