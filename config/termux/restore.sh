#!/data/data/com.termux/files/usr/bin/bash

# --- 自动安装依赖 ---
echo "🔧 正在检查并安装基础依赖..."
pkg update -y
pkg install -y git zsh curl

# --- 自动安装 tmoe-zsh 主题 ---
echo "🎨 正在安装 tmoe-zsh 主题..."
if [ ! -d "$HOME/.config/tmoe-zsh" ]; then
    bash -c "$(curl -L https://gitee.com/mo2/zsh/raw/master/zsh.sh)"
else
    echo "tmoe-zsh 已存在，跳过安装。"
fi

# --- 恢复配置文件 ---
echo "📂 正在恢复配置文件..."
cp ~/.myfuncs.sh ~/
cp ~/.bashrc ~/
cp ~/.zshrc ~/
cp ~/.profile ~/

# --- ✅ 新增：恢复键盘配置 ---
echo "⌨️ 正在恢复键盘配置..."
if [ -f "$(pwd)/termux.properties" ]; then
    mkdir -p ~/.termux
    cp "$(pwd)/termux.properties" ~/.termux/termux.properties
    # 应用键盘配置
    termux-reload-settings
    echo "✅ 键盘配置已恢复"
else
    echo "⚠️ 未找到 termux.properties，跳过键盘恢复。"
fi

# --- 应用配置 ---
source ~/.bashrc

echo ""
echo "✅✅✅ Termux 环境、主题及键盘已全部恢复完成！"
