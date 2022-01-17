// test inject code
InjectionService.injectCode(`console.log('Hi!');`);

// test csp meta - danger
// InjectionService.injectCSPMeta();
// InjectionService.injectCode(`console.log('Hi from injected! (b)');`);

// test inject css
InjectionService.injectCSS('e.isl { color: #00f; }');

let e = document.createElement('e');

e.setAttribute('style', 'display: none;');
e.setAttribute('class', 'isl');

document.querySelector('body').appendChild(e);

let computed = window.getComputedStyle(e);
console.log('<e> color:', computed['color'], computed['color'] == 'rgb(0, 0, 255)');
