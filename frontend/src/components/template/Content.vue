<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content {
        grid-area: content;
        background-image: linear-gradient(to right top, #051937, #123759, #20587b, #317c9d, #46a1bd);
        padding: 20px;
    }
</style>
