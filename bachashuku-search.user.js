// ==UserScript==
// @name         八叉书库广告屏蔽
// @namespace    https://bachashuku.cc/
// @version      1.1.5
// @description  屏蔽 bachashuku.cc 常见广告元素与弹窗
// @author       you
// @match        https://bachashuku.cc/*
// @match        https://www.bachashuku.cc/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  const AD_SELECTORS = [
    '.adsbygoogle',
    'iframe[src*="doubleclick"]',
    'iframe[src*="googlesyndication"]',
    'iframe[src*="cpro.baidu.com"]',
    'script[src*="doubleclick"]',
    'script[src*="googlesyndication"]',
    'script[src*="cpro.baidu.com"]',
    'script[src*="a.magsrv.com/ad-provider.js"]',
    'script[src*="/scripts/ad/ExoM300x100.js"]',
    'script[src*="/scripts/ad/ExoM300x250.js"]',
    'ins[data-zoneid]',
    'div.jezGca47'
  ];

  function injectHideStyle() {
    const style = document.createElement('style');
    style.id = 'tm-bachashuku-adblock-style';
    style.textContent = `${AD_SELECTORS.join(',')} { display: none !important; visibility: hidden !important; opacity: 0 !important; }`;
    (document.head || document.documentElement).appendChild(style);
  }

  function matchesAnyAdSelector(el) {
    return AD_SELECTORS.some((selector) => el.matches && el.matches(selector));
  }

  function removeAds(root = document) {
    const removeSet = new Set();

    if (root.nodeType === 1 && matchesAnyAdSelector(root)) {
      removeSet.add(root);
    }

    for (const selector of AD_SELECTORS) {
      const nodes = root.querySelectorAll(selector);
      for (const el of nodes) removeSet.add(el);
    }

    for (const el of removeSet) {
      if (el && el.parentNode) el.remove();
    }
  }

  function removeKnownAdContainers(root = document) {
    const adNodeSelectors = [
      'script[src*="a.magsrv.com/ad-provider.js"]',
      'script[src*="/scripts/ad/"]',
      'ins[data-zoneid]',
      'a[href*="ent."][href*=".shop/?n="]',
      'img[src*="/scripts/ad/icon/"]',
      'div[data-uid]',
      'div[style*="display: inline-flex"]'
    ];

    const adNodes = root.querySelectorAll(adNodeSelectors.join(','));
    for (const ad of adNodes) {
      if (ad && ad.parentNode) ad.remove();
    }

    const recommendBlocks = root.querySelectorAll('div.mod.block.blue.recommend');
    for (const block of recommendBlocks) {
      const html = (block.innerHTML || '').toLowerCase();
      if (html.includes('/scripts/ad/') || /https:\/\/ent\.[a-z0-9-]+\.shop\/\?n=/i.test(html)) {
        block.remove();
      }
    }

    const normalBlocks = root.querySelectorAll('div.block');
    for (const block of normalBlocks) {
      const title = (block.querySelector('.blocktitle')?.textContent || '').trim();
      const html = (block.innerHTML || '').toLowerCase();
      const isTipBlock =
        title.includes('打赏金币') ||
        html.includes('modules/article/tip.php?act=post') ||
        html.includes('function act_tip(') ||
        html.includes('id="a_tip_');
      if (isTipBlock) block.remove();
    }
  }






  function blockPopup() {
    const rawOpen = window.open;
    window.open = function (...args) {
      const url = String(args[0] || '');
      if (/ads|doubleclick|googlesyndication|cpro\.baidu\.com/i.test(url)) {
        return null;
      }
      return rawOpen.apply(this, args);
    };
  }

  injectHideStyle();
  blockPopup();

  const onReady = () => {
    removeKnownAdContainers(document);
    removeAds(document);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady, { once: true });
  } else {
    onReady();
  }

  const observer = new MutationObserver((mutations) => {
    let hasElementAdded = false;
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1) {
          hasElementAdded = true;
          removeKnownAdContainers(node);
          removeAds(node);
        }
      }
    }
    if (hasElementAdded) removeKnownAdContainers(document);
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
