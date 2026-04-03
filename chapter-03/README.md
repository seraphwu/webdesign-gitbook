# 第6週：CSS 文字與背景

## CSS 進階樣式

---

## CSS 選擇器語法

**選擇器**，可以是 `HTML 標籤`、`#(id)`、`.(class)`、其他比較複雜的選擇器（我們之後再教）。

CSS 選擇器後面空一格，由 `{` 開始，每一個屬性都以 `;` 結束，最後是 `}`
養成好習慣，每一句寫完，都加上 `;`

---

## 常見 CSS 屬性

### width 和 height

寬、高，原先沒有給寬高，所有的元素都會以預設的方式呈現。

```css
p {height: 30px;}
```

後面接的單位有 `%`、`auto`、`px` 等

---

## border 框線

`border` 是框線，由
- `border-style`
- `border-width`
- `border-color`
- `border-radius` 
構成。

```CSS
h1 {
  border-style: solid; /* 框線樣式 */
  border-width: 1px;   /* 框線寬度 */
  border-color: red;   /* 框線顏色 */
  border-radius: 50px;   /* 框線圓角半徑 */
}
```

 `border-style`、`border-width`、`border-color` 三者可以合併，順序可不拘。

```css
h1 {border: 1px solid red;}
```

代表 h1 元素四周框線 1px，實線、紅色。

---

## 和文字相關的 CSS 1

- `color` - 文字顏色，可用
	- `顏色名稱`:(red, blue, black, white .... etc)
	- `HEX`:(#ff00cc) 參考 https://www.w3school.com.cn/css/css_colors_hex.asp
	- `rgb()`: 參考 https://www.w3school.com.cn/css/css_colors_rgb.asp
	- `rgba()`: 參考 https://www.w3school.com.cn/css/css_colors_rgb.asp
	- `hsl()`: 參考 https://www.w3school.com.cn/css/css_colors_hsl.asp
	- `hsla()`: 參考 https://www.w3school.com.cn/css/css_colors_hsl.asp
- `text-align` - 文字對齊，可以用 center、left、right、justify（分散對齊）
- `text-decoration` - 文字裝飾，有 `none`（無）、`underline`（下底線）、`overline`（上劃線）、`line-through`（刪除線）
- `text-transform` - 文字大小寫，uppercase（全部大寫）、lowercase（全部小寫）、capitalize（首字母大寫）**以上英文適用**
- `text-shadow` - 文字添加陰影（水平位移、垂直位移、模糊半徑、陰影顏色，都以空格隔開）
可以宣告多個用 `,` 隔開

### text-shadow 範例

`span {text-shadow: 2px 2px 5px #f00;}` <span style="text-shadow: 2px 2px 5px #f00;">這是文字陰影</span>

---

## 和文字相關的 CSS 2

- `letter-spacing` - 字母之間的間距
- `word-spacing` - 單詞之間的距離
- `line-height` - 行高，可以以單位寫（20px）或是倍數寫（1.5）
- `text-indent` - 段落首行縮排（2em 會剛好兩個全形空白）
- `white-space` - 文字換行、空白的屬性
  - `normal` | `nowrap` | `pre` | `pre-line` | `pre-wrap`
- `overflow` - 當內容超過容器範圍
  - `visible` - 內容會溢出
  - `hidden` - 超過就隱藏
  - `scroll` - 強迫出現捲軸
  - `auto` - 超過就自動出現捲軸，沒有就不出現
- `text-overflow` - 當文字內容超過容器時的文字處理
  - `clip` - 直接截斷
  - `ellipsis` - 超過部分會以 ... 呈現

---

## 和文字相關的 CSS 3

### font-family, font-style, font-size, font-weight

- `font-family` - 字體家族，可以套用 Google Fonts
- `font-size` - 字體大小
  - 絕對大小建議使用 px
  - 相對大小：`%` / `em` / `rem`
  - `%` 為 HTML 父元素的文字大小 X %
  - `em` 為父元素的文字大小 x 倍數（1.5em = X 1.5）
  - `rem` 為「根」元素的倍數

---

## 和背景相關的 CSS

- `background-color` - 背景顏色（包含透明 transparent）
- `background-image` - 背景圖片 url("圖片位置")
- `background-repeat` - 背景重複
  - `no-repeat`（不重複）
  - `repeat-x`（水平重複）
  - `repeat-y`（垂直重複）
- `background-size` - 背景的尺寸
  - 長 寬 | 百分比 | `cover`（將圖維持比例擴大填滿）| `contain`（背景擴大填滿非等比例）
- `background-position` - 背景的位置
- `background-attachment` - 背景的定位
  - `fixed`（固定）
  - `scroll`（預設值，背景圖片會跟著滾動）
  - `inherit`（從父元素繼承）
