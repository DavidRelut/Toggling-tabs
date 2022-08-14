(function() {
  
  const elRoot = document.querySelector('.js-container-segmented');
  const elsLi = elRoot.querySelectorAll('.js-segemented-control__li');
  const elSelect = elRoot.querySelector('.js-segmented-control__select');

  const modifiers = {
    elActive: 'segmented-control__el--active'
  }

  const attributes = {
    value: 'data-value'
  }

  const chooseButton = elLi => {
    elsLi.forEach(el => el.classList.remove(modifiers.elActive));
    elLi.classList.add(modifiers.elActive);
  }

  elsLi.forEach(el => {
    el.addEventListener('click', event => {
      event.preventDefault();
      chooseButton(el)
      elSelect.value = el.getAttribute(attributes.value);
    })
  })

  elSelect.addEventListener('change', event => {
    const lis = [].slice.call(elsLi, 0)
    const targetLis = lis.find(el => {
      return event.target.value === el.getAttribute(attributes.value);
    });
    chooseButton(targetLis)
  })

})();