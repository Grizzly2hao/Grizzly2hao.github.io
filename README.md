# guangzhao Cao · 个人网站

适用于 GitHub Pages 的中英双语静态学术主页，无需安装依赖或构建。

## 本地预览

在此目录执行 `python -m http.server 8000`，浏览器打开 http://localhost:8000 。也可以直接打开 `index.html`。

## 发布到 GitHub Pages

1. 将本目录文件上传到 GitHub 仓库，默认分支使用 `main`。
2. 在仓库 Settings → Pages → Build and deployment 中选择 **Deploy from a branch**。
3. 选择 `main` 分支和 `/ (root)` 目录，点击 Save。
4. 等待 GitHub 部署完成。仓库名为 `<用户名>.github.io` 时，网站地址为 `https://<用户名>.github.io/`；其他仓库名的地址为 `https://<用户名>.github.io/<仓库名>/`。

若使用 GitHub CLI，可执行：

```powershell
gh auth login --hostname github.com --git-protocol https --web
gh repo create YOUR_USERNAME.github.io --public --source . --remote origin --push
gh api --method POST repos/YOUR_USERNAME/YOUR_USERNAME.github.io/pages -f 'source[branch]=main' -f 'source[path]=/'
```

请将 `YOUR_USERNAME` 替换为真实 GitHub 用户名；如果已有同名仓库，应先检查原有内容，避免覆盖。

## 内容维护

- `index.html`：个人资料、教育经历、联系信息。带 `data-en` 和 `data-zh` 的元素需同步更新中英文。
- `styles.css`：配色、排版与手机布局。
- `script.js`：语言切换、语言偏好保存和页脚年份。
- `favicon.svg`：浏览器标签页图标。

页面引用 Google Fonts；无法连接时自动使用系统字体，不影响内容与功能。背景图形是本地 SVG，不依赖图片服务。

当前内容仅依据提供的资料截图，未添加研究方向、论文、学位完成时间或其他未经确认的信息。截图中的 Joined November 2026 是来源平台的加入时间，不作为入学时间展示。
