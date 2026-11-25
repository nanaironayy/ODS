(function pushPageBuildIdentityToNativeShell(identity) {
  if (typeof window === 'undefined') {
    return;
  }
  if (Object.values(identity).every(value => value == null)) {
    return;
  }
  const json = JSON.stringify(identity);
  if (window.Android?.onPageBuildIdentityReady) {
    window.Android.onPageBuildIdentityReady(json);
  } else if (window.Harmony?.onPageBuildIdentityReady) {
    window.Harmony.onPageBuildIdentityReady(json);
  } else if (window.webkit?.messageHandlers?.pageBuildIdentityReady) {
    window.webkit.messageHandlers.pageBuildIdentityReady.postMessage(json);
  } else if (window.ElectronBridge?.onPageBuildIdentityReady) {
    window.ElectronBridge.onPageBuildIdentityReady(json);
  }
})({stack: 'export_website', variant: null, version: 'e03034157ed7ceb612744a418b4bfd9d5a1ed31b', releaseName: '20261123-22-e030341', deploymentGroup: 'STABLE'});

window['__canva_website_bootstrap__'] = JSON.parse('{"A":"DAHb1OHho1A","B":"eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoia2lkLTE3Nzg0NzAzNjEzOTQifQ..3oxvHRtnNy5QY52a.gGwV_0d3mha0JKQgGBnu1Bx_VW4nP8z0Ov2Kz69pUnBN-UykcNgWTnEcNgBJt_H-oU0uGF4gIg.cbGVzH62urI3xisZEq9SDw"}');

document.addEventListener('contextmenu', (e) => {
  const isMedia = ['img', 'image', 'video', 'svg', 'picture'].some(
    tagName => tagName.localeCompare(e.target.tagName, undefined, { sensitivity: 'base' }) === 0,
  );
  isMedia && e.preventDefault();
});

const lang = navigator.language ? navigator.language : 'en';
let footerRequest;
window.canva_loadFooterHtml = () => footerRequest ??= fetch('_footer?lang=' + encodeURIComponent(lang)).then(response => {
  if (response.status !== 200) {
    throw new Error('Footer request failed');
  }
  return response.text();
}).catch(error => {
  footerRequest = undefined;
  throw error;
});

window.canva_installFooter = (container) => {
  if (!(container instanceof HTMLDivElement)) {
    return;
  }
  window.canva_loadFooterHtml().then(footerStr => {
    container.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = footerStr;
    for (const child of [...div.children]) {
      if (child.tagName.toLowerCase() !== 'script') {
        container.append(child);
      }
    }

    (() => { !function(){"use strict";const o={active:"active"},t={modalBackdrop:"modal_backdrop",termsAndConditionsModal:"modal",termsAndConditionsModalCloseButton:"form_close_initial",reportButton:"form_report",privacyPolicyModal:"privacy_policy_modal",privacyPolicyModalCloseButton:"form_close_privacy_policy",termsAndSupportFooterButton:"report_button",privacyPolicyFooterButton:"privacy_policy_button"};function e({root:e,getSiteUrl:c,openReport:n}){const l=e.getElementById(t.modalBackdrop);null!=l&&(function({root:e,modalBackdrop:c,getSiteUrl:n,openReport:l}){const i=e.getElementById(t.termsAndConditionsModal),r=e.getElementById(t.termsAndConditionsModalCloseButton),a=e.getElementById(t.reportButton),s=e.getElementById(t.termsAndSupportFooterButton);if(null==i||null==r||null==a||null==s)return;a.onclick=()=>{const{origin:o,pathname:t}=new URL(n()),e=a.dataset.reportUrl+encodeURIComponent(o+t);l(e)};const d=()=>{c.classList.remove(o.active),i.classList.remove(o.active),s.classList.remove(o.active),s.focus(),c.onclick=null};r.onclick=d,s.onclick=()=>{c.classList.add(o.active),c.onclick=d,i.classList.add(o.active),s.classList.add(o.active)}}({root:e,modalBackdrop:l,getSiteUrl:c,openReport:n}),function({root:e,modalBackdrop:c}){const n=e.getElementById(t.privacyPolicyModal),l=e.getElementById(t.privacyPolicyModalCloseButton),i=e.getElementById(t.privacyPolicyFooterButton);if(null==n||null==l||null==i)return;const r=()=>{c.classList.remove(o.active),n.classList.remove(o.active),i.classList.remove(o.active),i.focus(),c.onclick=null};l.onclick=r,i.onclick=()=>{c.classList.add(o.active),c.onclick=r,n.classList.add(o.active),i.classList.add(o.active)}}({root:e,modalBackdrop:l}))}!function({root:o,openReport:t}){e({root:o,getSiteUrl:()=>o.URL,openReport:t})}({root:document,openReport:o=>{window.open(o)}})}(); })();
  }).catch(() => {});
};

window.C_CAPTCHA_IMPLEMENTATION = 'RECAPTCHA';
window.C_CAPTCHA_KEY = '6LdpNmIrAAAAAHQVezN3pBAfDjQQ2qUpo881f24o';

(function () {
  var classList = document.documentElement.classList;
  if (classList.contains('adaptive') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    classList.remove.apply(classList, ["x6brqfx","x1yowkxt","x19aimcq"]);
    classList.add.apply(classList, ["xo86nag","x1yowkxt","xntwwlm"]);
  }
  document.documentElement.classList.replace('adaptive', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
})();

(function() {
  window['__canva_public_path__'] = '_assets\/';
  window['__page_load_id__'] = '590c345b-6629-4460-a42d-1fb8d43eb852';
  window['bootstrap'] = JSON.parse('{"base":{"A?":"B","L":false,"N":false,"E":"e03034157ed7ceb612744a418b4bfd9d5a1ed31b","j":"2306462","K":1795522773,"F":{"A?":"B"},"G":"CLIENT_FULL","I":"A","O":{"A?":"B"},"M":"/_online","X":{"A":"6b0580d44b31ac9ba9e14e698b3e5cb3","B":"40c937bfad329f58","C":1},"U":[],"V":[],"a":{"K":"export_website","H":{}},"d":{"A":"wss://www.canva.com/_stream","B":{"F":"export_website"},"C":8388608},"b":{"A?":"H","C":{"a":"WEB"},"D":{"a":"WEB","c":"pt-BR"},"E":{},"P":[],"Q":[],"R":false,"S":false}},"page":{"A":{"B":{"A?":"A","A":"TAG5rX9VMoM","B":1},"C":{"A":-1.0,"B":-1.0,"C":"D"},"Q":[],"R":[],"P":"pt-BR","D":"Cópia de Plataforma de metas e ODS","F":[],"d":{},"G":{},"Y":{},"a":[],"b":[],"V":[],"W":[],"A":[{"A?":"k","Z":{"A?":"A","C":"tAG5rahqeWE","A":"TAG5rX9VMoM","B":1},"a":"PBRm3PDw3rRsCmR1","R":false,"S":false,"U":false,"Q":{},"x":{"A":{"A":"w:KS5H9iEEh","B":1},"B":{}},"y":{"A":{"A?":"O","A":{"A":{"A?":"S","A":{"A":"https://canva-hosted-embed.com/codelet/DP_880d479e97154df7ba2a4dc29663b66e/crcy8q49f6g1dhsy","B":0,"C":"F"}},"B":{"A?":"O","A":{}},"G":{"A?":"N","A":[],"B":[]},"H":{"A?":"O","A":{"A":{"A?":"N","A":[],"B":[]},"B":{"A?":"N","A":[],"B":[]},"C":{"A?":"N","A":[],"B":[]}}},"J":{"A?":"A","A":"HAHb00yMtgQ"}}}},"BH":{},"H":[],"L":{}}],"I":[]},"Z":{"A?":"E","M":"pt-BR","O":[],"P":{"A":false},"e":false,"f":{},"g":[{"A?":"A","K":"PBRm3PDw3rRsCmR1","L":"","O":"Cópia de Plataforma de metas e ODS"}]},"I":{"A":[{"A":"YACgEZ1cb1Q","B":0,"C":"Arimo","D":[{"style":"REGULAR","weight":400,"files":[{"url":"_assets/fonts/834f64ff415fb8f4f5d92d8fd40507e9.woff","format":"WOFF","unicodeRanges":[],"sizeBytes":234332}],"subsettedFiles":[],"scriptSubsetFiles":[],"metadata":{"head":{"unitsPerEm":2048,"yMin":-621,"yMax":2007},"hhea":{"ascender":1854,"descender":-434,"lineGap":67},"os2":{"sTypoAscender":1491,"sTypoDescender":-431,"sTypoLineGap":307,"usWinAscent":1854,"usWinDescent":434,"fsSelection":64}}},{"style":"BOLD_ITALICS","weight":700,"files":[{"url":"_assets/fonts/0803f40e19a074a5520c2746a6ba3c95.woff","format":"WOFF","unicodeRanges":[],"sizeBytes":237588}],"subsettedFiles":[],"scriptSubsetFiles":[],"metadata":{"head":{"unitsPerEm":2048,"yMin":-771,"yMax":2109},"hhea":{"ascender":1854,"descender":-434,"lineGap":67},"os2":{"sTypoAscender":1491,"sTypoDescender":-431,"sTypoLineGap":307,"usWinAscent":1854,"usWinDescent":434,"fsSelection":33}}},{"style":"ITALICS","weight":400,"files":[{"url":"_assets/fonts/711f50b3a8c00bb7e2e05ef85f982cb6.woff","format":"WOFF","unicodeRanges":[],"sizeBytes":240584}],"subsettedFiles":[],"scriptSubsetFiles":[],"metadata":{"head":{"unitsPerEm":2048,"yMin":-621,"yMax":2077},"hhea":{"ascender":1854,"descender":-434,"lineGap":67},"os2":{"sTypoAscender":1491,"sTypoDescender":-425,"sTypoLineGap":307,"usWinAscent":1854,"usWinDescent":434,"fsSelection":1}}},{"style":"BOLD","weight":700,"files":[{"url":"_assets/fonts/b07201e0e9fc452103c1c0345b0e7c1d.woff","format":"WOFF","unicodeRanges":[],"sizeBytes":234660}],"subsettedFiles":[],"scriptSubsetFiles":[],"metadata":{"head":{"unitsPerEm":2048,"yMin":-771,"yMax":2116},"hhea":{"ascender":1854,"descender":-434,"lineGap":67},"os2":{"sTypoAscender":1491,"sTypoDescender":-431,"sTypoLineGap":307,"usWinAscent":1854,"usWinDescent":434,"fsSelection":32}}}],"E":false}],"B":[],"C":[],"D":[],"E":[{"A":"https://canva-hosted-embed.com/codelet/DP_880d479e97154df7ba2a4dc29663b66e/crcy8q49f6g1dhsy","Q":false,"B":"Canva","D":1795522772693,"E":"\x3ciframe src=\\"_assets/remote/embed/codelet/crcy8q49f6g1dhsy/index.html\\" width=\\"1366\\" height=\\"768\\" frameborder=\\"0\\" sandbox=\\"allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox\\" style=\\"width:100%;height:100%;border:0\\">\x3c/iframe>","F":1366,"G":768}],"I":[],"F":[],"H":[],"G":[]},"B":[{"A":"YACgEZ1cb1Q","B":0,"C":"Arimo","D":[{"style":"REGULAR","weight":400,"files":[{"url":"_assets/fonts/834f64ff415fb8f4f5d92d8fd40507e9.woff","format":"WOFF","unicodeRanges":[],"sizeBytes":234332}],"subsettedFiles":[],"scriptSubsetFiles":[],"metadata":{"head":{"unitsPerEm":2048,"yMin":-621,"yMax":2007},"hhea":{"ascender":1854,"descender":-434,"lineGap":67},"os2":{"sTypoAscender":1491,"sTypoDescender":-431,"sTypoLineGap":307,"usWinAscent":1854,"usWinDescent":434,"fsSelection":64}}},{"style":"BOLD_ITALICS","weight":700,"files":[{"url":"_assets/fonts/0803f40e19a074a5520c2746a6ba3c95.woff","format":"WOFF","unicodeRanges":[],"sizeBytes":237588}],"subsettedFiles":[],"scriptSubsetFiles":[],"metadata":{"head":{"unitsPerEm":2048,"yMin":-771,"yMax":2109},"hhea":{"ascender":1854,"descender":-434,"lineGap":67},"os2":{"sTypoAscender":1491,"sTypoDescender":-431,"sTypoLineGap":307,"usWinAscent":1854,"usWinDescent":434,"fsSelection":33}}},{"style":"ITALICS","weight":400,"files":[{"url":"_assets/fonts/711f50b3a8c00bb7e2e05ef85f982cb6.woff","format":"WOFF","unicodeRanges":[],"sizeBytes":240584}],"subsettedFiles":[],"scriptSubsetFiles":[],"metadata":{"head":{"unitsPerEm":2048,"yMin":-621,"yMax":2077},"hhea":{"ascender":1854,"descender":-434,"lineGap":67},"os2":{"sTypoAscender":1491,"sTypoDescender":-425,"sTypoLineGap":307,"usWinAscent":1854,"usWinDescent":434,"fsSelection":1}}},{"style":"BOLD","weight":700,"files":[{"url":"_assets/fonts/b07201e0e9fc452103c1c0345b0e7c1d.woff","format":"WOFF","unicodeRanges":[],"sizeBytes":234660}],"subsettedFiles":[],"scriptSubsetFiles":[],"metadata":{"head":{"unitsPerEm":2048,"yMin":-771,"yMax":2116},"hhea":{"ascender":1854,"descender":-434,"lineGap":67},"os2":{"sTypoAscender":1491,"sTypoDescender":-431,"sTypoLineGap":307,"usWinAscent":1854,"usWinDescent":434,"fsSelection":32}}}],"E":false}],"E":[],"F":[],"G":[],"H":[{"A":"https://canva-hosted-embed.com/codelet/DP_880d479e97154df7ba2a4dc29663b66e/crcy8q49f6g1dhsy","Q":false,"B":"Canva","D":1795522772693,"E":"\x3ciframe src=\\"_assets/remote/embed/codelet/crcy8q49f6g1dhsy/index.html\\" width=\\"1366\\" height=\\"768\\" frameborder=\\"0\\" sandbox=\\"allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox\\" style=\\"width:100%;height:100%;border:0\\">\x3c/iframe>","F":1366,"G":768}],"S":[],"K":{},"Q":{"A":false,"B":true,"M":true},"R":false,"U":true,"V":true,"X":true,"Y":{"A":false},"b":true,"c":false,"d":true},"ui":{"N":false,"A":true,"B":"A","C":false,"D":false,"H":false,"K":"A","J":false,"P":false}}');
  window['__exposeTestIds__'] = false;
  window['flags'] = JSON.parse('{"ff56d075":true,"b88941f1":true,"973cec83":true,"73c07cb5":0.0015,"bc677417":true,"4073adf":true,"3c0c9081":0.01,"b6185a44":true,"28fb95f5":true,"91c0fe6d":20000.0,"a01d7c4b":"on_create","978ce15d":150000.0,"8100753d":true,"f356dd3a":true,"6dd2f703":false,"930e7311":true,"a59560d3":600000.0,"822202ff":true,"1c08d602":false,"95f86b3d":0.015,"b0e83636":true,"13833d91":true,"79d26ee1":true,"507ccf36":4096.0,"51da1b23":true,"5a63f3fe":1600.0,"86ed30a6":true,"5a3594be":true,"854fb331":true,"9346f795":3.0,"34bab4dd":true,"e860b649":false,"a30efcd9":5.0E-4,"347ed49c":1.28E8,"d24bc671":0.01,"a240a8de":true,"7a7996fc":true,"ae30e646":40000.0,"d127b9b1":true,"d8abb4b7":true,"a5f31b0e":true,"550ab916":true,"4de2637a":"109","f954bd70":true,"cc23b239":true,"1684b2d1":true,"7479071":"cpu_gpu"}');
  window['capabilities'] = JSON.parse('{"c_1agy":true,"c_25bn":false,"c_2o4i":false,"c_339l":true,"c_3v89":0,"c_465a":true,"c_5y0l":false,"c_76b4":true,"c_78sd":false,"c_7mdj":false,"c_8ig6":false,"c_9sku":false,"c_b9w4":"SINGLE_SEAT","c_bu17":0,"c_ca5g":false,"c_ce48":false,"c_curo":false,"c_dbkq":false,"c_drlx":false,"c_ffn1":false,"c_fibb":true,"c_hmsr":false,"c_hs37":true,"c_hsf5":true,"c_iico":false,"c_iv2g":true,"c_jreb":0,"c_ngxn":false,"c_pbrt":"DEFAULT","c_qcuk":false,"c_qdpc":false,"c_s8md":false,"c_tc83":true,"c_vnag":false,"c_x5ik":true,"c_x8vg":false,"c_xk33":false,"c_xmxd":false,"c_y6i8":false,"c_yr9e":false,"c_z33c":false}');
  window['cmsg'] = window['cmsg'] || { locale: "pt-BR", strings: {} };
})();
