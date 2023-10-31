<template>
    <!-- <div class="back-button"> 
        <img src="./assets/arrow-back.svg" alt="Back Button" class="arrowImg">
    </div> -->
    <OfficesSideBar @changeLocation="centerChanged"></OfficesSideBar>
    <Search :filials="filials" @changeLocation="centerChanged"></Search>
    <MapBackground :filials="filials" :centerCoords="centerCoords" @openCity="cityChanged"></MapBackground>
</template>

<script setup>
    import { onMounted, provide, reactive, ref } from 'vue';
    import OfficesSideBar from '@/components/OfficesSideBar.vue';
    import MapBackground from '@/components/MapBackground.vue';
    import Search from '@/components/Search.vue';
    import { FILIALS_URL } from '@/shared/const';

    const cities = reactive({});
    provide('cities', cities);
    
    const centerCoords = reactive([]);
    const filials = reactive([]);

    function centerChanged(coords) {
        centerCoords.splice(0, 2);
        centerCoords.push(...coords);
    }

    const changeCurrentCity = (cityName) => currentCity.value = cityName;

    let currentCity = ref('');
    provide('currentCity', { currentCity, changeCurrentCity });

    onMounted(() => {
        fetch(FILIALS_URL)
        .then(response => response.json())
        .then(data => {
            filials.push(...data);
            filials.forEach((f) => cities[f.city] ? cities[f.city].push(f) : cities[f.city] = [f]);
        })
    });
</script>

<style lang='scss'>
* {
    box-sizing: border-box; 
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', "Roboto Flex", sans-serif;
}

.back-button {
    position: absolute;
    top: 7px;
    left: 30px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 50%;
    z-index: 4;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08), 0px 5px 50px rgba(0, 0, 0, 0.25);

    .arrowImg {
        width: 32px;
        height: 32px;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>
