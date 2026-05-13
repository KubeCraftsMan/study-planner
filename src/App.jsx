import { useState, useEffect } from "react";

const DAYS = [
  { key: "seg", label: "Segunda", icon: "🧠", tag: "System Design",    color: "#a78bfa" },
  { key: "ter", label: "Terça",   icon: "🔧", tag: "Técnico",          color: "#fbbf24" },
  { key: "qua", label: "Quarta",  icon: "☁️", tag: "Cloud + Security", color: "#60a5fa" },
  { key: "qui", label: "Quinta",  icon: "📊", tag: "SRE",              color: "#34d399" },
  { key: "sex", label: "Sexta",   icon: "✍️", tag: "Liderança",        color: "#f472b6" },
];

const PC = { p1:"#f59e0b", p2:"#10b981", p3:"#3b82f6", p4:"#8b5cf6", p5:"#ef4444", p6:"#06b6d4", p7:"#f472b6" };

const w = (id, num, seg, ter, qua, qui, sex) => ({
  id, num,
  days: {
    seg: seg.map((t,i)=>({id:`${id}-s${i}`,text:t[0],url:t[1]||""})),
    ter: ter.map((t,i)=>({id:`${id}-t${i}`,text:t[0],url:t[1]||""})),
    qua: qua.map((t,i)=>({id:`${id}-q${i}`,text:t[0],url:t[1]||""})),
    qui: qui.map((t,i)=>({id:`${id}-i${i}`,text:t[0],url:t[1]||""})),
    sex: sex.map((t,i)=>({id:`${id}-x${i}`,text:t[0],url:t[1]||""})),
  }
});

const PHASES = [
  // ─── FASE 1 — Fundação (Meses 1–4) ───────────────────────────────────────
  {
    id:"p1", num:1, title:"Fundação", period:"Meses 1–4", weeks_label:"Semanas 1–16",
    cert:"🎓 CKA — Meta: Mês 4",
    goal:"CKA no bolso. Base filosófica de SRE. System Design como linguagem. Começar a pensar além do squad.",
    months:[
      { title:"Mês 1", weeks:[
        w("m1w1",1,
          [["CAP Theorem, consistência eventual, trade-offs de sistemas distribuídos","https://github.com/donnemartin/system-design-primer"]],
          [["Arquitetura do cluster: control plane, etcd, kubelet, API server","https://kubernetes.io/docs/concepts/architecture/"]],
          [["Well-Architected: pilar de Segurança completo","https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html"]],
          [["SRE Book cap. 1–2: O que é SRE, Embracing Risk","https://sre.google/sre-book/embracing-risk/"]],
          [["Team Topologies cap. 1–2: estrutura de time impacta arquitetura","https://teamtopologies.com/book"]]),
        w("m1w2",2,
          [["Padrões de Load Balancing, Caching (L1/L2/CDN), estratégias de invalidação","https://github.com/donnemartin/system-design-primer"]],
          [["Workloads: Pod, Deployment, DaemonSet, StatefulSet, Job, CronJob","https://kubernetes.io/docs/concepts/workloads/"]],
          [["IAM avançado: roles, policies, trust policies, cross-account","https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"]],
          [["SRE Book cap. 3–4: SLOs, SLIs, SLAs — como definir o que importa","https://sre.google/sre-book/service-level-objectives/"]],
          [["Team Topologies cap. 3–4: Stream-aligned, Platform, Enabling teams","https://teamtopologies.com/book"]]),
        w("m1w3",3,
          [["Padrões de Disponibilidade: circuit breaker, retry, bulkhead, timeout","https://azure.microsoft.com/en-us/resources/designing-distributed-systems/"]],
          [["ConfigMap, Secrets, Environment variables, volumes básicos","https://kubernetes.io/docs/concepts/configuration/"]],
          [["VPC deep dive: subnets, route tables, security groups, NACLs","https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"]],
          [["SRE Book cap. 5: Eliminating Toil — identifique toil no seu trabalho","https://sre.google/sre-book/eliminating-toil/"]],
          [["O que é um ADR + escreva o primeiro sobre uma decisão real","https://github.com/joelparkerhenderson/architecture-decision-record"]]),
        w("m1w4",4,
          [["Padrão Sidecar e Ambassador no contexto real (Istio, Vault Agent)","https://azure.microsoft.com/en-us/resources/designing-distributed-systems/"]],
          [["Namespaces, Labels, Selectors, Annotations — organização real","https://kubernetes.io/docs/concepts/overview/"]],
          [["Vault production hardening: unsealing, audit, policies, leases","https://developer.hashicorp.com/vault/tutorials/operations/production-hardening"]],
          [["SRE Book cap. 6: Monitoring Distributed Systems — 4 golden signals","https://sre.google/sre-book/monitoring-distributed-systems/"]],
          [["Team Topologies cap. 5–6: Interaction modes, Team cognitive load","https://teamtopologies.com/book"]]),
      ]},
      { title:"Mês 2", weeks:[
        w("m2w1",5,
          [["Sharding, Consistent Hashing, particionamento de dados","https://github.com/donnemartin/system-design-primer"]],
          [["Scheduling: nodeSelector, nodeAffinity, podAntiAffinity","https://kubernetes.io/docs/concepts/scheduling-eviction/"]],
          [["EKS deep dive: node groups, managed nodes, Fargate, IRSA","https://aws.github.io/aws-eks-best-practices/"]],
          [["SRE Book cap. 7–8: Evolution of Automation, Release Engineering","https://sre.google/sre-book/table-of-contents/"]],
          [["An Elegant Puzzle cap. 1–2: Organizations e Sizing teams","https://lethain.com/elegant-puzzle/"]]),
        w("m2w2",6,
          [["Event-driven architecture: Kafka patterns, idempotência, ordering","https://azure.microsoft.com/en-us/resources/designing-distributed-systems/"]],
          [["Taints e Tolerations, PriorityClass, resource requests e limits","https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"]],
          [["CNCF Security Whitepaper — visão geral de segurança cloud-native","https://github.com/cncf/tag-security"]],
          [["SRE Book cap. 13–14: Emergency Response, Managing Incidents","https://sre.google/sre-book/managing-incidents/"]],
          [["An Elegant Puzzle cap. 3: Tools to manage technical quality","https://lethain.com/elegant-puzzle/"]]),
        w("m2w3",7,
          [["Multi-region patterns: active-active vs active-passive, failover","https://aws.amazon.com/architecture/"]],
          [["Services: ClusterIP, NodePort, LoadBalancer, Headless, ExternalName","https://kubernetes.io/docs/concepts/services-networking/service/"]],
          [["Pod Security Standards, RBAC no K8s, ServiceAccounts","https://kubernetes.io/docs/concepts/security/"]],
          [["SRE Book cap. 15: Postmortem Culture — escreva um postmortem real","https://sre.google/sre-book/postmortem-culture/"]],
          [["StaffEng: leia 2 histórias de Staff Engineers — anote padrões comuns","https://staffeng.com/stories/"]]),
        w("m2w4",8,
          [["Exercício: documente a arquitetura do cluster actual — identifique SPOFs",""]],
          [["DNS interno, CoreDNS, Ingress, NetworkPolicy básico","https://kubernetes.io/docs/concepts/services-networking/ingress/"]],
          [["Terraform avançado: módulos, workspaces, state locking, remote backends","https://developer.hashicorp.com/terraform/docs"]],
          [["SRE Workbook cap. 2: SLOs in Practice — defina SLOs para 1 serviço real","https://sre.google/workbook/implementing-slos/"]],
          [["Output: escreva um RFC de 1 página sobre uma melhoria técnica real","https://lethain.com/rfcs-and-design-documents/"]]),
      ]},
      { title:"Mês 3", weeks:[
        w("m3w1",9,
          [["API Design: REST vs gRPC vs GraphQL — trade-offs reais","https://cloud.google.com/apis/design"]],
          [["Storage: PV, PVC, StorageClass, dynamic provisioning, access modes","https://kubernetes.io/docs/concepts/storage/"]],
          [["ArgoCD security: RBAC, SSO, secret management, webhook validation","https://argo-cd.readthedocs.io/en/stable/operator-manual/security/"]],
          [["Alerting philosophy: alertar em sintomas vs causas, alerta acionável","https://docs.google.com/document/d/199PqyG3UsyXlwieHaqbGiWVa8eMWi8zzAn0YfcApr8Q"]],
          [["An Elegant Puzzle cap. 4–5: Migrations e Staying aligned with authority","https://lethain.com/elegant-puzzle/"]]),
        w("m3w2",10,
          [["Data pipelines: batch vs streaming, backpressure, exactly-once delivery","https://github.com/donnemartin/system-design-primer"]],
          [["RBAC completo: Role, ClusterRole, Bindings, aggregation, audit","https://kubernetes.io/docs/reference/access-authn-authz/rbac/"]],
          [["SOPS + age/PGP: boas práticas de gestão de secrets em GitOps","https://github.com/getsops/sops"]],
          [["Observability Engineering cap. 1–3: de métricas para eventos estruturados","https://www.oreilly.com/library/view/observability-engineering/9781492076438/"]],
          [["Staff archetypes: qual é o seu? (Tech Lead, Architect, Solver, Right Hand)","https://staffeng.com/guides/staff-archetypes/"]]),
        w("m3w3",11,
          [["Service Mesh deep: Istio traffic management, mTLS, observability","https://istio.io/latest/docs/concepts/"]],
          [["Cluster Administration: certificates, kubeconfig, users, upgrade de cluster","https://kubernetes.io/docs/tasks/administer-cluster/"]],
          [["AWS Security Hub, GuardDuty, Config Rules — detecção e compliance","https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html"]],
          [["Dynatrace DQL avançado — baseado no uso actual com asg_metrics Lambda","https://docs.dynatrace.com/docs/platform/grail/dynatrace-query-language"]],
          [["Como dar feedback técnico em code review que ensina, não apenas corrige","https://newsletter.pragmaticengineer.com/p/code-review"]]),
        w("m3w4",12,
          [["Exercício: redesenhe o fluxo de auth do Vault K8s Auth — onde estão os SPOFs?",""]],
          [["Troubleshooting: CrashLoopBackOff, Pending, OOMKilled, network issues","https://kubernetes.io/docs/tasks/debug/"]],
          [["Supply chain security: SLSA, Sigstore, container image signing","https://slsa.dev/"]],
          [["Exercício: defina SLOs para o Vault cluster — quais SLIs fazem sentido?",""]],
          [["Output: ADR real para decisão técnica do mês — compartilhe internamente","https://github.com/joelparkerhenderson/architecture-decision-record"]]),
      ]},
      { title:"Mês 4 — CKA Sprint", weeks:[
        w("m4w1",13,
          [["Revisitar System Design Primer — áreas fracas identificadas","https://github.com/donnemartin/system-design-primer"]],
          [["🎯 Mock exam 1 no killer.sh — anote pontos fracos","https://killer.sh/"]],
          [["AWS Well-Architected: Reliability Pillar completo","https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"]],
          [["SRE Workbook cap. 3–4: Error Budgets na prática","https://sre.google/workbook/error-budget-policy/"]],
          [["Reler e melhorar os ADRs e RFC escritos nas semanas anteriores",""]]),
        w("m4w2",14,
          [["Revisão de pontos fracos em System Design","https://github.com/donnemartin/system-design-primer"]],
          [["Revisão dos pontos fracos do mock + exercícios focados","https://kubernetes.io/docs/"]],
          [["Revisar: Vault, SOPS, ArgoCD security configs do ambiente real",""]],
          [["Postmortem formal de um incidente real do trabalho","https://sre.google/sre-book/postmortem-culture/"]],
          [["Will Larson blog: leia 2 posts sobre Staff Engineering","https://lethain.com/"]]),
        w("m4w3",15,
          [["Revisão final de System Design — prepare 3 designs do zero","https://github.com/donnemartin/system-design-primer"]],
          [["🎯 Mock exam 2 no killer.sh — medir evolução","https://killer.sh/"]],
          [["Revisar EKS best practices aplicadas ao ambiente actual","https://aws.github.io/aws-eks-best-practices/"]],
          [["Criar dashboard de SLOs para 1 serviço real que você opera",""]],
          [["Prepare apresentação de uma decisão técnica para o time",""]]),
        w("m4w4",16,
          [["Descanso mental — revisão leve de conceitos-chave",""]],
          [["🏆 CKA — Fazer o exame!","https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/"]],
          [["Revisão pós-exame: lacunas identificadas",""]],
          [["Revisão do roadmap — o que mudou, o que ajustar",""]],
          [["Retrospectiva da Fase 1 — escreva 3 aprendizados principais",""]]),
      ]},
    ]
  },

  // ─── FASE 2 — Consolidação (Meses 5–6) ───────────────────────────────────
  {
    id:"p2", num:2, title:"Consolidação", period:"Meses 5–6", weeks_label:"Semanas 17–24",
    cert:"→ CKAD prep iniciado",
    goal:"CKA conquistado. GitOps avançado. Ampliar visão de Staff. Ser referência técnica visível.",
    months:[
      { title:"Mês 5", weeks:[
        w("m5w1",17,
          [["Software Architecture: The Hard Parts cap. 1–2: decomposição e acoplamento","https://www.oreilly.com/library/view/software-architecture-the/9781492086888/"]],
          [["ArgoCD ApplicationSets: generators (cluster, git, matrix)","https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/"]],
          [["EKS advanced: Karpenter, cluster autoscaler, spot instances","https://aws.github.io/aws-eks-best-practices/"]],
          [["Observability Engineering cap. 4–5: instrumentação e structured events","https://www.oreilly.com/library/view/observability-engineering/9781492076438/"]],
          [["The Staff Engineer's Path cap. 1–2: o que Staff significa","https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/"]]),
        w("m5w2",18,
          [["Software Architecture: The Hard Parts cap. 3–4: granularidade e contratos","https://www.oreilly.com/library/view/software-architecture-the/9781492086888/"]],
          [["ArgoCD Sync Waves, Hooks (PreSync, Sync, PostSync, SyncFail)","https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/"]],
          [["FinOps básico: right-sizing, Reserved vs Spot, Cost Explorer","https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html"]],
          [["Observability Engineering cap. 6–7: tracing distribuído, high-cardinality","https://www.oreilly.com/library/view/observability-engineering/9781492076438/"]],
          [["The Staff Engineer's Path cap. 3: big-picture thinking","https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/"]]),
        w("m5w3",19,
          [["Software Architecture: The Hard Parts cap. 5–6: workflows distribuídos","https://www.oreilly.com/library/view/software-architecture-the/9781492086888/"]],
          [["Helm avançado: library charts, sub-charts, values inheritance","https://helm.sh/docs/topics/advanced/"]],
          [["ArgoCD best practices: repo structure, secrets, RBAC produção","https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/"]],
          [["OpenTelemetry: spec, SDK, collector, exporters — instrumentar 1 serviço","https://opentelemetry.io/docs/"]],
          [["The Staff Engineer's Path cap. 4–5: execução e comunicação","https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/"]]),
        w("m5w4",20,
          [["Software Architecture: The Hard Parts cap. 7–8: sagas e transações","https://www.oreilly.com/library/view/software-architecture-the/9781492086888/"]],
          [["OPA/Conftest: escrever policies em Rego, testar, integrar no CI","https://www.conftest.dev/"]],
          [["Istio avançado: traffic management, canary, circuit breaking","https://istio.io/latest/docs/concepts/traffic-management/"]],
          [["OpenTelemetry: correlacionar traces com métricas e logs","https://opentelemetry.io/docs/"]],
          [["The Staff Engineer's Path cap. 6: impacto de longo prazo","https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/"]]),
      ]},
      { title:"Mês 6", weeks:[
        w("m6w1",21,
          [["Revisão: qual trade-off arquitetural mais se aplica ao seu ambiente?",""]],
          [["Kubechecks: setup e integração com GitHub + ArgoCD","https://github.com/zapier/kubechecks"]],
          [["External Secrets Operator: configuração e boas práticas com Vault","https://external-secrets.io/latest/"]],
          [["Definir SLOs para 2 serviços adicionais — dashboard unificado",""]],
          [["Escreva 1 post técnico interno sobre algo que você resolveu",""]]),
        w("m6w2",22,
          [["Platform Engineering on Kubernetes cap. 1–4: IDPs e developer workflows","https://www.manning.com/books/platform-engineering-on-kubernetes"]],
          [["Backstage intro: software catalog, plugin architecture, techdocs","https://backstage.io/docs"]],
          [["Chaos Engineering: princípios, Game Days — proponha 1 internamente","https://principledchaos.org/"]],
          [["DORA Metrics: calcule deployment frequency e MTTR do squad","https://dora.dev/research/"]],
          [["Apresente 1 decisão técnica para stakeholders além do squad",""]]),
        w("m6w3",23,
          [["Platform Engineering on Kubernetes cap. 5–7: service pipelines, self-service","https://www.manning.com/books/platform-engineering-on-kubernetes"]],
          [["Crossplane intro: composições, XRDs, AWS provider em lab","https://docs.crossplane.io/"]],
          [["RFC formal: Kubechecks + OPA rollout para o squad","https://lethain.com/rfcs-and-design-documents/"]],
          [["Leia 2 posts de Staff Engineers sobre influência organizacional","https://staffeng.com/"]],
          [["Output: documente a plataforma actual como IDP — o que falta?",""]]),
        w("m6w4",24,
          [["Retrospectiva técnica: revise todos os ADRs/RFCs escritos até agora",""]],
          [["Revisar ArgoCD multi-cluster e GitOps patterns avançados","https://argo-cd.readthedocs.io/"]],
          [["Revisar postura de segurança actual: gaps identificados",""]],
          [["Apresente métricas DORA calculadas para o time com recomendações","https://dora.dev/quickcheck/"]],
          [["Retrospectiva da Fase 2 — 3 aprendizados + ajuste no roadmap",""]]),
      ]},
    ]
  },

  // ─── FASE 3 — Expansão (Meses 7–10) ──────────────────────────────────────
  {
    id:"p3", num:3, title:"Expansão", period:"Meses 7–10", weeks_label:"Semanas 25–40",
    cert:"🎓 CKAD — Meta: Mês 10",
    goal:"CKAD. Observabilidade madura. Impacto fora do squad. Output de conhecimento público.",
    months:[
      { title:"Mês 7", weeks:[
        w("m7w1",25,
          [["Production Kubernetes cap. 1–3: cluster design decisions e trade-offs","https://www.oreilly.com/library/view/production-kubernetes/9781492092292/"]],
          [["CKAD: Application Design — multi-container pods, init containers, sidecars","https://github.com/dgkanatsios/CKAD-exercises"]],
          [["DevSecOps: shift-left security, SAST/DAST no CI, Trivy em pipelines","https://trivy.dev/"]],
          [["Chaos Engineering: princípios e Game Days — execute 1 no ambiente qa","https://principledchaos.org/"]],
          [["Accelerate (livro) cap. 1–4: métricas DORA e o que elas significam","https://itrevolution.com/accelerate-book/"]]),
        w("m7w2",26,
          [["Production Kubernetes cap. 4–5: networking e storage em produção","https://www.oreilly.com/library/view/production-kubernetes/9781492092292/"]],
          [["CKAD: Configuration — ConfigMaps, Secrets, ResourceQuotas, LimitRanges","https://github.com/dgkanatsios/CKAD-exercises"]],
          [["Falco: runtime security, rules, alertas em tempo real","https://falco.org/docs/"]],
          [["DORA Metrics: medir deployment frequency e lead time do squad","https://dora.dev/research/"]],
          [["Accelerate cap. 5–8: transformational leadership e cultura","https://itrevolution.com/accelerate-book/"]]),
        w("m7w3",27,
          [["Service mesh observabilidade: Kiali, Jaeger, distributed tracing com Istio","https://istio.io/latest/docs/tasks/observability/"]],
          [["CKAD: Pod design patterns avançados — ambassador, adapter, sidecar real","https://github.com/dgkanatsios/CKAD-exercises"]],
          [["Container runtime security: gVisor, Kata containers, RuntimeClass","https://kubernetes.io/docs/concepts/containers/runtime-class/"]],
          [["Chaos + Istio: fault injection — delay e abort em rotas reais","https://istio.io/latest/docs/tasks/traffic-management/fault-injection/"]],
          [["Accelerate cap. 9–11: technical practices — continuous delivery e qualidade","https://itrevolution.com/accelerate-book/"]]),
        w("m7w4",28,
          [["Exercício: redesenhe o sistema de CD da empresa do zero — SPOFs e melhorias",""]],
          [["CKAD: StatefulSets, Headless services, volume snapshots e restore","https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"]],
          [["Image hardening: distroless, multi-stage builds, non-root containers","https://github.com/GoogleContainerTools/distroless"]],
          [["SRE: toil audit — quantifique o toil actual e proponha 1 automação","https://sre.google/sre-book/eliminating-toil/"]],
          [["Proposta de iniciativa cross-squad: identifique 1 problema + solução formal",""]]),
      ]},
      { title:"Mês 8", weeks:[
        w("m8w1",29,
          [["Production Kubernetes cap. 6–7: segurança e multi-tenancy em prod","https://www.oreilly.com/library/view/production-kubernetes/9781492092292/"]],
          [["CKAD: Observability — liveness, readiness, startup probes, logging","https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"]],
          [["OPA Gatekeeper em produção: constraint templates, admission webhooks","https://open-policy-agent.github.io/gatekeeper/website/"]],
          [["MTTR e change failure rate: como medir e melhorar no seu contexto","https://dora.dev/research/"]],
          [["Escreva post técnico externo (Medium/Substack) sobre problema resolvido",""]]),
        w("m8w2",30,
          [["Production Kubernetes cap. 8–10: observabilidade, cost management","https://www.oreilly.com/library/view/production-kubernetes/9781492092292/"]],
          [["CKAD: Services e Networking — NetworkPolicy avançado, Ingress TLS","https://github.com/dgkanatsios/CKAD-exercises"]],
          [["Exercício: redesenhe 1 componente da plataforma com aprendizados de segurança",""]],
          [["Apresente métricas DORA com recomendações para liderança",""]],
          [["Liderar 1 iniciativa cross-squad: plano formal com objetivos e métricas",""]]),
        w("m8w3",31,
          [["GitOps patterns: pull vs push, reconciliation loops, drift detection","https://www.manning.com/books/gitops-and-kubernetes"]],
          [["CKAD: Deployment strategies — rolling update, blue-green, canary com K8s","https://github.com/dgkanatsios/CKAD-exercises"]],
          [["Vulnerability management: CVE triage, EPSS scoring, remediation SLAs","https://www.cisa.gov/known-exploited-vulnerabilities-catalog"]],
          [["Platform SRE: reliability practices específicas para plataformas internas","https://sre.google/workbook/table-of-contents/"]],
          [["Post técnico externo: draft 2 — refine e publique o primeiro artigo",""]]),
        w("m8w4",32,
          [["Microsserviços: strangler fig pattern, decomposição incremental — trade-offs","https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"]],
          [["CKAD: CronJobs, Jobs em paralelo, init containers — exercícios práticos","https://github.com/dgkanatsios/CKAD-exercises"]],
          [["Zero-trust network architecture: princípios e implementação em K8s","https://www.nist.gov/publications/zero-trust-architecture"]],
          [["OpenTelemetry: baggage propagation, exemplares, correlação automática","https://opentelemetry.io/docs/concepts/signals/baggage/"]],
          [["Mentoria: estruture 1 sessão de pair review com eng. mais júnior",""]]),
      ]},
      { title:"Mês 9 — CKAD Prep", weeks:[
        w("m9w1",33,
          [["Exercício: redesenhe 1 componente com visão de platform engineering",""]],
          [["CKAD: revisão completa de todos os tópicos — exercícios práticos","https://github.com/dgkanatsios/CKAD-exercises"]],
          [["Supply chain: Sigstore, cosign, container image signing no pipeline","https://sigstore.dev/"]],
          [["OpenTelemetry avançado: custom instrumentation, sampling strategies","https://opentelemetry.io/docs/concepts/sampling/"]],
          [["Mentorar: pair programming ou review estruturado com eng. júnior",""]]),
        w("m9w2",34,
          [["GitOps avançado: multi-cluster management, fleet management patterns","https://www.manning.com/books/gitops-and-kubernetes"]],
          [["🎯 Mock exam CKAD no killer.sh — identificar lacunas","https://killer.sh/"]],
          [["Kubernetes network policies avançadas: Cilium, eBPF basics","https://cilium.io/blog/2021/05/11/cni-benchmark"]],
          [["Chaos experiment: planeje e execute 1 Game Day no ambiente qa",""]],
          [["1 talk em meetup externo OU contribuição open source — planejar",""]]),
        w("m9w3",35,
          [["System design: URL shortener, Pastebin — design completo do zero","https://github.com/donnemartin/system-design-primer"]],
          [["CKAD: Troubleshooting avançado — network, storage e scheduling failures","https://kubernetes.io/docs/tasks/debug/"]],
          [["Supply chain: SLSA levels 1-4 — onde está a sua pipeline?","https://slsa.dev/"]],
          [["Error budget alerts: burn rate alerts, multiwindow policies","https://sre.google/workbook/alerting-on-slos/"]],
          [["Feedback 360: colete feedback estruturado de 3 colegas diferentes",""]]),
        w("m9w4",36,
          [["System design: Design Twitter — scale, feed, notificações, fanout","https://github.com/donnemartin/system-design-primer"]],
          [["CKAD: Exam simulation — 19 tarefas em 2h, condições reais de exame","https://github.com/dgkanatsios/CKAD-exercises"]],
          [["Falco custom rules: escrever rules para o ambiente real, alertas Slack","https://falco.org/docs/rules/"]],
          [["SLO review: apresente SLO dashboard atualizado para o time",""]],
          [["ADR: documente decisão de observabilidade do trimestre","https://github.com/joelparkerhenderson/architecture-decision-record"]]),
      ]},
      { title:"Mês 10 — CKAD Sprint", weeks:[
        w("m10w1",37,
          [["Revisão System Design — prepare 5 designs do zero sem referência","https://github.com/donnemartin/system-design-primer"]],
          [["Revisão pontos fracos do mock CKAD + exercícios focados","https://github.com/dgkanatsios/CKAD-exercises"]],
          [["Revisão de segurança: audit das policies OPA/Gatekeeper em produção",""]],
          [["Revisão SLOs: todos os serviços com SLO definido dentro do budget?",""]],
          [["2ª RFC ou ADR relevante — compartilhe e colete feedback estruturado",""]]),
        w("m10w2",38,
          [["Descanso mental — revisão leve de conceitos-chave",""]],
          [["🏆 CKAD — Fazer o exame!","https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/"]],
          [["Revisão pós-exame: o que falta para o próximo nível?",""]],
          [["Revisão de observabilidade: gaps ainda existentes no ambiente actual",""]],
          [["Retrospectiva da Fase 3 — 3 aprendizados principais",""]]),
        w("m10w3",39,
          [["Post-CKAD: mapear o ecossistema K8s além do exame — o que explorar?","https://landscape.cncf.io/"]],
          [["K8s: kubectl debug, ephemeral containers, crictl — troubleshooting toolkit","https://kubernetes.io/docs/tasks/debug/debug-running-pod/"]],
          [["Cloud cost review: análise de custo do trimestre — maiores gastos","https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html"]],
          [["DORA quarterly: calcule as 4 métricas do squad e compare com baseline","https://dora.dev/research/"]],
          [["Prepare talk interno: aprendizados do percurso CKAD para o squad",""]]),
        w("m10w4",40,
          [["Transição para Fase 4: identifique gaps de platform engineering a atacar",""]],
          [["K8s: Gateway API, sidecar containers stable — implicações para o ambiente","https://kubernetes.io/docs/concepts/services-networking/gateway/"]],
          [["FinOps: proposta de rightsizing baseada na análise do trimestre","https://docs.aws.amazon.com/cost-management/latest/userguide/rightsizing-understanding.html"]],
          [["Retrospectiva de observabilidade: cobertura actual vs target desejado",""]],
          [["Retrospectiva expandida da Fase 3 — roadmap update para os próximos 6m",""]]),
      ]},
    ]
  },

  // ─── FASE 4 — Bridge Senior (Meses 11–12) ────────────────────────────────
  {
    id:"p4", num:4, title:"Bridge Senior", period:"Meses 11–12", weeks_label:"Semanas 41–48",
    cert:"→ CKS prep iniciado",
    goal:"Comportamentos de Senior Forte consolidados. Plataforma como produto. Visibilidade interna crescente.",
    months:[
      { title:"Mês 11", weeks:[
        w("m11w1",41,
          [["Plataforma como produto: DORA + Team Topologies aplicados à plataforma","https://platformengineering.org/blog"]],
          [["CRDs: como funcionam, kubebuilder basics, controller-runtime","https://book.kubebuilder.io/"]],
          [["Backstage: configurar software catalog para o squad/empresa","https://backstage.io/docs"]],
          [["Error Budgets na prática: dashboard de SLOs para 2 serviços reais",""]],
          [["Feedback técnico: dar e receber formalmente com 1 colega",""]]),
        w("m11w2",42,
          [["IDP design: o que a plataforma precisa oferecer para developers?","https://platformengineering.org/blog"]],
          [["Operator Pattern: reconciliation loop, finalizers, status conditions","https://www.oreilly.com/library/view/kubernetes-operators/9781492048039/"]],
          [["Crossplane: composições, XRDs, AWS provider — ambiente de lab","https://docs.crossplane.io/"]],
          [["Reliability reviews: processo formal de revisão de SLOs por serviço",""]],
          [["Mentorar: pair programming semanal com eng. júnior — formalizar",""]]),
        w("m11w3",43,
          [["Conway's Law na prática: como a estrutura do time afeta a arquitetura","https://martinfowler.com/bliki/ConwaysLaw.html"]],
          [["Admission webhooks: mutating e validating — escrever um simples em Go","https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"]],
          [["Network policies: zero-trust networking no cluster — implementar","https://kubernetes.io/docs/concepts/services-networking/network-policies/"]],
          [["SLO burndown: identificar serviços fora do error budget — plano de ação",""]],
          [["Staff archetype deep dive: qual arquétipo quer ser? Por quê?","https://staffeng.com/guides/staff-archetypes/"]]),
        w("m11w4",44,
          [["Platform topology: mapear dependências completas da plataforma actual",""]],
          [["Simple controller: escrever controller com controller-runtime — loop básico","https://book.kubebuilder.io/cronjob-tutorial/controller-implementation"]],
          [["Cloud security posture: CSPM, Prowler audit — benchmark do ambiente","https://github.com/prowler-cloud/prowler"]],
          [["Game Day em staging: chaos experiment + documentação de resultados",""]],
          [["Apresentação interna: decisão técnica relevante do mês para liderança",""]]),
      ]},
      { title:"Mês 12", weeks:[
        w("m12w1",45,
          [["Platform metrics: como medir sucesso da plataforma (SPACE, DevEx)","https://queue.acm.org/detail.cfm?id=3454124"]],
          [["Kubernetes Patterns: Operator, Controller, Elastic Scale, Health Probe","https://www.redhat.com/en/engage/kubernetes-containers-architecture-s-201910240918"]],
          [["GitOps: Flux vs ArgoCD — quando usar qual? Escreva um ADR.","https://www.manning.com/books/gitops-and-kubernetes"]],
          [["Propor Game Day formal para o time — planeamento e execução",""]],
          [["RFC: proposta de IDP incremental para o squad — visão 6 meses",""]]),
        w("m12w2",46,
          [["Retrospectiva arquitetural: decisões dos últimos 12 meses — o que mudaria?",""]],
          [["Multi-cluster GitOps: ApplicationSets com cluster generators em prod","https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/"]],
          [["FinOps: análise de custo do ambiente actual — maiores gastos e otimizações","https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html"]],
          [["Retrospectiva de observabilidade: gaps ainda existentes",""]],
          [["Retrospectiva da Fase 4 — atualizar roadmap para próximas fases",""]]),
        w("m12w3",47,
          [["Platform as product v2: roadmap da plataforma para próximos 6 meses","https://platformengineering.org/blog"]],
          [["Operator avançado: status subresource, conditions, owner references","https://book.kubebuilder.io/"]],
          [["Backstage: criar plugin simples para workflow interno do squad","https://backstage.io/docs/plugins/create-a-plugin"]],
          [["Reliability: propor processo formal de SLO review para toda a squad",""]],
          [["RFC revisão: iterar sobre o IDP RFC com feedback dos stakeholders",""]]),
        w("m12w4",48,
          [["Arquitetura de referência: documente a plataforma actual como IDP completo",""]],
          [["K8s patterns revisão: todos os padrões estudados — onde aplicar cada?","https://www.redhat.com/en/engage/kubernetes-containers-architecture-s-201910240918"]],
          [["FinOps: proposta formal de otimização de custo para liderança técnica",""]],
          [["Game Day retrospective: resultados + próximos experimentos planeados",""]],
          [["Retrospectiva expandida da Fase 4 — entrada na Fase de CKS",""]]),
      ]},
    ]
  },

  // ─── FASE 5 — CKS + DevSecOps (Meses 13–16) ──────────────────────────────
  {
    id:"p5", num:5, title:"CKS + DevSecOps", period:"Meses 13–16", weeks_label:"Semanas 49–64",
    cert:"🎓 CKS — Meta: Mês 16",
    goal:"CKS. DevSecOps mindset consolidado. Impacto cross-team formal. Mentoria ativa.",
    months:[
      { title:"Mês 13", weeks:[
        w("m13w1",49,
          [["Building Microservices cap. 1–4: decomposição, limites de serviço","https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"]],
          [["CKS: Cluster Hardening — API server flags, RBAC mínimo, node security","https://github.com/cncf/curriculum"]],
          [["DevSecOps pipeline: Trivy, Semgrep, SAST integrados no CI/CD","https://trivy.dev/"]],
          [["Propor e executar Game Day formal — documentar resultados",""]],
          [["Iniciar mentoria formal: definir objetivos com eng. júnior",""]]),
        w("m13w2",50,
          [["Building Microservices cap. 5–7: comunicação, resiliência, testes","https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"]],
          [["CKS: System Hardening — AppArmor, seccomp, kernel capabilities","https://www.oreilly.com/library/view/hacking-kubernetes/9781492081722/"]],
          [["Zero Trust em Kubernetes: mTLS, SPIFFE/SPIRE basics","https://spiffe.io/docs/latest/spiffe-about/overview/"]],
          [["Chaos: post-mortem do Game Day — lições aprendidas documentadas",""]],
          [["Contribuição open source: identificar issue em projeto relevante",""]]),
        w("m13w3",51,
          [["Threat modeling: STRIDE, PASTA — modelar 1 serviço real do ambiente","https://owasp.org/www-community/Threat_Modeling"]],
          [["CKS: Network policies — microsegmentação com Cilium em lab","https://cilium.io/docs/"]],
          [["SAST deep: customizar rules Semgrep para o codebase da empresa","https://semgrep.dev/docs/writing-rules/overview/"]],
          [["Incident response playbook: criar para o serviço mais crítico que opera",""]],
          [["Liderar: facilitar retro técnica de segurança com o squad",""]]),
        w("m13w4",52,
          [["Security architecture: defense in depth para aplicações cloud-native","https://www.cncf.io/blog/2022/06/07/cloud-native-security-whitepaper-v2/"]],
          [["CKS: Secrets management avançado — external secrets, sealed secrets","https://external-secrets.io/"]],
          [["Container image scanning: integrar Grype no pipeline CI — quality gates","https://github.com/anchore/grype"]],
          [["Chaos: multi-pod failure experiment — documentar blast radius real",""]],
          [["Mentoria: sessão de career growth com eng. júnior",""]]),
      ]},
      { title:"Mês 14", weeks:[
        w("m14w1",53,
          [["Building Microservices cap. 8–10: observabilidade, segurança, deploy","https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"]],
          [["CKS: Supply Chain Security — Trivy, Falco, image signing, OPA Gatekeeper","https://falco.org/docs/"]],
          [["SBOM: software bill of materials, Syft, Grype — integrar no pipeline","https://anchore.com/sbom/"]],
          [["Reliability: revisão trimestral de SLOs — serviços dentro do budget?",""]],
          [["Liderar 1 iniciativa cross-squad: plano formal com objetivos e métricas",""]]),
        w("m14w2",54,
          [["Building Microservices cap. 11–14: migração, organização, futuro","https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"]],
          [["CKS: Monitoring e Runtime Security — audit logs, Falco, incident response","https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist"]],
          [["Revisar postura de segurança completa: gaps vs roadmap de correção",""]],
          [["DORA revisão semestral: como o squad evoluiu desde o início?","https://dora.dev/research/"]],
          [["Post técnico externo: DevSecOps na prática — publicar",""]]),
        w("m14w3",55,
          [["Compliance as code: OPA para governance — escrever policies de compliance","https://www.openpolicyagent.org/docs/latest/"]],
          [["CKS: Pod security — securityContext, capabilities, read-only filesystem","https://kubernetes.io/docs/concepts/security/pod-security-standards/"]],
          [["DAST: integrar OWASP ZAP no pipeline de staging — scan automático","https://www.zaproxy.org/"]],
          [["SLO para CI/CD: reliability do próprio toolchain — definir e medir",""]],
          [["Post técnico externo: publicar artigo final sobre DevSecOps",""]]),
        w("m14w4",56,
          [["Privacy by design: GDPR, data residency, encryption at rest","https://gdpr.eu/"]],
          [["CKS: Audit logging — configurar audit policy completa no cluster","https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"]],
          [["Incident response: criar runbook formal de resposta a CVE crítico",""]],
          [["MTTR deep: analisar 3 incidentes passados — padrões e melhorias",""]],
          [["Cross-squad: apresentar plano de DevSecOps para outros times",""]]),
      ]},
      { title:"Mês 15 — CKS Prep", weeks:[
        w("m15w1",57,
          [["Revisão de System Design focada em segurança — threat modeling de 1 sistema",""]],
          [["🎯 Mock exam CKS no killer.sh","https://killer.sh/"]],
          [["Revisão de segurança: controles implementados vs CKS curriculum",""]],
          [["Chaos experiment avançado: multi-region failure simulation",""]],
          [["Preparar talk técnico para meetup externo",""]]),
        w("m15w2",58,
          [["Revisão de pontos fracos identificados no mock CKS",""]],
          [["Revisão CKS: exercícios focados em áreas fracas","https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist"]],
          [["Implementar 1 melhoria de segurança real no ambiente de produção",""]],
          [["SLO reviews: reunião formal com stakeholders apresentando métricas",""]],
          [["Mentoria: revisão de progresso com eng. júnior — ajuste de plano",""]]),
        w("m15w3",59,
          [["Threat intel: CVE tracking, NVD, EPSS scores — como priorizar patches","https://nvd.nist.gov/"]],
          [["CKS: mock domain cluster hardening — exercícios específicos focados","https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist"]],
          [["Falco rules audit: cobertura actual vs surface de ataque real","https://falco.org/docs/rules/"]],
          [["SLO para segurança: MTTR de vulnerabilidades, patch compliance rate",""]],
          [["Security roadmap: apresentar próximos 6 meses de melhorias à liderança",""]]),
        w("m15w4",60,
          [["Security design patterns: RBAC mínimo, least privilege, segmentação real","https://kubernetes.io/docs/concepts/security/"]],
          [["CKS: mock domain supply chain security — exercícios práticos focados","https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist"]],
          [["Implementar 2ª melhoria de segurança em produção",""]],
          [["Security chaos: testar controls de segurança em staging — resultados",""]],
          [["Mentoria: revisão de carreira com eng. júnior — roadmap próximo trimestre",""]]),
      ]},
      { title:"Mês 16 — CKS Sprint", weeks:[
        w("m16w1",61,
          [["Revisão leve: conceitos-chave de System Design e arquitetura de segurança",""]],
          [["🎯 Mock exam 2 CKS — avaliar evolução vs mock 1","https://killer.sh/"]],
          [["Roadmap de segurança: próximos 6 meses de melhorias planeadas",""]],
          [["Apresentar métricas de confiabilidade para liderança técnica",""]],
          [["Retrospectiva de 15 meses: como você mudou como engenheiro?",""]]),
        w("m16w2",62,
          [["Descanso mental — revisão leve dos domínios CKS",""]],
          [["🏆 CKS — Fazer o exame!","https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/"]],
          [["Retrospectiva de segurança: o que a jornada CKS ensinou sobre a infra?",""]],
          [["Planejar próxima fase de observabilidade com AI-driven insights",""]],
          [["Retrospectiva da Fase 5 — 3 aprendizados principais",""]]),
        w("m16w3",63,
          [["Post-CKS: mapa de certificações — CKS como trampolim para o quê?","https://landscape.cncf.io/"]],
          [["K8s 1.30+: novas features — Gateway API stable, sidecar containers — impacto","https://kubernetes.io/blog/"]],
          [["FinOps: revisão anual de custo — 16 meses de otimização — savings medidos",""]],
          [["Reliability annual review: 16 meses de SLOs — tendências e melhorias",""]],
          [["Post externo: retrospectiva pública da jornada CKS — publicar",""]]),
        w("m16w4",64,
          [["Transição Staff Behavior: gaps identificados para atuar como Staff Engineer",""]],
          [["K8s: explorar features experimentais relevantes para o ambiente actual","https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/"]],
          [["Cloud: Well-Architected review formal do ambiente — relatório completo","https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html"]],
          [["Reliability: programa de SRE — estado actual vs target da Fase 6",""]],
          [["Retrospectiva expandida da Fase 5 — entrada na Staff Behavior",""]]),
      ]},
    ]
  },

  // ─── FASE 6 — Staff Behavior (Meses 17–18) ────────────────────────────────
  {
    id:"p6", num:6, title:"Staff Behavior", period:"Meses 17–18", weeks_label:"Semanas 65–72",
    cert:"→ Staff Orbit",
    goal:"Agir como Staff mesmo sem o título. Visibilidade externa. Direção técnica formal.",
    months:[
      { title:"Mês 17", weeks:[
        w("m17w1",65,
          [["A Philosophy of Software Design cap. 1–5: complexidade como métrica de qualidade","https://web.stanford.edu/~ouster/cgi-bin/book.php"]],
          [["Crossplane avançado: composições complexas, múltiplos providers","https://docs.crossplane.io/"]],
          [["FinOps avançado: chargeback, showback, otimização por time","https://www.finops.org/framework/"]],
          [["Apresentar métricas DORA + SLOs para liderança como business case",""]],
          [["Talk externo: submeter proposta para meetup/conferência",""]]),
        w("m17w2",66,
          [["A Philosophy of Software Design cap. 6–10: módulos, profundidade vs largura","https://web.stanford.edu/~ouster/cgi-bin/book.php"]],
          [["IDP: plano de implementação incremental para a empresa — documento formal","https://platformengineering.org/blog"]],
          [["AWS re:Invent: selecione 3 talks de platform/infra e anote insights","https://reinvent.awsevents.com/"]],
          [["AI-driven observability: explorar LLM para análise de anomalias",""]],
          [["Contribuição open source: PR submetido em projeto relevante",""]]),
        w("m17w3",67,
          [["A Philosophy of Software Design: síntese + como aplicar no code review diário","https://web.stanford.edu/~ouster/cgi-bin/book.php"]],
          [["Platform audit: revisão completa do estado actual da plataforma",""]],
          [["Well-Architected review formal: relatório dos 5 pilares para o ambiente","https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html"]],
          [["SLO review semestral: análise de tendências + alertas de longo prazo",""]],
          [["Networking: conectar com 3 Staff Engineers externos via LinkedIn/Slack","https://staffeng.com/"]]),
        w("m17w4",68,
          [["Technical vision: escreva a visão técnica da plataforma para 2 anos",""]],
          [["K8s ecosystem: service mesh comparison — Istio vs Linkerd vs Cilium Mesh","https://servicemesh.es/"]],
          [["Multi-cloud: trade-offs reais e quando faz sentido para a empresa",""]],
          [["Incident review board: criar processo formal de revisão de incidentes",""]],
          [["Liderar: facilitar alignment técnico entre 2 times — plano concreto",""]]),
      ]},
      { title:"Mês 18", weeks:[
        w("m18w1",69,
          [["A Philosophy of Software Design cap. 11–15: comentários, naming, TDD","https://web.stanford.edu/~ouster/cgi-bin/book.php"]],
          [["Platform Engineering Community: benchmark do que outros times fazem","https://platformengineering.org/blog"]],
          [["Kubeflow: como plataformas suportam workloads de ML","https://www.kubeflow.org/docs/"]],
          [["Reliability at scale: multi-region SLOs e global load balancing patterns",""]],
          [["Mentoria: 2 engenheiros com sessões regulares e planos formais",""]]),
        w("m18w2",70,
          [["Exercício final: desenhe a arquitetura ideal da plataforma em 3 anos",""]],
          [["Liderar revisão técnica do roadmap de plataforma para o próximo ano",""]],
          [["Revisão de segurança anual: postura atual vs melhores práticas",""]],
          [["Retrospectiva de confiabilidade: 18 meses de SLOs — tendências",""]],
          [["Retrospectiva da Fase 6 — você está agindo como Staff? O que falta?",""]]),
        w("m18w3",71,
          [["Organizational design: como plataformas de sucesso são organizadas","https://teamtopologies.com/book"]],
          [["SRE toil automation: identificar e automatizar top 3 toils actuais","https://sre.google/sre-book/eliminating-toil/"]],
          [["AI/ML infra: infrastructure patterns para LLM workloads em Kubernetes","https://www.kubeflow.org/"]],
          [["Reliability: criar processo formal de reliability review para novos serviços",""]],
          [["Talk externo: submeter segundo abstract para conferência técnica",""]]),
        w("m18w4",72,
          [["Retrospectiva dos 18 meses: o que mudou na sua forma de pensar e agir?",""]],
          [["Platform handoff: documentar runbooks e decisões para continuidade do time",""]],
          [["Security: revisão final de postura — entrada na Staff Orbit",""]],
          [["Observabilidade: revisão final — cobertura e maturidade do sistema actual",""]],
          [["Retrospectiva expandida da Fase 6 — entrada na Staff Orbit",""]]),
      ]},
    ]
  },

  // ─── FASE 7 — Staff Orbit (Meses 19–36) ──────────────────────────────────
  {
    id:"p7", num:7, title:"Staff Orbit", period:"Meses 19–36", weeks_label:"Semanas 73–144",
    cert:"🌍 Mercado global",
    goal:"Escalar a organização via plataforma. Definir direção técnica. Impacto em múltiplos times.",
    months:[
      { title:"Mês 19", weeks:[
        w("m19w1",73,
          [["Organizational mapping: identificar todos os stakeholders de plataforma",""]],
          [["eBPF fundamentals: o que é, por que importa para platform engineering","https://ebpf.io/what-is-ebpf/"]],
          [["Platform strategy doc: escrever o 1-pager de estratégia da plataforma",""]],
          [["SLO federation: múltiplos times, 1 dashboard — implementar",""]],
          [["Mentoria: formalizar estrutura de mentoria para 2 engenheiros",""]]),
        w("m19w2",74,
          [["System design: plataforma interna IDP completa — design do zero","https://platformengineering.org/blog"]],
          [["eBPF observability: Pixie, Hubble — instrumentação sem agente","https://pixielabs.ai/"]],
          [["Karpenter avançado: node provisioner, disruption budget, drift detection","https://karpenter.sh/docs/"]],
          [["Chaos at scale: Game Day com 2+ times envolvidos — facilitar",""]],
          [["Escrever: post técnico sobre platform engineering na sua empresa",""]]),
        w("m19w3",75,
          [["Staff networking: conectar com engenheiros de outras empresas — 3 conversas","https://staffeng.com/"]],
          [["WASM no K8s: casos de uso, SpinKube, futuro de serverless em K8s","https://spinkube.dev/"]],
          [["FinOps: implementar tagging strategy completa para chargeback por time",""]],
          [["Error budget policy: formalizar política formal de error budget para o org","https://sre.google/workbook/error-budget-policy/"]],
          [["Apresentar: platform strategy para VP Engineering ou equivalente",""]]),
        w("m19w4",76,
          [["Retrospectiva Mês 19: progresso vs objetivos Staff — o que ajustar?",""]],
          [["K8s: Gateway API stable — migrar 1 Ingress para Gateway API em lab","https://kubernetes.io/docs/concepts/services-networking/gateway/"]],
          [["Security baseline: definir baseline de segurança para toda a plataforma",""]],
          [["Reliability: criar cultura de confiabilidade além do squad — como?",""]],
          [["Talk externo: apresentar em meetup local — recolher feedback do público",""]]),
      ]},
      { title:"Mês 20", weeks:[
        w("m20w1",77,
          [["Sociotechnical systems: Team Topologies + arquitetura — aplicar no org","https://teamtopologies.com/book"]],
          [["Service mesh 2025: comparativo atualizado — qual usar em produção?","https://servicemesh.es/"]],
          [["Platform observability: golden path para observar novos serviços",""]],
          [["SRE at scale: como Google/Meta aplicam SRE — lições aplicáveis","https://sre.google/books/"]],
          [["Mentoria: expanding — identificar 3º engenheiro para mentorar",""]]),
        w("m20w2",78,
          [["Technical debt mapping: categorizar e priorizar dívida técnica da plataforma",""]],
          [["Progressive delivery: Argo Rollouts — canary, blue-green, análise automática","https://argoproj.github.io/argo-rollouts/"]],
          [["Supply chain: SLSA Level 3 — implementar no pipeline principal","https://slsa.dev/"]],
          [["SLO-based alerting: unificar alertas em torno de SLOs vs métricas isoladas",""]],
          [["Engineering blog: publicar post no blog de engenharia da empresa",""]]),
        w("m20w3",79,
          [["Platform product metrics: NPS da plataforma, SPACE framework aplicado","https://queue.acm.org/detail.cfm?id=3454124"]],
          [["Cluster fleet management: Fleet, ArgoCD multi-cluster, Cluster API","https://cluster-api.sigs.k8s.io/"]],
          [["Cloud migration: estratégias lift-and-shift vs cloud-native — ADR formal",""]],
          [["Incident command: liderar 1 incidente real como incident commander",""]],
          [["Conference talk: submeter proposta para KubeCon ou conferência equivalente","https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/"]]),
        w("m20w4",80,
          [["Retrospectiva Mês 20: ajustes no roadmap Staff — o que está a funcionar?",""]],
          [["CNI comparison: Cilium vs Calico vs Flannel em prod — ADR fundamentado","https://cilium.io/"]],
          [["FinOps maturity: avaliar maturidade actual vs FOCUS model","https://focus.finops.org/"]],
          [["Reliability retrospective: tendências nos últimos 6 meses",""]],
          [["Comunidade: responder a perguntas técnicas em público (Slack OSS, fórum)",""]]),
      ]},
      { title:"Mês 21", weeks:[
        w("m21w1",81,
          [["Engineering strategy: como escrever uma engineering strategy eficaz","https://lethain.com/setting-engineering-org-values/"]],
          [["eBPF security: Tetragon, runtime enforcement, LSM programs","https://tetragon.io/"]],
          [["Platform API: design da developer API da plataforma — princípios e trade-offs",""]],
          [["Chaos maturity: avaliar maturidade do programa de chaos engineering","https://principledchaos.org/"]],
          [["Mentoria coletiva: workshop técnico para 3+ engenheiros — facilitar",""]]),
        w("m21w2",82,
          [["Decision making at scale: DACI, RACI — quando usar cada framework",""]],
          [["K8s networking deep: BGP com Cilium, MetalLB, routing avançado em prod","https://cilium.io/docs/network/bgp-control-plane/"]],
          [["Zero-trust: implementar mTLS para todos os serviços críticos","https://istio.io/latest/docs/tasks/security/authentication/mtls-migration/"]],
          [["AIOps: correlação de alertas com ML — explorar Dynatrace Davis ou similar",""]],
          [["ADR: escolha de service mesh — escrever e partilhar externamente","https://github.com/joelparkerhenderson/architecture-decision-record"]]),
        w("m21w3",83,
          [["Organizational patterns: Spotify model — o que funcionou e o que falhou","https://engineering.atspotify.com/"]],
          [["GitOps at scale: Flux v2 multi-tenancy, isolamento por time","https://fluxcd.io/flux/guides/repository-structure/"]],
          [["Compliance automation: SOC2, ISO27001 — controles como código","https://www.vanta.com/"]],
          [["SLO for business: traduzir SLOs técnicos em impacto de negócio real",""]],
          [["Liderar: facilitar quarterly planning técnico para o org — facilitação",""]]),
        w("m21w4",84,
          [["Retrospectiva Mês 21 + Sub-fase A (meses 19-21): impacto medido",""]],
          [["K8s security: KEPs de segurança em desenvolvimento — acompanhar","https://github.com/kubernetes/enhancements"]],
          [["FinOps: showback dashboard para todas as tribos/times da empresa",""]],
          [["Confiabilidade: relatório trimestral para liderança — formato executivo",""]],
          [["Talk ou publicação: artefato técnico relevante — publicar este mês",""]]),
      ]},
      { title:"Mês 22", weeks:[
        w("m22w1",85,
          [["Technical strategy writing: estrutura de uma boa engineering strategy","https://lethain.com/"]],
          [["Platform engineering tools: Port, Backstage, Cortex — comparativo","https://backstage.io/"]],
          [["Cloud cost optimization: Savings Plans vs RI — análise para o org","https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html"]],
          [["Distributed tracing: implementar tracing end-to-end em 2 serviços novos","https://opentelemetry.io/docs/"]],
          [["Networking: participar em CNCF SIG ou comunidade técnica relevante","https://contribute.cncf.io/"]]),
        w("m22w2",86,
          [["Technology radar: criar tech radar interno para a empresa","https://www.thoughtworks.com/radar"]],
          [["Kubernetes operators: padrões avançados — level-based vs edge-based","https://book.kubebuilder.io/"]],
          [["Container networking: performance tuning, MTU, eBPF acceleration","https://cilium.io/"]],
          [["SRE Book: releitura com olhar crítico — o que mudou na sua prática?","https://sre.google/sre-book/table-of-contents/"]],
          [["Mentoria: 1 dos mentees está pronto para mentorar outros?",""]]),
        w("m22w3",87,
          [["Make vs buy: framework de decisão para novas ferramentas de plataforma",""]],
          [["WASM + K8s: spin operator, runwasm — casos de uso reais em staging","https://spinkube.dev/"]],
          [["Identity: SPIFFE/SPIRE em produção — workload identity federation completo","https://spiffe.io/"]],
          [["Error budget consumption: análise do último trimestre — padrões",""]],
          [["Apresentação executiva: tech strategy resumida para VP/CTO",""]]),
        w("m22w4",88,
          [["Retrospectiva Mês 22: progresso na estratégia técnica — ajustar?",""]],
          [["Cloud provider roadmap: EKS roadmap — o que priorizar nos próximos 12m","https://github.com/aws/containers-roadmap"]],
          [["eBPF networking avançado: XDP, TC hooks — performance e segurança","https://ebpf.io/"]],
          [["Reliability program: expansão para 2 novos times — como facilitar?",""]],
          [["Open source strategy: qual projeto contribuir para máximo impacto?",""]]),
      ]},
      { title:"Mês 23", weeks:[
        w("m23w1",89,
          [["Platform as product v2: incorporar feedback de 6 meses de métricas",""]],
          [["Cluster lifecycle: upgrade strategy, version skew, canary upgrades em prod","https://kubernetes.io/docs/tasks/administer-cluster/cluster-upgrade/"]],
          [["CSPM: cloud security posture management — implementar Prowler ou Wiz","https://github.com/prowler-cloud/prowler"]],
          [["SLO algebra: combining SLOs, dependencies, composite SLOs","https://sre.google/workbook/implementing-slos/"]],
          [["Engineering writing: publicar artigo em newsletter técnica relevante",""]]),
        w("m23w2",90,
          [["Influence without authority: frameworks para impacto cross-org real","https://staffeng.com/guides/work-on-what-matters/"]],
          [["Storage at scale: Rook/Ceph, Longhorn, CSI avançado — trade-offs","https://rook.io/docs/rook/latest-release/"]],
          [["FinOps: análise de anomalia de custo — automatizar detecção com alertas",""]],
          [["Chaos maturity v2: nível 3 — chaos como parte permanente do SDLC","https://principledchaos.org/"]],
          [["Mentoria: 1 mentee promovido? Documentar e celebrar o processo",""]]),
        w("m23w3",91,
          [["Systems thinking: leverage points, feedback loops na sua organização","https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/"]],
          [["Multi-arch: ARM64 no K8s — node pools, build pipelines multi-arch","https://aws.amazon.com/ec2/graviton/"]],
          [["Data sovereignty: GDPR, dados em repouso, encryption key management",""]],
          [["Reliability: criar processo de reliability review para features novas",""]],
          [["Talk: apresentar learnings do trimestre para o eng org — all-hands",""]]),
        w("m23w4",92,
          [["Retrospectiva Mês 23",""]],
          [["K8s performance: resource topology, NUMA, huge pages — quando importa?","https://kubernetes.io/docs/tasks/administer-cluster/memory-manager/"]],
          [["Platform security: pentest da plataforma — contratar ou fazer internamente",""]],
          [["SLO-based capacity planning: usar SLOs para prever necessidades de scaling",""]],
          [["Engineering culture: iniciar programa de aprendizado contínuo no squad",""]]),
      ]},
      { title:"Mês 24", weeks:[
        w("m24w1",93,
          [["Strategy review: 6 meses de technical strategy — o que mudou?",""]],
          [["Progressive delivery v2: feature flags, gradual rollout com Argo Rollouts","https://argoproj.github.io/argo-rollouts/"]],
          [["Supply chain: SBOM para toda a plataforma — inventário completo","https://anchore.com/sbom/"]],
          [["SRE toil: revisão semestral de toil — percentagem de automação actual","https://sre.google/sre-book/eliminating-toil/"]],
          [["Conference talk: apresentar (se aceite) ou publicar slides + post",""]]),
        w("m24w2",94,
          [["Platform roadmap: prioridades para os próximos 12 meses — OKRs alinhados",""]],
          [["K8s debugging: kubectl debug, ephemeral containers, trace — usar em prod","https://kubernetes.io/docs/tasks/debug/debug-running-pod/"]],
          [["FinOps: savings de 6 meses documentados — calcular ROI do programa",""]],
          [["Reliability: análise de incidentes do semestre — padrões e remediações",""]],
          [["Mentoria: retrospectiva semestral com todos os mentees",""]]),
        w("m24w3",95,
          [["Organizational health: como medir saúde do time de plataforma?",""]],
          [["API gateway: Kong, AWS API GW, Envoy Gateway — comparativo para o ambiente","https://www.envoyproxy.io/"]],
          [["Compliance: revisão semestral de compliance — gaps e plano de remediação",""]],
          [["Error budget: revisão semestral — todos os serviços saudáveis?",""]],
          [["Networking: participar ou co-organizar meetup técnico local",""]]),
        w("m24w4",96,
          [["Retrospectiva Mês 24 + Sub-fase B (meses 22-24): 6 meses de Technical Strategy",""]],
          [["K8s: área ainda não explorada do ecossistema — escolher e estudar","https://landscape.cncf.io/"]],
          [["Cloud architecture: revisão arquitetural anual — Well-Architected full review","https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html"]],
          [["Reliability: relatório semestral para liderança — formato executivo",""]],
          [["Celebrar: milestones alcançados — reconhecer time e mentees formalmente",""]]),
      ]},
      { title:"Mês 25", weeks:[
        w("m25w1",97,
          [["Platform at scale: lições de empresas que escalam plataformas internas","https://platformengineering.org/blog"]],
          [["eBPF networking: XDP programs, TC hooks — performance de networking","https://ebpf.io/"]],
          [["Multi-region active-active: implementar failover real em staging",""]],
          [["Global SLOs: definir SLOs para serviços multi-region",""]],
          [["Engineering leadership: coaching vs mentoring — quando usar cada um",""]]),
        w("m25w2",98,
          [["Developer experience: medir e melhorar DX da plataforma — survey",""]],
          [["Cluster API: provisionar clusters programaticamente — lab","https://cluster-api.sigs.k8s.io/"]],
          [["Secret rotation: automatizar rotação de secrets em produção com ESO","https://external-secrets.io/"]],
          [["Chaos at org scale: Game Day com múltiplos times — facilitar e documentar",""]],
          [["Case study interno: escrever case study completo da plataforma",""]]),
        w("m25w3",99,
          [["Platform economics: custo por developer, ROI de self-service — calcular",""]],
          [["GitOps: environment per PR — implementar em staging com ArgoCD","https://argo-cd.readthedocs.io/en/stable/"]],
          [["Vulnerability SLA: definir e medir SLAs de patch por criticidade",""]],
          [["SRE handbook: criar handbook interno de SRE para a empresa","https://sre.google/workbook/table-of-contents/"]],
          [["Mentoria: um mentee a assumir responsabilidade técnica maior — delegar",""]]),
        w("m25w4",100,
          [["Retrospectiva Mês 25",""]],
          [["K8s roadmap: KEPs aprovados — o que implementar nos próximos 6m?","https://github.com/kubernetes/enhancements"]],
          [["FinOps: análise de rightsizing automático — Goldilocks, VPA em prod","https://github.com/FairwindsOps/goldilocks"]],
          [["Reliability culture: assessment — como está a cultura de confiabilidade?",""]],
          [["Talk: submeter proposta para KubeCon EU ou US","https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/"]]),
      ]},
      { title:"Mês 26", weeks:[
        w("m26w1",101,
          [["Platform governance: como escalar decisões técnicas sem criar bottleneck?",""]],
          [["Service mesh telemetry: Istio + OpenTelemetry + Tempo — stack completo","https://grafana.com/oss/tempo/"]],
          [["Cost allocation: implementar Kubecost para chargeback por namespace","https://www.kubecost.com/"]],
          [["SLO-driven development: como times usam SLOs para priorizar trabalho?",""]],
          [["Engineering blog: série de posts sobre platform engineering — iniciar",""]]),
        w("m26w2",102,
          [["Technology lifecycle: como deprecar tecnologias de forma segura",""]],
          [["Workload identity federation: IRSA avançado, cross-account, multi-cloud","https://aws.github.io/aws-eks-best-practices/security/docs/iam/"]],
          [["Platform security posture: benchmark vs CIS, NIST CSF","https://www.cisecurity.org/cis-benchmarks"]],
          [["Incident retrospectives: análise de 12 meses de incidentes — padrões",""]],
          [["Comunidade: co-organizar evento técnico externo — meetup ou workshop",""]]),
        w("m26w3",103,
          [["Platform adoption: medir e aumentar adoção pelos times de produto",""]],
          [["eBPF observability: criar dashboard de network flows com Hubble","https://github.com/cilium/hubble"]],
          [["Data compliance: implementar data classification na plataforma",""]],
          [["SRE maturity: avaliar maturidade SRE do org — scorecard formal","https://dora.dev/"]],
          [["Mentoria: mentee pronto para liderar iniciativa própria — delegar formalmente",""]]),
        w("m26w4",104,
          [["Retrospectiva Mês 26",""]],
          [["K8s autoscaling: HPA v2, KEDA, custom metrics — quando usar qual?","https://keda.sh/"]],
          [["FinOps: rightsizing recommendations implementadas — savings medidos",""]],
          [["Reliability: cultura estabelecida? Medir via survey de todos os times",""]],
          [["Talk: apresentar case study de platform engineering em evento externo",""]]),
      ]},
      { title:"Mês 27", weeks:[
        w("m27w1",105,
          [["Organizational resilience: bus factor, knowledge silos — identificar e atacar",""]],
          [["K8s multi-tenancy: vcluster — virtual clusters por time","https://www.vcluster.com/"]],
          [["Platform chaos: chaos engineering para a infraestrutura da plataforma",""]],
          [["SLO evangelism: workshop de SLOs para times que ainda não adotaram",""]],
          [["Escrita técnica: publicar artigo sobre lessons learned em platform eng",""]]),
        w("m27w2",106,
          [["Engineering excellence: architectural fitness functions — como implementar","https://www.oreilly.com/library/view/building-evolutionary-architectures/9781492097532/"]],
          [["GitOps security: signed commits, verified deployments, audit trail completo","https://sigstore.dev/"]],
          [["Secrets hygiene: auditoria completa de secrets em todos os repositórios",""]],
          [["DORA quarterly: calcular métricas para o org todo — benchmark externo","https://dora.dev/research/"]],
          [["Networking: conectar com comunidade Platform Engineering no Slack","https://platformengineering.org/slack-rd"]]),
        w("m27w3",107,
          [["Sociotechnical debt: identificar e atacar dívida técnica organizacional",""]],
          [["Persistent storage: backup e DR para workloads stateful em K8s — testar","https://velero.io/"]],
          [["Identity governance: revisar todos os acessos — least privilege audit completo",""]],
          [["Reliability: processo de capacity planning baseado em SLOs",""]],
          [["Mentoria: retrospectiva trimestral com todos os mentees",""]]),
        w("m27w4",108,
          [["Retrospectiva Mês 27 + Sub-fase C (meses 25-27): Platform at Scale — impacto",""]],
          [["K8s: explorar 1 área técnica ainda não dominada — escolha sua","https://landscape.cncf.io/"]],
          [["FinOps: relatório trimestral de custo — tendências e projeções",""]],
          [["Confiabilidade: relatório trimestral para liderança — formato executivo",""]],
          [["Contribuição OSS: PR em projeto relevante para a plataforma — merged",""]]),
      ]},
      { title:"Mês 28", weeks:[
        w("m28w1",109,
          [["Engineering principles: escrever os engineering principles do time",""]],
          [["eBPF security v2: CO-RE, BTF, portabilidade — production ready?","https://ebpf.io/"]],
          [["Platform compliance: SOC2 readiness — o que a plataforma cobre?",""]],
          [["SLO review: todos os serviços alinhados com business expectations?",""]],
          [["Liderar: facilitar engineering all-hands técnico — state of platform",""]]),
        w("m28w2",110,
          [["Staff at scale: como delega technical direction sem ser bottleneck?","https://staffeng.com/"]],
          [["Service catalog maturity: Backstage — adoption metrics e roadmap","https://backstage.io/"]],
          [["FinOps automation: anomaly detection, auto-remediation de custo",""]],
          [["Chaos as a service: times autónomos para executar experimentos",""]],
          [["Technical leadership principles: escrever e partilhar com o org",""]]),
        w("m28w3",111,
          [["Platform health dashboard: criar dashboard de saúde para liderança",""]],
          [["Container security: runtime enforcement com Tetragon em produção","https://tetragon.io/"]],
          [["Cloud governance: policies de cloud para o org — preventive controls",""]],
          [["Incident learning: blameless culture — avaliar e reforçar no org","https://sre.google/sre-book/postmortem-culture/"]],
          [["Mentoria: mentee a liderar iniciativa — como apoiar sem interferir?",""]]),
        w("m28w4",112,
          [["Retrospectiva Mês 28",""]],
          [["K8s sig updates: acompanhar SIGs relevantes — network, storage, security","https://github.com/kubernetes/community/blob/master/sig-list.md"]],
          [["Platform security quarterly: revisão trimestral de postura de segurança",""]],
          [["SRE maturity v2: reavaliação do scorecard — progresso em 3 meses",""]],
          [["Talk: apresentar em conferência (se aceite) ou escrever recap post",""]]),
      ]},
      { title:"Mês 29", weeks:[
        w("m29w1",113,
          [["Organizational scaling: como a plataforma escala sem escalar o time?",""]],
          [["Multi-cluster networking: Cilium ClusterMesh, Submariner — comparar","https://cilium.io/docs/network/clustermesh/"]],
          [["Zero trust v2: revisar implementação — onde estão os gaps actuais?",""]],
          [["SLO curriculum: criar treinamento de SLOs para toda a engenharia",""]],
          [["Networking: aparecer em 1 conferência como palestrante ou attendee",""]]),
        w("m29w2",114,
          [["Engineering productivity: medir e melhorar produtividade dos times de produto","https://queue.acm.org/detail.cfm?id=3454124"]],
          [["K8s scheduler: custom schedulers, DRA — resource management avançado","https://kubernetes.io/docs/concepts/scheduling-eviction/"]],
          [["FinOps: análise de Reserved Instances — plano de compra anual",""]],
          [["Reliability: criar SLO para o próprio processo de deploy do squad",""]],
          [["Mentoria: um mentee a caminho de Staff? Como prepará-lo?","https://staffeng.com/"]]),
        w("m29w3",115,
          [["Decision log: criar prática de logging de decisões técnicas no org",""]],
          [["Platform developer portal: Backstage plugins para workflow completo do dev","https://backstage.io/docs/plugins/create-a-plugin"]],
          [["Supply chain: SLSA Level 4 — o que falta para atingir o topo?","https://slsa.dev/"]],
          [["Chaos: análise de 1 ano de Game Days — o que aprendemos?",""]],
          [["Engineering hiring: participar em hiring loop técnico como avaliador",""]]),
        w("m29w4",116,
          [["Retrospectiva Mês 29",""]],
          [["eBPF: Cilium egress gateway, BGP, L7 policy — features avançadas em prod","https://cilium.io/"]],
          [["Cost optimization: análise de Graviton/ARM — migração de workloads","https://aws.amazon.com/ec2/graviton/"]],
          [["SLO: análise de error budget burn do último trimestre — padrões",""]],
          [["Open source: manter contribuição ativa — 1 PR merged este mês",""]]),
      ]},
      { title:"Mês 30", weeks:[
        w("m30w1",117,
          [["Platform maturity model: onde a sua plataforma está em maturidade?","https://platformengineering.org/blog"]],
          [["K8s admission control: CEL validation, ValidatingAdmissionPolicy stable","https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/"]],
          [["FinOps: análise de spot instance strategy — savings vs risk trade-off",""]],
          [["Reliability: 30 meses de SLOs — tendências de longo prazo e projeções",""]],
          [["Mentoria: 1 mentee promovido a senior — documentar a jornada",""]]),
        w("m30w2",118,
          [["Technical risk: como identificar e mitigar riscos técnicos no org?",""]],
          [["Multi-cloud K8s: Crossplane para IaC multi-cloud — production ready?","https://docs.crossplane.io/"]],
          [["Platform security review semestral: postura vs 6 meses atrás",""]],
          [["SRE handbook: atualizar com learnings dos últimos 6 meses",""]],
          [["Escrever: year-in-review técnico — publicar externamente",""]]),
        w("m30w3",119,
          [["Succession planning: quem assume as suas responsabilidades se sair?",""]],
          [["K8s edge: K3s, MicroK8s — edge computing patterns e casos de uso","https://k3s.io/"]],
          [["Compliance: revisão semestral — novas regulamentações que impactam?",""]],
          [["Reliability: processo de SLO review escalado para toda a empresa",""]],
          [["Talk: apresentar year-in-review para o org — all-hands técnico",""]]),
        w("m30w4",120,
          [["Retrospectiva Mês 30 + Sub-fase D (meses 28-30): Engineering Excellence",""]],
          [["K8s: exploração técnica livre — área que ainda intriga e não domina",""]],
          [["FinOps: relatório anual de cost savings para C-level — ROI total",""]],
          [["Confiabilidade: relatório anual — 30 meses de programa de SRE",""]],
          [["Celebrar: marcos alcançados — reconhecer time e mentees formalmente",""]]),
      ]},
      { title:"Mês 31", weeks:[
        w("m31w1",121,
          [["Engineering organization design: como estruturar times de plataforma?","https://teamtopologies.com/book"]],
          [["Platform v3: redesign da plataforma baseado em 30 meses de learnings",""]],
          [["Security culture: como construir security-first mindset no org todo",""]],
          [["SLO federation: múltiplas unidades de negócio, 1 programa de reliability",""]],
          [["Liderar: facilitar quarterly technical planning para o org completo",""]]),
        w("m31w2",122,
          [["Staff impact measurement: como mede o seu impacto como Staff Engineer?","https://staffeng.com/guides/staff-archetypes/"]],
          [["K8s future: onde o K8s estará em 3 anos? Construa a sua visão fundamentada",""]],
          [["FinOps: chargeback implementado — como os times respondem aos custos?",""]],
          [["Chaos maturity final: programa de chaos como prática contínua estabelecida",""]],
          [["Mentoria at scale: como mentora através de outros? Multiplicar impacto",""]]),
        w("m31w3",123,
          [["Technical leadership at org level: impacto além do seu time direto","https://staffeng.com/"]],
          [["Plataforma como produto v3: NPS actual, roadmap baseado em feedback",""]],
          [["Zero trust: revisão anual — implementação completa ou gaps restantes?",""]],
          [["Reliability: criar SLO para customer experience end-to-end",""]],
          [["Engineering culture: liderar iniciativa de learning culture no org",""]]),
        w("m31w4",124,
          [["Retrospectiva Mês 31",""]],
          [["K8s: contribuir para KEP ou SIG — participação ativa na comunidade","https://github.com/kubernetes/enhancements"]],
          [["Security: annual pentest — contratar red team externo para a plataforma",""]],
          [["SRE: revisão de processos — o que ainda é manual que não deveria ser?",""]],
          [["Talk: KubeCon EU/US (se aceite) — apresentação ou participação ativa",""]]),
      ]},
      { title:"Mês 32", weeks:[
        w("m32w1",125,
          [["Organizational debt: dívida organizacional — como identificar e atacar",""]],
          [["eBPF: contribuir para projeto eBPF open source — issue ou PR","https://ebpf.io/"]],
          [["Platform economics v2: ROI completo da plataforma — apresentar ao board",""]],
          [["Reliability: criar programa formal de SRE para a empresa toda",""]],
          [["Networking: conectar lideranças de platform engineering de outras empresas",""]]),
        w("m32w2",126,
          [["Engineering strategy update: revisão da strategy com 6 meses de dados",""]],
          [["K8s: deep dive em área específica escolhida pela comunidade","https://landscape.cncf.io/"]],
          [["FinOps: análise de committed use — otimização de longo prazo",""]],
          [["SLO: publicar SLOs externos para clientes (se aplicável ao produto)",""]],
          [["Escrita: iniciar rascunho de capítulo ou artigo técnico de longo formato",""]]),
        w("m32w3",127,
          [["Organizational culture: como influencia a cultura de engenharia hoje?",""]],
          [["Platform reliability: implementar chaos para a própria plataforma",""]],
          [["Cloud native security: cloud native application protection platform",""]],
          [["Reliability: análise de impacto de negócio de cada SLO activo",""]],
          [["Mentoria: retrospectiva com todos os mentees — roadmap para o próximo ano",""]]),
        w("m32w4",128,
          [["Retrospectiva Mês 32",""]],
          [["K8s: roadmap — KEPs aprovados para próximas versões — o que implementar?","https://github.com/kubernetes/enhancements"]],
          [["Security: revisão anual de postura vs 12 meses atrás — delta total",""]],
          [["SRE: confiabilidade como competitive advantage — business case para liderança",""]],
          [["Talk ou publicação: artefato técnico relevante — publicar este mês",""]]),
      ]},
      { title:"Mês 33", weeks:[
        w("m33w1",129,
          [["Principal engineer trajectory: Staff → Principal → Distinguished — o caminho","https://staffeng.com/guides/staff-archetypes/"]],
          [["Platform evolution: como a plataforma precisa evoluir nos próximos 12 meses?",""]],
          [["FinOps: análise de custo vs receita — cost center ou profit center?",""]],
          [["Reliability at business level: SLOs mapeados com SLAs para clientes",""]],
          [["Liderar: facilitar annual technical planning para o ano seguinte",""]]),
        w("m33w2",130,
          [["Engineering strategy: escrever strategy para o próximo ano",""]],
          [["K8s: área experimental — AI Devices plugin, DRA — future features","https://github.com/kubernetes/enhancements"]],
          [["Supply chain: certificar SLSA compliance para produtos principais","https://slsa.dev/"]],
          [["SRE: programa expandido — todos os times core cobertos com SLOs?",""]],
          [["Mentoria: succession planning — quem assume as suas responsabilidades?",""]]),
        w("m33w3",131,
          [["Technical legacy: qual legado técnico quer deixar na empresa?",""]],
          [["Platform handoff: documentar tudo para continuidade — guia completo",""]],
          [["Security: implementar continuous security validation — policy as code","https://www.openpolicyagent.org/"]],
          [["Reliability: criar reliability certification para novos serviços",""]],
          [["Comunidade: organizar trilha técnica em conferência maior",""]]),
        w("m33w4",132,
          [["Retrospectiva Mês 33 + Sub-fase E (meses 31-33): Organizational Leadership",""]],
          [["K8s for AI: GPU operator, MIG, time-slicing — workloads de ML em K8s","https://github.com/NVIDIA/gpu-operator"]],
          [["FinOps: modelo de FinOps para o próximo ano — apresentar à liderança",""]],
          [["Confiabilidade: 33 meses de programa — relatório completo de impacto",""]],
          [["Celebrar: equipe e mentees — reconhecimento formal e público",""]]),
      ]},
      { title:"Mês 34", weeks:[
        w("m34w1",133,
          [["Distinguished engineer: o que separa Staff de Distinguished/Principal?","https://staffeng.com/"]],
          [["Platform v4: visão técnica para os próximos 3 anos",""]],
          [["Security strategy: plano anual de segurança para a empresa — formal",""]],
          [["Reliability: programa maduro — o que vem a seguir?",""]],
          [["Networking: apresentar em conferência tier-1 (QCon, P99, KubeCon)",""]]),
        w("m34w2",134,
          [["Systems of systems: como plataformas interagem com outras plataformas?",""]],
          [["K8s: contribuição significativa para projeto da CNCF — PR ou KEP","https://contribute.cncf.io/"]],
          [["FinOps: criar centro de excelência de FinOps para a empresa","https://www.finops.org/framework/"]],
          [["SRE at scale: como outras empresas fazem SRE em escala — benchmarking","https://sre.google/books/"]],
          [["Escrever: publicação técnica de alto impacto — blog da empresa ou artigo",""]]),
        w("m34w3",135,
          [["Organizational influence: como move a agulha em larga escala no org?",""]],
          [["Platform future: AI-native platform engineering — o que muda?",""]],
          [["Security: threat landscape — como a plataforma está preparada?",""]],
          [["Reliability: qual é o próximo nível para o programa SRE?",""]],
          [["Mentoria: um mentee chegou ao Staff? Documentar o processo completo",""]]),
        w("m34w4",136,
          [["Retrospectiva Mês 34: 16 meses de Staff Orbit — o que mudou?",""]],
          [["K8s: análise do ecossistema — onde está a ir nos próximos 3 anos?","https://landscape.cncf.io/"]],
          [["FinOps: resultados de 3 anos — ROI total calculado e documentado",""]],
          [["Reliability: programa self-sustaining — funciona sem a sua presença?",""]],
          [["Talk: submeter proposta para KubeCon do próximo ano",""]]),
      ]},
      { title:"Mês 35", weeks:[
        w("m35w1",137,
          [["Principal engineering: escreva a sua própria 'operating doc' — como trabalha?","https://lethain.com/staff-engineer-operating-document/"]],
          [["Platform intelligence: AI-driven platform engineering — implementar 1 caso",""]],
          [["Security: red team exercise — atacar e melhorar a plataforma",""]],
          [["SLO: maturidade final — todos os serviços críticos com SLOs definidos?",""]],
          [["Mentoria: final review de todos os mentees — evoluíram como planeado?",""]]),
        w("m35w2",138,
          [["Technical vision 2027: escrever visão técnica de longo prazo — 3 anos",""]],
          [["K8s: apresentar análise do futuro do K8s para liderança da empresa",""]],
          [["FinOps: automação completa — custo otimizado sem intervenção manual?",""]],
          [["Reliability: criar programa de reliability para times de produto",""]],
          [["Comunidade: co-autoria de artigo ou whitepaper com peers externos",""]]),
        w("m35w3",139,
          [["Organizational design final: estrutura ideal para os próximos 2 anos?",""]],
          [["Platform ecosystem: contribuições ao ecossistema — o que ficou de legado?",""]],
          [["Security legacy: postura vs 36 meses atrás — delta total documentado",""]],
          [["Confiabilidade: 35 meses — tendências e projeções para o próximo ciclo",""]],
          [["Escrever: post final do ciclo — o que aprendeu em 3 anos de Staff Orbit?",""]]),
        w("m35w4",140,
          [["Retrospectiva Mês 35",""]],
          [["K8s: contribuição de legado — o que deixa para a comunidade?",""]],
          [["FinOps: plano de handoff — quem continua o programa de FinOps?",""]],
          [["SRE: programa self-sustaining — validação final antes do próximo ciclo",""]],
          [["Celebrar: 3 anos de jornada — reconhecer todos os envolvidos",""]]),
      ]},
      { title:"Mês 36 — Ciclo Completo", weeks:[
        w("m36w1",141,
          [["3-year retrospective: o que mudou desde o Mês 1 — comparar o eu de antes?",""]],
          [["Plataforma: estado actual vs visão inicial — o que foi construído em 3 anos?",""]],
          [["Security: postura final — relatório completo de 36 meses para a empresa",""]],
          [["Reliability: programa final — relatório de 36 meses de SRE",""]],
          [["Comunidade: o que devolve para a comunidade que o formou?",""]]),
        w("m36w2",142,
          [["Principal/Distinguished path: próximos passos concretos e plano de ação","https://staffeng.com/"]],
          [["K8s: expert level — o que ainda não domina? O seu próximo desafio técnico",""]],
          [["Cloud: o que mudou em cloud em 3 anos? A sua análise para a empresa",""]],
          [["SRE: futuro do SRE — onde a disciplina está a ir?","https://sre.google/"]],
          [["Mentoria: todos os mentees em posições mais sénior? Documentar",""]]),
        w("m36w3",143,
          [["Career reflection: Staff Engineer em 3 anos — o que mudaria?",""]],
          [["Platform engineering: futuro da disciplina — a sua visão para 2027+","https://platformengineering.org/"]],
          [["FinOps: 3 anos de programa — legado e continuidade planeada",""]],
          [["Reliability: blameless culture estabelecida — como medir e manter?",""]],
          [["Networking: quem se tornou na comunidade técnica? O seu legado",""]]),
        w("m36w4",144,
          [["Visão para o próximo ciclo: o que vem depois dos 36 meses?",""]],
          [["Contribuição final: o que deixa para a próxima geração de engenheiros?",""]],
          [["Cloud native: onde está o ecossistema? Onde está você?",""]],
          [["SRE final: 36 meses de reliability — legado medido e documentado",""]],
          [["🎯 36 meses completos — reflita, celebre e planeie o próximo capítulo",""]]),
      ]},
    ]
  },
];

// ─── TROUBLESHOOTING HUB DATA ─────────────────────────────────────────────
const TROUBLESHOOTING = [
  {
    id:"linux", icon:"🐧", title:"Linux Administration", color:"#f59e0b",
    resources:[
      { id:"l1",  title:"Linux Server — Complete Administrator's Guide", desc:"Filesystem, user admin, processos, networking e troubleshooting workflows em produção.", tags:["admin","fundamentals","filesystem"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/linux-server-configuration-complete-administrators-guide-beginner-advanced-production-b39e5847e193" },
      { id:"l2",  title:"Linux User Administration (Practical Guide)", desc:"sudo, PAM authentication, account locking, login auditing, privilege escalation patterns.", tags:["admin","security","sudo"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/linux-user-administration-complete-practical-guide-970fc76c813b" },
      { id:"l3",  title:"Linux User Administration (Real-World Hands-On)", desc:"Enterprise security: sudoers, PAM, account locking e privilege escalation em ambientes hardened.", tags:["admin","security","sudo"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/linux-user-administration-465fca4c1c52" },
      { id:"l4",  title:"GRUB Legacy & Boot Process", desc:"Como o Linux arranca — BIOS/UEFI → GRUB → kernel → init. Recovery de sistema não bootável.", tags:["boot","recovery","grub"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/understanding-grub-legacy-grub-conf-in-centos-redhat-b284751a3019" },
      { id:"l5",  title:"LVM — Practical Guide", desc:"Physical volumes, volume groups, logical volumes, snapshots, resizing e troubleshooting LVM.", tags:["storage","lvm","disk"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/a-practical-guide-to-linux-lvm-logical-volume-management-13ee759081b9" },
      { id:"l6",  title:"LVM — Complete Guide (Step-by-Step)", desc:"Configuração completa de LVM em Linux passo a passo com Logical Volume Manager.", tags:["storage","lvm","disk"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/learn-how-to-configure-lvm-in-linux-step-by-step-logical-volume-manager-693197b82532" },
      { id:"l7",  title:"NFS Complete Guide with Installation", desc:"Server e client configuration, export rules, mount options, permissões e fixes de NFS.", tags:["storage","nfs","networking"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/nfs-network-file-system-752584e888a8" },
      { id:"l8",  title:"FTP Server Setup on Linux", desc:"FTP configuration com security hardening, passive mode, user isolation e troubleshooting.", tags:["ftp","server","networking"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/ftp-server-setup-configuration-on-linux-complete-guide-e24328db41db" },
      { id:"l9",  title:"Linux Filesystems: Ext2 vs Ext3 vs Ext4 vs XFS", desc:"Quando usar cada filesystem, performance characteristics, e como escolher para o teu workload.", tags:["storage","filesystem","performance"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/linux-file-systems-explained-4869be9e8edf" },
      { id:"l10", title:"Create a Linux Swap Partition", desc:"Configuração de swap em produção: tamanho, partições, swap files e tuning de swappiness.", tags:["performance","memory","storage"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/create-a-linux-swap-file-swap-partition-steps-1a9d994a0a7a" },
      { id:"l11", title:"Linux Kernel Tuning", desc:"sysctl production-grade: network stack, memory management, file descriptor limits para high-traffic.", tags:["performance","kernel","tuning"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/linux-kernel-tuning-f888d7f83aab" },
      { id:"l12", title:"Configuring Sudo Access for Users on RHEL", desc:"sudoers file structure, command whitelisting, logging sudo activity, e fix de sudoers corrompido.", tags:["admin","security","sudo"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/configuring-sudo-access-to-users-4473f995ec40" },
      { id:"l13", title:"rsync — Practical Examples", desc:"Local e remote sync, incremental backups, bandwidth throttling, exclusions, e backup automation.", tags:["backup","storage","automation"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/10-practical-examples-of-rsync-command-in-linux-780134c2639f" },
      { id:"l14", title:"100+ DevOps Commands Every Engineer Must Know", desc:"Command reference organizado por categoria: file ops, network, processos, performance analysis.", tags:["fundamentals","reference","commands"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/devops-commands-cheat-sheet-203f9654dede" },
      { id:"l15", title:"Passwordless SSH Login Setup", desc:"Key-based authentication, authorized_keys, SSH config optimization e common SSH auth failures.", tags:["ssh","security","networking"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/passwordless-ssh-login-using-ssh-key-authentication-11c8d0f0cb63" },
      { id:"l16", title:"Complete DevOps Cheat Sheet Handbook", desc:"Todos os comandos, flags e atalhos organizados para lookup rápido durante trabalho real.", tags:["fundamentals","reference","commands"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/complete-devops-cheat-sheet-handbook-2ffbedb39857" },
      { id:"l17", title:"Install mlocate on Linux (CentOS 7)", desc:"Fast file location com mlocate: installation, database building, update scheduling.", tags:["admin","tools","fundamentals"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/how-to-install-mlocate-on-linux-9748035e06b9" },
      { id:"l18", title:"Installation of Node.js & PM2", desc:"NVM-based installation, PM2 process manager, startup scripts, log management, cluster mode.", tags:["nodejs","installation","tools"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/how-to-install-node-npm-and-pm2-on-linux-d0bd1a03aaac" },
      { id:"l19", title:"Booting into Single User Mode & Root Recovery", desc:"Recovery de root password perdida em RHEL/CentOS — guia para emergências às 3 da manhã.", tags:["recovery","boot","security"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/booting-into-single-user-mode-on-linux-mounting-root-step-by-step-guide-2512e9597f8c" },
      { id:"l20", title:"ps Command — Troubleshooting Linux Processes", desc:"Process states, zombie processes, high CPU identification, ps com kill/top/strace para root cause.", tags:["troubleshooting","performance","processes"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/useful-ps-command-to-monitor-and-troubleshoot-linux-process-1eebae69e0ea" },
      { id:"l21", title:"Fixing Corrupt /etc/sudoers File (Azure VM)", desc:"Recovery sem perder acesso, incluindo abordagem específica para Azure VMs via serial console.", tags:["troubleshooting","recovery","sudo"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/fixing-a-corrupt-etc-sudoers-file-in-linux-vm-in-azure-bb94df88b07d" },
      { id:"l22", title:"NFS Mount Issues — Troubleshooting Guide", desc:"stale handles, permission denied, timeout, portmap failures — workflow de eliminação completo.", tags:["troubleshooting","nfs","networking"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/nfs-mount-issue-abc776ee7eec" },
      { id:"l23", title:"Linux Logs Troubleshooting", desc:"/var/log structure, journalctl, log level filtering e os ficheiros que importam por tipo de incidente.", tags:["troubleshooting","logs","debugging"], url:"https://freedium-mirror.cfd/https://medium.com/devops-dev/linux-logs-troubleshooting-fbb7a115cadb" },
    ]
  },
  {
    id:"webservers", icon:"🌐", title:"Web Servers", color:"#60a5fa",
    resources:[
      { id:"w1",  title:"Apache Installation from Tarball (Source Build)", desc:"Compilação from source: compilation flags, dependency management, module selection.", tags:["apache","installation","production"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/apache-tarball-installation-steps-79f883d799ee" },
      { id:"w2",  title:"Apache CGI-BIN Vulnerability & Fix", desc:"CVE walkthrough real: como CGI-BIN vulnerabilidades são exploradas e configurações que fecham o vetor.", tags:["security","apache","vulnerability"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/apache-cgi-bin-issue-62b22c465b40" },
      { id:"w3",  title:"Upgrade Apache 2.4.48 → 2.4.53", desc:"Zero-downtime Apache upgrade: backup strategy, dependency checks, rollback plan e validação.", tags:["apache","upgrade","production"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/how-to-upgrade-apache-2-4-48-4187fa4d5f48" },
      { id:"w4",  title:"HTTP Request Smuggling Fix (ModSecurity + HTTP/2)", desc:"Um dos ataques web mais sofisticados explicado claramente + ModSecurity rule configuration.", tags:["security","apache","vulnerability"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/apache-sop-http-request-smuggling-issue-f65b3729ed72" },
      { id:"w5",  title:"Apache Hardening — Step-by-Step Security Guide", desc:"Desabilitar módulos desnecessários, security headers, ModSecurity WAF, passar auditorias de segurança.", tags:["security","apache","hardening"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/apache-hardening-445357e9961b" },
      { id:"w6",  title:"Apache Virtual Hosting (Production Setup)", desc:"Name-based e IP-based virtual hosting: múltiplos domínios num servidor, com logging e SSL por vhost.", tags:["apache","configuration","hosting"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/virtual-hosting-in-apache-web-server-complete-practical-guide-700ca9c56222" },
      { id:"w7",  title:"Apache Log Format & Log Rotation", desc:"Custom log format, logrotate setup, análise com AWK/grep, basic request monitoring workflow.", tags:["apache","logs","monitoring"], url:"https://freedium-mirror.cfd/https://medium.com/devsecops-community/apache-log-format-and-log-rotatelogs-206fdc0b4537" },
      { id:"w8",  title:"Apache SSL Certificates — HTTPS Setup Guide", desc:"Certificate procurement, SSL module config, redirect HTTP → HTTPS, renovação, e common SSL errors.", tags:["ssl","security","apache"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/securing-apache-with-ssl-certificate-f8a1277a74a6" },
      { id:"w9",  title:"NGINX Security Hardening Guide (2026)", desc:"Rate limiting, request size limits, security headers (HSTS, CSP, X-Frame-Options), weak ciphers.", tags:["security","nginx","hardening"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/ultimate-guide-to-securing-nginx-restrict-sensitive-files-protect-endpoints-harden-your-1ed76497faf9" },
      { id:"w10", title:"Tomcat Server Setup on Linux", desc:"Instalação completa: Java dependencies, Tomcat service management, virtual hosts, manager security.", tags:["tomcat","java","production"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/setup-tomcat-server-on-linux-b056724e4f2d" },
    ]
  },
  {
    id:"networking", icon:"🔒", title:"Networking & Security", color:"#34d399",
    resources:[
      { id:"n1", title:"IPTABLES Firewall — Complete Practical Guide", desc:"De zero a production-ready firewall: chains, tables, stateful filtering, NAT, persistência.", tags:["networking","security","firewall"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/iptables-linux-firewall-complete-practical-guide-d469b3111070" },
      { id:"n2", title:"Linux Networking Explained", desc:"Networking pelo lens do Linux: interfaces, routing tables, ARP, DNS resolution, socket states.", tags:["networking","linux","fundamentals"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/linux-networking-explained-hardware-drivers-ip-configuration-troubleshooting-step-by-step-1fa1d16d90a2" },
      { id:"n3", title:"Networking for DevOps — Master the Fundamentals", desc:"TCP/IP, load balancing, DNS, TLS, firewalls, VPCs — networking mapeado para cloud infrastructure.", tags:["networking","fundamentals","cloud"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/networking-for-devops-the-complete-beginner-to-advanced-guide-for-modern-engineers-2cc5be694140" },
      { id:"n4", title:"Subnet Mask Complete Practical Guide", desc:"CIDR notation, calcular network ranges, design de subnets para AWS VPCs, subnet math.", tags:["networking","aws","fundamentals"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/subnet-masks-reference-table-complete-guide-for-network-admins-devops-bdc9712f0f61" },
      { id:"n5", title:"Nmap Complete Beginner to Pro Guide", desc:"Host discovery, port scanning, service detection, OS fingerprinting, security audits.", tags:["security","networking","scanning"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/example-of-nmap-network-map-63dda814e33" },
      { id:"n6", title:"Netstat Explained with Real Use Cases", desc:"Socket e connection analysis, listening ports, connection states, identificar rogue processes.", tags:["networking","troubleshooting","monitoring"], url:"https://freedium-mirror.cfd/https://medium.com/@tushar.jadhav29/example-of-netstat-network-statistics-cc2653cfc004" },
      { id:"n7", title:"DNS in Very Simple Words", desc:"Como name resolution funciona, record types (A, CNAME, MX, TXT, NS), TTL, debug com dig/nslookup.", tags:["networking","dns","troubleshooting"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/dns-in-very-simple-words-1e0adadf12a8" },
    ]
  },
  {
    id:"docker", icon:"🐳", title:"Docker", color:"#38bdf8",
    resources:[
      { id:"d0", title:"K8s & Docker Mastery Hub (2026 Edition)", desc:"Hub centralizado de Kubernetes e Docker — ponto de entrada para toda a série.", tags:["docker","kubernetes","hub"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/%EF%B8%8F-kubernetes-docker-mastery-hub-2026-edition-a474239b7a21" },
      { id:"d1", title:"Day 1 — Master Docker Tutorial with Examples", desc:"Containers vs VMs, image e container lifecycle, Dockerfile basics, primeira container image.", tags:["docker","fundamentals","containers"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/docker-installation-setup-and-tutorials-34ab7a6d33b6" },
      { id:"d2", title:"Day 2 — 50+ Docker Commands with Real-Life Use Cases", desc:"run, exec, logs, inspect, network, volume, compose — cada um com cenário real.", tags:["docker","commands","reference"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/50-docker-commands-every-developer-devops-engineer-should-know-with-examples-real-life-use-f2823110866b" },
      { id:"d3", title:"Day 3 — Container Volumes in Docker", desc:"Named volumes, bind mounts, tmpfs, volume drivers, backup e patterns para aplicações stateful.", tags:["docker","storage","stateful"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/container-volumes-in-docker-a4755a811d7b" },
      { id:"d4", title:"Day 4 — Mastering Docker: The Complete Professional Guide", desc:"Multi-stage builds, image optimization, layer caching, security scanning, resource limits, health checks.", tags:["docker","production","optimization"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/mastering-docker-the-complete-professional-guide-fcf021f9ffa1" },
      { id:"d5", title:"Day 5 — Elastic Stack (ELK) on Docker", desc:"ELK stack com Docker Compose: persistent volumes, resource limits, production-ready config.", tags:["docker","elk","observability"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/elastic-stack-elk-on-docker-daded0183cc6" },
      { id:"d6", title:"Day 6 — Docker Installation on RHEL 8.8", desc:"Setup Docker em Red Hat-based systems: repositórios, firewall e verificação pós-instalação.", tags:["docker","rhel","installation"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/docker-install-on-rhel-8-8-11722f04d587" },
      { id:"d7", title:"Docker Alternatives in 2026", desc:"Podman, containerd, nerdctl, Buildah: quando considerar alternativas e o que cada um oferece.", tags:["docker","containers","tooling"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/docker-alternatives-in-2026-d677376a6076" },
    ]
  },
  {
    id:"kubernetes", icon:"☸️", title:"Kubernetes", color:"#818cf8",
    resources:[
      { id:"k0",  title:"K8s & Docker Mastery Hub (2026 Edition)", desc:"Hub centralizado de Kubernetes e Docker — ponto de entrada para toda a série.", tags:["kubernetes","docker","hub"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/%EF%B8%8F-kubernetes-docker-mastery-hub-2026-edition-a474239b7a21" },
      { id:"k1",  title:"Day 1 — Minikube Installation on CentOS 9", desc:"Local K8s setup: Minikube from scratch no CentOS 9, driver config, resource allocation.", tags:["kubernetes","minikube","installation"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/minikube-installation-on-centos-9-fresh-vm-setup-8a16d4f052af" },
      { id:"k2",  title:"Day 2 — K8s Fundamentals for Absolute Beginners", desc:"O mental model: control plane, worker nodes, e os core objects (Pod, Deployment, Service, NS).", tags:["kubernetes","fundamentals","architecture"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/kubernetes-fundamentals-for-absolute-beginners-on-aws-cloud-fd94aea5e9e" },
      { id:"k3",  title:"Day 3 — Kubernetes Explained Simply", desc:"K8s sem jargão: scheduling, Pods, Services — do developer push ao container running.", tags:["kubernetes","fundamentals","beginner"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/kubernetes-explained-simply-a-beginner-friendly-guide-to-cloud-native-scaling-1d173ce58a61" },
      { id:"k4",  title:"Day 4 — Kubernetes Cheatsheet with Simple Examples", desc:"kubectl commands: apply, get, describe, logs, exec, port-forward, scale, rollout — referência rápida.", tags:["kubernetes","commands","reference"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/kubernetes-cheatsheet-with-simple-examples-for-everyday-use-e659060fc599" },
      { id:"k5",  title:"Day 5 — Kadira Monitoring Stack", desc:"K8s observability com Kadira: metrics collection, dashboard setup, alerting configuration.", tags:["kubernetes","monitoring","observability"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/kadira-monitoring-stack-production-ready-docker-and-kubernetes-migration-architecture-095de61f9336" },
      { id:"k6",  title:"Day 6 — Kubernetes Cheat Sheet (Advanced)", desc:"jsonpath queries, custom columns, label selectors, resource quotas, network policy inspection.", tags:["kubernetes","advanced","debugging"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/kubernetes-cheat-sheet-427713ad510" },
      { id:"k7",  title:"Day 7 — Helm Commands Cheat Sheet", desc:"install, upgrade, rollback, template, values override, e building Helm charts para as tuas apps.", tags:["kubernetes","helm","packaging"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/50-essential-helm-commands-complete-guide-with-examples-history-architecture-real-life-1de3bb8071f1" },
      { id:"k8",  title:"Kubernetes Auto Scaling with Blue/Green Deployments", desc:"HPA, VPA, blue/green deployment implementation e traffic switching sem downtime.", tags:["kubernetes","scaling","deployments"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/auto-scaling-with-kubernetes-blue-green-deployments-63e196d17cef" },
      { id:"k9",  title:"K8s on Minikube — TLS + Monitoring + Ingress", desc:"TLS certificate config, Prometheus + Grafana, NGINX Ingress controller — tudo junto num lab.", tags:["kubernetes","monitoring","tls","ingress"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/production-grade-kubernetes-project-on-minikube-b7df47af6b2b" },
      { id:"k10", title:"Real-World Kubernetes Interview Questions", desc:"Perguntas de entrevistas reais: arquitetura, networking, storage, security, troubleshooting scenarios.", tags:["kubernetes","interview","career"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/real-world-kubernetes-interview-questions-b1b7ff0c69f6" },
    ]
  },
  {
    id:"databases", icon:"🗄️", title:"Databases", color:"#f472b6",
    resources:[
      { id:"db1",  title:"MySQL Master-Master Replication", desc:"Replicação bidirecional: setup, conflict resolution, monitoring, e recovery de split-brain.", tags:["mysql","replication","ha"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/how-to-setup-mysql-master-master-replication-ebfb7348de8f" },
      { id:"db2",  title:"MySQL Master-Slave Replication", desc:"Replicação clássica, monitoring de lag, promover slave a master, e read scaling.", tags:["mysql","replication","scaling"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/mysql-master-slave-configuration-3cf023102695" },
      { id:"db3",  title:"MySQL Root Login Error 1045 — Fix", desc:"O MySQL access issue mais comum: diagnóstico, recovery com e sem root access.", tags:["mysql","troubleshooting","security"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/mysql-root-login-issue-197ff1c30c8e" },
      { id:"db4",  title:"MySQL for Professionals — Production Problems", desc:"Slow query analysis, deadlock diagnosis, replication failures, backup/restore, performance tuning.", tags:["mysql","production","performance"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/mysql-for-professionals-real-world-problems-solutions-advanced-queries-best-practices-57a1ee85b9ba" },
      { id:"db5",  title:"MySQL Real-World Errors & Solutions", desc:"Coleção de MySQL error codes, o que significam, e os comandos exactos que os resolvem.", tags:["mysql","troubleshooting","reference"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/mysql-db-error-and-solution-867936ffa794" },
      { id:"db6",  title:"Redis Master Guide: Beginner to Production", desc:"Guia completo de Redis: conceitos, configuração, clustering e padrões de produção.", tags:["redis","fundamentals","production"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/redis-master-guide-from-beginner-to-production-level-engineering-57d3543b980c" },
      { id:"db7",  title:"Redis Installation & Cluster Setup on Linux", desc:"Redis cluster: node setup, cluster config, testing failover, e client connection patterns.", tags:["redis","cluster","ha"], url:"https://freedium-mirror.cfd/https://medium.com/stackademic/redis-installation-redis-cluster-setup-on-linux-production-guide-6fb8db74cd38" },
      { id:"db8",  title:"MongoDB Backup Automation", desc:"mongodump automation, oplog-based consistent backups, S3 upload, retention management, restore testing.", tags:["mongodb","backup","automation"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/how-to-write-script-for-mongodb-backup-d9680628a8cb" },
      { id:"db9",  title:"MongoDB Installation & Replica Set Configuration", desc:"Replica set from scratch: initialization, priority config, arbiters, e testing failover.", tags:["mongodb","replication","ha"], url:"https://freedium-mirror.cfd/https://medium.com/devops-dev/mongodb-installation-replica-set-configuration-on-linux-8913b5e02318" },
      { id:"db10", title:"Elastic Stack Installation (ELK)", desc:"Elasticsearch, Logstash, e Kibana: installation, integração, index management, log ingestion pipeline.", tags:["elasticsearch","elk","logging"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/elk-installation-step-by-step-b39feb8a9726" },
      { id:"db11", title:"Backup and Restore Elasticsearch Snapshot", desc:"Snapshot repository (S3/filesystem), scheduling, cross-cluster restore, disaster recovery testing.", tags:["elasticsearch","backup","disaster-recovery"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/backup-and-restore-elasticsearch-snapshot-to-another-cluster-dfe7adc5bf95" },
      { id:"db12", title:"Apache Kafka Installation", desc:"Kafka from ground up: broker setup, topic creation, producer/consumer config, Kafka concepts.", tags:["kafka","messaging","event-driven"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/apache-kafka-installation-steps-3ed317de6e37" },
      { id:"db13", title:"Cassandra Database Installation on Linux", desc:"Apache Cassandra setup: installation, cluster config, keyspace e table creation.", tags:["cassandra","nosql","installation"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/cassandra-database-installation-linux-aa88c9327d8b" },
      { id:"db14", title:"Set Up Kibana from Binary Tarball", desc:"Manual Kibana installation: tarball setup, Elasticsearch connection, index pattern creation.", tags:["kibana","elk","visualization"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/set-up-kibana-from-binary-tarball-77df20fd37d4" },
      { id:"db15", title:"Installing ArangoDB 3.7 on Linux", desc:"ArangoDB multi-model: installation, config e graph/document/key-value use cases.", tags:["arangodb","nosql","installation"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/step-by-step-guide-installing-arangodb-3-7-on-linux-self-hosted-setup-2bcd1a9f0678" },
      { id:"db16", title:"Installing Percona Server on Linux", desc:"Percona Server — enhanced MySQL drop-in: installation e performance improvements.", tags:["percona","mysql","performance"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/installing-percona-server-on-red-hat-enterprise-linux-and-centos-92582a9748a" },
    ]
  },
  {
    id:"cloud", icon:"☁️", title:"Cloud & AWS", color:"#fb923c",
    resources:[
      { id:"c1", title:"AWS IAM Implementation Plan", desc:"Users vs roles vs groups, least privilege design, policy structure, e IAM mistakes que criam vulnerabilidades.", tags:["aws","iam","security"], url:"https://freedium-mirror.cfd/https://towardsaws.com/aws-iam-implementation-plan-fba43cc10158" },
      { id:"c2", title:"AWS Secure Multi-AZ VPC Architecture", desc:"Public/private subnets por AZ, NAT gateways, security groups, NACLs, VPC flow logs.", tags:["aws","vpc","networking","architecture"], url:"https://freedium-mirror.cfd/https://towardsaws.com/aws-secure-multi-az-vpc-architecture-project-897a8ea82b38" },
      { id:"c3", title:"AWS Auto Scaling — Production-Ready Architecture", desc:"EC2 ASG: launch templates, scaling policies, target tracking, scheduled scaling.", tags:["aws","autoscaling","ec2"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/aws-auto-scaling-production-ready-architecture-setup-guide-8b9f3bc7fbaa" },
      { id:"c4", title:"AWS EC2 Password Issue — Fix", desc:"EC2 Linux instance password recovery: quando perdes o key pair, EC2 Instance Connect e prevenção.", tags:["aws","ec2","troubleshooting"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/unable-to-retrieve-default-windows-administrator-password-in-aws-ec2-8ad6448e9cc3" },
      { id:"c5", title:"Azure VM Backup Using Custom Images", desc:"Managed images, image replication entre regiões, deploy from images, automated image lifecycle.", tags:["azure","backup","vm"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/azure-virtual-machine-step-by-step-for-backup-520ed221b471" },
      { id:"c6", title:"Create User on AWS & Provide Sudo Access Without PPK Key", desc:"AWS user onboarding: IAM users, EC2 Linux user via SSM Session Manager, sudo sem private keys.", tags:["aws","iam","security"], url:"https://freedium-mirror.cfd/https://aws.plainenglish.io/create-read-only-user-on-aws-server-provide-sudo-access-without-ppk-key-aa89bfb869da" },
      { id:"c7", title:"AWS for DevOps — Ultimate Services Map (2026)", desc:"Todos os serviços AWS que um DevOps engineer precisa, organizados por função com use cases.", tags:["aws","reference","fundamentals"], url:"https://freedium-mirror.cfd/https://medium.com/towards-aws/aws-for-devops-the-ultimate-services-map-cheat-sheets-2026-edition-ad85c581b639" },
      { id:"c8", title:"AWS CLI Commands Cheat Sheet", desc:"CLI commands diários: EC2, S3, IAM, EKS, RDS, CloudWatch — organizados para lookup rápido.", tags:["aws","cli","reference","commands"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/aws-cli-commands-cheat-sheet-the-ultimate-devops-cloud-engineer-guide-8cd55078cf10" },
      { id:"c9", title:"DevOps Handbook — 120+ Essential Concepts", desc:"CI/CD, SRE, GitOps, FinOps — o vocabulário que te torna eficaz em conversas com qualquer equipa.", tags:["fundamentals","reference","concepts"], url:"https://freedium-mirror.cfd/https://medium.com/aws-in-plain-english/the-ultimate-devops-handbook-120-essential-concepts-every-engineer-should-know-5eccfcd43307" },
    ]
  },
  {
    id:"monitoring", icon:"📊", title:"Monitoring & Observability", color:"#a78bfa",
    resources:[
      { id:"m1", title:"Complete Guide to Grafana Observability Stack", desc:"Grafana dashboards, Prometheus metrics, Loki logs, Tempo traces — setup e dashboards para incidentes.", tags:["monitoring","grafana","prometheus","observability"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/complete-guide-to-grafana-observability-stack-c3164b66f7ae" },
      { id:"m2", title:"Grafana + Prometheus + Loki — Complete Stack", desc:"Modern observability: scrape config, Loki log aggregation, Grafana alert rules e runbook-linked alerts.", tags:["monitoring","grafana","loki","prometheus"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/complete-guide-to-grafana-observability-stack-c3164b66f7ae" },
      { id:"m3", title:"Nagios Setup on Linux", desc:"Server installation, service check configuration, notification setup, monitoring baseline para server fleet.", tags:["monitoring","nagios","alerting"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/nagios-setup-on-linux-268f96064f1d" },
      { id:"m4", title:"Nagios Client Installation Script (NRPE)", desc:"NRPE agent deployment: installation script, plugin configuration, firewall rules e testing.", tags:["monitoring","nagios","nrpe"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/nagios-client-instalation-script-7d503b769588" },
      { id:"m5", title:"Monitor Amazon RDS with Nagios", desc:"RDS CloudWatch metric integration, connection count monitoring, storage alerts, replication lag tracking.", tags:["monitoring","aws","rds","nagios"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/monitor-rds-with-nagios-78e3a6fa99c5" },
    ]
  },
  {
    id:"devops", icon:"🤖", title:"DevOps, IaC & Git", color:"#10b981",
    resources:[
      { id:"dv1",  title:"Ansible Made Simple — Beginner Guide", desc:"Installation, inventory, playbooks, modules, variables, e primeira automação a funcionar.", tags:["ansible","automation","iac"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/ansible-made-simple-a-beginner-friendly-guide-with-exampleswhat-is-ansible-dae6623ddb71" },
      { id:"dv2",  title:"Ansible Real-Life Project — API Error Log Collection", desc:"Projeto Ansible completo: log collection automatizada, parsing de errors, relatório diário.", tags:["ansible","automation","logging"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/ansible-real-life-devops-project-centralized-api-error-log-collection-4c16f9a35b63" },
      { id:"dv3",  title:"Automating Linux Package Installation with Ansible", desc:"Full stack provisioning: bare OS para configured application server com um playbook.", tags:["ansible","automation","linux"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/automating-linux-packges-instalaltion-stack-setup-with-ansible-6928f8d0b8b4" },
      { id:"dv4",  title:"Ansible Playbooks — Everyday Use Cases", desc:"Playbooks do dia a dia: padrões práticos para tarefas de automação recorrentes.", tags:["ansible","automation","iac"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/ansible-playbooks-and-m-2f17d3ebee83" },
      { id:"dv5",  title:"Ansible Production CI/CD with Jenkins & GitHub Actions", desc:"Git push → Jenkins pipeline → Ansible playbook → production deployment.", tags:["ansible","cicd","jenkins"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/ansible-production-ci-cd-with-jenkins-github-actions-59cc16b59adf" },
      { id:"dv6",  title:"Automate Web App Deployment with Ansible — Zero-Downtime", desc:"Pipeline end-to-end de deployment sem downtime com Ansible.", tags:["ansible","cicd","automation"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/ansible-project-end-to-end-automated-web-application-deployment-525459b467e5" },
      { id:"dv7",  title:"Terraform for DevOps Engineers", desc:"Primeira config, managing AWS resources, remote state com S3 backend.", tags:["terraform","iac","aws"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/terraform-for-devops-engineers-57f426b7f9cc" },
      { id:"dv8",  title:"Terraform Made Practical", desc:"Hands-on Terraform: build cloud VMs with code, state management, modules e debugging.", tags:["terraform","iac","aws"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/terraform-made-practical-build-cloud-vms-with-code-and-commands-5d941f011400" },
      { id:"dv9",  title:"Jenkins Installation & Configuration on Linux", desc:"Production Jenkins: plugins, agent config, pipeline-as-code com Jenkinsfile, security hardening.", tags:["jenkins","cicd","automation"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/jenkins-installation-jenkins-overview-2bdca26450b6" },
      { id:"dv10", title:"DevSecOps Setup Pipeline and Overview", desc:"SAST/DAST scanning, dependency vulnerability checking, secret scanning, pipeline de segurança.", tags:["devsecops","security","cicd"], url:"https://freedium-mirror.cfd/https://medium.com/devsecops-community/devsecops-overview-72d66c96d7da" },
      { id:"dv11", title:"Git Tutorial for Beginners", desc:"Mental model de version control, init/clone/commit/push/pull, branching strategy basics.", tags:["git","fundamentals","cicd"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/git-tutorial-for-beginners-8eeab8b41415" },
      { id:"dv12", title:"Git Essentials — Commands with Real-World Examples", desc:"stash, rebase, cherry-pick, bisect, reflog, reset — cada um com cenário real que salva.", tags:["git","commands","reference"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/git-essentials-the-only-command-cheat-sheet-youll-ever-need-02adc9a75454" },
      { id:"dv13", title:"Automate System Health Checks in Linux", desc:"Health check automation: disk, memory, CPU, service status, e Slack alerts antes de incidentes.", tags:["automation","bash","monitoring"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/lets-automate-system-health-check-in-linux-9f6ab5bd458" },
      { id:"dv14", title:"Master YAML for DevOps", desc:"YAML syntax, data types, anchors, multi-line strings — patterns em K8s manifests e CI/CD pipelines.", tags:["yaml","fundamentals","reference"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/master-yaml-for-devops-the-complete-guide-basic-advanced-a444b4aebe68" },
    ]
  },
  {
    id:"bash", icon:"📜", title:"Bash Scripting", color:"#fbbf24",
    resources:[
      { id:"b1", title:"Day 1 — Bash Shell Scripting for Beginners", desc:"Variables, user input, conditionals, loops, functions e o primeiro script de automação completo.", tags:["bash","scripting","fundamentals"], url:"https://freedium-mirror.cfd/https://medium.com/devsecops-community/bash-shell-scripting-complete-beginner-friendly-guide-with-notes-practical-scripts-7c4a304b8897" },
      { id:"b2", title:"Day 2 — Complete Practical Bash Guide for DevOps", desc:"File operations, string manipulation, arrays, error handling, logging — scripts robustos para cron jobs.", tags:["bash","scripting","automation"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/bash-scripting-day-2-complete-practical-guide-for-devops-scripts-with-full-explanation-671410e57127" },
      { id:"b3", title:"Day 3 — Advanced Shell Scripting for DevOps", desc:"Argument parsing, config files, locking mechanisms, signal handling — scripts que falham corretamente.", tags:["bash","scripting","advanced"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/bash-scripting-day-3-advanced-shell-scripting-for-devops-dd27fca63a2b" },
    ]
  },
  {
    id:"projects", icon:"🧑‍💻", title:"DevOps Projects & MLOps", color:"#06b6d4",
    resources:[
      { id:"pr1", title:"Magento 2 on Docker — Production-Ready Guide", desc:"E-commerce stack em containers: Magento 2 com MySQL, Elasticsearch, Redis e NGINX on Docker Compose.", tags:["docker","magento","production"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/magento-2-installation-guide-nginx-php-mysql-docker-ready-39bdc786b288" },
      { id:"pr2", title:"Magento 2 on Kubernetes — Production-Ready Guide", desc:"Magento stack em K8s: persistent volumes, ConfigMaps, Secrets, Ingress, autoscaling.", tags:["kubernetes","magento","production"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/magento-2-on-kubernetes-a-complete-production-ready-guide-298edc68d81a" },
      { id:"pr3", title:"Build a DevOps Portal", desc:"IDP architecture: tecnologia, abordagem de implementação e self-service DevOps portal.", tags:["idp","platform","project"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/build-a-devops-portal-that-understands-executes-server-commands-automatically-a949364fe87e" },
      { id:"pr4", title:"osTicket — Complete Setup Guide", desc:"Internal help desk: installation, database config, email integration e production hardening.", tags:["helpdesk","itsm","project"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/osticket-ost-ticket-tool-complete-setup-guide-features-use-cases-e8e909f99072" },
      { id:"pr5", title:"OpenStack Barbican Setup", desc:"Key Management as a Service: Barbican installation, HSM integration, secret lifecycle management.", tags:["openstack","secrets","security"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/openstack-barbican-secure-secret-key-management-b2aed0bad1b2" },
      { id:"pr6", title:"MLOps Part 1 — Overview & Top MLOps Tools", desc:"MLOps landscape: MLflow, Kubeflow, BentoML, Seldon — real use cases onde MLOps entrega valor.", tags:["mlops","ai","fundamentals"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/overview-of-mlops-tools-7805b408ef74" },
      { id:"pr7", title:"MLOps Part 2 — MLOps Roadmap", desc:"Adopção step-by-step: de ad-hoc ML a production ML pipelines com maturity stages.", tags:["mlops","ai","roadmap"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/mlops-road-map-overview-for-beginners-a438f9c399ee" },
      { id:"pr8", title:"MLOps Part 3 — Getting Started with MLflow", desc:"MLflow hands-on: experiment tracking, model registry, model serving, ML lifecycle management.", tags:["mlops","mlflow","ai"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/mlflow-part-1-getting-started-with-mlflow-7c91aa25ec15" },
      { id:"pr9", title:"MLOps Part 4 — ML Models into Production Services", desc:"Model deployment: REST API serving, batch inference, A/B testing, monitoring model drift.", tags:["mlops","production","ai"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/mlops-turning-machine-learning-models-into-real-products-e377a6e1ace7" },
    ]
  },
  {
    id:"career", icon:"🎓", title:"Career & Interviews", color:"#e879f9",
    resources:[
      { id:"cr1", title:"DevOps/SRE Interview Preparation Hub — 500+ Questions", desc:"Tudo de Linux basics a SRE mindset: guia completo, single-page, estruturado e gratuito.", tags:["interview","career","sre"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/devops-sre-linux-admin-interview-preparation-hub-2026-edition-500-questions-from-linux-to-17a4843ca234" },
      { id:"cr2", title:"Linux Interview Questions — Part 1 (Beginner)", desc:"File permissions, process management, system calls, boot sequence — separar juniors de seniors.", tags:["interview","linux","career"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/linux-interview-question-part-1-21ed06c5d72" },
      { id:"cr3", title:"Linux Interview Questions — Part 2 (Intermediate)", desc:"Networking, performance analysis, memory management, disk I/O, troubleshooting scenarios.", tags:["interview","linux","career"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/linux-interview-question-part-2-9d5c8b13d727" },
      { id:"cr4", title:"Linux Interview Questions — Part 3 (Advanced)", desc:"Kernel internals, system tuning, security hardening, high-availability patterns.", tags:["interview","linux","career"], url:"https://freedium-mirror.cfd/https://blog.devops.dev/linux-network-and-artificial-intelligence-interview-question-part-3-46c4feee7401" },
      { id:"cr5", title:"Real-World Kubernetes Interview Questions", desc:"Perguntas de entrevistas reais: arquitetura, networking, storage, security, troubleshooting.", tags:["interview","kubernetes","career"], url:"https://freedium-mirror.cfd/https://blog.stackademic.com/real-world-kubernetes-interview-questions-b1b7ff0c69f6" },
      { id:"cr6", title:"Terraform Interview Guide (Beginner to Architect)", desc:"De conceitos basicos a state management avancado, modulos, Sentinel policies e multi-cloud.", tags:["interview","terraform","career"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/terraform-interview-guide-beginner-architect-level-f1446e15f064" },
      { id:"cr7", title:"Linux Admin vs DevOps vs SRE — What's the Difference?", desc:"O que cada role faz day-to-day, responsabilidades, salary ranges, career progression.", tags:["career","sre","fundamentals"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/linux-administration-vs-devops-vs-sre-2025-guide-6a51f2bc3015" },
      { id:"cr8", title:"200+ Linux Technical Interview Questions (2026)", desc:"O question bank mais abrangente: organizado por topico, com respostas detalhadas e command examples.", tags:["interview","linux","career","reference"], url:"https://freedium-mirror.cfd/https://medium.com/write-a-catalyst/200-linux-technical-interview-questions-answers-2025-edition-b93590d4c3ed" },
    ]
  },
];


export default function StudyPlanner() {
  const [activePhase, setActivePhase] = useState("p1");
  const [completed, setCompleted] = useState({});
  const [expandedWeeks, setExpandedWeeks] = useState({ m1w1: true });
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("planner");
  const [tsSearch, setTsSearch] = useState("");
  const [tsCategory, setTsCategory] = useState("all");

  useEffect(() => {
    (async () => {
        try { const c = localStorage.getItem("sreplanner-completed"); if (c) setCompleted(JSON.parse(c)); } catch {}
        try { const e = localStorage.getItem("sreplanner-expanded");  if (e) setExpandedWeeks(JSON.parse(e)); } catch {}
      setLoaded(true);
    })();
  }, []);

  const saveCompleted = (next) => { try { localStorage.setItem("sreplanner-completed", JSON.stringify(next)); } catch {} };
  const saveExpanded  = (next) => { try { localStorage.setItem("sreplanner-expanded",  JSON.stringify(next)); } catch {} };

  const toggleItem = (id) => { const n = {...completed, [id]: !completed[id]}; setCompleted(n); saveCompleted(n); };
  const toggleWeek = (id) => { const n = {...expandedWeeks, [id]: !expandedWeeks[id]}; setExpandedWeeks(n); saveExpanded(n); };

  const expandAll = () => {
    const phase = PHASES.find(p => p.id === activePhase);
    const n = {...expandedWeeks};
    phase.months.forEach(m => m.weeks.forEach(wk => { n[wk.id] = true; }));
    setExpandedWeeks(n); saveExpanded(n);
  };
  const collapseAll = () => {
    const phase = PHASES.find(p => p.id === activePhase);
    const n = {...expandedWeeks};
    phase.months.forEach(m => m.weeks.forEach(wk => { n[wk.id] = false; }));
    setExpandedWeeks(n); saveExpanded(n);
  };

  const allItems = PHASES.flatMap(p => p.months.flatMap(m => m.weeks.flatMap(wk => DAYS.flatMap(d => wk.days[d.key] || []))));
  const totalItems = allItems.length;
  const completedCount = allItems.filter(i => completed[i.id]).length;
  const overallPct = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  const getPhaseStats = (phase) => {
    const items = phase.months.flatMap(m => m.weeks.flatMap(wk => DAYS.flatMap(d => wk.days[d.key] || [])));
    const done = items.filter(i => completed[i.id]).length;
    return { done, total: items.length, pct: items.length > 0 ? Math.round((done / items.length) * 100) : 0 };
  };

  const getWeekStats = (week) => {
    const items = DAYS.flatMap(d => week.days[d.key] || []);
    const done = items.filter(i => completed[i.id]).length;
    return { done, total: items.length, pct: items.length > 0 ? Math.round((done / items.length) * 100) : 0 };
  };

  const currentPhase = PHASES.find(p => p.id === activePhase);
  const phaseColor = PC[activePhase];

  if (!loaded) return (
    <div style={{ background: "#0c0c0e", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", fontFamily: "monospace" }}>
      Carregando planner...
    </div>
  );

  return (
    <div style={{ fontFamily: "'IBM Plex Mono', 'Fira Code', monospace", background: "#0c0c0e", minHeight: "100vh", color: "#e2e8f0", display: "flex", height: "100vh", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Sora:wght@600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: #2a2a32; border-radius: 3px; }
        .phase-btn:hover { background: rgba(255,255,255,0.04) !important; }
        .week-hdr:hover { background: #1a1a22 !important; }
        .item-row:hover { background: rgba(255,255,255,0.03) !important; }
        .link-btn:hover { opacity: 1 !important; }
        .ctrl-btn:hover { background: #1e1e28 !important; }
      `}</style>

      {/* Sidebar */}
      <div style={{ width: 220, minWidth: 220, background: "#0d0d11", borderRight: "1px solid #1a1a22", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: "18px 14px 14px", borderBottom: "1px solid #1a1a22" }}>
          <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: "#f59e0b", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>Platform Eng.</div>
          <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 600, color: "#475569", letterSpacing: "0.06em", marginBottom: 14 }}>Roadmap 3 Anos · 144 Semanas</div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#475569", marginBottom: 5 }}>
            <span>Progresso total</span>
            <span style={{ color: "#f59e0b", fontWeight: 600 }}>{overallPct}%</span>
          </div>
          <div style={{ height: 3, background: "#1a1a22", borderRadius: 2 }}>
            <div style={{ height: "100%", background: "linear-gradient(90deg,#f59e0b,#fbbf24)", borderRadius: 2, width: `${overallPct}%`, transition: "width 0.5s ease" }} />
          </div>
          <div style={{ fontSize: 10, color: "#334155", marginTop: 5 }}>{completedCount} / {totalItems} itens</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", paddingTop: 4 }}>
          {PHASES.map(phase => {
            const stats = getPhaseStats(phase);
            const isActive = phase.id === activePhase;
            const color = PC[phase.id];
            return (
              <div key={phase.id} className="phase-btn"
                onClick={() => setActivePhase(phase.id)}
                style={{ padding: "9px 14px", borderLeft: `3px solid ${isActive ? color : "transparent"}`, background: isActive ? `${color}12` : "transparent", cursor: "pointer", transition: "all 0.2s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: isActive ? color : "#64748b" }}>FASE {phase.num}</span>
                  <span style={{ fontSize: 10, color: stats.pct === 100 ? "#22c55e" : "#475569" }}>{stats.pct}%</span>
                </div>
                <div style={{ fontSize: 12, color: isActive ? "#f1f5f9" : "#64748b", fontWeight: 500, marginBottom: 2 }}>{phase.title}</div>
                <div style={{ fontSize: 10, color: "#334155", marginBottom: 6 }}>{phase.period}</div>
                <div style={{ height: 2, background: "#1a1a22", borderRadius: 1 }}>
                  <div style={{ height: "100%", borderRadius: 1, background: color, width: `${stats.pct}%`, opacity: isActive ? 1 : 0.4, transition: "width 0.4s ease" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* ── Tab switcher ── */}
        <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #1a1a22", background: "#0a0a0e", flexShrink: 0, padding: "0 20px" }}>
          {[
            { id: "planner",        label: "📚 Planner",         subtitle: "144 semanas" },
            { id: "troubleshooting",label: "🔧 Troubleshooting", subtitle: "referência rápida" },
          ].map(tab => (
            <button key={tab.id} onClick={() => setView(tab.id)} style={{
              padding: "10px 18px", background: "transparent", border: "none", borderBottom: `2px solid ${view === tab.id ? "#f59e0b" : "transparent"}`,
              color: view === tab.id ? "#f1f5f9" : "#475569", cursor: "pointer", fontSize: 12, fontWeight: view === tab.id ? 600 : 400,
              fontFamily: "inherit", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6,
            }}>
              {tab.label}
              <span style={{ fontSize: 9, color: view === tab.id ? "#64748b" : "#2a2a38", fontWeight: 400 }}>{tab.subtitle}</span>
            </button>
          ))}
        </div>

        {view === "planner" ? (<>
        {/* ── Planner header ── */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #1a1a22", background: "#0f0f14", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ padding: "2px 8px", background: `${phaseColor}18`, border: `1px solid ${phaseColor}35`, borderRadius: 4, fontSize: 10, color: phaseColor, fontWeight: 600 }}>FASE {currentPhase.num} · {currentPhase.period}</span>
                <span style={{ padding: "2px 8px", background: "#141418", border: "1px solid #222228", borderRadius: 4, fontSize: 10, color: "#64748b" }}>{currentPhase.cert}</span>
              </div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{currentPhase.title}</div>
              <div style={{ fontSize: 11, color: "#475569", maxWidth: 580 }}>{currentPhase.goal}</div>
            </div>
            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
              <button className="ctrl-btn" onClick={expandAll} style={{ padding: "5px 12px", fontSize: 10, color: "#94a3b8", background: "#141418", border: "1px solid #222228", borderRadius: 5, cursor: "pointer" }}>↓ Expandir tudo</button>
              <button className="ctrl-btn" onClick={collapseAll} style={{ padding: "5px 12px", fontSize: 10, color: "#94a3b8", background: "#141418", border: "1px solid #222228", borderRadius: 5, cursor: "pointer" }}>↑ Recolher tudo</button>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
            {DAYS.map(d => (
              <div key={d.key} style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 8px", background: "#0d0d11", border: "1px solid #1a1a22", borderRadius: 20, fontSize: 10 }}>
                <span>{d.icon}</span><span style={{ color: d.color, fontWeight: 500 }}>{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Planner content ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
          {currentPhase.months.map((month) => (
            <div key={month.title} style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#334155", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10, paddingBottom: 8, borderBottom: "1px solid #141418" }}>
                ◆ {month.title}
              </div>
              {month.weeks.map((week) => {
                const stats = getWeekStats(week);
                const isExpanded = expandedWeeks[week.id];
                const allDone = stats.total > 0 && stats.done === stats.total;
                return (
                  <div key={week.id} style={{ marginBottom: 6, border: `1px solid ${isExpanded ? "#1e1e2a" : "#161620"}`, borderRadius: 8, overflow: "hidden", background: "#0f0f14" }}>
                    <div className="week-hdr" onClick={() => toggleWeek(week.id)}
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", cursor: "pointer", background: isExpanded ? "#141418" : "transparent", transition: "background 0.15s" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 26, height: 26, borderRadius: 5, background: allDone ? "#16532d" : isExpanded ? `${phaseColor}1a` : "#161620", border: `1px solid ${allDone ? "#22c55e40" : isExpanded ? `${phaseColor}40` : "#1e1e28"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: allDone ? "#22c55e" : isExpanded ? phaseColor : "#475569" }}>
                          {allDone ? "✓" : week.num}
                        </div>
                        <div>
                          <span style={{ fontSize: 12, color: isExpanded ? "#e2e8f0" : "#64748b", fontWeight: 500 }}>Semana {week.num}</span>
                          {stats.done > 0 && <span style={{ fontSize: 10, color: allDone ? "#22c55e" : "#64748b", marginLeft: 8 }}>{stats.done}/{stats.total}</span>}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 60, height: 2, background: "#1a1a22", borderRadius: 1 }}>
                          <div style={{ height: "100%", borderRadius: 1, background: allDone ? "#22c55e" : phaseColor, width: `${stats.pct}%`, transition: "width 0.3s ease" }} />
                        </div>
                        <span style={{ fontSize: 10, color: "#2a2a38" }}>{isExpanded ? "▲" : "▼"}</span>
                      </div>
                    </div>
                    {isExpanded && (
                      <div style={{ padding: "0 12px 12px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
                        {DAYS.map(day => {
                          const items = week.days[day.key] || [];
                          const dayDone = items.filter(i => completed[i.id]).length;
                          return (
                            <div key={day.key} style={{ background: "#0b0b10", border: "1px solid #161620", borderTop: `2px solid ${day.color}25`, borderRadius: 6, padding: "10px 8px" }}>
                              <div style={{ fontSize: 10, fontWeight: 600, color: day.color, marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <span>{day.icon} {day.label}</span>
                                {items.length > 0 && <span style={{ opacity: 0.5 }}>{dayDone}/{items.length}</span>}
                              </div>
                              {items.map(item => {
                                const done = completed[item.id];
                                return (
                                  <div key={item.id} className="item-row"
                                    style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 5, padding: "5px 5px", borderRadius: 5, background: done ? "#0a1f13" : "transparent", border: `1px solid ${done ? "#16532d30" : "transparent"}`, cursor: "pointer", transition: "background 0.15s" }}
                                    onClick={() => toggleItem(item.id)}>
                                    <div style={{ width: 13, height: 13, borderRadius: 3, border: `1.5px solid ${done ? "#22c55e" : "#2a2a38"}`, background: done ? "#22c55e" : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}>
                                      {done && <span style={{ fontSize: 8, color: "#000", fontWeight: 700 }}>✓</span>}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                      <div style={{ fontSize: 10, color: done ? "#334155" : "#8892a4", lineHeight: 1.5, textDecoration: done ? "line-through" : "none", transition: "all 0.15s" }}>{item.text}</div>
                                      {item.url && (
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="link-btn"
                                          style={{ fontSize: 9, color: day.color, opacity: 0.55, textDecoration: "none", marginTop: 2, display: "inline-block", transition: "opacity 0.15s" }}>
                                          → recurso
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        </>) : (<>

        {/* ── Troubleshooting header ── */}
        <div style={{ padding: "14px 20px", borderBottom: "1px solid #1a1a22", background: "#0f0f14", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <input
              value={tsSearch} onChange={e => setTsSearch(e.target.value)}
              placeholder="🔍  Pesquisar recurso, tag ou tecnologia..."
              style={{ flex: 1, minWidth: 200, padding: "7px 12px", background: "#141418", border: "1px solid #222228", borderRadius: 6, color: "#e2e8f0", fontSize: 11, fontFamily: "inherit", outline: "none" }}
            />
            <div style={{ fontSize: 10, color: "#334155", whiteSpace: "nowrap" }}>
              {(() => {
                const q = tsSearch.toLowerCase();
                const total = TROUBLESHOOTING.flatMap(c => c.resources).filter(r =>
                  tsCategory === "all" || r.tags.some(t => t === tsCategory) || TROUBLESHOOTING.find(c => c.id === tsCategory)?.resources.includes(r)
                ).filter(r => !q || r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q) || r.tags.some(t => t.includes(q))).length;
                return `${total} recursos`;
              })()}
            </div>
          </div>
          <div style={{ display: "flex", gap: 5, marginTop: 10, flexWrap: "wrap" }}>
            {[{ id: "all", label: "Todos", icon: "⚡" }, ...TROUBLESHOOTING.map(c => ({ id: c.id, label: c.title, icon: c.icon, color: c.color }))].map(cat => (
              <button key={cat.id} onClick={() => setTsCategory(cat.id)} style={{
                padding: "3px 10px", fontSize: 10, fontFamily: "inherit", cursor: "pointer", borderRadius: 20,
                background: tsCategory === cat.id ? (cat.color ? `${cat.color}20` : "#f59e0b20") : "#141418",
                border: `1px solid ${tsCategory === cat.id ? (cat.color || "#f59e0b") + "50" : "#222228"}`,
                color: tsCategory === cat.id ? (cat.color || "#f59e0b") : "#475569",
                transition: "all 0.15s",
              }}>
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Troubleshooting content ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
          {(() => {
            const q = tsSearch.toLowerCase();
            const cats = tsCategory === "all" ? TROUBLESHOOTING : TROUBLESHOOTING.filter(c => c.id === tsCategory);
            return cats.map(cat => {
              const filtered = cat.resources.filter(r =>
                !q || r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q) || r.tags.some(t => t.includes(q))
              );
              if (!filtered.length) return null;
              return (
                <div key={cat.id} style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#334155", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid #141418", display: "flex", alignItems: "center", gap: 8 }}>
                    <span>{cat.icon}</span>
                    <span style={{ color: cat.color }}>{cat.title}</span>
                    <span style={{ color: "#1e1e28" }}>· {filtered.length} recursos</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 8 }}>
                    {filtered.map(r => (
                      <a key={r.id} href={r.url} target="_blank" rel="noopener noreferrer"
                        style={{ display: "block", textDecoration: "none", padding: "12px 14px", background: "#0f0f14", border: "1px solid #1a1a22", borderLeft: `3px solid ${cat.color}`, borderRadius: 7, transition: "all 0.15s", cursor: "pointer" }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#141418"; e.currentTarget.style.borderColor = cat.color + "60"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "#0f0f14"; e.currentTarget.style.borderColor = "#1a1a22"; e.currentTarget.style.borderLeftColor = cat.color; }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "#e2e8f0", marginBottom: 5, lineHeight: 1.4 }}>{r.title}</div>
                        <div style={{ fontSize: 10, color: "#475569", lineHeight: 1.5, marginBottom: 8 }}>{r.desc}</div>
                        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                          {r.tags.map(tag => (
                            <span key={tag} onClick={e => { e.preventDefault(); setTsSearch(tag); }} style={{ padding: "1px 7px", background: `${cat.color}12`, border: `1px solid ${cat.color}25`, borderRadius: 10, fontSize: 9, color: cat.color, cursor: "pointer" }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            });
          })()}
        </div>
        </>)}
      </div>
    </div>
  );
}
