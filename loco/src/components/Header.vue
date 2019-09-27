<template>
    <header class="header">
        <div class="header__wrap">
            <a href="#" class="header__logo header__logo--zindex">
                <img alt="Loco logo" src="../assets/loco.png" width="130" height="140">
            </a>
            <a href="#" class="header__logo ">
                <img alt="Armour  logo" src="../assets/armour.png" width="210" height="140">
            </a>

        </div>
    </header>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>
