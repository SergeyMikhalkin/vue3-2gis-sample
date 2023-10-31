<template>
    <div class="office-wrapper">
        <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
            <div class="accordion-header" @click="toggleAccordion(index)">
                <div>{{ item.cityName }}</div><div class="arrow" :class="{ arrowOpened: item.isOpen }"></div>
            </div>
            <div v-show="item.isOpen" class="accordion-content">
                <OfficeItem
                    v-for="office in item.offices"
                    :filial="office"
                    :key="office.id"
                    @click="$emit('changeLocation', [office.latitude, office.longitude])"
                ></OfficeItem>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { inject, reactive, watch } from 'vue';
    import OfficeItem from './OfficeItem.vue';

    let accordionItems = reactive([]);

    const emit = defineEmits(['changeLocation']);
    const { currentCity, changeCurrentCity } = inject('currentCity');

    function toggleAccordion(index) {
        accordionItems.forEach((item, i) => { 
            item.isOpen = i === index;
            if (i === index) {
                changeCurrentCity(item.cityName);
            }
        });
    }


    watch(currentCity, (newValue) => {
        console.log('currentCity', newValue)
        if (newValue !== '') {
            accordionItems.forEach((item) => { 
                item.isOpen = item.cityName === newValue;
            });
        }
    });

    const cities = inject('cities');

    watch(cities, (newValue) => {
        const citiesList = Object.keys(newValue);
        accordionItems.splice(0, accordionItems.length);

        const newAccordionItems = citiesList.map((city, index) => ({ 
            cityName: city, 
            isOpen: index === 0,
            offices: [...newValue[city]],
        }));

        accordionItems.push(...newAccordionItems);
    });

</script>

<style scoped>
.office-wrapper {
    width: 100%;
    overflow: scroll;
}

.accordion-item {
    margin-bottom: 10px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.accordion-header {
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}

.arrow {
    width: 24px;
    height: 24px;
    background: url('../assets/arrow.svg');
    background-size: cover;
}

.arrowOpened {
    transform: rotate(180deg);
}

.accordion-content {
    padding: 10px 0;
}
</style>
