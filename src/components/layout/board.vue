<template>
    <el-container> 
        <el-header>
            <v-header></v-header>

            
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<style>
.el-header {
    padding-left: 0;
    padding-right: 0;
}
</style>

<script>
import vHeader from '@/components/artifact/header';


export default {
    data() {
        return {

        }
    },

    components : {
        vHeader
    }
}
</script>