const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a;d.disabled=!0,t.addEventListener("click",(function(n){t.disabled=!0,d.disabled=!1,a=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.background=t}),1e3)})),d.addEventListener("click",(function(e){t.disabled=!1,d.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.c56cb9e2.js.map
