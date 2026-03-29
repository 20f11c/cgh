# cgh

Tampermonkey 用户脚本项目。

本仓库用于集中管理多个站点/场景的浏览器增强脚本（去广告、自动化操作、页面体验优化等）。

## 项目定位

- 统一维护 Tampermonkey 脚本
- 支持多站点、可持续扩展
- 每个脚本独立版本、独立更新地址

## 当前脚本

### `bcskadx.user.js`

- 脚本名称：`八叉书库广告屏蔽`
- 目标站点：
  - `https://bachashuku.cc/*`
  - `https://www.bachashuku.cc/*`
- 当前版本：`1.2.3`

#### 功能

1. 广告元素屏蔽
   - 屏蔽常见广告 `iframe/script/ins` 节点
   - 屏蔽站内广告脚本路径（如 `/scripts/ad/`）

2. 广告容器清理
   - 清理推荐广告模块
   - 清理广告落地链接与广告图片节点
   - 清理“打赏金币”等指定干扰模块

3. 弹窗拦截
   - 拦截常见广告域名相关 `window.open` 弹窗

4. 免费章节自动订阅
   - 检测 `frmbuychapter` 订阅表单
   - 仅当“订阅本章节（0 金币）”时自动提交
   - 带防抖保护，避免短时间重复提交

## 安装与更新

### 安装

在浏览器打开以下链接并用 Tampermonkey 安装：

- `https://raw.githubusercontent.com/20f11c/cgh/main/bcskadx.user.js`

### 自动更新

脚本头建议包含：

- `@downloadURL`
- `@updateURL`

每次发布请递增 `@version`。

## 目录约定（建议）

- 一个脚本一个文件
- 文件名建议使用：`<site-or-feature>.user.js`
- 新脚本加入后，在本 README 的“当前脚本”中补充说明