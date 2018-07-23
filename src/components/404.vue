<template>
    <div>{{msg}}</div>
    <!--<someComponent></someComponent>-->
</template>

<script>
    //import someComponent from './someComponent'
    export default {
        name: "",
        data() {
            return {
                msg: "404哦"
            }
        },
        component: {
            //someComponent
        }
    }
</script>

<style lang="scss" scoped type="text/css">

</style>
