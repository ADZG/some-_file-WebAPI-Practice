

// 动画函数的三个参数 对象,目标位置,20毫秒移动的距离

function animation(element, target, step) {
    // 将定时器的返回值，储存在一个对象的属性中
    clearInterval(element.time)
    element.time = setInterval(function () {
        // 获取当前div位置
        var current = element.offsetLeft;
        // 如果当前的位置，小于目标距离，则当前走的正方向
        if (current <= target) {
            current += step;
        } else {
            // 如果当前的位置大于目标的位置，说明走的反方向
            current -= step;
        }
        element.style.left = current + "px";
        // 如果目标位置减去当前的位置，得到的绝对值如果小于参数，则直接到达位置
        if (Math.abs(target-current)<= step) {
            element.style.left = target + "px";
            clearInterval(element.time);
        }
    }, 30)
}