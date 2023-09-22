import{C as l,o as y,c as u,k as o,H as n,w as q,Q as t,l as p}from"./chunks/framework.98b45361.js";const F=t(`<h2 id="通知预览" tabindex="-1">通知预览 <a class="header-anchor" href="#通知预览" aria-label="Permalink to &quot;通知预览&quot;">​</a></h2><h3 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> previewNotice </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tl-element-plus/previewNotice&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tl-element-plus/previewNotice/style.css&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> previewNotice </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tl-element-plus/previewNotice&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tl-element-plus/previewNotice/style.css&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><br>`,5),d={style:{display:"flex","flex-direction":"column"}},m=o("br",null,null,-1),g=t(`<h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;display:flex; flex-direction: column;&#39;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">tl-notification</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:value=&quot;3&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">&lt;template</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">#default&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#FDAEB7;font-style:italic;">&lt;tl-notice-list</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@clickItem=&quot;clickItem&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">@clickAction=&quot;clickAction&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">:list=&quot;listData&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">:actions=&quot;actions&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       &lt;/</span><span style="color:#79B8FF;">tl-notice-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">tl</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">notification</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">tl-notification</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:value=&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">icon</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Apple&quot;</span><span style="color:#E1E4E8;"> &gt;&lt;/</span><span style="color:#79B8FF;">tl-notification</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">const listData = [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;通知&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;库克回复了你的邮件&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        time: </span><span style="color:#9ECBFF;">&quot;2023-07-09 16:33:12&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        avatar:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;贾跃亭邀请你参加北京时间上午10点的会议&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        time: </span><span style="color:#9ECBFF;">&quot;2020-07-09 8:50:12&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        avatar:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;李强批准了你的休假申请&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        time: </span><span style="color:#9ECBFF;">&quot;2023-07-08 14:24:32&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        avatar:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&amp;x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&amp;from=2480802190&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;关注&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;白夜评论了你&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        time: </span><span style="color:#9ECBFF;">&quot;2小时前&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        avatar:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;贾跃亭关注了你&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        desc: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        time: </span><span style="color:#9ECBFF;">&quot;4小时前&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        avatar:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;tinglin点赞了你的图文&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        desc: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        time: </span><span style="color:#9ECBFF;">&quot;2023-07-08 12:32:21&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        avatar:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&amp;x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&amp;from=2480802190&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;待办&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;环境配置&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        desc: </span><span style="color:#9ECBFF;">&quot;任务将于2023-07-13发布&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tagType: </span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tag: </span><span style="color:#9ECBFF;">&quot;未开始&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;代码bug紧急处理&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        desc: </span><span style="color:#9ECBFF;">&quot;请于2023-07-12前完成&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tagType: </span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tag: </span><span style="color:#9ECBFF;">&quot;进行中&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&quot;信息安全考试&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        desc: </span><span style="color:#9ECBFF;">&quot;请于2023-07-08前完成&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tagType: </span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tag: </span><span style="color:#9ECBFF;">&quot;已完成&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> const actions= [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { text: </span><span style="color:#9ECBFF;">&quot;清空&quot;</span><span style="color:#E1E4E8;">, icon: </span><span style="color:#9ECBFF;">&quot;delete&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { text: </span><span style="color:#9ECBFF;">&quot;查看全部&quot;</span><span style="color:#E1E4E8;">, icon: </span><span style="color:#9ECBFF;">&quot;Edit&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">let clickItem = (val: any) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(val);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">let clickAction = (val: any) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(val);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;display:flex; flex-direction: column;&#39;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">tl-notification</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:value=&quot;3&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">&lt;template</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">#default&gt;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#B31D28;font-style:italic;">&lt;tl-notice-list</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@clickItem=&quot;clickItem&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">@clickAction=&quot;clickAction&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">:list=&quot;listData&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">:actions=&quot;actions&quot;</span></span>
<span class="line"><span style="color:#24292E;">        &gt;</span></span>
<span class="line"><span style="color:#24292E;">       &lt;/</span><span style="color:#005CC5;">tl-notice-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">tl</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">notification</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">tl-notification</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:value=&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">icon</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Apple&quot;</span><span style="color:#24292E;"> &gt;&lt;/</span><span style="color:#005CC5;">tl-notification</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">const listData = [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;通知&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;库克回复了你的邮件&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        time: </span><span style="color:#032F62;">&quot;2023-07-09 16:33:12&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        avatar:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;贾跃亭邀请你参加北京时间上午10点的会议&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        time: </span><span style="color:#032F62;">&quot;2020-07-09 8:50:12&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        avatar:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;李强批准了你的休假申请&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        time: </span><span style="color:#032F62;">&quot;2023-07-08 14:24:32&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        avatar:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&amp;x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&amp;from=2480802190&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;关注&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;白夜评论了你&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        time: </span><span style="color:#032F62;">&quot;2小时前&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        avatar:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;贾跃亭关注了你&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        desc: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        time: </span><span style="color:#032F62;">&quot;4小时前&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        avatar:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;tinglin点赞了你的图文&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        desc: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        time: </span><span style="color:#032F62;">&quot;2023-07-08 12:32:21&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        avatar:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&amp;x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&amp;from=2480802190&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;待办&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;环境配置&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        desc: </span><span style="color:#032F62;">&quot;任务将于2023-07-13发布&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        tagType: </span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        tag: </span><span style="color:#032F62;">&quot;未开始&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;代码bug紧急处理&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        desc: </span><span style="color:#032F62;">&quot;请于2023-07-12前完成&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        tagType: </span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        tag: </span><span style="color:#032F62;">&quot;进行中&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&quot;信息安全考试&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        desc: </span><span style="color:#032F62;">&quot;请于2023-07-08前完成&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        tagType: </span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        tag: </span><span style="color:#032F62;">&quot;已完成&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> const actions= [</span></span>
<span class="line"><span style="color:#24292E;">  { text: </span><span style="color:#032F62;">&quot;清空&quot;</span><span style="color:#24292E;">, icon: </span><span style="color:#032F62;">&quot;delete&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { text: </span><span style="color:#032F62;">&quot;查看全部&quot;</span><span style="color:#24292E;">, icon: </span><span style="color:#032F62;">&quot;Edit&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">let clickItem = (val: any) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(val);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">let clickAction = (val: any) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(val);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,2),h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"element/preview-notice.md","filePath":"element/preview-notice.md"}'),v={name:"element/preview-notice.md"},C=Object.assign(v,{setup(f){const e=[{title:"通知",content:[{title:"库克回复了你的邮件",time:"2023-07-09 16:33:12",avatar:"https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c"},{title:"贾跃亭邀请你参加北京时间上午10点的会议",time:"2020-07-09 8:50:12",avatar:"https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662"},{title:"李强批准了你的休假申请",time:"2023-07-08 14:24:32",avatar:"https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&from=2480802190"}]},{title:"关注",content:[{title:"白夜评论了你",time:"2小时前",avatar:"https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c"},{title:"贾跃亭关注了你",desc:"",time:"4小时前",avatar:"https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662"},{title:"tinglin点赞了你的图文",desc:"",time:"2023-07-08 12:32:21",avatar:"https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&from=2480802190"}]},{title:"待办",content:[{title:"环境配置",desc:"任务将于2023-07-13发布",tagType:"info",tag:"未开始"},{title:"代码bug紧急处理",desc:"请于2023-07-12前完成",tagType:"danger",tag:"进行中"},{title:"信息安全考试",desc:"请于2023-07-08前完成",tagType:"success",tag:"已完成"}]}],c=[{text:"清空",icon:"delete"},{text:"查看全部",icon:"Edit"}];let E=s=>{console.log(s)},r=s=>{console.log(s)};return(s,B)=>{const i=l("tl-notice-list"),a=l("tl-notification");return y(),u("div",null,[F,o("div",d,[n(a,{value:3},{default:q(()=>[n(i,{onClickItem:p(E),onClickAction:p(r),list:e,actions:c},null,8,["onClickItem","onClickAction"])]),_:1}),m,n(a,{value:10,icon:"Apple"})]),g])}}});export{h as __pageData,C as default};
