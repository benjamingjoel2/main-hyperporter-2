(function(){
var L=document.querySelector('.vlist');if(!L)return;
var cs=[].slice.call(L.querySelectorAll('.vc'));if(cs.length<2)return;
var up='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>';
var dn='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
var r=document.createElement('div');r.className='vrail';r.setAttribute('aria-label','Sections');
r.innerHTML='<button type="button" aria-label="Previous">'+up+'</button><div class="vtrk" role="slider" aria-label="Progress"><i></i></div><span class="vn"></span><button type="button" aria-label="Next">'+dn+'</button>';
document.body.appendChild(r);
var b=r.querySelectorAll('button'),fill=r.querySelector('i'),n=r.querySelector('.vn'),trk=r.querySelector('.vtrk');
function go(i){i=Math.max(0,Math.min(cs.length-1,i));cs[i].scrollIntoView({behavior:'smooth',block:'start'});}
function cur(){var vh=innerHeight,a=0;cs.forEach(function(c,i){if(c.getBoundingClientRect().top<=vh*.5)a=i});return a}
b[0].onclick=function(){go(cur()-1)};b[1].onclick=function(){go(cur()+1)};
trk.onclick=function(e){var q=trk.getBoundingClientRect();go(Math.floor((e.clientY-q.top)/q.height*cs.length))};
var t=0;function upd(){t=0;var vh=innerHeight,q=L.getBoundingClientRect(),f=cs[0].getBoundingClientRect(),l=cs[cs.length-1].getBoundingClientRect();
r.classList.toggle('on',f.top<vh*.5&&l.bottom>vh*.5);
var a=cur(),c=cs[a].getBoundingClientRect(),fr=Math.min(1,Math.max(0,-c.top/Math.max(1,c.height)));
fill.style.height=((a+fr)/cs.length*100)+'%';n.textContent=(a+1)+'/'+cs.length;b[0].disabled=a===0;b[1].disabled=a===cs.length-1;}
function sch(){if(!t)t=requestAnimationFrame(upd)}
addEventListener('scroll',sch,{passive:true});addEventListener('resize',sch);upd();
})();
