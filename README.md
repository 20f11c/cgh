# 篡改猴脚本

集中管理多个站点的 Tampermonkey 用户脚本（去广告、自动化、页面体验优化）。

## 快速安装

1. 浏览器安装 Tampermonkey 扩展。  
2. 点击脚本安装链接完成安装。

## 脚本清单

<table>
  <tr>
    <td>
      <h3>八叉书库广告屏蔽</h3>
      <p>
        <a href="./bcskadx.user.js"><img alt="File" src="https://img.shields.io/badge/File-bcskadx.user.js-111827?style=flat-square"></a>
        <a href="./bcskadx.user.js"><img alt="Version" src="https://img.shields.io/badge/Version-1.2.3-2563eb?style=flat-square"></a>
        <a href="https://bachashuku.cc"><img alt="Site" src="https://img.shields.io/badge/Site-bachashuku.cc-0f766e?style=flat-square"></a>
        <a href="https://www.bachashuku.cc"><img alt="Site" src="https://img.shields.io/badge/Site-www.bachashuku.cc-0f766e?style=flat-square"></a>
        <a href="https://raw.githubusercontent.com/20f11c/cgh/main/bcskadx.user.js"><img alt="Install" src="https://img.shields.io/badge/Tampermonkey-点击安装-f59e0b?style=flat-square"></a>
      </p>
      <p><b>功能标签：</b><code>去广告</code> <code>弹窗拦截</code> <code>0金币自动订阅</code></p>
      <ul>
        <li><b>广告元素屏蔽：</b>清理常见广告 <code>iframe/script/ins</code> 节点与站内广告脚本（如 <code>/scripts/ad/</code>）。</li>
        <li><b>广告容器清理：</b>移除推荐广告模块、广告落地链接/图片、“打赏金币”等干扰块。</li>
        <li><b>弹窗拦截：</b>拦截广告域名相关 <code>window.open</code> 调用。</li>
        <li><b>免费章节自动订阅：</b>检测 <code>frmbuychapter</code>，仅在“0 金币”时自动提交，含防抖保护。</li>
      </ul>
    </td>
  </tr>
</table>

## 更新说明

- 脚本通过头部元数据中的 <code>@updateURL</code> / <code>@downloadURL</code> 自动更新。
- 发布新版本时请递增 <code>@version</code>。

