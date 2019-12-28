import DefaultLayout from '~/layouts/Default.vue';

// PACKAGES
import BootstrapVue from 'bootstrap-vue';
import lottie from "lottie-web";

// STYLES
import './assets/styles/main.scss';

// MIXINGS
import checkIfMobile from './mixins/checkIfMobile';
import pageLoad from './mixins/pageLoad';


// MAIN APPLICATION
export default function(Vue, { router, head, isClient }) {
	head.script.push({
		src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
	});
	Vue.use(BootstrapVue);
	Vue.use(lottie);

	Vue.component('Layout', DefaultLayout);
	Vue.mixin(checkIfMobile);
	Vue.mixin(pageLoad);

}
