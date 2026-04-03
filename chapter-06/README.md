# 第11-12週：Bootstrap 入門

## 網頁設計加速器：Bootstrap 框架

---

## 前言：現代網頁設計的挑戰

- **多樣的裝置：** 桌機、筆電、平板、手機... 螢幕尺寸各不相同
- **瀏覽器相容性：** Chrome, Firefox, Safari, Edge... 表現需一致
- **開發效率：** 從零開始打造所有樣式，耗時且易出錯
- **視覺一致性：** 確保網站整體風格統一

---

## 什麼是 Bootstrap？

- **最受歡迎的前端框架之一**
- 包含 **HTML, CSS, 和 JavaScript** 的元件與工具
- **核心目標：** 讓網頁開發 **更快、更容易**，並天生支援 **響應式設計**

---

## 為何使用 Bootstrap？

- **響應式設計 (Responsive)：** 自動適應不同螢幕尺寸
- **行動優先 (Mobile-First)：** 設計理念優先考慮行動裝置
- **內建元件 (Components)：** 提供大量預先設計好的 UI 元件（按鈕、導覽列、卡片、表單...）
- **網格系統 (Grid System)：** 強大且彈性的佈局工具
- **工具類 (Utilities)：** 快速調整間距、顏色、排版等
- **一致性 (Consistency)：** 確保網站風格統一
- **瀏覽器相容性：** 處理了大部分跨瀏覽器問題
- **社群活躍 & 文件完整：** 學習資源豐富

---

## 快速啟動：加入 Bootstrap

有兩種主要方式：

1. **CDN (Content Delivery Network) - 推薦入門**
   - 無需下載檔案，直接引用網路上的資源
   - 速度快，有快取優勢

2. **下載 (Download)**
   - 將 Bootstrap 的 CSS 和 JS 檔案下載到你的專案中
   - 適合離線開發或需要深度客製化的情況

---

## 使用 CDN 範例

在你的 HTML 檔案 `<head>` 中加入 CSS 連結：

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap 範例</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
```

在 `<body>` 結束前加入 JavaScript（有些元件需要）：

```html
<body>
  <h1>Hello, world!</h1>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
```

**注意：** `viewport` meta 標籤對於響應式設計至關重要！

---

## 核心概念 (一)：響應式 & 行動優先

### 響應式設計 (Responsive Design)

- 網頁佈局能**自動調整**以適應不同裝置的螢幕寬度
- 使用 **Media Queries**（Bootstrap 已內建）

### 行動優先 (Mobile-First)

- 設計時**先考慮**小螢幕（手機）的佈局和體驗
- 再透過 Media Queries **逐步增強**大螢幕的樣式
- Bootstrap 的網格和元件都遵循此原則

---

## 核心概念 (二)：網格系統 (Grid System)

**Bootstrap 排版的基石！**

基於 **12 欄 (Column)** 的彈性佈局系統，主要由三個部分組成：

1. **容器 (Container):** `.container`（固定寬度）或 `.container-fluid`（滿版寬度）
2. **列 (Row):** `.row`。水平排列欄位的容器
3. **欄 (Column):** `.col`, `.col-*`, `.col-sm-*`, `.col-md-*` 等

### 容器範例

```html
<div class="container">
  ... 你的內容 ...
</div>

<div class="container-fluid">
  ... 你的內容 ...
</div>
```

---

## 網格系統：列 (Row) 與 欄 (Column)

- `.row` 必須放在 `.container` 或 `.container-fluid` 內部
- 內容應放置在 `.col-*` 內部
- `.row` 使用 **Flexbox** 佈局

```html
<div class="container">
  <div class="row">
    <div class="col"> 欄位 1 </div>
    <div class="col"> 欄位 2 </div>
    <div class="col"> 欄位 3 </div>
  </div>
</div>
```

上面範例會自動產生三個等寬的欄位。

---

## 網格系統：指定欄寬

使用 `.col-{數字}` 指定欄位寬度，數字總和為 12。

```html
<div class="row">
  <div class="col-6"> 佔 6/12 (一半) </div>
  <div class="col-6"> 佔 6/12 (一半) </div>
</div>
<div class="row">
  <div class="col-4"> 佔 4/12 </div>
  <div class="col-8"> 佔 8/12 </div>
</div>
```

使用 `.col` 讓該欄自動分配剩餘寬度：

```html
<div class="row">
  <div class="col"> 自動寬度 </div>
  <div class="col-6"> 佔 6/12 </div>
  <div class="col"> 自動寬度 </div>
</div>
```

---

## 網格系統：響應式斷點 (Breakpoints)

| 斷點 | 寬度 | 類別 |
| ---- | ---- | ---- |
| `xs` | <576px | 省略，如 `.col-12` |
| `sm` | ≥576px | `.col-sm-*` |
| `md` | ≥768px | `.col-md-*` |
| `lg` | ≥992px | `.col-lg-*` |
| `xl` | ≥1200px | `.col-xl-*` |
| `xxl` | ≥1400px | `.col-xxl-*` |

**規則：** 行動優先！預設是 `xs` 樣式，然後為更大的螢幕指定不同欄寬。

---

## 網格系統：響應式範例

```html
<div class="container">
  <div class="row">
    <!-- 手機時堆疊 (各佔12欄)，平板(md)以上變兩欄 -->
    <div class="col-12 col-md-6"> 區塊 A </div>
    <div class="col-12 col-md-6"> 區塊 B </div>
  </div>
  <div class="row">
    <!-- 手機時堆疊，平板(md)變三欄，桌機(lg)變四欄 -->
    <div class="col-12 col-md-4 col-lg-3"> 項目 1 </div>
    <div class="col-12 col-md-4 col-lg-3"> 項目 2 </div>
    <div class="col-12 col-md-4 col-lg-3"> 項目 3 </div>
    <div class="col-12 col-md-4 col-lg-3"> 項目 4 </div>
  </div>
</div>
```

---

## 工具類 (Utilities) 1：排版

- 標題 (`h1` - `h6`)、段落 (`p`)、列表已有基本樣式
- `.lead`: 讓段落更突出
- `.text-center`, `.text-end`, `.text-start`: 文字對齊
- `.text-muted`, `.text-primary` 等: 文字顏色
- `.fw-bold`, `.fst-italic`: 字重與樣式

---

## 工具類 (Utilities) 2：顏色

- `.text-{color}`: 文字顏色 (e.g., `.text-danger`)
- `.bg-{color}`: 背景顏色 (e.g., `.bg-success`)
- `.border-{color}`: 邊框顏色
- 常用顏色: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `white`, `muted`

---

## 工具類 (Utilities) 3：間距

- `m` = margin（外距）, `p` = padding（內距）
- 方向: `t`(top), `b`(bottom), `s`(start-左), `e`(end-右), `x`(左右), `y`(上下)
- 尺寸: `0` 到 `5`
- 範例:
  - `.mt-3` (margin-top)
  - `.pb-2` (padding-bottom)
  - `.mx-auto` (水平居中)
  - `.p-4` (四邊 padding)
  - `.mt-md-5` (只在平板以上增加上外距)

---

## 常用元件 (Components) 1

- **按鈕 (Buttons):** `.btn`, `.btn-primary`, `.btn-lg`, `.btn-outline-success`
- **導覽列 (Navbar):** `.navbar`, `.navbar-expand-lg`, `.navbar-brand`, `.navbar-nav`
- **卡片 (Cards):** `.card`, `.card-body`, `.card-title`, `.card-img-top`

---

## 常用元件 (Components) 2

- **表單 (Forms):** `.form-control`, `.form-label`, `.form-select`, `.form-check`
- **提示框 (Alerts):** `.alert`, `.alert-warning`
- **模態框 (Modals):** `.modal`, `.modal-dialog`
- **下拉選單 (Dropdowns)**
- 還有更多...（輪播、手風琴、麵包屑...）

---

## 元件範例：按鈕 (Buttons)

```html
<!-- 不同顏色/樣式 -->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-outline-danger">Outline Danger</button>

<!-- 不同尺寸 -->
<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-secondary btn-sm">Small</button>

<!-- 連結樣式的按鈕 -->
<a class="btn btn-info" href="#" role="button">Link Button</a>
```

---

## 元件範例：卡片 (Card)

```html
<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">卡片標題</h5>
    <p class="card-text">這裡是一些卡片的內容文字</p>
    <a href="#" class="btn btn-primary">前往某處</a>
  </div>
</div>
```

卡片非常適合用來製作產品列表、文章預覽等。

---

## 元件範例：導覽列 (Navbar)

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">網站Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">首頁</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">特色</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

- `navbar-expand-lg`: 在 lg (992px) 以上的螢幕展開，以下則收合
- `navbar-toggler`: 手機版顯示的漢堡按鈕
- 需要 Bootstrap 的 JavaScript 才能運作收合功能

---

## 總結與資源

**今日重點回顧：**

- Bootstrap 解決了響應式、跨瀏覽器、開發效率的問題
- 透過 CDN 快速引入
- **網格系統** 是排版核心 (container, row, col, breakpoints)
- 善用 **Utilities**（間距、顏色、排版）加速開發
- 認識常用 **Components** (Navbar, Card, Button)
- **行動優先** 的設計思維

---

## 學習資源

- **Bootstrap 官方文件：** <https://getbootstrap.com/docs/5.3/getting-started/introduction/>
- **六角學院 Bootstrap 5 中文文件：** <https://bootstrap5.hexschool.com/>
- **Bootstrap 官方範例：** <https://getbootstrap.com/docs/5.3/examples/>
- **Bootstrap Icons：** <https://icons.getbootstrap.com/>
