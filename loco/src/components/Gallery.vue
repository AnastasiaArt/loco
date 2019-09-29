<template>
    <div class="content">
        <a name="modal"></a>
        <h2 class="content__tag">#UAxLoco</h2>
        <Speed/>
        <p class="content__text">Истории</p>
        <GalleryList />
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

