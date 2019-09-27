<template>
    <carousel :per-page="1"  :mouse-drag="false" autoplay class="carousel__list">
        <slide>
            <div class="carousel__item">
                <img src="../assets/slider-1.jpg" alt="Slider image" width="1710" height="600">
            </div>
        </slide>
        <slide>
            <div class="carousel__item">
                <img src="../assets/slider-1.jpg" alt="Slider image" width="1710" height="600">
            </div>
        </slide>
        <slide>
            <div class="carousel__item">
                <img src="../assets/slider-1.jpg" alt="Slider image" width="1710" height="600">
            </div>
        </slide>
    </carousel>
</template>
<script>
    import { Carousel, Slide } from 'vue-carousel';

export default {

components: {
Carousel,
Slide
}

};
</script>
