import DefaultLayout from '~/layouts/Default.vue';

// PACKAGES
import BootstrapVue from 'bootstrap-vue';
import lottie from 'lottie-web';

// STYLES
import './assets/styles/bootstrap.scss';

// MIXINGS
import checkIfMobile from './mixins/checkIfMobile';
import pageLoad from './mixins/pageLoad';
import currentPath from './mixins/currentPath';
import imgAltFromTitle from './mixins/imgAltFromTitle';

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
	Vue.mixin(currentPath);
	Vue.mixin(imgAltFromTitle);
}
