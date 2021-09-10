export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "my nuxt app",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ "http-equiv": "X-UA-Compatible", content: "IE=edge" },
			{ name: "author", content: "Justified Technologies" },
		],
		script: [
			{ type: "text/javascript", src: "/js/vend.js", defer: true, body: true },
			{ type: "module", src: "/js/vendors.js", defer: true, body: true },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				href: "/css/vendors.css",
				type: "text/css",
				rel: "stylesheet",
			},
			{
				href: "/css/style.css",
				type: "text/css",
				rel: "stylesheet",
			},
			{
				href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700",
				rel: "stylesheet",
			},
		],
	},
	target: "static",
	// Global CSS: https://go.nuxtjs.dev/config-css
	// css: ['@/assets/css/vendors.css', '@/assets/css/style.css'],
	// js: ['@assets/js/app.js'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		"bootstrap-vue/nuxt",
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://go.nuxtjs.dev/pwa
		"@nuxtjs/pwa",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: "en",
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

};
