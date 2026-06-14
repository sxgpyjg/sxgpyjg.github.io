#!/data/data/com.termux/files/usr/bin/bash

# --- 自动安装依赖 ---
pkg update -y
pkg install -y git zsh curl

# --- 自动安装 tmoe-zsh 主题 ---
if [ ! -d "$HOME/.config/tmoe-zsh" ]; then
  bash -c "$(curl -L https://gitee.com/mo2/zsh/raw/master/zsh.sh)"
fi

# --- 恢复配置文件 ---
cp ~/.myfuncs.sh ~/
cp ~/.bashrc ~/
cp ~/.zshrc ~/
cp ~/.profile ~/

# --- 应用配置 ---
source ~/.bashrc

echo "✅ Termux 配置已恢复"
