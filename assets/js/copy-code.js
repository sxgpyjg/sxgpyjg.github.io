document.addEventListener('DOMContentLoaded', function () {

  // ✅ 遍历所有代码块
  document.querySelectorAll('pre.highlight').forEach(function (pre) {

    // ✅ 强制开启行号
    pre.classList.add('line-numbers');

    // ✅ 强制给行号留空间（解决“有占位但不显示”）
    pre.style.position = 'relative';
    pre.style.paddingLeft = '3.5em';

    // ✅ 行号容器样式（直接写进 DOM）
    var rows = pre.querySelector('.line-numbers-rows');
    if (rows) {
      rows.style.position = 'absolute';
      rows.style.left = '0';
      rows.style.top = '1em';
      rows.style.width = '2.5em';
      rows.style.borderRight = '1px solid #444';
      rows.style.color = '#888';
      rows.style.textAlign = 'right';
      rows.style.pointerEvents = 'none';
    }
  });

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

