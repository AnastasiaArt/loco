<template>
    <div>
        <ul class="gallery-list">
            <li class="gallery-list__item" :key="index" v-for="(history,index) in sliceHistories" :class="{'gallery-list-white': history.img.length > 0}">
                <a @click="click(history)"  href="#modal">
                   <img :src=history.img[0]>
                </a>
            </li>
        </ul>
        <div class="gallery-modal" v-if="clicked && historyModalShow">
            <GalleryModal :clicked="clicked" @close="historyModalShow=false" @next="nextHistory"/>
        </div>
        <button @click.prevent="randomHistories" class="content__text content__text--arrow">Больше историй</button>
    </div>
</template>
<script>
    import GalleryModal from './GalleryModal.vue';

    export default {
        components: {
            GalleryModal
        },
        data() {
            return {
                clicked: null,
                historyModalShow: false,
                currentHistory: '',
                histories: [ {id: '', title: '@ruslanrozhnov1609', text: '', img: ['static/photo.jpg', 'static/tender5.png'] }]
            }
        },
        created () {
            for (let i = 1; i <= 64; i++) {
                this.histories.push({id: '', title: '', text: '', img: []});
            }
        },
        computed: {
            sliceHistories() {
                return this.histories.slice(0,65);
            }
        },

        methods: {
            click(his) {
                this.historyModalShow = true;
                this.clicked = his;
                this.currentHistory = this.sliceHistories.indexOf(his);
            },
            nextHistory() {
                this.currentHistory++;
                this.clicked = this.sliceHistories[this.currentHistory];
            },
            randomHistories() {
                this.histories.sort(() => 0.5 - Math.random());
            }
        }
    }
</script>
