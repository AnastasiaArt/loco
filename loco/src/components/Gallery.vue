<template>
    <div class="content">
        <h2 class="content__tag">#UAxLoko</h2>
        <Speed/>
        <p class="content__text">Истории</p>
        <GalleryList />
        <p class="content__text">Больше историй</p>
    </div>
</template>
<script>
    import Speed from './Speed.vue';
    import GalleryList from './GalleryList.vue';

    export default {

        components: {
            Speed,
            GalleryList
        },
        data() {
            return {

            }
        }
    }
</script>

