import"./_commonjsHelpers-f3447ca9.js";/* empty css             */import{l}from"./index-c8537f50.js";const o="feedback-form-state";let m=JSON.parse(localStorage.getItem(o))||{};document.querySelector(".test-button");const t={form:document.querySelector(".feedback-form")};i();t.form.addEventListener("input",l(n,500));t.form.addEventListener("submit",s);function n(e){m[e.target.name]=e.target.value,localStorage.setItem(o,JSON.stringify(m))}function s(e){e.preventDefault(),console.log(e.target);const[r,a]=t.form.elements;if(console.dir(e.target),!r.value||!a.value)return alert("Заповніть всі поля");localStorage.removeItem(o),t.form.reset(),m={}}function i(){const e=JSON.parse(localStorage.getItem(o));if(e){const[r,a]=t.form.elements;r.value=e.email||"",a.value=e.message||""}}
