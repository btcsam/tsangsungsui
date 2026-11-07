# 个人官网：SSD 工作目录与仓库交接

更新日期：2026-11-07（America/Los_Angeles）。

## 当前唯一日常仓库

- GitHub：https://github.com/btcsam/tsangsungsui （原有个人官网公开仓库）。
- 默认分支与推送目标：`origin/main`。普通 `git pull` / `git push` 使用该仓库。
- 本次将原私有备份中的设计备选、截图、空 Drizzle 日志和迁移说明合并回原仓库，保留完整提交历史。
- 临时私有仓库 `btcsam/tsangsungsui-personal-site-backup` 合并验证后归档，不再作为日常同步目标。
- HCFSME Web3 与 Markets 继续使用各自独立的私有仓库。

## 工作目录

- 完整工作目录：`/Volumes/Work SSD/personal-site`。
- 电脑原路径：`/Users/sam/Documents/TSANGSUNGSUI/personal-site`，仅为指向 SSD 的符号链接。
- 网站用途：曾崇瑞 / Sam Tsang 双语个人官网，包含 `public/web3/` 委员会静态子页。
- 插入 Work SSD 并确认 SSD 项目的 package.json 存在后，再编辑、运行、构建或安装依赖。SSD 未挂载时停止工作，不在电脑内置盘重建同名目录。
- 当前依赖与构建缓存均在 SSD。需要重装时，在 SSD 项目目录运行 `npm ci`。
- 拔盘前停止开发服务，并在 Finder 中推出 Work SSD。

## 同步与发布

1. 开始修改前检查 `git status`，拉取远端更新，保留其他未完成工作。
2. 修改后提交 Git 并 `git push`，使原仓库保持最新；文件保存本身不会自动上传。
3. 原仓库 main 分支推送会触发已有 GitHub Pages 工作流，运行 `npm ci`、`npm run build:pages` 并发布网站。发布后应检查 Actions 结果。
4. `design-options/` 保存设计备选，未接入当前正式页面；合并备选文件不等于切换官网设计。
5. GitHub 保存源码、静态素材、锁文件与版本历史；node_modules、构建产物和本地缓存按 .gitignore 排除。仓库公开，勿提交密钥或私密资料。

## 已完成验证

- 迁移时按文件 SHA-256、权限和符号链接核对完整目录，源码还经过 GitHub 重新克隆验证。
- 原内置盘完整副本已移除，原路径仅保留链接。
- 合并前确认原仓库 main 为本地版本祖先，没有冲突；本地 Git 完整性检查通过。
- 合并前在 SSD 上运行 `npm run build:pages`，编译、TypeScript 检查和静态导出均通过。

## 工具规则

与 Cloudflare 交互时，除非项目存在 Wrangler 配置文件，否则使用 cf CLI。遵守 SSD 根目录 AGENTS.md 和使用说明。密钥不上 SSD，也不提交 GitHub。
