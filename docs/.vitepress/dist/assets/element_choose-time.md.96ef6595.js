import{J as a,o as c,c as r,k as n,N as l,l as o,V as e}from"./chunks/framework.7e4baa9a.js";const D=e(`<h2 id="时间选择" tabindex="-1">时间选择 <a class="header-anchor" href="#时间选择" aria-label="Permalink to &quot;时间选择&quot;">​</a></h2><h3 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> chooseTime </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tl-element-plus/chooseTime</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tl-element-plus/chooseTime/style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>`,4),F={style:{"margin-top":"20px"}},i=e(`<h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">tl-choose-time</span></span>
<span class="line"><span style="color:#89DDFF;">    :startOptions=&quot;startOptions&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :endOptions=&quot;startOptions&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    @startChange=&quot;startChange&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    @endChange=&quot;endChange&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;/</span><span style="color:#FFCB6B;">tl-choose-time</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">tl-choose-date</span></span>
<span class="line"><span style="color:#89DDFF;">    @startDateChange=&quot;startDateChange&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    @endDateChange=&quot;endDateChange&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;/</span><span style="color:#FFCB6B;">tl-choose-date</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">interface endChangeValue </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  startTime: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  endTime: string;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">interface endDateChange </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  startDate: Date;</span></span>
<span class="line"><span style="color:#A6ACCD;">  endDate: Date;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const startChange = (val: string) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startTime</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> val);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">const endChange = (val: endChangeValue) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(val);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">const startDateChange = (val: Date)=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(val);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">const endDateChange = (val: endDateChange) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(val);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">let startOptions = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  size: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,2),u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"element/choose-time.md","filePath":"element/choose-time.md"}'),y={name:"element/choose-time.md"},_=Object.assign(y,{setup(C){let s={size:"small"};return(A,h)=>{const p=a("tl-choose-time"),t=a("tl-choose-date");return c(),r("div",null,[D,n("div",null,[l(p,{startOptions:o(s),endOptions:o(s)},null,8,["startOptions","endOptions"])]),n("div",F,[l(t)]),i])}}});export{u as __pageData,_ as default};
