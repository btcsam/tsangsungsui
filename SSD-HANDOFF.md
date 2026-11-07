# 个人官网：SSD 迁移交接

迁移日期：2026-11-07（America/Los_Angeles）。

## 工作目录与备份

- 完整工作目录：`/Volumes/Work SSD/personal-site`。
- 电脑原路径：`/Users/sam/Documents/TSANGSUNGSUI/personal-site`，迁移后仅为指向 SSD 的符号链接。
- 网站用途：曾崇瑞 / Sam Tsang 双语个人官网，包含 `public/web3/` 委员会静态子页。
- GitHub 私有源码备份：https://github.com/btcsam/tsangsungsui-personal-site-backup 。
- 已有公开官网仓库（origin）：https://github.com/btcsam/tsangsungsui 。迁移备份未向它推送。
- 默认推送目标：`backup/main`，普通 `git push` 进入私有备份。公开 origin 保留；发布线上网站须按实际发布任务单独处理。
- 新私有备份库已禁用 GitHub Actions，备份不会运行复制过去的发布工作流。

## 后续修改

1. 插入 Work SSD，确认 `/Volumes/Work SSD/personal-site/package.json` 存在，再打开项目。
2. 在 SSD 上编辑、运行、提交；通过 `git push` 同步私有备份。若 SSD 未挂载，停止工作，不要在电脑内置盘重建同名目录或安装依赖。
3. 依赖已经完整迁移。将来需要重装时，在 SSD 项目目录运行 `npm ci`；GitHub 只保存源码、锁文件、设计备选及提交历史，不保存 node_modules 和构建缓存。
4. 拔盘前停止开发服务，并在 Finder 中推出 Work SSD。

## 本次保留内容与验证

- SSD 保留原始 .git 历史、本地分支、全部依赖、构建产物、本地缓存和未提交的设计备选。
- 原来未跟踪的 `design-options/` 和 `drizzle/` 纳入私有源码备份。
- 完整复制后按文件 SHA-256、文件权限、符号链接逐项核对；另从 GitHub 重新克隆核对受版本管理的源码。
- 清除了 .git 目录内会干扰 Git 完整性检查的 Finder `.DS_Store` 元数据。
- 本任务仅迁移与备份，不涉及站点重新部署。

## 工具规则

与 Cloudflare 交互时，除非项目存在 Wrangler 配置文件，否则使用 cf CLI。遵守 SSD 根目录 AGENTS.md 和使用说明。密钥不上 SSD，也不提交 GitHub。
