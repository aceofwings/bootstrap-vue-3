import{_ as v,g as m,r as u,o as b,c as q,b as s,w as t,a,e as l,d as p,t as d}from"./app.ae048c67.js";const _={setup(){return{animate:m(!1)}}},f=a("h1",{id:"progress",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#progress","aria-hidden":"true"},"#"),l(" Progress")],-1),x=a("p",null,"Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.",-1),y=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>75<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> Value</h2><p>Set the maximum value with the <code>max</code> prop (default is <code>100</code>), and the current value via the <code>value</code> prop (default <code>0</code>).</p><p>When creating multiple bars in a single process, place the value prop on the individual <code>&lt;b-progress-bar&gt;</code> sub-components (see the Multiple Bars section below for more details)</p><h2 id="labels" tabindex="-1"><a class="header-anchor" href="#labels" aria-hidden="true">#</a> Labels</h2><p>Add labels to your progress bars by either enabling <code>show-progress</code> (percentage of max) or <code>show-value</code> for the current absolute value. You may also set the precision (number of digits after the decimal) via the <code>precision</code> prop (default is <code>0</code> digits after the decimal).</p>`,6),w=a("h5",null,"No label",-1),S=a("h5",null,"Value label",-1),C=a("h5",null,"Progress label",-1),T=a("h5",null,"Value label with precision",-1),B=a("h5",null,"Progress label with precision",-1),N=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>No label<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>33.3333<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Value label<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>33.3333<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">show-value</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Progress label<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>33.3333<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">show-progress</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Value label with precision<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>33.3333<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:precision</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">show-value</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Progress label with precision<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>33.3333<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:precision</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">show-progress</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="custom-progress-label" tabindex="-1"><a class="header-anchor" href="#custom-progress-label" aria-hidden="true">#</a> Custom progress label</h3><p>Need more control over the label? Provide your own label by using the default slot within a <code>&lt;b-progress-bar&gt;</code> sub-component, or by using the <code>label</code> or <code>label-html</code> property on <code>&lt;b-progress-bar&gt;</code>:</p>`,3),P=a("h5",null,"Custom label via default slot",-1),D=l("Progress: "),V=a("h5",{class:"mt-3"},"Custom label via property",-1),A=a("h5",{class:"mt-3"},"Custom label via property (HTML support)",-1),$=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Custom label via default slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2rem<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress-bar</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>33.333333<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Progress: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>{{ (33.333333).toFixed(2) }} / {{ 50 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress-bar</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Custom label via property<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress-bar</span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>33.333333<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`\${((33.333333 / 50) * 100).toFixed(2)}%\`<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress-bar</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Custom label via property (HTML support)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress-bar</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>33.333333<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:label-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`&lt;del&gt;\${33.333333}&lt;/del&gt;\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress-bar</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> Height</h2><p>The height of the progress bar can be controlled with the height prop. The height value should be a standard CSS dimension (px, rem, em, etc.). The default height is 1rem.</p>`,3),E=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="backgrounds" tabindex="-1"><a class="header-anchor" href="#backgrounds" aria-hidden="true">#</a> Backgrounds</h2><p>Use background variants to change the appearance of individual progress bars. The default variant is <code>primary</code>.</p>`,3),M=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>75<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multiple-bars" tabindex="-1"><a class="header-anchor" href="#multiple-bars" aria-hidden="true">#</a> Multiple bars</h2><p>Include multiple <code>&lt;b-progress-bar&gt;</code> sub-components in a <code>&lt;b-progress&gt;</code> component to build a horizontally stacked set of progress bars.</p>`,3),F=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress-bar</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress-bar</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress-bar</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="striped" tabindex="-1"><a class="header-anchor" href="#striped" aria-hidden="true">#</a> Striped</h2><p>Set <code>striped</code> to apply a stripe via CSS gradient over the progress bar&#39;s background variant.</p>`,3),H=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>75<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-progress</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="animated-stripes" tabindex="-1"><a class="header-anchor" href="#animated-stripes" aria-hidden="true">#</a> Animated stripes</h2><p>The striped gradient can also be animated by setting the <code>animated</code> prop.</p>`,3),L=l("Toggle animation"),O=p('<h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference" aria-hidden="true">#</a> Component reference</h2><h3 id="b-progress" tabindex="-1"><a class="header-anchor" href="#b-progress" aria-hidden="true">#</a> <code>&lt;b-progress&gt;</code></h3><h4 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h4><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>animated</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Enable the animated background. Also automatically sets &#39;striped&#39;</td></tr><tr><td><code>max</code></td><td><code>Number</code> or <code>String</code></td><td><code>100</code></td><td>Set the maximum value</td></tr><tr><td><code>precision</code></td><td><code>Number</code> or <code>String</code></td><td>0</td><td>The number of digits after the decimal to round the value to</td></tr><tr><td><code>show-progress</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Displays the current progress value as a percentage</td></tr><tr><td><code>show-value</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Displays the current progress value</td></tr><tr><td><code>striped</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Enable the striped background</td></tr><tr><td><code>value</code></td><td><code>Number</code> or <code>String</code></td><td>0</td><td>The current value of the progress bar</td></tr><tr><td><code>variant</code></td><td><code>String</code></td><td></td><td>Applies one of the Bootstrap theme color variants to the component</td></tr></tbody></table><h4 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content (progress bars) to place in the progress element</td></tr></tbody></table><h3 id="b-progress-bar" tabindex="-1"><a class="header-anchor" href="#b-progress-bar" aria-hidden="true">#</a> <code>&lt;b-progress-bar&gt;</code></h3><h4 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h4>',8),U=a("thead",null,[a("tr",null,[a("th",null,"Property"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),z=a("tr",null,[a("td",null,[a("code",null,"animated")]),a("td",null,[a("code",null,"Boolean")]),a("td",null,[a("code",null,"false")]),a("td",null,"Enable the animated background. Also automatically sets 'striped'")],-1),I=a("tr",null,[a("td",null,[a("code",null,"label")]),a("td",null,[a("code",null,"String")]),a("td"),a("td",null,"Text string to explicitly set the label as")],-1),W=a("code",null,"label-html",-1),Y=a("br",null,null,-1),j=l("Use with caution"),G=a("td",null,[a("code",null,"String")],-1),J=a("td",null,null,-1),K=a("td",null,"HTML string to explicitly set the label as",-1),Q=a("tr",null,[a("td",null,[a("code",null,"max")]),a("td",null,[a("code",null,"Number"),l(" or "),a("code",null,"String")]),a("td",null,[a("code",null,"100")]),a("td",null,"Set the maximum value")],-1),R=a("tr",null,[a("td",null,[a("code",null,"precision")]),a("td",null,[a("code",null,"Number"),l(" or "),a("code",null,"String")]),a("td",null,"0"),a("td",null,"The number of digits after the decimal to round the value to")],-1),X=a("tr",null,[a("td",null,[a("code",null,"show-progress")]),a("td",null,[a("code",null,"Boolean")]),a("td",null,[a("code",null,"false")]),a("td",null,"Displays the current progress value as a percentage")],-1),Z=a("tr",null,[a("td",null,[a("code",null,"show-value")]),a("td",null,[a("code",null,"Boolean")]),a("td",null,[a("code",null,"false")]),a("td",null,"Displays the current progress value")],-1),aa=a("tr",null,[a("td",null,[a("code",null,"striped")]),a("td",null,[a("code",null,"Boolean")]),a("td",null,[a("code",null,"false")]),a("td",null,"Enable the striped background")],-1),sa=a("tr",null,[a("td",null,[a("code",null,"value")]),a("td",null,[a("code",null,"Number"),l(" or "),a("code",null,"String")]),a("td",null,"0"),a("td",null,"The current value of the progress bar")],-1),na=a("tr",null,[a("td",null,[a("code",null,"variant")]),a("td",null,[a("code",null,"String")]),a("td"),a("td",null,"Applies one of the Bootstrap theme color variants to the component")],-1),ta=p('<h4 id="slots-1" tabindex="-1"><a class="header-anchor" href="#slots-1" aria-hidden="true">#</a> Slots</h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content to place in the progress bar. Overrides the <code>label</code>, <code>label-html</code>, <code>show-progress</code> and <code>show-value</code> props</td></tr></tbody></table>',2);function ea(k,i,pa,r,oa,la){const n=u("b-progress"),o=u("b-card"),e=u("ClientOnly"),c=u("b-progress-bar"),g=u("b-button"),h=u("badge");return b(),q("div",null,[f,x,s(e,null,{default:t(()=>[s(o,null,{default:t(()=>[s(n,{value:0}),s(n,{class:"mt-3",value:25}),s(n,{class:"mt-3",value:50}),s(n,{class:"mt-3",value:75}),s(n,{class:"mt-3",value:100})]),_:1})]),_:1}),y,s(e,null,{default:t(()=>[s(o,{class:"text-dark"},{default:t(()=>[w,s(n,{value:33.3333,max:50,class:"mb-3"},null,8,["value"]),S,s(n,{value:33.3333,max:50,"show-value":"",class:"mb-3"},null,8,["value"]),C,s(n,{value:33.3333,max:50,"show-progress":"",class:"mb-3"},null,8,["value"]),T,s(n,{value:33.3333,max:50,precision:2,"show-value":"",class:"mb-3"},null,8,["value"]),B,s(n,{value:33.3333,max:50,precision:2,"show-progress":"",class:"mb-3"},null,8,["value"])]),_:1})]),_:1}),N,s(e,null,{default:t(()=>[s(o,{class:"text-dark"},{default:t(()=>[P,s(n,{max:50,height:"2rem"},{default:t(()=>[s(c,{value:33.333333},{default:t(()=>[a("span",null,[D,a("strong",null,d(33.333333 .toFixed(2))+" / "+d(50),1)])]),_:1},8,["value"])]),_:1}),V,s(n,{max:50},{default:t(()=>[s(c,{value:33.333333,label:`${(33.333333/50*100).toFixed(2)}%`},null,8,["value","label"])]),_:1}),A,s(n,{max:50},{default:t(()=>[s(c,{value:33.333333,"label-html":`<del>${33.333333}</del>`},null,8,["value","label-html"])]),_:1})]),_:1})]),_:1}),$,s(e,null,{default:t(()=>[s(o,null,{default:t(()=>[s(n,{value:25,height:"1px"}),s(n,{class:"mt-3",value:25,height:"20px"})]),_:1})]),_:1}),E,s(e,null,{default:t(()=>[s(o,null,{default:t(()=>[s(n,{variant:"success",value:25}),s(n,{class:"mt-3",variant:"info",value:50}),s(n,{class:"mt-3",variant:"warning",value:75}),s(n,{class:"mt-3",variant:"danger",value:100})]),_:1})]),_:1}),M,s(e,null,{default:t(()=>[s(o,null,{default:t(()=>[s(n,null,{default:t(()=>[s(c,{value:15}),s(c,{value:30,variant:"success"}),s(c,{value:20,variant:"info"})]),_:1})]),_:1})]),_:1}),F,s(e,null,{default:t(()=>[s(o,null,{default:t(()=>[s(n,{striped:"",value:10}),s(n,{striped:"",class:"mt-3",variant:"success",value:25}),s(n,{striped:"",class:"mt-3",variant:"info",value:50}),s(n,{striped:"",class:"mt-3",variant:"warning",value:75}),s(n,{striped:"",class:"mt-3",variant:"danger",value:100})]),_:1})]),_:1}),H,s(e,null,{default:t(()=>[s(o,null,{default:t(()=>[s(n,{value:75,striped:"",animated:r.animate},null,8,["animated"]),s(g,{class:"mt-3",onClick:i[0]||(i[0]=ca=>r.animate=!r.animate)},{default:t(()=>[L]),_:1})]),_:1})]),_:1}),O,a("table",null,[U,a("tbody",null,[z,I,a("tr",null,[a("td",null,[W,Y,s(h,{class:"text-dark",type:"warning"},{default:t(()=>[j]),_:1})]),G,J,K]),Q,R,X,Z,aa,sa,na])]),ta,s(e)])}var ra=v(_,[["render",ea],["__file","Progress.html.vue"]]);export{ra as default};
