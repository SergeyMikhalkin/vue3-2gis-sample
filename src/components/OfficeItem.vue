<template>
    <div class="filial">
        <h3 class="name">{{ name }}</h3>
        <div class="contacts">
            <div class="contacts-block">
                <span class="address">{{ address }}</span>
                <a :href="phoneLink" class="phone">{{ phone }}</a>
            </div>
            <div class="shedule-block">
                <span>График работы</span>
                <span>{{ shedule }}</span>
            </div>
        </div>
        <span
            :class="[{open: isFilialOpen}, {closed: !isFilialOpen}]"
            >{{ isFilialOpen ? 'Открыто сейчас' : 'Закрыто сейчас' }}</span
        >
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        filial: {
            type: Object,
            required: true,
        }
    });

    const { name } = props.filial;
    const address = `ул. ${props.filial.street}, дом ${props.filial.houseNumber}`;

    const phone = `тел. ${props.filial.phoneNumber}`;
    const phoneLink = `tel:${phone}`;

    const sheduleStart = props.filial.startTime.split(':').slice(0, 2).join(':');
    const sheduleEnd = props.filial.endTime.split(':').slice(0, 2).join(':');
    const shedule = `${sheduleStart} - ${sheduleEnd}`;

    const isFilialOpen = ref(true);
    
</script>

<style lang="scss" scoped>
.filial {
    width: 100%;
    padding: 15px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background: rgba($color: #22C062, $alpha: 0.1)
    }
}

.name {
    margin: 0;
}

.contacts {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.contacts-block {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
}

.shedule-block {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.phone {
    color: #000000;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

.open {
    color: #22C062;
}

.closed {
    color: salmon;
}
</style>
