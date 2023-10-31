<template>
    <input v-model="searchString" class="searchString" placeholder="Введите город" />
    <div class="suggestions">
        <div
            v-for="filial in suggestions"
            :key="filial"
            class="suggestionItem"
            @click="changeCoords(filial.coords)"
        >
            {{ filial.name }}
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref, watch } from 'vue';

    const props = defineProps({
            filials: {
                type: Array,
                required: true,
            },
    });

    const emit = defineEmits(['changeLocation']);

    const searchString = ref('');
    const suggestions = reactive([]);

    watch(searchString, (newValue, oldValue) => {
        suggestions.splice(0, suggestions.length);

        if (!newValue) return;

        const searchStringLower = newValue.toLowerCase();

        props.filials.forEach((filial) => {
            const name = filial.name.toLowerCase();
            const city = filial.city.toLowerCase();
            if (name.includes(searchStringLower) || city.includes(searchStringLower)) {
                suggestions.push({
                    name: `${filial.name} (${filial.city})`,
                    coords: [filial.latitude, filial.longitude]
                });
            }
        });
    });

    function changeCoords(coords) {
        emit('changeLocation', coords);
        suggestions.splice(0, suggestions.length);
        searchString.value = '';
    }

</script>

<style lang="scss" scoped>
input:focus{
    outline: none;
}
.searchString {
    position: absolute;
    min-width: 300px;
    height: 42px;
    top: 10px;
    left: calc(50% - 150px);
    padding: 10px;
    border: none;
    border-radius: 8px;
    z-index: 5;
    font-family: 'Nunito Sans', "Roboto Flex", sans-serif;
    font-size: medium;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08), 0px 5px 50px rgba(0, 0, 0, 0.25);

    @media (max-width: 600px) {
        display: none;
    }
}

.suggestions {
    position: absolute;
    top: calc(10px + 42px);
    left: calc(50% - 150px);
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    // border: 1px solid gray;
    width: 300px;
    z-index: 4;
    background: #ffffff;
}

.suggestionItem {
    padding: 10px;
    &:hover {
        cursor: pointer;
    }
}
</style>
