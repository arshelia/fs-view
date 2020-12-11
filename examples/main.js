import { createApp } from "vue";
import App from "./App.vue";
import { FsDialog, FloatBottom } from "../packages/index";
createApp(App)
  .component("FsDialog", FsDialog)
  .component("FloatBottom", FloatBottom)
  .mount("#app");
