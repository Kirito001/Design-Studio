<template>
    <v-container class="fill-height justify-between fluid px-lg-12 px-md-12 py-md-6" style="position:inherit">
        <Search />
        <v-row class="mt-4">
            <v-col cols="12" sm="6" v-for="(item, i) in lists" :key="i">
                <v-sheet color="#1967D8" style="padding: 48px 56px" dark>
                    <v-btn color="#357BE9" depressed>{{ item.platform }}</v-btn>
                    <p class="text-h4 mt-6">{{ item.title }}</p>
                    <p class="body-2 font-weight-light grey--text text--lighten-2 mb-7">{{ item.desc }}</p>
                    <a class="white--text text-h6 font-weight-regular text-decoration-none" href="#">{{ item.target }}</a>
                </v-sheet>
            </v-col>
            <v-col class="d-flex justify-end v-bottom-black-bar">
                <v-btn text dark>See More<v-icon right>mdi-arrow-right-bold</v-icon></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'OurWorks',
    data() {
        return {
            lists: [{
                platform: 'Android App',
                title: 'Programming Hero',
                desc: 'Learn Programming for absolute beginners.',
                target: 'View On Google Play'
            }, {
                platform: 'IOS App',
                title: 'Taksi App',
                desc: 'Complete solution of Taxi booking services.',
                target: 'View On UI8'
            }, {
                platform: 'IOS App',
                title: 'E-commerce App',
                desc: 'The most advanced online E-commerce app.',
                target: 'View On Behance'
            }, {
                platform: 'IOS App',
                title: 'Photo Editor App',
                desc: 'New modern photo editing App.',
                target: 'View On Dribbble'
            }]
        }
    },
}
</script>