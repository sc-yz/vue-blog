import HelloWorld from './HelloWorld';
import Vue from 'vue';
const constructor = Vue.extend(HelloWorld);
let seed = 1;
let instance;
let instances = [];

function Notification(title) {
  console.log(title);
  instance = new constructor();
  instance.id = 'notification_' + seed++;
  instance.$mount();
  instance.title = title + '---' + instance.id;
  instance.top = seed * 50;
  instances.push(instance);
  document.body.appendChild(instance.$el);

  setTimeout(() => {
    Notification.remove();
  }, 5000);
}

['hello', 'success', 'warning', 'info', 'error'].forEach((type) => {
  Notification[type] = (options) => {
    return Notification(options);
  };
});

Notification.remove = function () {
  for (let item of instances) {
    document.body.removeChild(item.$el);
  }
};

Notification.install = function (_vue) {
  _vue.prototype.$notification = Notification;
};

export default Notification;
