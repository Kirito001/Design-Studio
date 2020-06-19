<template>
    <v-app>
		<Sidebar ref="sidebar" />

        <v-main :style="themeStyle">
			<img class="shape-top" src="shape-top.png" />
			<img class="shape-bottom" src="shape-bottom.png" />

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
	},
	data() {
		return {
			themeStyle: {
				background: `#0052cc url('shape-center.png') calc(6% + 288px) 140px no-repeat`,
				backgroundSize: '700px'
			}
		}
	},
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

// 适应底部小黑条
.v-bottom-black-bar {
    margin-bottom: constant(safe-area-inset-bottom);
	margin-bottom: env(safe-area-inset-bottom);
}

// 去除Google游览器自动填充账号出现的背景
input {
	background-color: transparent !important;
}
input:-webkit-autofill {
	-webkit-transition: background-color 1s ease-in-out 6000s;
	-webkit-text-fill-color: #fff !important;
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
	width: 400px;
	position: absolute;
	top: 0;
	right: 0;
	pointer-events: none;
}
.shape-bottom {
	width: 520px;
	position: absolute;
	bottom: 0;
	right: 0;
	pointer-events: none;
}
</style>