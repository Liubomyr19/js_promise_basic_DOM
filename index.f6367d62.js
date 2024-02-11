var e=new Promise(function(e,t){document.querySelector(".logo").addEventListener("click",function(){e()})}),t=new Promise(function(e,t){setTimeout(function(){// eslint-disable-next-line prefer-promise-reject-errors
t()},3e3)});e.then(function(){var e=document.createElement("div");e.className="message",e.textContent="Promise was resolved!",document.body.appendChild(e)}),t.catch(function(){var e=document.createElement("div");e.className="message error-message",e.textContent="Promise was rejected!",document.body.appendChild(e)});//# sourceMappingURL=index.f6367d62.js.map

//# sourceMappingURL=index.f6367d62.js.map
