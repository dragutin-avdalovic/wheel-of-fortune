<template>
    <vue-winwheel :segments="options"></vue-winwheel>
</template>
<script>
    import VueWinwheel from 'vue-winwheel'
    export default {
        name: "PlayArea",
        data() {
            return {
                options:[
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'BANKRUPT'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'100'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'200'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'300'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'400'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'500'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'1 MORE SPIN'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'600'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'700'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'800'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'900'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'1000'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'1100'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'1200'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'JACKPOT'
                    }
                ]
            }
        },
        components: {
            VueWinwheel
        }
    }
</script>

<style scoped>

</style>
