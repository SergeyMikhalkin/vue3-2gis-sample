<template>
    <div
        class="expand-btn"
        @click="isExpand = !isExpand"
        :class="{ hide: !isExpand }"
    >
        <span class="triangle" :class="{ hide: !isExpand }"></span>
    </div>
    <div class="side-bar" :class="{ hide: !isExpand }">
        <h2 class="title">{{ title }}</h2>
        <OfficesList @changeLocation="(value) => $emit('changeLocation', value)" :cityName="cityName"></OfficesList>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import OfficesList from '@/components/OfficesList.vue';

    const emit = defineEmits(['changeLocation']);

    const isExpand = ref(true);
    const title = 'Отделения в городе';
</script>

<style lang="scss" scoped>
.side-bar {
    position: absolute;
    left: 10px;
    top: 60px;
    width: calc(100vw / 3 - 10px);
    min-width: 400px;
    height: calc(100vh - 20px - 50px);
    padding: 20px;
    background: white;
    border-radius: 5px;
    z-index: 4;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    
    /* transition: transform .2s ease-in-out, opacity .2s ease-in-out, visibility .2s ease-in-out, width .1s ease-in-out; */

    @media (max-width: 600px) {
        display: none;
    }
}

.expand-btn {
    position: absolute;
    left: calc(100vw / 3 + 20px);
    top: 82px;
    width: 24px;
    padding: 4px 0;
    z-index: 4;
    border-radius: 4px;
    background: #22C062;

    @media (max-width: 1200px) {
        left: 420px;
    }

    @media (max-width: 600px) {
        display: none;
    }
}

.side-bar,
.expand-btn {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08), 0px 5px 50px rgba(0, 0, 0, 0.25);
}

.expand-btn:hover {
    cursor: pointer;
}

.triangle {
    display: block;
    width: 24px;
    height: 24px;
    transform: rotate(90deg);
    background: url('../assets/triangle.svg');
}

.triangle:hover {
    filter: invert(98%) sepia(98%) saturate(16%) hue-rotate(205deg) brightness(103%) contrast(101%);
}

.side-bar.hide {
    visibility: hidden;
}

.expand-btn.hide {
    left: 20px;
}

.triangle.hide {
    transform: rotate(-90deg);
}

.title {
    font-family: 'Nunito Sans', "Roboto Flex", sans-serif;
}
</style>
