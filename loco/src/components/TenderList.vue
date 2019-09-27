<template>
    <section class="tender">
        <h1 class="tender__title">Участвуйте в конкурсах в социальных сетях Under Armour и получайте призы!</h1>
        <ul class="tender__list">
            <li class="tender__item" v-for="(item, index) in items" :key="index">
                <p><pre> {{item.title}} </pre></p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {

                items: [
                    {
                        title: 'Мяч \n' +
                            'Under Armour'
                    },
                    {
                        title: 'Джерси'
                    },
                    {
                        title: 'Поездка на матч \n' +
                            'в рамках УЕФА \n' +
                            'Лиги Чемпионов'
                    },
                    {
                        title: 'Билеты \n' +
                            'на домашние \n' +
                            'матчи'
                    },
                    {
                        title: 'Экипировка \n' +
                            'от Under Armour'
                    }
                ]

            }
        }
    }
</script>
