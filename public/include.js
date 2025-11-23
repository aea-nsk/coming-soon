document.addEventListener("DOMContentLoaded",()=>{
  const h=document.getElementById("app-header");
  if(h) fetch("/components/header.html").then(r=>r.text()).then(t=>h.innerHTML=t);
  const f=document.getElementById("app-footer");
  if(f) fetch("/components/footer.html").then(r=>r.text()).then(t=>f.innerHTML=t);
});