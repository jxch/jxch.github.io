import{_ as a,c as n,a as e,o as l}from"./app-CE0GJ03M.js";const i={};function p(c,s){return l(),n("div",null,s[0]||(s[0]=[e(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-s</span> https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh <span class="token operator">|</span> <span class="token function">bash</span></span>
<span class="line">k3d cluster create lab   <span class="token parameter variable">--agents</span> <span class="token number">1</span>   <span class="token parameter variable">-p</span> <span class="token string">&quot;8080:80@loadbalancer&quot;</span>   <span class="token parameter variable">-p</span> <span class="token string">&quot;8443:443@loadbalancer&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-LO</span> <span class="token string">&quot;https://dl.k8s.io/release/<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-Ls</span> https://dl.k8s.io/release/stable.txt<span class="token variable">)</span></span>/bin/linux/amd64/kubectl&quot;</span></span>
<span class="line"><span class="token function">chmod</span> +x kubectl</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mv</span> kubectl /usr/local/bin/kubectl</span>
<span class="line">kubectl version <span class="token parameter variable">--client</span></span>
<span class="line">kubectl config use-context k3d-lab</span>
<span class="line">kubectl cluster-info</span>
<span class="line">kubectl get nodes <span class="token parameter variable">-o</span> wide</span>
<span class="line">kubectl get pods <span class="token parameter variable">-A</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 <span class="token operator">|</span> <span class="token function">bash</span></span>
<span class="line">helm repo <span class="token function">add</span> bitnami https://charts.bitnami.com/bitnami</span>
<span class="line">helm repo <span class="token function">add</span> argo https://argoproj.github.io/argo-helm</span>
<span class="line">helm repo update</span>
<span class="line"></span>
<span class="line">kubectl create namespace argocd</span>
<span class="line">helm upgrade <span class="token parameter variable">--install</span> argocd argo/argo-cd <span class="token parameter variable">-n</span> argocd</span>
<span class="line">kubectl <span class="token parameter variable">-n</span> argocd rollout status deploy/argocd-server</span>
<span class="line">kubectl <span class="token parameter variable">-n</span> argocd get pods</span>
<span class="line"><span class="token comment"># argocd 密码</span></span>
<span class="line">kubectl <span class="token parameter variable">-n</span> argocd get secret argocd-initial-admin-secret <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.data.password}&quot;</span> <span class="token operator">|</span> base64 -d<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">&#39;YAML&#39;<span class="token bash punctuation"> <span class="token operator">|</span> kubectl apply <span class="token parameter variable">-f</span> -</span></span>
<span class="line">apiVersion: traefik.containo.us/v1alpha1</span>
<span class="line">kind: ServersTransport</span>
<span class="line">metadata:</span>
<span class="line">  name: argocd-transport</span>
<span class="line">  namespace: argocd</span>
<span class="line">spec:</span>
<span class="line">  insecureSkipVerify: true</span>
<span class="line">---</span>
<span class="line">apiVersion: traefik.containo.us/v1alpha1</span>
<span class="line">kind: IngressRoute</span>
<span class="line">metadata:</span>
<span class="line">  name: argocd</span>
<span class="line">  namespace: argocd</span>
<span class="line">spec:</span>
<span class="line">  entryPoints:</span>
<span class="line">    - websecure</span>
<span class="line">  routes:</span>
<span class="line">    - kind: Rule</span>
<span class="line">      match: Host(\`argocd.local\`)</span>
<span class="line">      services:</span>
<span class="line">        - name: argocd-server</span>
<span class="line">          port: 443</span>
<span class="line">          scheme: https</span>
<span class="line">          serversTransport: argocd-transport</span>
<span class="line">  tls: {}</span>
<span class="line">YAML</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul><li>用户名：admin</li><li>设置 <code>hosts</code> 文件：<code>127.0.0.1 argocd.local</code></li></ul></div>`,3)]))}const r=a(i,[["render",p],["__file","WSLanzhuangk3d.html.vue"]]),o=JSON.parse('{"path":"/blogs/yunweishouce/WSLanzhuangk3d.html","title":"WSL 安装 k3d","lang":"zh-CN","frontmatter":{"title":"WSL 安装 k3d","date":"2026/03/08","tags":["WSL"],"categories":["运维手册"]},"headers":[],"git":{"createdTime":1773284695000,"updatedTime":1773284695000,"contributors":[{"name":"jxch","email":"xicheng.jiang.1@gmail.com","commits":1}]},"filePathRelative":"blogs/运维手册/WSL安装k3d.md"}');export{r as comp,o as data};
