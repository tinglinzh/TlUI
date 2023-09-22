import{_ as o,C as e,o as t,c as p,k as a,H as l,Q as n}from"./chunks/framework.98b45361.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"element/progress-bar.md","filePath":"element/progress-bar.md"}'),r={name:"element/progress-bar.md"},c=n(`<h2 id="进度条" tabindex="-1">进度条 <a class="header-anchor" href="#进度条" aria-label="Permalink to &quot;进度条&quot;">​</a></h2><h3 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> progressBar </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tl-element-plus/progressBar&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tl-element-plus/progressBar/style.css&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> progressBar </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tl-element-plus/progressBar&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tl-element-plus/progressBar/style.css&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><br>`,5),i={style:{"margin-top":"30px"}},y=n(`<h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">tl-progress</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:percentage=&quot;60&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isAnimation</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">tl-progress</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">tl-progress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;circle&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:percentage=&quot;60&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isAnimation</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">tl-progress</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">tl-progress</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:percentage=&quot;60&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isAnimation</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">tl-progress</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">tl-progress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;circle&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:percentage=&quot;60&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isAnimation</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">tl-progress</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,2);function E(d,g,u,_,h,m){const s=e("tl-progress");return t(),p("div",null,[c,a("div",null,[l(s,{percentage:60,isAnimation:""})]),a("div",i,[l(s,{type:"circle",percentage:60,isAnimation:""})]),y])}const B=o(r,[["render",E]]);export{q as __pageData,B as default};