<template>
    <v-container class="fill-height fluid px-lg-12 px-md-12 py-md-6" style="position:inherit">
        <v-sheet color="transparent" dark>
            <p class="text-h4 mt-6">Tell us about your project.</p>
            <p class="mb-10">We want to learn more about your project. Please fill out this form</p>
            <v-row dense>
                <v-col cols="6" sm="4">
                    <p class="text-h6 font-weight-regular">First Name *</p>
                    <v-text-field
                        background-color="#1a6adf"
                        autocomplete="off"
                        class="rounded-0"
                        clearable
                        outlined
                        solo
                        flat
                    ></v-text-field>
                </v-col>
                <v-col cols="6" sm="4">
                    <p class="text-h6 font-weight-regular">Last Name *</p>
                    <v-text-field
                        background-color="#1a6adf"
                        autocomplete="off"
                        class="rounded-0"
                        clearable
                        outlined
                        solo
                        flat
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="8">
                    <p class="text-h6 font-weight-regular">Company Name</p>
                    <v-text-field
                        background-color="#1a6adf"
                        autocomplete="off"
                        class="rounded-0"
                        clearable
                        outlined
                        solo
                        flat
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="8">
                    <p class="text-h6 font-weight-regular">Email Address *</p>
                    <v-text-field
                        background-color="#1a6adf"
                        autocomplete="off"
                        class="rounded-0"
                        clearable
                        outlined
                        solo
                        flat
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="8">
                    <label class="text-h6 font-weight-regular d-block">Project Type *</label>
                    <v-checkbox
                        color="#fa992e"
                        class="d-inline-block mr-10"
                        v-for="(item, i) in checkbox"
                        :key="i"
                        :label="item"
                        hide-details
                    ></v-checkbox>
                </v-col>
            </v-row>
            <p class="mt-10"><v-btn color="#fa992e" width="200" depressed rounded x-large dark>Submit</v-btn></p>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name: 'ContactUs',
    data() {
        return {
            checkbox: ['Banding', 'Mobile App Design', 'Web Design', 'Others']
        }
    },
}
</script>