document.addEventListener("DOMContentLoaded", function() {
  function addCopyButtons() {
    document.querySelectorAll("pre").forEach(function(pre) {
      if (pre.querySelector(".copy-code-button")) return;
      
      pre.style.position = "relative";
      
      var button = document.createElement("button");
      button.className = "copy-code-button";
      button.textContent = "Copy";
      button.style.cssText = "position: absolute; top: 5px; right: 5px; padding: 3px 8px; background: #313E4E; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 12px;";
      
      button.addEventListener("click", function() {
        var code = pre.querySelector("code");
        var text = code ? code.textContent : pre.textContent;
        
        navigator.clipboard.writeText(text).then(function() {
          button.textContent = "Copied!";
          setTimeout(function() { button.textContent = "Copy"; }, 2000);
        }).catch(function() {
          button.textContent = "Failed";
          setTimeout(function() { button.textContent = "Copy"; }, 2000);
        });
      });
      
      pre.appendChild(button);
    });
  }

  addCopyButtons();

  if (typeof gitbook !== "undefined") {
    gitbook.events.on("page.change", addCopyButtons);
  }
});
