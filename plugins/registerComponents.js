import vSelect from "vue-select";
import ChevronDown from "./assets/icons/24/chevron_down.svg";

export default defineNuxtPlugin((nuxtApp) => {
  vSelect.props.components.default = () => ({
    OpenIndicator: ChevronDown,
  });

  nuxtApp.vueApp.component("v-select", vSelect);
});
