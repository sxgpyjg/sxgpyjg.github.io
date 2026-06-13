document.addEventListener('DOMContentLoaded', function () {

  // ✅ 强制开启行号
  document.querySelectorAll('pre.highlight').forEach(function (pre) {
    pre.classList.add('line-numbers');
  });

  // ✅ 复制按钮
  document.querySelectorAll('pre.highlight').forEach(function (block) {
    const code = block.querySelector('code');
    if (!code) return;

    const btn = document.createElement('button');
    btn.className = 'btn-copy';
    btn.textContent = '复制';

    btn.onclick = function () {
      navigator.clipboard.writeText(code.innerText).then(function () {
        btn.textContent = '已复制 ✓';
        setTimeout(() => btn.textContent = '复制', 1500);
      });
    };

    block.style.position = 'relative';
    block.appendChild(btn);
  });

  // ✅ 防闪屏
  document.documentElement.classList.add('code-ready');
});
