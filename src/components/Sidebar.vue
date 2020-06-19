<template>
    <v-navigation-drawer
        width="288"
        style="box-shadow: 0px 28px 65px 0px rgba(40,40,40,0.13)"
        color="#0356ce"
        v-model="bindDrawer"
        floating
        dark
        app
    >
        <v-sheet height="178" color="transparent" class="d-flex justify-center align-center">
            <v-avatar size="72">
                <v-img src="../assets/avatar.png"></v-img>
            </v-avatar>
        </v-sheet>
        <v-tabs background-color="transparent" slider-size="6" vertical>
            <v-tabs-slider color="#FA992E" class="right"></v-tabs-slider>
            <v-tab class="mb-5" to="/home">Home</v-tab>
            <v-tab class="mb-5" to="/designProcess">Design Process</v-tab>
            <v-tab class="mb-5" to="/services">Services</v-tab>
            <v-tab class="mb-5" to="/ourWorks">Our Works</v-tab>
            <v-tab class="mb-5" to="/contactUs">Contact Us</v-tab>
        </v-tabs>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Sidebar',
    computed: {
        ...mapGetters(['drawer']),
        bindDrawer: {
            get() {
                return this.drawer
            },
            set(v) {
                return this.toggleDrawer(v)
            }
        }
    },
    methods: {
        ...mapActions(['toggleDrawer'])
    }
}
</script>

<style lang="sass">
@import '~vuetify/src/styles/styles.sass'
</style>

<style lang="scss">
    .theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
        color: #ffffff !important;
    }
</style>