import FsDialog from "./fsDialog/index";
import FloatBottom from "./FloatBottom/index";
const components = [FsDialog, FloatBottom];

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { install, FsDialog, FloatBottom };
export default { install, ...components };
