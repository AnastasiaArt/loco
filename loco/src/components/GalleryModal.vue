<template>
    <div class="gallery-modal__wrap">
        <carousel :per-page="1" :mouse-drag="false" class="gallery-modal__carousel">
            <slide v-for="(img, index) in clicked.img" :key="index">
                <img :src=img alt="Фото">
            </slide>
        </carousel>

        <div class="gallery-modal__description">
            <h3> {{clicked.title}}</h3>
            <p><pre>{{clicked.text}}</pre></p>
            <button type="button" @click="$emit('next')" class="gallery-modal__next-btn">Следующая история</button>
        </div>
        <button type="button" @click="$emit('close')" class="gallery-modal__close-btn">Закрыть</button>

    </div>
</template>
<script>
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        components: {
            Carousel,
            Slide
        },
        props: {
            // history: Object
            clicked: Object
        },
        data() {
            return {}
        }

    }
</script>
