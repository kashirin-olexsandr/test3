import"./_commonjsHelpers-f3447ca9.js";/* empty css             */import{P as r}from"./player.es-b919ddfd.js";import{l as a}from"./index-c8537f50.js";const e="videoplayer-current-time",m={iframe:document.querySelector("iframe")},t=new r(m.iframe);t.setCurrentTime(localStorage.getItem(e)||0);t.on("timeupdate",a(l,1e3));function l({seconds:o}){localStorage.setItem(e,o)}const i=localStorage["videoplayer-current-time"];console.log(i);
