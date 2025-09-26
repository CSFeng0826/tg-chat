# 部署到 GitHub Pages 的快速指南

## 前置準備
1. 確保您已經安裝了 Git 和 Node.js
2. 在 GitHub 上建立一個名為 `vue-message-search` 的新儲存庫

## 初始化 Git 儲存庫並推送
```bash
# 初始化 Git 儲存庫
git init

# 添加所有檔案
git add .

# 提交變更
git commit -m "Initial commit: Vue 3 message search app"

# 設定主分支
git branch -M main

# 添加遠端儲存庫（請替換 YOUR_USERNAME 為您的 GitHub 使用者名稱）
git remote add origin https://github.com/YOUR_USERNAME/vue-message-search.git

# 推送到 GitHub
git push -u origin main
```

## 設定 GitHub Pages
1. 進入您的 GitHub 儲存庫
2. 點擊 "Settings" 標籤
3. 在左側選單找到 "Pages"
4. 在 "Source" 部分選擇 "GitHub Actions"

## 部署完成
- GitHub Actions 會自動建置並部署您的應用程式
- 部署完成後，您可以在以下網址訪問：
  `https://YOUR_USERNAME.github.io/vue-message-search/`

## 手動部署（備選方案）
如果您想要手動部署，可以使用：
```bash
# 安裝依賴（如果還沒安裝）
npm install

# 手動部署
npm run deploy
```

## 更新部署
每次您推送新的程式碼到 main 分支時，GitHub Actions 會自動重新部署網站。