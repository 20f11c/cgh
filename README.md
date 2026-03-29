# 篡改猴脚本

Tampermonkey 用户脚本项目。

本仓库用于集中管理多个站点/场景的浏览器增强脚本（去广告、自动化操作、页面体验优化等）。

## 项目定位

- 统一维护 Tampermonkey 脚本
- 支持多站点、可持续扩展
- 每个脚本独立版本、独立更新地址

## 脚本清单

<div>
  <h3>八叉书库广告屏蔽</h3>
  <p>
    <a href="./bcskadx.user.js"><img alt="File" src="https://img.shields.io/badge/File-bcskadx.user.js-111827?style=flat-square"></a>
    <a href="./bcskadx.user.js"><img alt="Version" src="https://img.shields.io/badge/Version-1.2.3-2563eb?style=flat-square"></a>
    <a href="https://bachashuku.cc"><img alt="Site" src="https://img.shields.io/badge/Site-bachashuku.cc-0f766e?style=flat-square"></a>
    <a href="https://www.bachashuku.cc"><img alt="Site" src="https://img.shields.io/badge/Site-www.bachashuku.cc-0f766e?style=flat-square"></a>
    <a href="https://raw.githubusercontent.com/20f11c/cgh/main/bcskadx.user.js"><img alt="Install" src="https://img.shields.io/badge/Tampermonkey-点击安装-f59e0b?style=flat-square"></a>
  </p>
  <p>功能标签：<code>去广告</code> <code>弹窗拦截</code> <code>0金币自动订阅</code></p>
  <ul>
    <li><b>广告元素屏蔽：</b>屏蔽常见广告 <code>iframe/script/ins</code> 节点；屏蔽站内广告脚本路径（如 <code>/scripts/ad/</code>）。</li>
    <li><b>广告容器清理：</b>清理推荐广告模块、广告落地链接与广告图片节点，以及“打赏金币”等指定干扰模块。</li>
    <li><b>弹窗拦截：</b>拦截常见广告域名相关 <code>window.open</code> 弹窗。</li>
    <li><b>免费章节自动订阅：</b>检测 <code>frmbuychapter</code> 表单，仅当“订阅本章节（0 金币）”时自动提交，并带防抖保护。</li>
  </ul>
</div>

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
- 新脚本加入后，在本 README 的“脚本清单”中补充说明