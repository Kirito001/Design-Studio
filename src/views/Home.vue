<template>
    <v-container class="fluid px-lg-12 px-md-12 py-md-6" style="position:inherit">

        <Search height="20vh" />

        <v-sheet color="transparent" class="float-right mt-8 d-none d-sm-block" style="width:40px">
            <v-btn
                color="#0B59D3"
                class="rounded-lg my-3"
                v-for="(item, i) in share"
                :key="i"
                depressed
                small
                tile
                fab
                dark
            >
                <v-icon>mdi-{{ item }}</v-icon>
            </v-btn>
        </v-sheet>
        <v-sheet color="transparent" style="font-size:4.8rem" dark>Design Studio</v-sheet>
        <v-sheet color="transparent" class="text-h6 font-weight-regular pl-1 mt-4 mb-12" dark>
            Discover<span class="mx-6">-</span>Solution<span class="mx-6">-</span>Design
        </v-sheet>
        <v-btn color="#fa992e" depressed rounded x-large dark>See Our Works</v-btn>
        <v-sheet color="transparent" height="18vh"></v-sheet>
        <v-row no-gutters>
            <v-col cols="12" sm="3" class="mt-6">
                <p class="text-h6 font-weight-regular white--text" dark>Our Vision —</p>
                <span class="caption font-weight-thin grey--text text--lighten-2">Having a strong vision statement and a mission statement is critical for guiding and growing your design firm.</span>
            </v-col>
            <v-col cols="12" sm="3" offset-sm="2" class="mt-6">
                <p class="text-h6 font-weight-regular white--text" dark>Our History —</p>
                <span class="caption font-weight-thin grey--text text--lighten-2">We have been in business for over thirteen years, and in this time we've built a reputation with our clients.</span>
            </v-col>
        </v-row>
        <v-divider class="mb-3 mt-8 d-block d-sm-none" dark></v-divider>
        <v-footer class="transparent d-flex justify-center d-block d-sm-none" padless dark>
            <v-btn
                color="#0B59D3"
                class="rounded-lg mx-2"
                v-for="(item, i) in share"
                :key="i"
                depressed
                small
                tile
                fab
                dark
            >
                <v-icon>mdi-{{ item }}</v-icon>
            </v-btn>
        </v-footer>
    </v-container>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            share: ['facebook-workplace', 'twitter', 'github', 'discord', 'google-plus']
        }
    },
}
</script>