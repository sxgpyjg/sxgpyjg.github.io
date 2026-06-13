document.addEventListener('DOMContentLoaded', function () {

  // ✅ 遍历所有代码块
  document.querySelectorAll('pre.highlight').forEach(function (pre) {

  // ✅ 复制按钮
  document.querySelectorAll('pre.highlight').forEach(function (block) {
    var code = block.querySelector('code');
    if (!code) return;

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

    block.appendChild(btn);
  });

  // ✅ 防闪屏
  document.documentElement.classList.add('code-ready');
});

