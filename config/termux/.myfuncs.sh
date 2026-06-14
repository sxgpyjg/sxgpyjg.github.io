# ~/.myfuncs.sh

# ===== yjg 写文章 =====
yjg() {
  cd ~/gitdemo || {
    echo "❌ 找不到 ~/gitdemo 目录"
    return 1
  }

  DATE=$(date '+%Y-%m-%d')
  FILE="_posts/${DATE}-$1.md"

  cat > "$FILE" <<'EOL'
---
layout: post
title: "TITLE_PLACEHOLDER"
date: DATE_PLACEHOLDER
categories: 拾光 随笔 时光存档
tags: 风正扬
---

CURSOR_HERE
EOL

  sed -i "s|TITLE_PLACEHOLDER|$1|g" "$FILE"
  sed -i "s|DATE_PLACEHOLDER|$(date '+%Y-%m-%d %H:%M:%S %:z')|g" "$FILE"
  sed -i '/^CURSOR_HERE$/d' "$FILE"

  ${EDITOR:-nano} "$FILE"
  bc "$1"
}

# ===== bc 提交 =====
bc() {
  cd ~/gitdemo || {
    echo "❌ 找不到 ~/gitdemo 目录"
    return 1
  }

  git add -A

  if git diff --cached --quiet; then
    echo "ℹ️ 没有新变动，仅推送已有提交"
    git push gitdemo master
    return 0
  fi

  git commit -m "add $1 $(date '+%Y-%m-%d %H:%M')"
  git push gitdemo master
  echo "✅ 已完成提交并推送"
}

