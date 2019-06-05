<template>
    <button :class="{'rounded': rounded, 'primary': primary, 'outline': outline }"
        :disabled="disabled"><slot></slot></button>
</template>

<script>
    export default {
        name: 'button',
        props: ['rounded', 'primary', 'outline', 'disabled']
    }
</script>

<style lang="scss" scoped>
button {
    padding: 8px 16px;
    &.primary {
        background-color: wheat;
    }
    &.rounded {
        border-radius: 99999px;
    }
}
</style>