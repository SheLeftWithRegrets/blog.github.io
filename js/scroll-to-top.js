// 页面加载或刷新时滚动到顶部
window.onload = function() {
  // 使用 requestAnimationFrame 来实现平滑滚动
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// 处理页面刷新事件
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}; 