function ClickNav() {
    var NavMenu = document.getElementById("nav-bar");

    // 切换元素的显示状态
    if (NavMenu.style.display === "none") {
        NavMenu.style.display = "block";
    } else {
        NavMenu.style.display = "none";
    }
}


document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // 立即减少透明度，开始平滑消失过程
    setTimeout(() => {
        trail.style.opacity = 0;
    }, 0);

    // 设置动画完成后删除 trail 元素
    setTimeout(() => {
        document.body.removeChild(trail);
    }, 70); // 延长时间使效果更顺滑
});