<template>
  <div class="testH">
      home
  </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {

        };
    },
    created() {
        window.console.log('测试');
    },
    methods: {

    },
};
</script>

<style lang="scss"> 
@import '@/assets/scss/_color.scss';
    .testH{
        color: $-color-default;
    }
</style>