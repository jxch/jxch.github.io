import{_ as n,c as a,a as e,o as l}from"./app-CE0GJ03M.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml"><span>docker-compose.yml</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span> </span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>8.16.1</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> discovery.type=single<span class="token punctuation">-</span>node </span>
<span class="line">      <span class="token punctuation">-</span> xpack.security.enabled=true</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /mnt/nexus3/es_data<span class="token punctuation">:</span>/usr/share/elasticsearch/data </span>
<span class="line">    <span class="token key atrule">logging</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span></span>
<span class="line">      <span class="token key atrule">options</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;50m&quot;</span></span>
<span class="line">        <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line">  <span class="token key atrule">kibana</span><span class="token punctuation">:</span> </span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> kibana<span class="token punctuation">:</span>8.16.1 </span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;12563:5601&quot;</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ELASTICSEARCH_HOSTS=http<span class="token punctuation">:</span>//elasticsearch<span class="token punctuation">:</span><span class="token number">9200</span></span>
<span class="line">      <span class="token punctuation">-</span> XPACK_SECURITY_ENABLED=true</span>
<span class="line">      <span class="token punctuation">-</span> ELASTICSEARCH_USERNAME=kibana_system</span>
<span class="line">      <span class="token punctuation">-</span> ELASTICSEARCH_PASSWORD=&quot;3UGDvTkAmzhprC5<span class="token important">*9PUw&quot;</span></span>
<span class="line">    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> elasticsearch</span>
<span class="line">    <span class="token key atrule">logging</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span></span>
<span class="line">      <span class="token key atrule">options</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;50m&quot;</span></span>
<span class="line">        <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line">  <span class="token key atrule">zipkin</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> bitnami/zipkin<span class="token punctuation">:</span><span class="token number">3</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;12411:9411&quot;</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> STORAGE_TYPE=elasticsearch</span>
<span class="line">      <span class="token punctuation">-</span> ES_HOSTS=elasticsearch<span class="token punctuation">:</span><span class="token number">9200</span></span>
<span class="line">      <span class="token punctuation">-</span> ES_USERNAME=elastic</span>
<span class="line">      <span class="token punctuation">-</span> ES_PASSWORD=rC4hG9mR9DUC109=DeS8</span>
<span class="line">    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> elasticsearch</span>
<span class="line">    <span class="token key atrule">logging</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span></span>
<span class="line">      <span class="token key atrule">options</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;50m&quot;</span></span>
<span class="line">        <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line">  <span class="token key atrule">logstash</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> bitnami/logstash<span class="token punctuation">:</span>8.17.0</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span> </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;5044:8080&quot;</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./logstash.conf<span class="token punctuation">:</span>/opt/bitnami/logstash/pipeline/logstash.conf</span>
<span class="line">    <span class="token key atrule">logging</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span></span>
<span class="line">      <span class="token key atrule">options</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;50m&quot;</span></span>
<span class="line">        <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="logstash-conf" tabindex="-1"><a class="header-anchor" href="#logstash-conf"><span>logstash.conf</span></a></h2><div class="language-config line-numbers-mode" data-highlighter="prismjs" data-ext="config" data-title="config"><pre><code><span class="line">input {</span>
<span class="line">  tcp {</span>
<span class="line">    port =&gt; 8080 </span>
<span class="line">    codec =&gt; json_lines </span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">output {</span>
<span class="line">  elasticsearch {</span>
<span class="line">    hosts =&gt; [&quot;http://elasticsearch:9200&quot;] </span>
<span class="line">    user =&gt; &quot;elastic&quot;</span>
<span class="line">    password =&gt; &quot;rC4hG9mR9DUC109=DeS8&quot;</span>
<span class="line">    index =&gt; &quot;logs-%{+YYYY.MM.dd}&quot;</span>
<span class="line">    ssl =&gt; false </span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置密码" tabindex="-1"><a class="header-anchor" href="#设置密码"><span>设置密码</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 进入 elasticsearch 容器内部</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>elasticsearch<span class="token operator">&gt;</span> <span class="token function">sh</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置超级用户的密码，此用户名密码可以用在logstash、zipkin和kibana web ui的登录上</span></span>
<span class="line">bin/elasticsearch-reset-password <span class="token parameter variable">-u</span> elastic</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置kibana用户的密码，此用户专用于kibana容器与elasticsearch容器的交互</span></span>
<span class="line">bin/elasticsearch-reset-password <span class="token parameter variable">-u</span> kibana_system</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=n(i,[["render",p],["__file","ELKbushu.html.vue"]]),u=JSON.parse('{"path":"/blogs/yunweishouce/ELKbushu.html","title":"ELK 部署","lang":"zh-CN","frontmatter":{"title":"ELK 部署","date":"2025/04/16","tags":["elasticsearch"],"categories":["运维手册"]},"headers":[{"level":2,"title":"docker-compose.yml","slug":"docker-compose-yml","link":"#docker-compose-yml","children":[]},{"level":2,"title":"logstash.conf","slug":"logstash-conf","link":"#logstash-conf","children":[]},{"level":2,"title":"设置密码","slug":"设置密码","link":"#设置密码","children":[]}],"git":{"createdTime":1744735431000,"updatedTime":1744735431000,"contributors":[{"name":"jxch","email":"qianbuhan@proton.me","commits":1}]},"filePathRelative":"blogs/运维手册/ELK部署.md"}');export{o as comp,u as data};
