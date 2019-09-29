<template>
    <div class="speed">
        <div class="speed__img">
        <img src="../../public/static/speed.png" alt="Speed" width="377" height="244">
        </div>
        <div class="speed__likes">
            <b>{{ currentLikes }}</b>
            <span>Likes</span>
            <div class="speed__icon">
            <img src="../../public/static/like.png" alt="Speed" width="100" height="90">
            </div>
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
