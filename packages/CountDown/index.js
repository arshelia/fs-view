import CountDown from "./src/index";
CountDown.install = function(Vue) {
  Vue.component(CountDown.name, CountDown);
};
export default CountDown;
