# Vue 3 訊息搜尋工具

一個使用 Vue.js 3 建立的網站應用程式，可以上傳 JSON 格式的聊天記錄檔案，並搜尋特定的訊息內容。

## 功能特色

- 📁 **檔案上傳**: 支援上傳 JSON 格式的聊天記錄檔案
- 🔍 **即時搜尋**: 輸入關鍵字即時篩選訊息
- 🎯 **高亮顯示**: 搜尋結果中的關鍵字會被高亮標示
- 📅 **訊息資訊**: 顯示訊息時間、發送者名稱和內容
- 📱 **響應式設計**: 支援各種裝置尺寸

## 快速開始

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

### 建置生產版本
```bash
npm run build
```

### 預覽建置結果
```bash
npm run preview
```

## 🚀 部署到 GitHub Pages

### 方法一：使用 GitHub Actions（推薦）

1. **建立 GitHub 儲存庫**：
   - 在 GitHub 上建立一個新的儲存庫，命名為 `vue-message-search`
   - 將專案推送到 GitHub

2. **設定 GitHub Pages**：
   - 進入儲存庫設定 → Pages
   - Source 選擇 "GitHub Actions"

3. **推送程式碼**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的使用者名稱/vue-message-search.git
   git push -u origin main
   ```

4. **自動部署**：
   - 推送到 main 分支後，GitHub Actions 會自動建置並部署
   - 部署完成後，網站會在 `https://你的使用者名稱.github.io/vue-message-search/` 上線

### 方法二：手動部署

1. **安裝 gh-pages**：
   ```bash
   npm install --save-dev gh-pages
   ```

2. **建置並部署**：
   ```bash
   npm run deploy
   ```

### 部署設定說明

- **Vite 配置**：`vite.config.js` 中的 `base: '/vue-message-search/'` 設定了 GitHub Pages 的子路徑
- **GitHub Actions**：`.github/workflows/deploy.yml` 設定了自動部署流程
- **權限設定**：確保儲存庫的 Actions 有寫入 Pages 的權限

### 🌐 線上展示

部署完成後，您可以在以下網址訪問應用程式：
```
https://你的使用者名稱.github.io/vue-message-search/
```

## 使用方式

1. **上傳檔案**: 點擊「選擇 JSON 檔案」按鈕，選擇您的聊天記錄檔案
2. **搜尋訊息**: 在搜尋框中輸入您想要搜尋的關鍵字
3. **檢視結果**: 符合條件的訊息會顯示在下方，包含時間、發送者和內容

## 支援的檔案格式

JSON 檔案應該包含以下結構：

```json
{
  "name": "群組名稱",
  "type": "private_supergroup", 
  "id": 123456789,
  "messages": [
    {
      "id": 1,
      "type": "message",
      "date": "2024-01-15T10:30:00",
      "from": "發送者名稱",
      "from_id": "user_id",
      "text": "訊息內容"
    }
  ]
}
```

## 測試檔案

專案中包含 `test-data.json` 檔案，您可以用它來測試應用程式的功能。

## 技術架構

- **前端框架**: Vue.js 3 (Composition API)
- **建置工具**: Vite
- **樣式**: 原生 CSS (響應式設計)
- **程式語言**: JavaScript

## 瀏覽器支援

- Chrome (推薦)
- Firefox
- Safari
- Edge

---

開發完成！您可以在瀏覽器中打開 http://localhost:5173 來使用這個應用程式。