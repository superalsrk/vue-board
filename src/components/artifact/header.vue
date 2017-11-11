<template>
<div>
    <el-menu :default-active="onRoutes"  mode="horizontal" :router="isRouter">
    <template v-for="item in sideItems">
            <el-menu-item :index="item.path" v-if="!item.hasSub">{{item.name}}</el-menu-item>
            
            <el-submenu :index="item.path" v-if="item.hasSub">
                <template slot="title">{{item.name}}</template>
                <el-menu-item :index="subitem.path" :key="subitem.path" v-for="subitem in item.subs">{{subitem.name}}</el-menu-item>
            </el-submenu>
    </template>
    </el-menu>
</div>
</template>


<script>

    import {SIDEBAR_TREE} from '@/router/index.js';

    export default {
        data() {
            return {
                isRouter : true,
                sideItems : SIDEBAR_TREE
            }
        },
        computed: {
             onRoutes() {
                 let u=this.$route.path;
                 return u;
             }
        }
    }
</script>