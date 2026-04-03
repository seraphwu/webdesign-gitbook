# Gitbook 建置與部署指南

## 本地開發

```bash
# 安裝依賴（首次執行或 package.json 變更時）
npm install

# 啟動本地伺服器（即時預覽，修改後自動重載）
npm run serve
# 預設網址：http://localhost:4000

# 編譯靜態網站（產生 _book/ 目錄）
npm run build

# 清除編譯輸出
npm run clean
```

## 部署到 GitHub Pages

### 方式一：使用 gh-pages（推薦）

```bash
# 一次性部署
npm run deploy

# 後續更新（會自動推送到 gh-pages 分支）
npm run build && npm run deploy
```

### 方式二：手動部署

```bash
# 1. 編譯
npm run build

# 2. 將 _book/ 內容推送到 gh-pages 分支
cd _book
git init
git add .
git commit -m "deploy"
git push -f https://github.com/seraphwu/webdesign-gitbook.git master:gh-pages
```

## GitHub Actions 自動部署

在 `.github/workflows/deploy.yml` 建立以下內容：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_book
```

## 目錄結構

```
Gitbook/
├── book.json              # Gitbook 設定
├── SUMMARY.md             # 側邊欄目錄結構
├── README.md              # 首頁
├── package.json           # Node.js 依賴
├── styles/
│   └── website.css        # 自訂樣式
├── assets/
│   └── images/            # 圖片資源
├── chapter-01/            # 第一章
├── chapter-02/            # 第二章
├── ...
├── course-info/           # 課程資訊
├── resources/             # 參考資源
├── _book/                 # 編譯輸出（git ignore）
└── node_modules/          # 依賴（git ignore）
```

## 常見問題

### 編譯失敗

```bash
# 清除快取並重新安裝
rm -rf node_modules _book
npm install
npm run build
```

### 圖片無法顯示

確認圖片路徑相對於 Markdown 檔案的正確位置。例如：
- Markdown 在 `chapter-01/README.md`
- 圖片在 `assets/images/logo.png`
- 路徑應為 `../assets/images/logo.png`

### 中文搜尋

Gitbook 預設搜尋對中文支援有限，可考慮改用 `honkit-plugin-search-pro`。
