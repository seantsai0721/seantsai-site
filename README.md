# seantsai 作品集網站

Sean Tsai 的個人作品集網站，使用 [Astro](https://astro.build) 製作，託管在 Cloudflare Pages。
每次把修改存到 GitHub，Cloudflare 會在大約一分鐘內自動重新建置網站並上線。

## 資料夾結構

```
src/content/works/        每個作品一個 .mdx 文字檔（專案文字都在這裡）
public/works/<作品名>/     該作品的圖片
src/site.ts               名字、Email、社群連結、首頁定位句
src/pages/about.astro     About 頁的簡介、學歷、獲獎
src/styles/global.css     網站的顏色、字體、版面
```

## 新增一個作品

1. 在 `public/works/` 裡新增一個資料夾，名稱用英文小寫和連字號，例如 `floating-green-nexus`，把圖片放進去
   - 建議用 `.webp` 或 `.jpg`，寬度 2000px 左右，單張不超過 1MB
2. 在 `src/content/works/` 裡新增一個**同名**的 `.mdx` 檔，例如 `floating-green-nexus.mdx`
   - 最簡單的方法：複製現有的 `the-carves.mdx`，改名後再修改內容
3. 修改檔案最上面 `---` 之間的基本資料：

```yaml
title: Floating Green Nexus          # 英文標題
titleZh: 中文標題                      # 可省略
subtitle: 一句英文說明
year: 2024
order: 4                             # 排序，數字越小越前面
kind: Design studio                  # 顯示的類型，例如 Competition
category: Academic                   # Academic / Competition / Research / Built 四選一
location: Taipei                     # 短地名
tags: [Wetland, Park]                # 首頁卡片上的標籤
cover: /works/floating-green-nexus/cover.webp
coverAlt: 封面圖的英文描述（給視障者和 Google 看）
featured: true                       # true = 出現在首頁大卡片
draft: false                         # true = 先不公開
specs:
  - { label: Site, value: "..." }
  - { label: Award, value: "...", highlight: true }   # highlight 會用金色強調
```

4. 在下面寫內容。一般段落直接打字即可，段落之間空一行。可以用的版面元件：

| 元件 | 用途 |
|---|---|
| `<Section n="01" label="Site" title="標題">…</Section>` | 編號段落，左邊小標、右邊標題與內文 |
| `<Figure src="..." alt="..." caption="..." />` | 一般圖片 |
| `<Figure variant="bleed" … />` | 滿版大圖，放在兩個 Section 之間 |
| `<Figure variant="board" … />` | 完整圖板 |
| `<Figure variant="wide" … />` | 很長的剖面圖，手機上可以左右滑 |
| `<Pair>` 兩個 Figure `</Pair>` | 兩張圖並排 |
| `<Stats items={[…]} />` | 大數字 |
| `<Columns items={[…]} />` | 三欄說明 |
| `<Timeline items={[…]} />` | 時間軸 |
| `<Detail src="…" items={[…]} />` | 一張圖加一串重點 |

用法可以直接參考現有的三個 `.mdx` 檔。

**注意**：在 `<Section>` 裡寫段落時，開頭標籤後和結尾標籤前都要**空一行**，段落文字**不要縮排**，不然格式會跑掉。

## 在 GitHub 網頁上直接修改

1. 打開 GitHub 上的這個儲存庫，點進要改的檔案
2. 點右上角的鉛筆圖示編輯
3. 改完後按「Commit changes」
4. 等大約一分鐘，網站就會更新

上傳圖片：進入 `public/works/<作品名>/` 資料夾，點「Add file」→「Upload files」。

## 在自己電腦上預覽（選用）

需要先安裝 [Node.js](https://nodejs.org)（22 版以上）。

```
npm install
npm run dev
```

然後打開 http://localhost:4321 。

## Cloudflare Pages 設定

- Framework preset：Astro
- Build command：`npm run build`
- Build output directory：`dist`
