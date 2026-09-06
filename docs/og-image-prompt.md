# OG 分享图片

- 生成方式：Codex 内置 imagegen 生图工具。
- 当前图片：`site/public/og-image-v2.png`；整组内容沿同一中轴居中。
- 初版图片：`site/public/og-image.png`，保留旧文件供已有链接使用。
- 图片尺寸：1731 × 909 像素，保留生图工具原始输出。
- 用途：中英文页面共用的 Open Graph 和 X 大图分享卡片。

## 初版生成提示词

以下为实际使用的英文提示词，便于后续保持风格一致：

```text
Use case: ads-marketing. Create one simple, polished Open Graph social sharing image for the existing Awesome Pi community resource directory website. This is the FINAL standalone raster graphic, not a mockup of a card on a desk. Wide landscape canvas, approximately 1.91:1 aspect ratio, target 1200 x 630 pixels or the nearest supported wide format. Match the site's restrained visual style: solid white background, near-black #202923 typography, forest green #187a45 accents. Flat, crisp design, generous whitespace, no textures, gradients, shadows or 3D. Use a compact rounded forest-green square containing a white Greek lowercase pi symbol (π) as a simple brand mark near the text. Main name in very large, bold, clean sans-serif: "Awesome Pi". Below it a smaller single-line subtitle, rendered verbatim: "Packages, themes & tools for Pi Coding Agent". At the bottom, subtle small text rendered verbatim: "awesome-pi-list.vercel.app". Overall composition balanced and calm, left aligned text block, large comfortable outer margins and safe area for social preview crops. A very subtle thin pale-green line or small dot accent is sufficient; keep the image extremely simple. Make the title the primary focal point and readable at small preview size. No screenshots, code blocks, extra slogans, badges, counts, product logos, photos, people, or watermarks. Exactly these three text strings, spelled correctly.
```

更换图片时，同步更新页面的 `og:image:width` 和 `og:image:height`；构建页面测试会核对图片文件、尺寸与分享元信息。

## 居中调整提示词

以内置 imagegen 编辑初版图片，保留文字、颜色和风格，仅调整布局。新版使用独立文件名，便于分享平台获取新图片。

```text
Use case: precise-object-edit. Edit this existing Awesome Pi Open Graph image to fix its off-center composition. CHANGE ONLY THE LAYOUT/ALIGNMENT. Preserve the exact white background, forest-green rounded square with white π, near-black clean sans-serif typography, simple flat aesthetic, all exact text, and the same wide 1731 × 909 canvas/aspect ratio. Center the combined π logo + Awesome Pi headline row as ONE group horizontally on the canvas, with equal left and right outer whitespace. Center the subtitle beneath it on the same vertical center axis. Center the small website address beneath the subtitle. Reposition the small green line/dot ornament so the ornament as a whole is also centered and visually balanced. Bring these elements into a cohesive, vertically centered overall block with balanced white space above and below, not shifted toward either corner. Main brand row at approximately y=330, subtitle y=490, subtle ornament y=560, domain y=635; exact pixel positions may adjust for optical balance. Keep generous safe margins. All four element groups must share the canvas midpoint x=865.5. Preserve the three exact strings verbatim: "Awesome Pi", "Packages, themes & tools for Pi Coding Agent", "awesome-pi-list.vercel.app". No new text, no new objects, no aesthetic redesign, no extra decoration, no cropping. The purpose is a minimal centered social preview.
```
