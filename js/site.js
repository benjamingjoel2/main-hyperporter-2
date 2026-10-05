(function(){try{if('scrollRestoration' in history)history.scrollRestoration='manual'}catch(e){}
var de=document.documentElement;function top(){if(location.hash)return;de.style.scrollBehavior='auto';window.scrollTo(0,0);document.body&&(document.body.scrollTop=0);de.scrollTop=0;requestAnimationFrame(function(){de.style.scrollBehavior=''})}
top();window.addEventListener('pageshow',top);window.addEventListener('load',top);
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a||a.target||e.defaultPrevented)return;var h=a.getAttribute('href');if(!h||h.charAt(0)==='#'||/^(https?:|mailto:|tel:)/.test(h))return;de.style.scrollBehavior='auto';window.scrollTo(0,0)},true)})();
(function(){var nav=document.getElementById('nav'),hero=document.querySelector('.hero');if(!nav||!hero)return;function f(){nav.classList.toggle('on-dark',window.scrollY<hero.offsetHeight-80)}addEventListener('scroll',f,{passive:true});f();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var c=e.target.classList;nav.classList.toggle('on-dark',c.contains('final')||c.contains('hero'))}})},{rootMargin:'-60px 0px -85% 0px'});document.querySelectorAll('.hero,section').forEach(function(s){io.observe(s)});
document.querySelectorAll('[data-seg]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-seg');document.querySelectorAll('.seg button').forEach(function(x){x.classList.toggle('on',x===b)});document.getElementById('plans-r').style.display=k==='r'?'':'none';document.getElementById('plans-s').style.display=k==='s'?'':'none'})});document.querySelectorAll('[data-tabs]').forEach(function(t){t.addEventListener('click',function(e){var b=e.target.closest('.tb');if(!b||e.target.closest('.tlk'))return;var i=b.getAttribute('data-i');t.querySelectorAll('.tb').forEach(function(x){x.classList.toggle('on',x===b)});var n=+t.getAttribute('data-n');t.querySelectorAll('.tfi').forEach(function(x){x.classList.toggle('on',(+i+ +x.getAttribute('data-o'))%n===+x.getAttribute('data-k'))})})});document.querySelectorAll('[data-tabs]').forEach(function(t){var bs=t.querySelectorAll('.tb'),vis=false,hov=false,cur=0;if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
function go(i){var b=bs[i];if(!b)return;b.click();}
bs.forEach(function(b,i){b.addEventListener('click',function(){cur=i;bs.forEach(function(x,k){x.classList.toggle('past',k<i)});var on=t.querySelector('.tb.on');if(on){on.classList.remove('on');void on.offsetWidth;on.classList.add('on')}})});
t.addEventListener('animationend',function(e){if(e.animationName!=='tbp')return;var n=(cur+1)%bs.length;go(n)});
t.addEventListener('mouseenter',function(){t.classList.add('paused')});t.addEventListener('mouseleave',function(){t.classList.remove('paused')});
new IntersectionObserver(function(es){t.classList.toggle('paused',!es[0].isIntersecting)},{threshold:.3}).observe(t);});})();

(function(){if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;var els=document.querySelectorAll('.sec-h,.split .copy,.fsplit .copy,.ovc,.tool,.auto,.kit,.int,.tabs,.callout,.close .q,.close .btn,.final .wrap>*,.rel a');els.forEach(function(e,i){e.classList.add('rv');e.style.transitionDelay=(i%4)*70+'ms'});var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)})})();
(function(){var root=document.querySelector('[data-pricing]');if(!root)return;
var $=function(i){return document.getElementById(i)};var sum=document.querySelector('.sum-in');
['who','inq','team'].forEach(function(n){var f=root.querySelector('input[name='+n+']');if(f)f.checked=true});
var WHO={agency:'Travel agency',dmc:'DMC',tour:'Tour operator',other:'Something else'},INQ=['Up to 20','21 to 100','101 to 500','More than 500'],TEAM=['Just me','2 to 5','6 to 15','16 or more'];
function val(n){var e=root.querySelector('input[name='+n+']:checked');return e?e.value:null}
function calc(){var who=val('who'),inq=+val('inq'),team=+val('team'),ints=[].map.call(root.querySelectorAll('input[name=int]:checked'),function(e){return e.value}),aut=[].map.call(root.querySelectorAll('input[name=auto]:checked'),function(e){return e.parentNode.querySelector('b').textContent}),sup=who==='dmc'||who==='tour',p;
if(sup){if(!ints.length&&!aut.length&&team<=1&&inq<=1)p='s';else p='i'}else{if(!ints.length&&!aut.length&&inq===0&&team===0)p='s';else if(inq<=2&&team<=2)p='a';else p='i'}
var L={r:{s:['Public inquiry form link','CRM, proposal generator, magic links','Full Geotrax network access','Atlas AI, built in'],a:['Everything in Showcase','Full stage-based automation','Remove "Powered by Hyperporter"'],i:['Everything in Automations','Custom domain, included','A plan tailored to your business']},s:{s:['CRM access and quoting','Listed on Geotrax, at no cost','Atlas AI, built in'],i:['Everything in Showcase','WhatsApp and email integration','A plan tailored to your operation']}};
var names={s:'Showcase',a:'Automations',i:'Enterprise'},price={s:['€0','forever'],a:['€49','per month'],i:['Custom','tailored to you']};
var list=(sup?L.s:L.r)[p].slice();if(aut.length&&p!=='s'){list.push(aut.length+(aut.length===1?' automation: ':' automations: ')+aut.join(', '))}if(!sup&&p==='a'){ints.forEach(function(k){list.push((k==='whatsapp'?'WhatsApp':'Email')+' integration')})}
var why=p==='s'?(sup?'Free for suppliers, with a CRM and quoting. It covers a small team and a light inquiry flow.':'Free, and enough for up to 20 inquiries a month with no automations or integrations.'):p==='a'?'Automations runs the stages for you, and fits up to 500 inquiries a month and teams of up to 15.':(sup?'Integrations, bigger teams and heavier volume are priced for your operation.':'At this volume, team size or with the 500+ inquiries a month, we tailor the plan to you.');
if(p==='i'&&!sup)why='Your volume or team size is above Automations, so we tailor the plan to your business.';
$('sp-name').textContent=names[p];$('sp-price').textContent=price[p][0];$('sp-per').textContent=price[p][1];$('sp-why').textContent=why;
$('sp-list').innerHTML=list.map(function(t){return '<li></li>'}).join('');[].forEach.call($('sp-list').children,function(li,i){li.textContent=list[i]});
var rc=[['You are',WHO[who]],['Inquiries',INQ[inq]+' / month'],['Team',TEAM[team]],['Automations',aut.length?(aut.length>2?aut.length+' selected':aut.map(function(n){return n.replace('Automated ','')}).join(', ')):'None yet'],['Integrations',ints.length?ints.map(function(k){return k==='whatsapp'?'WhatsApp':'Email'}).join(', '):'None yet']];
$('sp-recap').innerHTML='';rc.forEach(function(r){var d=document.createElement('div'),a=document.createElement('dt'),b=document.createElement('dd');a.textContent=r[0];b.textContent=r[1];d.appendChild(a);d.appendChild(b);$('sp-recap').appendChild(d)});
var c=$('sp-cta');if(p==='i'){c.textContent='Talk to us';c.className='btn dark';c.href='mailto:hello@hyperporter.com?subject='+encodeURIComponent('Hyperporter plan: '+WHO[who])+'&body='+encodeURIComponent(rc.map(function(r){return r[0]+': '+r[1]}).join('\n'))}else{c.textContent=p==='s'?'Get started free':'Get started';c.className='btn pri';c.href=$('sp-cta').getAttribute('data-p')||'https://portal.hyperporter.com'}
sum.classList.remove('flash');void sum.offsetWidth;sum.classList.add('flash')}
root.addEventListener('change',calc);calc()})();

(function(){var sn=document.getElementById('subnav');if(!sn)return;var hero=document.querySelector('.hero'),links=[].slice.call(sn.querySelectorAll('.sn-l a'));
function f(){var h=hero?hero.offsetHeight:600;sn.classList.toggle('show',window.scrollY>h-120)}
addEventListener('scroll',f,{passive:true});f();
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
links.forEach(function(a){var t=document.getElementById(a.getAttribute('href').slice(1));if(t)io.observe(t)})}})();

(function(){var bs=[].slice.call(document.querySelectorAll('.beat'));if(!bs.length||!('IntersectionObserver' in window))return;
var ss=[].slice.call(document.querySelectorAll('.fl-s')),ps=[].slice.call(document.querySelectorAll('.fl-prog span')),n=document.getElementById('fl-n'),order=['Quoting','Booking','Traveling'];
function set(i){bs.forEach(function(b,k){b.classList.toggle('on',k===i)});ss.forEach(function(s,k){s.classList.toggle('on',k===i)});var ph=bs[i].getAttribute('data-ph'),pi=order.indexOf(ph);
ps.forEach(function(p,k){p.classList.toggle('on',k===pi);p.classList.toggle('done',k<pi)});if(n)n.textContent=(i+1)+'/'+bs.length}
set(0);var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)set(+e.target.getAttribute('data-i'))})},{rootMargin:'-45% 0px -45% 0px'});bs.forEach(function(b){io.observe(b)})})();
/* scroll stops for the flow prev/next controls */
(function(){if(!document.getElementById('flow'))return;
function stops(){var vh=innerHeight,y=scrollY,o=[];function top(e){return Math.round(e.getBoundingClientRect().top+y)}
var h=document.querySelector('body>.hero');if(h)o.push(0);var fh=document.querySelector('.flow-h');if(fh)o.push(top(fh));
[].forEach.call(document.querySelectorAll('.beat'),function(b){o.push(Math.round(top(b)+b.offsetHeight/2-vh/2))});
[].forEach.call(document.querySelectorAll('body>section:not(.flow)'),function(s){o.push(top(s))});
o.push(document.documentElement.scrollHeight-vh);return o.sort(function(a,b){return a-b})}
window.hpStops=stops})();
/* flow rail: progress + manual jump */
(function(){var r=document.getElementById('fl-rail'),f=document.getElementById('flow');if(!r||!f)return;var bt=[].slice.call(r.querySelectorAll('button')),bs=[].slice.call(document.querySelectorAll('.beat')),fill=document.getElementById('fl-fill');
function upd(){var i=bs.map(function(b){return b.classList.contains('on')}).indexOf(true);if(i<0)i=0;
bt.forEach(function(b,k){b.classList.toggle('on',k===i);b.classList.toggle('done',k<i)});
var h=r.querySelector('.fl-trk').offsetHeight,a=bt[0].offsetTop+7,z=bt[bt.length-1].offsetTop+7;fill.style.height=Math.max(0,(bt[i].offsetTop+7-a)/(z-a)*(z-a))+'px';fill.parentNode.style.top=a+'px';fill.parentNode.style.height=(z-a)+'px';
var q=f.getBoundingClientRect();r.classList.toggle('show',q.top<innerHeight*.5&&q.bottom>innerHeight*.5&&true)}
bt.forEach(function(b){b.addEventListener('click',function(){var el=bs[+b.getAttribute('data-i')];var y=el.getBoundingClientRect().top+scrollY+el.offsetHeight/2-innerHeight/2;scrollTo({top:y,behavior:'smooth'})})});
addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);new MutationObserver(upd).observe(document.querySelector('.fl-beats'),{attributes:true,subtree:true,attributeFilter:['class']});upd()})();

(function(){var bg=[].slice.call(document.querySelectorAll('.fl-bg')),bs=[].slice.call(document.querySelectorAll('.beat'));if(!bg.length)return;
function u(){var i=bs.map(function(b){return b.classList.contains('on')}).indexOf(true);if(i<0)i=0;bg.forEach(function(b,k){b.classList.toggle('on',k===i)})}
new MutationObserver(u).observe(document.querySelector('.fl-beats'),{attributes:true,subtree:true,attributeFilter:['class']});u()})();

/* the magic: button + drawer from the right */
(function(){var btn=document.getElementById('mg-btn'),dr=document.getElementById('mg-dr'),f=document.getElementById('flow');if(!btn||!dr||!f)return;
var bs=[].slice.call(document.querySelectorAll('.beat')),x=document.getElementById('mg-x'),t=document.getElementById('mg-t'),s=document.getElementById('mg-s'),c=document.getElementById('mg-c'),cur=-1,open=false;
function idx(){var i=bs.map(function(b){return b.classList.contains('on')}).indexOf(true);return i<0?0:i}
function sync(){var i=idx();if(i===cur)return;cur=i;var b=bs[i];t.textContent=b.querySelector('.bm p').textContent;s.textContent=b.querySelector('h3').textContent;c.textContent=(i+1)+'/'+bs.length;btn.classList.remove('nudge');void btn.offsetWidth;btn.classList.add('nudge')}
function vis(){var q=f.getBoundingClientRect(),on=q.top<innerHeight*.5&&q.bottom>innerHeight*.5;btn.classList.toggle('show',on);if(!on&&open)set(false)}
function set(v){open=v;dr.classList.toggle('open',v);btn.classList.toggle('on',v);btn.setAttribute('aria-expanded',v);dr.setAttribute('aria-hidden',!v);if(v)setTimeout(function(){x.focus({preventScroll:true})},350);else if(document.activeElement===x)btn.focus({preventScroll:true})}
btn.addEventListener('click',function(){set(!open)});x.addEventListener('click',function(){set(false)});
addEventListener('keydown',function(e){if(e.key==='Escape'&&open)set(false)});
document.addEventListener('click',function(e){if(open&&!dr.contains(e.target)&&!btn.contains(e.target))set(false)});
addEventListener('scroll',vis,{passive:true});addEventListener('resize',vis);
new MutationObserver(sync).observe(document.querySelector('.fl-beats'),{attributes:true,subtree:true,attributeFilter:['class']});sync();vis()})();

/* prev / next controls */
(function(){var pv=document.getElementById('fl-pv'),nx=document.getElementById('fl-nx'),ctl=document.getElementById('fl-ctl'),f=document.getElementById('flow');if(!pv||!nx||!f)return;var goal=null,tg=0;
function go(d){if(!window.hpStops)return;var s=window.hpStops(),base=(goal!==null&&Date.now()-tg<1000)?goal:scrollY,t=null;
if(d>0){for(var i=0;i<s.length;i++){if(s[i]>base+8){t=s[i];break}}}else{for(var j=s.length-1;j>=0;j--){if(s[j]<base-8){t=s[j];break}}}
if(t===null)return;goal=t;tg=Date.now();scrollTo({top:t,behavior:'smooth'})}
pv.addEventListener('click',function(){go(-1)});nx.addEventListener('click',function(){go(1)});
var cn=document.getElementById('fl-n'),bb=[].slice.call(document.querySelectorAll('.beat')),fi=document.querySelector('.flow-in');
function paint(){if(!cn||!fi)return;var intro=fi.getBoundingClientRect().top>innerHeight*.55,i=bb.map(function(b){return b.classList.contains('on')}).indexOf(true);if(i<0)i=0;var t=(intro?0:i+1)+'/'+bb.length;if(cn.textContent!==t)cn.textContent=t}
function vis(){var q=f.getBoundingClientRect();ctl.classList.toggle('show',q.top<innerHeight*.5&&q.bottom>innerHeight*.5);paint()}
new MutationObserver(paint).observe(document.querySelector('.fl-beats'),{attributes:true,subtree:true,attributeFilter:['class']});
addEventListener('scroll',vis,{passive:true});addEventListener('resize',vis);vis()})();

/* active step straight from scroll position (no observer edge cases) */
(function(){var bs=[].slice.call(document.querySelectorAll('.beat'));if(!bs.length)return;var ss=[].slice.call(document.querySelectorAll('.fl-s')),bg=[].slice.call(document.querySelectorAll('.fl-bg')),cur=-1,tk=false;
function calc(){tk=false;var m=innerHeight/2,best=0,bd=1e9;bs.forEach(function(b,k){var r=b.getBoundingClientRect(),d=Math.abs(r.top+r.height/2-m);if(d<bd){bd=d;best=k}});
if(best===cur)return;cur=best;bs.forEach(function(b,k){b.classList.toggle('on',k===best)});ss.forEach(function(s,k){s.classList.toggle('on',k===best)});bg.forEach(function(s,k){s.classList.toggle('on',k===best)})}
function q(){if(!tk){tk=true;requestAnimationFrame(calc)}}
addEventListener('scroll',q,{passive:true});addEventListener('resize',q);addEventListener('load',q);calc()})();

/* nav: mobile menu and dropdown trigger */
(function(){var nav=document.getElementById('nav'),nm=document.getElementById('nm'),bg=nav&&nav.querySelector('.nav-burger');if(!nav||!nm||!bg)return;
bg.removeAttribute('onclick');bg.setAttribute('aria-expanded','false');bg.setAttribute('aria-controls','nm');
function set(v){nm.classList.toggle('open',v);nav.classList.toggle('menu-open',v);bg.setAttribute('aria-expanded',v?'true':'false')}
bg.addEventListener('click',function(e){e.stopPropagation();set(!nm.classList.contains('open'))});
nm.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
document.addEventListener('click',function(e){if(nm.classList.contains('open')&&!nm.contains(e.target)&&!bg.contains(e.target))set(false)});
addEventListener('keydown',function(e){if(e.key==='Escape'&&nm.classList.contains('open')){set(false);bg.focus()}});
addEventListener('resize',function(){if(innerWidth>820)set(false)});
nav.querySelectorAll('.navgrp').forEach(function(g){var a=g.querySelector(':scope>a'),dd=g.querySelector('.dd');if(!a||!dd)return;a.setAttribute('aria-haspopup','true');a.setAttribute('aria-expanded','false');
a.addEventListener('click',function(e){e.preventDefault();var on=!g.classList.contains('open');nav.querySelectorAll('.navgrp.open').forEach(function(x){if(x!==g){x.classList.remove('open');x.querySelector(':scope>a').setAttribute('aria-expanded','false')}});g.classList.toggle('open',on);a.setAttribute('aria-expanded',on?'true':'false')});
g.addEventListener('mouseleave',function(){g.classList.remove('open');a.setAttribute('aria-expanded','false')})});
document.addEventListener('click',function(e){if(!e.target.closest('.navgrp'))nav.querySelectorAll('.navgrp.open').forEach(function(x){x.classList.remove('open');x.querySelector(':scope>a').setAttribute('aria-expanded','false')})});
addEventListener('keydown',function(e){if(e.key==='Escape')nav.querySelectorAll('.navgrp.open').forEach(function(x){x.classList.remove('open');x.querySelector(':scope>a').setAttribute('aria-expanded','false')})})})();
