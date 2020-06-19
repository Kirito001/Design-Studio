<template>
    <v-container class="fill-height justify-between fluid px-lg-12 px-md-12 py-md-6" style="position:inherit">
        <Search />
        <v-row class="mt-4 v-bottom-black-bar">
            <v-col cols="12" sm="6" class="d-flex flex-column align-center px-10" v-for="(item, i) in lists" :key="i">
                <v-img width="93" :src="require(`../assets/${item.icon}.png`)"></v-img>
                <p class="text-h5 white--text mb-2 mt-6">{{ item.title }}</p>
                <span class="text-center body-2 font-weight-light grey--text text--lighten-2 mb-7">{{ item.desc }}</span>
                <p><v-btn color="#fa992e" depressed rounded large dark>View Design</v-btn></p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Services',
    data() {
        return {
           lists: [{
               icon: 'brand-icon',
               title: 'Brand Design',
               desc: 'Brand design is a trademark. In the jargon of graphic advertising it is so much more. Brand design is the identity of a company; this word is expressed as a whole very complex concept.'
           }, {
               icon: 'web-icon',
               title: 'Web Design',
               desc: 'Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design.'
           }, {
               icon: 'mobile-icon',
               title: 'Mobile App Design',
               desc: 'If you want your app to be successful, you have to consider UX to be not just a minor aspect of design, but an essential component of product.'
           }, {
               icon: 'logo-icon',
               title: 'Logo Design',
               desc: 'Our Logo Maker is Trusted by Over 1 Million Brands. Tailor Brands is the industry leading online logo maker trusted by over 1 million brands.'
           }] 
        }
    },
}
</script>

<style lang="scss" scoped>
    .v-application .body-2 {
        line-height: inherit !important;
    }
</style>