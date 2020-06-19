<template>
    <v-app>
		<Sidebar ref="sidebar" />

        <v-main class="theme-style">
			<v-img class="shape-top" src="/shape-top.png" width="400"></v-img>
			<v-img class="shape-bottom" src="/shape-bottom.png" width="520"></v-img>

			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</v-main>
    </v-app>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
	name: "App",
	components: {
		Sidebar
	}
};
</script>

<style lang="scss">
*, .v-application .text-h1 {
	font-family: NunitoSans-Bold !important;
	text-transform: none !important;
}
.v-tabs--vertical > .v-tabs-bar .v-tab {
	justify-content: left;
	padding-left: 81px;
}

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}
::-webkit-scrollbar-track {
	background-color: #0356ce;
}
::-webkit-scrollbar-thumb {
	background-color: rgba(255, 255, 255, .4)
}

.theme-style{
	background: #0052cc url('/shape-center.png') calc(6% + 288px) 140px no-repeat;
	background-size: 700px;
}
.shape-top {
	position: absolute;
	top: 0;
	right: 0;
	pointer-events: none;
}
.shape-bottom {
	position: absolute;
	bottom: 0;
	right: 0;
	pointer-events: none;
}
</style>