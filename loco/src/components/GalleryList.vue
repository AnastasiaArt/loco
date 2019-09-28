<template>
    <div>
        <ul class="gallery-list">
            <li class="gallery-list__item" :key="index" v-for="(history,index) in histories">
                <a @click="click(history)">
                    <img :src=history.img[0]>
                </a>
            </li>
        </ul>
        <div class="gallery-modal" v-if="clicked && historyModalShow">
            <GalleryModal :clicked="clicked"  @close="historyModalShow=false" @next="nextHistory"/>
        </div>
    </div>
</template>
<script>
    import GalleryModal from './GalleryModal.vue';

    export default {
        components: {
            GalleryModal
        },
        data() {
            return{
                clicked: null,
                historyModalShow: false,
                currentHistory: '',
                histories: [
                    { id:'1',  title: '@ruslanrozhnov1609', text: 'Мне 38 лет, и это тот возраст в котором ты уже сформирован как личность, все жизненные приоритеты расставлены, а новые, четкие цели поставлены. Сегодня у меня есть все: \n' +
                            '- любимая семья: жена и маленький сынок. \n' +
                            '- своя квартира. \n' +
                            '- хорошая работа. \n' +
                            '- надежная немецкая машина. \n' +
                            '- верные друзья. \n' +
                            'Но глядя на свою жизнь, я понимаю, всего этого я достиг только благодаря моему 1% нечеловеческого терпения и решительности. \n' +
                            '\n' +
                            'Решительности поступить в военный институт, где был конкурс 10 чел. на место. Терпения отучиться там 4 года и не бросить, не сломаться, когда другие опускали руки. Решительности в дальнейшем стать военным офицером ВДВ. Решительности неоднократно прыгнуть с рампы Ми-8 с парашутом, когда до жути боишься высоты. После увольнения из вооруженных сил, решительности стать персональным тренером тренажерного зала, начиная все с нуля. Терпения помагать людям становиться лучше и ставать сильнее самому. \n' +
                            '\n' +
                            'Все эти жизненные испытания сформировали меня, мой характер, воспитали меня таким какой я есть. ' , img: ['static/photo.jpg', 'static/tender1.png']},
                    { id:'2',  title: '@ruslanrozhnov1609', text: 'Berlin', img: ['static/photo.jpg'] },
                    { id:'3',  title: '@ruslanrozhnov1609', text: 'Berlin', img: ['static/photo.jpg'] },
                    { id:'4',  title: 'Germany', text: 'Berlin' , img: [] },
                    { id:'5',  title: 'Germany2', text: 'Berlin', img: ['static/photo.jpg'] },
                    { id:'6',  title: 'Germany3', text: 'Berlin', img: ['static/photo.jpg'] },
                    { id:'7',  title: 'Germany', text: 'Berlin' , img: ['static/photo.jpg', 'static/photo.jpg']},
                    { id:'8',  title: 'Germany2', text: 'Berlin', img: ['static/photo.jpg'] },
                    { id:'9',  title: 'Germany3', text: 'Berlin', img: [] },
                    { id:'10',  title: 'Germany', text: 'Berlin' , img: ['static/photo.jpg', 'static/photo.jpg']},
                    { id:'11',  title: 'Germany2', text: 'Berlin', img: ['static/photo.jpg'] },
                    { id:'12',  title: 'Germany3', text: 'Berlin', img: [] },
                    { id:'13',  title: 'Germany', text: 'Berlin' , img: ['static/photo.jpg', 'static/photo.jpg']},
                    { id:'14',  title: 'Germany2', text: 'Berlin', img: ['static/photo.jpg'] },
                    { id:'15',  title: 'Germany3', text: 'Berlin', img: ['static/photo.jpg'] }
                ],
            }
        },
        methods: {
            click(his) {
                this.historyModalShow = true;
                this.clicked = his;
                this.currentHistory = this.histories.indexOf(his);
            },
            nextHistory() {
                this.currentHistory ++;
                this.clicked = this.histories[this.currentHistory];
            }
        }
    }
</script>
