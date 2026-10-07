(function(){try{if('scrollRestoration' in history)history.scrollRestoration='manual'}catch(e){}
var de=document.documentElement;function top(){if(location.hash)return;de.style.scrollBehavior='auto';window.scrollTo(0,0);document.body&&(document.body.scrollTop=0);de.scrollTop=0;requestAnimationFrame(function(){de.style.scrollBehavior=''})}
top();window.addEventListener('pageshow',top);window.addEventListener('load',top);
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a||a.target||e.defaultPrevented)return;var h=a.getAttribute('href');if(!h||h.charAt(0)==='#'||/^(https?:|mailto:|tel:)/.test(h))return;de.style.scrollBehavior='auto';window.scrollTo(0,0)},true)})();
(function(){var nav=document.getElementById('nav'),hero=document.querySelector('.hero');if(!nav||!hero)return;function f(){nav.classList.toggle('on-dark',window.scrollY<hero.offsetHeight-80&&!hero.classList.contains('plain'))}addEventListener('scroll',f,{passive:true});f();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var c=e.target.classList;nav.classList.toggle('on-dark',c.contains('final')||(c.contains('hero')&&!c.contains('plain')))}})},{rootMargin:'-60px 0px -85% 0px'});document.querySelectorAll('.hero,section').forEach(function(s){io.observe(s)});
document.querySelectorAll('[data-seg]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-seg');document.querySelectorAll('.seg button').forEach(function(x){x.classList.toggle('on',x===b)});document.getElementById('plans-r').style.display=k==='r'?'':'none';document.getElementById('plans-s').style.display=k==='s'?'':'none'})});document.querySelectorAll('[data-tabs]').forEach(function(t){t.addEventListener('click',function(e){var b=e.target.closest('.tb');if(!b||e.target.closest('.tlk'))return;var i=b.getAttribute('data-i');t.querySelectorAll('.tb').forEach(function(x){x.classList.toggle('on',x===b)});var n=+t.getAttribute('data-n');t.querySelectorAll('.tfi').forEach(function(x){x.classList.toggle('on',(+i+ +x.getAttribute('data-o'))%n===+x.getAttribute('data-k'))})})});document.querySelectorAll('[data-tabs]').forEach(function(t){if(t.hasAttribute('data-scroll'))return;var bs=t.querySelectorAll('.tb'),vis=false,hov=false,cur=0;if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
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
var why=p==='s'?(sup?'Free for suppliers, with a CRM and quoting. It covers a small team and a light inquiry flow.':'Free, and enough for up to 20 inquiries a month with no automations or integrations.'):p==='a'?'Automations run your automations at every stage and fits up to 500 inquiries a month and teams of up to 15.':(sup?'Integrations, bigger teams and heavier volume are priced for your operation.':'At this volume, team size or with the 500+ inquiries a month, we tailor the plan to you.');
if(p==='i'&&!sup)why='Your volume or team size is above Automations, so we tailor the plan to your business.';
$('sp-name').textContent=names[p];$('sp-price').textContent=price[p][0];$('sp-per').textContent=price[p][1];$('sp-why').textContent=why;
$('sp-list').innerHTML=list.map(function(t){return '<li></li>'}).join('');[].forEach.call($('sp-list').children,function(li,i){li.textContent=list[i]});
var rc=[['You are',WHO[who]],['Inquiries',INQ[inq]+' / month'],['Team',TEAM[team]],['Automations',aut.length?(aut.length>2?aut.length+' selected':aut.map(function(n){return n.replace('Automated ','')}).join(', ')):'None yet'],['Integrations',ints.length?ints.map(function(k){return k==='whatsapp'?'WhatsApp':'Email'}).join(', '):'None yet']];
$('sp-recap').innerHTML='';rc.forEach(function(r){var d=document.createElement('div'),a=document.createElement('dt'),b=document.createElement('dd');a.textContent=r[0];b.textContent=r[1];d.appendChild(a);d.appendChild(b);$('sp-recap').appendChild(d)});
var c=$('sp-cta');if(p==='i'){c.textContent='Talk to us';c.className='btn dark';c.href='mailto:info@hyperporter.com?subject='+encodeURIComponent('Hyperporter plan: '+WHO[who])+'&body='+encodeURIComponent(rc.map(function(r){return r[0]+': '+r[1]}).join('\n'))}else{c.textContent=p==='s'?'Get started free':'Get started';c.className='btn pri';c.href=$('sp-cta').getAttribute('data-p')||'https://portal.hyperporter.com'}
sum.classList.remove('flash');void sum.offsetWidth;sum.classList.add('flash')}
root.addEventListener('change',calc);calc()})();

(function(){var sn=document.getElementById('subnav');if(!sn)return;var hero=document.querySelector('.hero'),links=[].slice.call(sn.querySelectorAll('.sn-l a'));
function f(){var h=hero?hero.offsetHeight:600;sn.classList.toggle('show',window.scrollY>h-120)}
addEventListener('scroll',f,{passive:true});f();
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
links.forEach(function(a){var t=document.getElementById(a.getAttribute('href').slice(1));if(t)io.observe(t)})}})();

/* glass-card carousels (the flow, Atlas): prev / next, progress line, keys, swipe */
(function(){var NX='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',RP='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>';function car(f){
var ss=[].slice.call(f.querySelectorAll('.fl-s')),bg=[].slice.call(f.querySelectorAll('.fl-bg')),pv=f.querySelector('.fl-pv'),nx=f.querySelector('.fl-nx'),trk=f.querySelector('.fl-trk2'),fill=trk.querySelector('i'),cn=f.querySelector('.fl-n'),st=f.querySelector('.flow-in'),n=ss.length,cur=0,vis=1;function sv(){vis=1;f.classList.remove('two')}sv();
function go(i){sv();i=Math.max(0,Math.min(n-vis,i));cur=i;ss.forEach(function(s,k){s.classList.toggle('on',k>=i&&k<i+vis)});ss[0].parentNode.style.setProperty('--i',i);bg.forEach(function(s,k){s.classList.toggle('on',k===i)});
fill.style.width=((i+vis)/n*100)+'%';trk.setAttribute('aria-valuenow',i+1);trk.setAttribute('aria-valuemin',1);trk.setAttribute('aria-valuemax',n);cn.textContent=(i+vis)+'/'+n;pv.disabled=i===0;var last=i===n-vis;nx.classList.toggle('rp',last);nx.setAttribute('aria-label',last?'Repeat':'Next');nx.innerHTML=last?RP:NX}
function next(){if(cur<n-vis)go(cur+1);else go(0)}
ss.forEach(function(s,k){s.addEventListener('click',function(){if(k!==cur)go(k)})});
pv.addEventListener('click',function(){go(cur-1)});nx.addEventListener('click',next);
trk.addEventListener('click',function(e){var r=trk.getBoundingClientRect();go(Math.floor((e.clientX-r.left)/r.width*n)-vis+1)});
trk.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();go(cur+1)}else if(e.key==='ArrowLeft'){e.preventDefault();go(cur-1)}});
function inview(){var q=st.getBoundingClientRect();return q.top<innerHeight*.5&&q.bottom>innerHeight*.5}
addEventListener('keydown',function(e){if(!inview()||(e.target.closest&&e.target.closest('input,textarea,select')))return;if(e.key==='ArrowRight'){e.preventDefault();next()}else if(e.key==='ArrowLeft'){e.preventDefault();go(cur-1)}});
var x0=null,y0=0;st.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
st.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;if(Math.abs(dx)>46&&Math.abs(dx)>Math.abs(dy)*1.4){dx<0?next():go(cur-1)}},{passive:true});
addEventListener('resize',function(){go(cur)});go(0)}
[].forEach.call(document.querySelectorAll('.flow'),car)})();

(function(){var w=document.querySelector('.cust2');if(!w)return;var t=[].slice.call(w.querySelectorAll('.cu-t')),p=[].slice.call(w.querySelectorAll('.cu-p'));t.forEach(function(b,i){b.addEventListener('click',function(){t.forEach(function(x,k){x.classList.toggle('on',k===i)});p.forEach(function(x,k){x.classList.toggle('on',k===i)})})})})();

/* scroll-driven tabs: hold the section, advance the list and iPad with scroll */
(function(){var secs=document.querySelectorAll('.pin');if(!secs.length)return;var mq=matchMedia('(min-width:901px)');
[].forEach.call(secs,function(sec){var tabs=sec.querySelector('[data-tabs]'),bs=[].slice.call(tabs.querySelectorAll('.tb')),fs=[].slice.call(tabs.querySelectorAll('.tfi')),n=bs.length,cur=-1;
function show(i){if(i===cur)return;cur=i;bs.forEach(function(b,k){b.classList.toggle('on',k===i);b.classList.toggle('past',k<i)});fs.forEach(function(x){x.classList.toggle('on',+x.getAttribute('data-k')===i)})}
function span(){return sec.offsetHeight-innerHeight}
function top(){return sec.getBoundingClientRect().top+scrollY}
function idx(){var p=(scrollY-top())/Math.max(span(),1);return Math.max(0,Math.min(n-1,Math.floor(p*n+0.0001)))}
function upd(){if(!mq.matches)return;show(idx())}
function goto(i){if(!mq.matches)return;scrollTo({top:top()+span()*((i+.5)/n),behavior:'smooth'})}
addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);
bs.forEach(function(b,i){b.addEventListener('click',function(e){if(e.isTrusted||true){cur=-1;show(i);goto(i)}})});
upd();
function hash(){var h=location.hash.slice(1),k=bs.findIndex(function(b){return b.id===h});if(k>=0){cur=-1;show(k);if(mq.matches)scrollTo({top:top()+span()*((k+.5)/n)})}}
addEventListener('load',function(){setTimeout(hash,50)});addEventListener('hashchange',hash)})})();
