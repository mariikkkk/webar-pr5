export class UIController {
  constructor(model, start, stop) {
    this.start = document.querySelector('#start');
    this.exit = document.querySelector('#exit');
    const panel = document.querySelector('#panel');
    const shape = document.querySelector('#model');
    const color = document.querySelector('#color');
    const spin = document.querySelector('#spin');

    // Кнопки панели не должны одновременно размещать объект в AR.
    panel.addEventListener('beforexrselect', event => event.preventDefault());
    shape.onchange = () => model.setModel(shape.value);
    color.onchange = () => model.setColor(color.value);
    document.querySelector('#left').onclick = () => model.rotate(-Math.PI / 12);
    document.querySelector('#right').onclick = () => model.rotate(Math.PI / 12);
    spin.onclick = () => {
      model.autoRotate = !model.autoRotate;
      spin.setAttribute('aria-pressed', String(model.autoRotate));
      spin.textContent = model.autoRotate ? 'Остановить' : 'Автовращение';
    };
    document.querySelector('#reset').onclick = () => {
      model.reset();
      shape.value = 'cube';
      color.value = '#2196f3';
      spin.setAttribute('aria-pressed', 'false');
      spin.textContent = 'Автовращение';
    };
    this.start.onclick = start;
    this.exit.onclick = stop;
  }
  setAR(active) {
    this.start.hidden = active;
    this.exit.hidden = !active;
    document.querySelector('#place').hidden = !active;
  }
}
