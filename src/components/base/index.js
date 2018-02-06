import message from './message.js';
import oInput from './input';
import oButton from './button';
import oRadioGroup from './radioGroup';
import oSvg from './svg';
import oSwitch from './switch';
import oSelect from './select';
import oCheckbox from './checkbox';
import oText from './text';
import oList from './list';
import oUpload from './upload';
import oTextarea from './textarea';
import oDoc from './doc';
import oLog from './log';

const install = function(Vue) {
  Vue.prototype.$msg = message;
  Vue.component('oInput', oInput);
  Vue.component('oTextarea', oTextarea);
  Vue.component('oButton', oButton);
  Vue.component('oRadioGroup', oRadioGroup);
  Vue.component('oSvg', oSvg);
  Vue.component('oSwitch', oSwitch);
  Vue.component('oSelect', oSelect);
  Vue.component('oCheckbox', oCheckbox);
  Vue.component('oText', oText);
  Vue.component('oList', oList);
  Vue.component('oUpload', oUpload);
  Vue.component('oDoc', oDoc);
  Vue.component('oLog', oLog);
};

export default {
  install
};