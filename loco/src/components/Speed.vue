<template>
    <div class="speed">
        <img src="../../public/static/speed.png" alt="Speed" width="420" height="270">
        <div class="speed__likes">
            <b>{{ currentLikes}}</b>
            <span>Likes</span>
            <img src="../../public/static/like.png" alt="Speed" width="100" height="90">
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                currentLikes: 0,
                timer: null,
            }
        },
        mounted() {
            this.startTimer()
        },
        destroyed() {
            this.stopTimer()
        },
        methods: {
            startTimer() {
                this.timer = setInterval(() => {
                    this.currentLikes++
                }, 10)
            },
            stopTimer() {
                clearTimeout(this.timer)
            },
        },
        watch: {
            currentLikes(like) {
                if (like === 5343) {
                    this.stopTimer()
                }
            }

        }
    }
</script>
