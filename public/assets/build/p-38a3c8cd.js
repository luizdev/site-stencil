const n=n=>Number(getComputedStyle(document.body).getPropertyValue(n).split("px")[0]),t=(n("--breakpoint-sm"),n("--breakpoint-md"),n("--breakpoint-lg"));function e(){return window.innerWidth>=t}function o(){return window.innerWidth<t}n("--breakpoint-xl"),n("--breakpoint-xxl"),n("--breakpoint-xxxl");export{e as a,o as i}