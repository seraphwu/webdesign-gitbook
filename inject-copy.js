const fs = require('fs');
const path = require('path');

const bookDir = process.argv[2] || '_book';

function injectCopyButton(html) {
  const script = `
<script>
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("pre").forEach(function(pre) {
    if (pre.querySelector(".copy-code-button")) return;
    pre.style.position = "relative";
    var btn = document.createElement("button");
    btn.className = "copy-code-button";
    btn.textContent = "Copy";
    btn.style.cssText = "position:absolute;top:5px;right:5px;padding:3px 8px;background:#313E4E;color:#fff;border:none;border-radius:3px;cursor:pointer;font-size:12px;";
    btn.onclick = function() {
      var code = pre.querySelector("code");
      var text = code ? code.textContent : pre.textContent;
      navigator.clipboard.writeText(text).then(function() {
        btn.textContent = "Copied!";
        setTimeout(function(){ btn.textContent = "Copy"; }, 2000);
      }).catch(function(){ btn.textContent = "Failed"; setTimeout(function(){ btn.textContent = "Copy"; }, 2000); });
    };
    pre.appendChild(btn);
  });
});
</script>
`;
  const style = `
<style>
.copy-code-button{opacity:0;transition:opacity .2s}
pre:hover .copy-code-button{opacity:1}
</style>
`;
  return html.replace('</body>', style + script + '</body>');
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fp = path.join(dir, f);
    const stat = fs.statSync(fp);
    if (stat.isDirectory()) {
      processDir(fp);
    } else if (f.endsWith('.html')) {
      let html = fs.readFileSync(fp, 'utf8');
      html = injectCopyButton(html);
      fs.writeFileSync(fp, html);
      console.log('Injected:', fp);
    }
  });
}

processDir(bookDir);
