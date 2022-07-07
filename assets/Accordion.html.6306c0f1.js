import{_ as r,r as o,o as h,c as g,a as n,b as a,w as t,d as c,e as s}from"./app.ae048c67.js";const k={},m=c('<h1 id="accordion" tabindex="-1"><a class="header-anchor" href="#accordion" aria-hidden="true">#</a> Accordion</h1><p>Build vertically collapsing accordions in combination with <code>&lt;b-collapse&gt;</code> component.</p><h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h2><p>The <code>&lt;b-accordion-item&gt;</code> uses the <code>&lt;b-collapse&gt;</code> component internally to make it collapsible. To render an accordion that\u2019s expanded, add the <code>visible</code> property on the <code>&lt;b-accordion-item&gt;</code> component.</p>',4),v={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"TIP",-1),f=s("The animation effect of this component is dependent on the prefers-reduced-motion media query. See the "),_={href:"https://getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion",target:"_blank",rel:"noopener noreferrer"},w=s("reduced motion section of our accessibility documentation"),y=s("."),S=n("h2",{id:"example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),s(" Example")],-1),T=n("p",null,"Click the accordions below to expand/collapse the accordion content.",-1),I=n("strong",null,"This is the first item's accordion body.",-1),C=s(" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),q=n("code",null,".accordion-body",-1),x=s(", though the transition does limit overflow. "),A=n("strong",null,"This is the second item's accordion body.",-1),L=s(" It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),j=n("code",null,".accordion-body",-1),H=s(", though the transition does limit overflow. "),M=n("strong",null,"This is the third item's accordion body.",-1),Y=s(" It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),P=n("code",null,".accordion-body",-1),N=s(", though the transition does limit overflow. "),B=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Accordion Item #1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">visible</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>This is the first item&#39;s accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> It is shown by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting
    that just about any HTML can go within the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>.accordion-body<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>, though the transition
    does limit overflow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Accordion Item #2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>This is the second item&#39;s accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting
    that just about any HTML can go within the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>.accordion-body<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>, though the transition
    does limit overflow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Accordion Item #3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>This is the third item&#39;s accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting
    that just about any HTML can go within the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>.accordion-body<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>, though the transition
    does limit overflow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flush" tabindex="-1"><a class="header-anchor" href="#flush" aria-hidden="true">#</a> Flush</h3><p>Add <code>flush</code> property to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</p>`,3),E=s(" Placeholder content for this accordion, which is intended to demonstrate the "),V=n("code",null,"flush",-1),O=s(" property. This is the first item's accordion body. "),R=s(" Placeholder content for this accordion, which is intended to demonstrate the "),F=n("code",null,"flush",-1),z=s(" property. This is the second item's accordion body. Let's imagine this being filled with some actual content. "),D=s(" Placeholder content for this accordion, which is intended to demonstrate the "),G=n("code",null,"flush",-1),J=s(" property. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application. "),K=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion</span> <span class="token attr-name">flush</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Accordion Item #1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Placeholder content for this accordion, which is intended to demonstrate the
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>flush<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> property. This is the first item&#39;s accordion body.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Accordion Item #2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Placeholder content for this accordion, which is intended to demonstrate the
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>flush<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> property. This is the second item&#39;s accordion body. Let&#39;s imagine this being
    filled with some actual content.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Accordion Item #3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Placeholder content for this accordion, which is intended to demonstrate the
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>flush<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> property. This is the third item&#39;s accordion body. Nothing more exciting
    happening here in terms of content, but just filling up the space to make it look, at least at
    first glance, a bit more representative of how this would look in a real-world application.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="always-open" tabindex="-1"><a class="header-anchor" href="#always-open" aria-hidden="true">#</a> Always open</h3><p>Add <code>free</code> property to make accordion items stay open when another item is opened.</p>`,3),Q=n("strong",null,"This is the first item's accordion body.",-1),U=s(" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),W=n("code",null,"default",-1),X=s(" slot, though the transition does limit overflow. "),Z=n("strong",null,"This is the second item's accordion body.",-1),$=s(" It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),nn=n("code",null,"default",-1),sn=s(" slot, though the transition does limit overflow. "),an=n("strong",null,"This is the third item's accordion body.",-1),tn=s(" It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),en=n("code",null,"default",-1),on=s(" slot, though the transition does limit overflow. "),cn=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion</span> <span class="token attr-name">free</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Accordion Item #1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>This is the first item&#39;s accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> It is shown by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting
    that just about any HTML can go within the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> slot, though the transition does
    limit overflow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Accordion Item #2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>This is the second item&#39;s accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting
    that just about any HTML can go within the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> slot, though the transition does
    limit overflow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-accordion-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Accordion Item #3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>This is the third item&#39;s accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting
    that just about any HTML can go within the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> slot, though the transition does
    limit overflow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-accordion</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function ln(pn,dn){const d=o("ExternalLinkIcon"),e=o("b-accordion-item"),l=o("b-accordion"),p=o("b-card"),i=o("ClientOnly"),u=o("ComponentReference");return h(),g("div",null,[m,n("div",v,[b,n("p",null,[f,n("a",_,[w,a(d)]),y])]),S,T,a(i,null,{default:t(()=>[a(p,{class:"text-dark"},{default:t(()=>[a(l,null,{default:t(()=>[a(e,{title:"Accordion Item #1",visible:""},{default:t(()=>[I,C,q,x]),_:1}),a(e,{title:"Accordion Item #2"},{default:t(()=>[A,L,j,H]),_:1}),a(e,{title:"Accordion Item #3"},{default:t(()=>[M,Y,P,N]),_:1})]),_:1})]),_:1})]),_:1}),B,a(i,null,{default:t(()=>[a(p,{class:"text-dark bg-light"},{default:t(()=>[a(l,{flush:""},{default:t(()=>[a(e,{title:"Accordion Item #1"},{default:t(()=>[E,V,O]),_:1}),a(e,{title:"Accordion Item #2"},{default:t(()=>[R,F,z]),_:1}),a(e,{title:"Accordion Item #3"},{default:t(()=>[D,G,J]),_:1})]),_:1})]),_:1})]),_:1}),K,a(i,null,{default:t(()=>[a(p,{class:"text-dark"},{default:t(()=>[a(l,{free:""},{default:t(()=>[a(e,{title:"Accordion Item #1"},{default:t(()=>[Q,U,W,X]),_:1}),a(e,{title:"Accordion Item #2"},{default:t(()=>[Z,$,nn,sn]),_:1}),a(e,{title:"Accordion Item #3"},{default:t(()=>[an,tn,en,on]),_:1})]),_:1})]),_:1})]),_:1}),cn,a(i,null,{default:t(()=>[a(u)]),_:1})])}var rn=r(k,[["render",ln],["__file","Accordion.html.vue"]]);export{rn as default};
