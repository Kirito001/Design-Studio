<template>
    <v-container class="fluid px-lg-12 px-md-12 py-md-6" style="position:inherit">
        <Search height="15vh" />
        <p class="text-h4 white--text mb-8">Our Design Process</p>
        <p class="grey--text text--lighten-2">Every step in the process of creating your new product is intentional and logical,<br/>
Each step will build upon each other, so that you end up with a strategic and beautiful product.</p>
        <v-row class="d-flex align-stretch justify-center" style="margin: 90px auto" no-gutters>
            <v-col class="d-flex flex-column align-center" cols="3" sm="2">
                <v-img width="104" src="../assets/research.png" contain></v-img>
                <p class="white--text text-h6 font-weight-regular mt-7">Discover</p>
            </v-col>
            <v-col class="d-flex flex-column align-center" cols="1">
                <v-img width="35.2" src="../assets/arrow.png" contain></v-img>
            </v-col>
            <v-col class="d-flex flex-column align-center" cols="3" sm="2">
                <v-img width="64" src="../assets/solution.png" contain></v-img>
                <p class="white--text text-h6 font-weight-regular mt-8">Solution</p>
            </v-col>
            <v-col class="d-flex flex-column align-center" cols="1">
                <v-img width="35" src="../assets/arrow.png" contain></v-img>
            </v-col>
            <v-col class="d-flex flex-column align-center" cols="3" sm="2">
                <v-img width="88" src="../assets/computer.png" contain></v-img>
                <p class="white--text text-h6 font-weight-regular mt-8">Design</p>
            </v-col>
        </v-row>
        <div class="text-center">
            <v-btn color="#fa992e" depressed rounded x-large dark>Let's Work Together</v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'DesignProcess'
}
</script>