import FsDialog from "./src/index";

FsDialog.install = function(Vue) {
  Vue.component(FsDialog.name, FsDialog);
};
export default FsDialog;
