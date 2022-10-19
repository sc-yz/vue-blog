const throttle = {
  bind(el, binding) {
    const { value, arg } = binding;
    console.log('binding', binding);
    const wait = arg || 3000;
    let timer = null;
    el.addEventListener('click', () => {
      if (!timer) {
        timer = setTimeout(() => {
          value();
          timer = null;
        }, wait);
      }
    });
  },
};
export default throttle;
