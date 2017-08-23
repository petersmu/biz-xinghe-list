<template>
    <div class="wrap">
        <h1>I'm innerPage！</h1>
        <a href="javascript:;" @click="toback">
            << back</a>
    </div>
</template>

<script>
export default {
    methods: {
        toback() {
            this.$router.back()
        }
    }
}
</script>
