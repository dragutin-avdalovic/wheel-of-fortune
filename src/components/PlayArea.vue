<template>
    <vue-winwheel :segments="options" @spin="count"></vue-winwheel>
</template>
<script>
    /* eslint-disable no-console */

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
                        text:'100€'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'200€'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'300€'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'400€'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'500€'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'1 MORE SPIN'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'600€'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'700€'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'800€'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'900€'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#000',
                        text:'1000€'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'1100€'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text:'1200€'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text:'1400€'
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
        },
        methods: {
            count: function (value) {
                var amountWin = 0;
                if( value.includes  ("€")) {
                    var str = value.split("€");
                    amountWin = parseFloat(str[0]);
                    console.log(amountWin);
                } else {
                    amountWin = 0;
                }
                this.$emit('addValue', amountWin );
            }
        },
    }
</script>

<style scoped>

</style>
