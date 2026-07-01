import{_ as a,c as n,a as e,o as l}from"./app-CE0GJ03M.js";const i={};function p(t,s){return l(),n("div",null,s[0]||(s[0]=[e(`<h2 id="添加交换空间" tabindex="-1"><a class="header-anchor" href="#添加交换空间"><span>添加交换空间</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">mkdir</span> /swap</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建交换空间文件</span></span>
<span class="line">fallocate <span class="token parameter variable">-l</span> 2G /swap/swapfile1</span>
<span class="line"><span class="token comment"># 或者使用 dd 命令</span></span>
<span class="line"><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/swap/swapfile1 <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">2097152</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启用并挂载交换空间</span></span>
<span class="line"><span class="token function">chmod</span> <span class="token number">600</span> /swap/swapfile1</span>
<span class="line"><span class="token function">mkswap</span> /swap/swapfile1</span>
<span class="line"><span class="token function">swapon</span> /swap/swapfile1</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;/swap/swapfile1 swap swap defaults 0 0&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/fstab</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看是否挂载成功</span></span>
<span class="line"><span class="token function">swapon</span> <span class="token parameter variable">--show</span></span>
<span class="line"><span class="token function">free</span> <span class="token parameter variable">-h</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除交换空间" tabindex="-1"><a class="header-anchor" href="#删除交换空间"><span>删除交换空间</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 卸载交换空间</span></span>
<span class="line">swapoff <span class="token parameter variable">-v</span> /swap/swapfile1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除挂载交换空间的配置</span></span>
<span class="line"><span class="token function">vi</span> /etc/fstab</span>
<span class="line"><span class="token function">rm</span> /swap/swapfile1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const o=a(i,[["render",p],["__file","LinuxtianjiaSwapjiaohuankongjian.html.vue"]]),r=JSON.parse('{"path":"/blogs/yunweishouce/LinuxtianjiaSwapjiaohuankongjian.html","title":"Linux 添加 Swap 交换空间","lang":"zh-CN","frontmatter":{"title":"Linux 添加 Swap 交换空间","date":"2025/03/07","tags":["Linux"],"categories":["运维手册"]},"headers":[{"level":2,"title":"添加交换空间","slug":"添加交换空间","link":"#添加交换空间","children":[]},{"level":2,"title":"删除交换空间","slug":"删除交换空间","link":"#删除交换空间","children":[]}],"git":{"createdTime":1741391954000,"updatedTime":1741391954000,"contributors":[{"name":"jxch","email":"qianbuhan@proton.me","commits":1}]},"filePathRelative":"blogs/运维手册/Linux添加Swap交换空间.md"}');export{o as comp,r as data};
