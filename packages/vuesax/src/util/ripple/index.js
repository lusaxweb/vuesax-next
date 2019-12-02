import { setColor } from '../index';
var ripple = function (evt, color, solid) {
    if (color === void 0) { color = ''; }
    if (solid === void 0) { solid = false; }
    var el = evt.currentTarget;
    var offset = el.getBoundingClientRect();
    var x = evt.clientX - offset.left;
    var y = evt.clientY - offset.top;
    var time = 0.6;
    if (el.clientWidth > 150) {
        time = 1.2;
    }
    var effectContent = document.createElement('div');
    effectContent.className = 'vs-ripple-content';
    var effect = document.createElement('div');
    setColor('color', color, effect);
    effect.className = 'vs-ripple';
    if (solid) {
        effect.classList.add('vs-ripple--solid');
    }
    effect.style.transition = "all " + time + "s ease";
    effect.style.left = x + "px";
    effect.style.top = y + "px";
    effectContent.appendChild(effect);
    el.appendChild(effectContent);
    effect.style.width = el.clientWidth * 2.5 + "px";
    effect.style.height = el.clientWidth * 2.5 + "px";
    effect.style.opacity = "1";
    var noTime = false;
    setTimeout(function () {
        noTime = true;
    }, 300);
    function removeEffect(evt) {
        effect.style.transition = "all 0." + time * 600 + "s ease";
        setTimeout(function () {
            effect.style.opacity = "0";
            setTimeout(function () {
                el.removeChild(effectContent);
            }, time * 300);
        }, (noTime ? 0 : time * 400));
        evt.target.removeEventListener('mouseup', removeEffect);
        evt.target.removeEventListener('mouseleave', removeEffect);
    }
    evt.target.addEventListener('mouseup', removeEffect);
    evt.target.addEventListener('mouseleave', removeEffect);
};
var rippleReverse = function (evt) {
    var el = evt.currentTarget;
    var offset = el.getBoundingClientRect();
    var x = evt.clientX - offset.left;
    var y = evt.clientY - offset.top;
    var time = 0.6;
    if (el.clientWidth > 150) {
        time = 1.2;
    }
    var effectContent = document.createElement('div');
    effectContent.className = 'vs-ripple-content';
    var effect = document.createElement('div');
    effect.className = 'vs-ripple-invert';
    // effect.style.transition = `all ${time}s ease`
    effect.style.left = x + "px";
    effect.style.top = y + "px";
    effect.style.width = el.clientWidth * 2.5 + "px";
    effect.style.height = el.clientWidth * 2.5 + "px";
    effect.style.opacity = "0";
    effectContent.appendChild(effect);
    el.appendChild(effectContent);
    setTimeout(function () {
        effect.style.width = "0px";
        effect.style.height = "0px";
        effect.style.opacity = "0.5";
    }, 1);
    var noTime = false;
    setTimeout(function () {
        noTime = true;
    }, 300);
    function removeEffect(evt) {
        effect.style.transition = "all 0." + time * 600 + "s ease";
        setTimeout(function () {
            effect.style.opacity = "0";
            setTimeout(function () {
                el.removeChild(effectContent);
            }, time * 300);
        }, (noTime ? 0 : time * 400));
        evt.target.removeEventListener('mouseup', removeEffect);
        evt.target.removeEventListener('mouseleave', removeEffect);
    }
    evt.target.addEventListener('mouseup', removeEffect);
    evt.target.addEventListener('mouseleave', removeEffect);
};
//
var rippleCut = function (evt) {
    var el = evt.currentTarget;
    var offset = el.getBoundingClientRect();
    var x = evt.clientX - offset.left;
    var y = evt.clientY - offset.top;
    var time = 0.6;
    if (el.clientWidth > 150) {
        time = 1.2;
    }
    var effectContent = document.createElement('div');
    effectContent.className = 'vs-ripple-content';
    var effect = document.createElement('div');
    var effect2 = document.createElement('div');
    effect.className = 'vs-ripple-cut-1';
    effect2.className = 'vs-ripple-cut-2';
    // effect.style.transition = `all ${time}s ease`
    effect.style.left = effect2.style.left = x + "px";
    effect.style.top = effect2.style.top = y + "px";
    effect.style.width = effect2.style.width = el.clientWidth * 2.5 + "px";
    effect.style.height = effect2.style.height = el.clientWidth * 2.5 + "px";
    effect.style.opacity = effect2.style.opacity = "1";
    effectContent.appendChild(effect);
    effectContent.appendChild(effect2);
    el.appendChild(effectContent);
    setTimeout(function () {
        effect.style.left = "-" + el.clientWidth * 1.3 + "px";
        effect.style.opacity = "1";
        effect2.style.left = el.clientWidth * 1.3 + "px";
        effect2.style.opacity = "1";
    }, 1);
    var noTime = false;
    setTimeout(function () {
        noTime = true;
    }, 300);
    function removeEffect(evt) {
        effect.style.transition = "all 0." + time * 600 + "s ease";
        setTimeout(function () {
            effect.style.opacity = "0";
            setTimeout(function () {
                el.removeChild(effectContent);
            }, time * 300);
        }, (noTime ? 0 : time * 400));
        evt.target.removeEventListener('mouseup', removeEffect);
        evt.target.removeEventListener('mouseleave', removeEffect);
    }
    evt.target.addEventListener('mouseup', removeEffect);
    evt.target.addEventListener('mouseleave', removeEffect);
};
export default ripple;
export { rippleReverse, rippleCut };
