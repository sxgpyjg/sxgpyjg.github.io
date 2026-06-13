
document.addEventListener('DOMContentLoaded', function () {

  // ✅ 只处理代码块
  document.querySelectorAll('pre.highlight').forEach(function (block) {

    // ❌ 确保不会误加行号
    block.classList.remove('line-numbers');

    var code = block.querySelector('code');
    if (!code) return;

    // ✅ 复制按钮
    var btn = document.createElement('button');
    btn.className = 'btn-copy';
    btn.textContent = '复制';

    btn.onclick = function () {
      navigator.clipboard.writeText(code.innerText).then(function () {
        btn.textContent = '已复制 ✓';
        setTimeout(function () {
          btn.textContent = '复制';
        }, 1500);
      });
    };

    block.style.position = 'relative';
    block.appendChild(btn);
  });

  // ✅ 防闪屏
  document.documentElement.classList.add('code-ready');
});
