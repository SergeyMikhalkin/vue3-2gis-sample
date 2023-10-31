<template>
    <div id="map" style="width: 100vw; height: 100vh"></div>
</template>

<script setup>
    import { inject, onMounted, watch } from 'vue';
    import DG from '2gis-maps';
    import { markerIcon } from '@/shared/markerIcon';
    import { DEFAULT_CENTER } from '@/shared/const'

    const props = defineProps({
        filials: {
            type: Array,
            required: true,
        },
        centerCoords: {
            type: Array,
        }
    });

    const { currentCity, changeCurrentCity } = inject('currentCity');
    let map;

    onMounted(() => {
        map = DG.map('map', {
            'center': DEFAULT_CENTER, // 55.752823, 37.622405
            'zoom': 11,
            fullscreenControl: false,
            zoomControl: false,
        });

        DG.control.zoom({position: 'bottomright'}).addTo(map);
    });

    watch(props.centerCoords, () => {
        const centerCoord = props.centerCoords.length > 0 ? props.centerCoords : DEFAULT_CENTER;
        map.panTo(centerCoord)
    });

    watch(props.filials, (newValue) => {
        if (newValue.length > 0) { 
            newValue.forEach(filial => {
                DG.marker([filial.latitude, filial.longitude], { icon: markerIcon })
                .on('click', () => changeCurrentCity(filial.city))
                .addTo(map);
            });
        }
    });
    
</script>

<style scoped>
#map {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 2;
}
</style>
