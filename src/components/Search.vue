<template>
    <v-row no-gutters :style="{ height: height }">
        <v-col class="d-flex justify-space-between">
            <v-btn
                @click="setDrawer"
                v-show="!drawer"
                class="ma-2"
                large
                tile
                icon
                dark
            >
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-text-field
                placeholder="Search"
                append-icon="mdi-magnify"
                :background-color="searchActive?'white':'transparent'"
                :style="searchActive?'width: inherit':searchWidth"
                style="transition:300ms"
                :dark="!searchActive"
                class="flex-grow-0"
                @focus="searchActive=true"
                @blur="searchActive=false"
                autocomplete="off"
                hide-details
                full-width
                rounded
                flat
                solo
            ></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Search',
    props: {
        height: {
            type: String,
            default: 'auto'
        }
    },
    data() {
        return {
            searchActive: false,
            searchWidth: {
                width: '136px'
            }
        }
    },
    computed: {
        ...mapGetters(['drawer'])
    },
    methods: {
        ...mapActions(['toggleDrawer']),
        setDrawer() {
            this.toggleDrawer(true)
        }
    }
}
</script>