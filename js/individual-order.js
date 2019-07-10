let topping = document.querySelector('.topping'),
    toppingBtn = topping.querySelector('.button'),
    toppingInput = document.querySelector('#choice-filling'),
    sizeInput = document.querySelector('#choice-size'),
    sizeCake = document.querySelector('.size-order-item'),
    oneSize = sizeCake.querySelector('.circle-1'),
    twoSize = sizeCake.querySelector('.circle-2'),
    threeSize = sizeCake.querySelector('.circle-3'),
    fourSize = sizeCake.querySelector('.circle-5'),
    decor = document.querySelector('.checkout'),
    decorInput = document.querySelector('#choice-formalization'),
    decorOne = decor.querySelector('#decor-1'),
    decorTwo = decor.querySelector('#decor-2');


toppingBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    toppingInput.value = null;
    toppingInput.value = topping.querySelector('h4').textContent;

});

oneSize.addEventListener('click', function(evt) {
    evt.preventDefault();
    sizeInput.value = null;
    sizeInput.value = oneSize.querySelector('p').textContent;

});

twoSize.addEventListener('click', function(evt) {
    evt.preventDefault();
    sizeInput.value = null;
    sizeInput.value = twoSize.querySelector('p').textContent;

});
threeSize.addEventListener('click', function(evt) {
    evt.preventDefault();
    sizeInput.value = null;
    sizeInput.value = threeSize.querySelector('p').textContent;

});
fourSize.addEventListener('click', function(evt) {
    evt.preventDefault();
    sizeInput.value = null;
    sizeInput.value = fourSize.querySelector('p').textContent;

});

decorOne.addEventListener('click', function(evt) {
    evt.preventDefault();
    decorInput.value = null;
    decorInput.value = decorOne.querySelector('.checkout-head').textContent;
});
decorTwo.addEventListener('click', function(evt) {
    evt.preventDefault();
    decorInput.value = null;
    decorInput.value = decorTwo.querySelector('.checkout-head').textContent;
});
