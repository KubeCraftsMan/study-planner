import { useState, useEffect } from "react";

const DAYS = [
  { key:"seg", label:"Segunda", icon:"🧠", tag:"System Design",    color:"#a78bfa" },
  { key:"ter", label:"Terça",   icon:"🔧", tag:"Técnico",          color:"#fbbf24" },
  { key:"qua", label:"Quarta",  icon:"☁️", tag:"Cloud + Security", color:"#60a5fa" },
  { key:"qui", label:"Quinta",  icon:"📊", tag:"SRE",              color:"#34d399" },
  { key:"sex", label:"Sexta",   icon:"✍️", tag:"Liderança",        color:"#f472b6" },
];
const PC = { p1:"#f59e0b",p2:"#10b981",p3:"#3b82f6",p4:"#8b5cf6",p5:"#ef4444",p6:"#06b6d4",p7:"#f472b6" };
const w = (id,num,seg,ter,qua,qui,sex) => ({
  id, num,
  days:{
    seg:seg.map((t,i)=>({id:`${id}-s${i}`,text:t[0],url:t[1]||""})),
    ter:ter.map((t,i)=>({id:`${id}-t${i}`,text:t[0],url:t[1]||""})),
    qua:qua.map((t,i)=>({id:`${id}-q${i}`,text:t[0],url:t[1]||""})),
    qui:qui.map((t,i)=>({id:`${id}-i${i}`,text:t[0],url:t[1]||""})),
    sex:sex.map((t,i)=>({id:`${id}-x${i}`,text:t[0],url:t[1]||""})),
  }
});
// Notion base URL shorthand
const N = "https://www.notion.so/";
const PHASES = [
  // ── FASE 1 ── CKA (Meses 1–4, Semanas 1–16) ──────────────────────────────
  {
    id:"p1",num:1,title:"Fundação",period:"Meses 1–4",cert:"🎓 CKA — Meta: Semana 16",
    goal:"CKA no bolso. Base filosófica de SRE. System Design como linguagem.",
    months:[
      { title:"Mês 1", weeks:[
        w("p1w1",1,
          [["CAP Theorem, consistência eventual, trade-offs de sistemas distribuídos","https://github.com/donnemartin/system-design-primer"]],
          [["Namespaces e Resource Quotas",N+"Namespaces-e-Resource-Quotas-2e7dabadc8df817caf09d98079b797d3"],
           ["Pods, Deployments, Services, ConfigMaps, Secrets",N+"Pods-Deployments-Services-ConfigMaps-Secrets-2e7dabadc8df811982b9d79c9bf68df3"]],
          [["Well-Architected: pilar de Segurança completo","https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html"]],
          [["SRE Book cap. 1–2: O que é SRE, Embracing Risk","https://sre.google/sre-book/embracing-risk/"],
           ["Leitura: Google SRE Book (capítulos relevantes)",N+"Leitura-Google-SRE-Book-cap-tulos-relevantes-2e7dabadc8df81c59c1ac5cb323cb64f"]],
          [["Team Topologies cap. 1–2: estrutura de time impacta arquitetura","https://teamtopologies.com/book"],
           ["Leitura: Team Topologies (livro)",N+"Leitura-Team-Topologies-livro-2e7dabadc8df81dc888ad9dc6082643f"]]),
        w("p1w2",2,
          [["Padrões de Load Balancing, Caching (L1/L2/CDN), estratégias de invalidação","https://github.com/donnemartin/system-design-primer"]],
          [["Prática: Deploy de aplicação multi-tier",N+"Pr-tica-Deploy-de-aplica-o-multi-tier-2e7dabadc8df81ca969de5a8c71ff857"],
           ["StatefulSets e Headless Services",N+"StatefulSets-e-Headless-Services-2e7dabadc8df8146b9cae261366f8b7a"]],
          [["IAM avançado: roles, policies, trust policies, cross-account","https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"]],
          [["SRE Book cap. 3–4: SLOs, SLIs, SLAs — como definir o que importa","https://sre.google/sre-book/service-level-objectives/"],
           ["SLIs, SLOs, SLAs e Error Budgets",N+"SLIs-SLOs-SLAs-e-Error-Budgets-2e7dabadc8df811e9808c956e5981637"]],
          [["Team Topologies cap. 3–4: Stream-aligned, Platform, Enabling teams","https://teamtopologies.com/book"],
           ["ADRs (Architecture Decision Records)",N+"ADRs-Architecture-Decision-Records-2e7dabadc8df8108894ff993a328b377"]]),
        w("p1w3",3,
          [["Padrões de Disponibilidade: circuit breaker, retry, bulkhead, timeout","https://azure.microsoft.com/en-us/resources/designing-distributed-systems/"],
           ["CAP theorem e trade-offs",N+"CAP-theorem-e-trade-offs-2e7dabadc8df8138adcaf6f3ff5cfd3a"]],
          [["PersistentVolumes, PersistentVolumeClaims, StorageClasses",N+"PersistentVolumes-PersistentVolumeClaims-StorageClasses-2e7dabadc8df81f7b367e753f3fc992a"],
           ["Prática: Deploy de banco de dados stateful",N+"Pr-tica-Deploy-de-banco-de-dados-stateful-2e7dabadc8df8119a628e936ac6adfb1"]],
          [["VPC deep dive: subnets, route tables, security groups, NACLs","https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"]],
          [["SRE Book cap. 5: Eliminating Toil — identifique toil no seu trabalho","https://sre.google/sre-book/eliminating-toil/"],
           ["Observability vs Monitoring",N+"Observability-vs-Monitoring-2e7dabadc8df81df8230eb0f22a7ba39"]],
          [["O que é um ADR + escreva o primeiro sobre uma decisão real","https://github.com/joelparkerhenderson/architecture-decision-record"],
           ["Prática: Escrever ADR para decisão real",N+"Pr-tica-Escrever-ADR-para-decis-o-real-2e7dabadc8df812589f1ed7f2d0214c4"]]),
        w("p1w4",4,
          [["Padrão Sidecar e Ambassador no contexto real (Istio, Vault Agent)","https://azure.microsoft.com/en-us/resources/designing-distributed-systems/"]],
          [["Ingress Controllers (NGINX, Traefik)",N+"Ingress-Controllers-NGINX-Traefik-2e7dabadc8df81438f27fdd662617ad8"],
           ["Network Policies em profundidade",N+"Network-Policies-em-profundidade-2e7dabadc8df8140855be3b1d5f73d9a"]],
          [["Vault production hardening: unsealing, audit, policies, leases","https://developer.hashicorp.com/vault/tutorials/operations/production-hardening"]],
          [["SRE Book cap. 6: Monitoring Distributed Systems — 4 golden signals","https://sre.google/sre-book/monitoring-distributed-systems/"],
           ["Pilares: Logs, Metrics, Traces",N+"Pilares-Logs-Metrics-Traces-2e7dabadc8df81c69918dc9ef4f47f3a"]],
          [["Team Topologies cap. 5–6: Interaction modes, Team cognitive load","https://teamtopologies.com/book"],
           ["RFC process",N+"RFC-process-2e7dabadc8df8145a1bace7e4bed84c2"]]),
      ]},
      { title:"Mês 2", weeks:[
        w("p1w5",5,
          [["Sharding, Consistent Hashing, particionamento de dados","https://github.com/donnemartin/system-design-primer"],
           ["Scalability patterns",N+"Scalability-patterns-2e7dabadc8df8133b438ec2347fc9410"]],
          [["Prática: Implementar políticas de rede isolando namespaces",N+"Pr-tica-Implementar-pol-ticas-de-rede-isolando-namespaces-2e7dabadc8df81b389e1c9d5eab7bf11"],
           ["Service Mesh introdução (conceitos)",N+"Service-Mesh-introdu-o-conceitos-2e7dabadc8df81cfa763e827a2a7867d"]],
          [["EKS deep dive: node groups, managed nodes, Fargate, IRSA","https://aws.github.io/aws-eks-best-practices/"],
           ["EKS architecture e networking",N+"EKS-architecture-e-networking-2e7dabadc8df81adbb6bc5be988f748b"]],
          [["SRE Book cap. 7–8: Evolution of Automation, Release Engineering","https://sre.google/sre-book/table-of-contents/"],
           ["Reliability e availability",N+"Reliability-e-availability-2e7dabadc8df813083ccfad00c5e74a2"]],
          [["An Elegant Puzzle cap. 1–2: Organizations e Sizing teams","https://lethain.com/elegant-puzzle/"],
           ["Storytelling técnico",N+"Storytelling-t-cnico-2e7dabadc8df81618605d72b067f1fe2"]]),
        w("p1w6",6,
          [["Event-driven architecture: Kafka patterns, idempotência, ordering","https://azure.microsoft.com/en-us/resources/designing-distributed-systems/"]],
          [["Pod Security Standards/Admission",N+"Pod-Security-Standards-Admission-2e7dabadc8df81269d0fcf361afc8f19"],
           ["RBAC: Roles, ClusterRoles, ServiceAccounts",N+"RBAC-Roles-ClusterRoles-ServiceAccounts-2e7dabadc8df8114b131edbf095d6a5b"]],
          [["CNCF Security Whitepaper — visão geral de segurança cloud-native","https://github.com/cncf/tag-security"]],
          [["SRE Book cap. 13–14: Emergency Response, Managing Incidents","https://sre.google/sre-book/managing-incidents/"],
           ["Postmortems blameless",N+"Postmortems-blameless-2e7dabadc8df8127942afb3e566b2d33"]],
          [["An Elegant Puzzle cap. 3: Tools to manage technical quality","https://lethain.com/elegant-puzzle/"],
           ["Documentation best practices",N+"Documentation-best-practices-2e7dabadc8df81a980d6f74f00d5a557"]]),
        w("p1w7",7,
          [["Multi-region patterns: active-active vs active-passive, failover","https://aws.amazon.com/architecture/"],
           ["Disaster recovery planning",N+"Disaster-recovery-planning-2e7dabadc8df81dbaf4dd2235fc84808"]],
          [["Prática: Configurar RBAC para múltiplos times",N+"Pr-tica-Configurar-RBAC-para-m-ltiplos-times-2e7dabadc8df81b09ba5d3001203e635"],
           ["Secrets management básico",N+"Secrets-management-b-sico-2e7dabadc8df8171ab45f430e901983a"]],
          [["Pod Security Standards, RBAC no K8s, ServiceAccounts","https://kubernetes.io/docs/concepts/security/"]],
          [["SRE Book cap. 15: Postmortem Culture — escreva um postmortem real","https://sre.google/sre-book/postmortem-culture/"],
           ["Prática: Facilitar postmortem",N+"Pr-tica-Facilitar-postmortem-2e7dabadc8df81349207e5ec2386300b"]],
          [["StaffEng: leia 2 histórias de Staff Engineers — anote padrões comuns","https://staffeng.com/stories/"],
           ["Pair programming efetivo",N+"Pair-programming-efetivo-2e7dabadc8df819799acd15a975cd45b"]]),
        w("p1w8",8,
          [["Exercício: documente a arquitetura do cluster atual — identifique SPOFs",""]],
          [["Logs e eventos do cluster",N+"Logs-e-eventos-do-cluster-2e7dabadc8df81a28211db33a690d107"],
           ["Debugging pods, nodes, networking",N+"Debugging-pods-nodes-networking-2e7dabadc8df814e9480d4da05be9bd4"]],
          [["Terraform avançado: módulos, workspaces, state locking, remote backends","https://developer.hashicorp.com/terraform/docs"]],
          [["SRE Workbook cap. 2: SLOs in Practice — defina SLOs para 1 serviço real","https://sre.google/workbook/implementing-slos/"],
           ["Prática: Desenhar sistema distribuído básico",N+"Pr-tica-Desenhar-sistema-distribu-do-b-sico-2e7dabadc8df81e3bc0fdc92fc7984d6"]],
          [["Output: escreva um RFC de 1 página sobre uma melhoria técnica real","https://lethain.com/rfcs-and-design-documents/"],
           ["Visualização de arquiteturas",N+"Visualiza-o-de-arquiteturas-2e7dabadc8df81c5ac87fdb5367ddcf7"]]),
      ]},
      { title:"Mês 3", weeks:[
        w("p1w9",9,
          [["API Design: REST vs gRPC vs GraphQL — trade-offs reais","https://cloud.google.com/apis/design"],
           ["Multi-tenancy strategies",N+"Multi-tenancy-strategies-2e7dabadc8df816596a4dc9481adafd7"]],
          [["Prática: Simular e resolver falhas comuns",N+"Pr-tica-Simular-e-resolver-falhas-comuns-2e7dabadc8df8133b953f38b2597152e"],
           ["Cluster maintenance (drain, cordon, upgrades)",N+"Cluster-maintenance-drain-cordon-upgrades-2e7dabadc8df81038b24eeb7a6a51339"]],
          [["ArgoCD security: RBAC, SSO, secret management, webhook validation","https://argo-cd.readthedocs.io/en/stable/operator-manual/security/"],
           ["GuardDuty, Security Hub",N+"GuardDuty-Security-Hub-2e7dabadc8df81df9828f199ec33deac"]],
          [["Alerting philosophy: alertar em sintomas vs causas, alerta acionável","https://docs.google.com/document/d/199PqyG3UsyXlwieHaqbGiWVa8eMWi8zzAn0YfcApr8Q"],
           ["Chaos engineering basics",N+"Chaos-engineering-basics-2e7dabadc8df817bb13bd865972dfca2"]],
          [["An Elegant Puzzle cap. 4–5: Migrations e Staying aligned with authority","https://lethain.com/elegant-puzzle/"],
           ["Como dar feedback construtivo",N+"Como-dar-feedback-construtivo-2e7dabadc8df81ed8c3ad0a2b9e4f1c6"]]),
        w("p1w10",10,
          [["Data pipelines: batch vs streaming, backpressure, exactly-once delivery","https://github.com/donnemartin/system-design-primer"],
           ["Data replication strategies",N+"Data-replication-strategies-2e7dabadc8df816eb874f08840905ab5"]],
          [["Cluster upgrades com kubeadm",N+"Cluster-upgrades-com-kubeadm-2e7dabadc8df815bbc2cd0733ffd12fc"],
           ["ETCD backup e restore",N+"ETCD-backup-e-restore-2e7dabadc8df81da98abc18f01169b44"]],
          [["SOPS + age/PGP: boas práticas de gestão de secrets em GitOps","https://github.com/getsops/sops"],
           ["AWS Organizations e SCPs",N+"AWS-Organizations-e-SCPs-2e7dabadc8df81508e8cf822f6ad5f5f"]],
          [["Observability Engineering cap. 1–3: de métricas para eventos estruturados","https://www.oreilly.com/library/view/observability-engineering/9781492076438/"],
           ["PromQL básico e intermediário",N+"PromQL-b-sico-e-intermedi-rio-2e7dabadc8df81758021fddc773c5b45"]],
          [["Staff archetypes: qual é o seu? (Tech Lead, Architect, Solver, Right Hand)","https://staffeng.com/guides/staff-archetypes/"],
           ["Code review como ensino",N+"Code-review-como-ensino-2e7dabadc8df816fa950ef016aaee9c3"]]),
        w("p1w11",11,
          [["Service Mesh deep: Istio traffic management, mTLS, observability","https://istio.io/latest/docs/concepts/"]],
          [["Prática: Backup/restore completo, upgrade de cluster",N+"Pr-tica-Backup-restore-completo-upgrade-de-cluster-2e7dabadc8df81958a4bdbdef23485d2"],
           ["Certificados e componentes do control plane",N+"Certificados-e-componentes-do-control-plane-2e7dabadc8df811b88a4fdecd812b3ba"]],
          [["AWS Security Hub, GuardDuty, Config Rules — detecção e compliance","https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html"],
           ["IAM Identity Center",N+"IAM-Identity-Center-2e7dabadc8df817b871fdbf345f9434f"]],
          [["Dynatrace DQL avançado — baseado no uso atual com asg_metrics Lambda","https://docs.dynatrace.com/docs/platform/grail/dynatrace-query-language"],
           ["Arquitetura e data model Prometheus",N+"Arquitetura-e-data-model-Prometheus-2e7dabadc8df81d39689f6a5ba5ca231"]],
          [["Como dar feedback técnico em code review que ensina, não apenas corrige","https://newsletter.pragmaticengineer.com/p/code-review"],
           ["Prática: Mentorar colega em tópico específico",N+"Pr-tica-Mentorar-colega-em-t-pico-espec-fico-2e7dabadc8df81c7afa4d7cd1b5cca0e"]]),
        w("p1w12",12,
          [["Exercício: redesenhe o fluxo de auth do Vault K8s Auth — onde estão os SPOFs?",""]],
          [["Revisão de pontos fracos",N+"Revis-o-de-pontos-fracos-2e7dabadc8df814a91d3c4ace27d22e0"]],
          [["Supply chain security: SLSA, Sigstore, container image signing","https://slsa.dev/"]],
          [["Exercício: defina SLOs para o Vault cluster — quais SLIs fazem sentido?",""],
           ["ServiceMonitors e PodMonitors",N+"ServiceMonitors-e-PodMonitors-2e7dabadc8df8107b6c0d3f99a162e9e"]],
          [["Output: ADR real para decisão técnica do mês — compartilhe internamente","https://github.com/joelparkerhenderson/architecture-decision-record"],
           ["Technical proposals",N+"Technical-proposals-2e7dabadc8df811fa720c19e855ac781"]]),
      ]},
      { title:"Mês 4 — CKA Sprint", weeks:[
        w("p1w13",13,
          [["Revisitar System Design Primer — áreas fracas identificadas","https://github.com/donnemartin/system-design-primer"]],
          [["Killer.sh mock exams — 1ª rodada",N+"Killer-sh-mock-exams-2e7dabadc8df817bafabd1f3618abc51"]],
          [["AWS Well-Architected: Reliability Pillar completo","https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"],
           ["Prática: Security baseline completo",N+"Pr-tica-Security-baseline-completo-2e7dabadc8df81338b31d3b0842a7f30"]],
          [["SRE Workbook cap. 3–4: Error Budgets na prática","https://sre.google/workbook/error-budget-policy/"],
           ["Recording rules e alerting rules",N+"Recording-rules-e-alerting-rules-2e7dabadc8df81a69416cc225a13e952"]],
          [["Reler e melhorar os ADRs e RFC escritos nas semanas anteriores",""],
           ["Estimativas técnicas",N+"Estimativas-t-cnicas-2e7dabadc8df81a38b2ed92ba5fafb72"]]),
        w("p1w14",14,
          [["Revisão de pontos fracos em System Design","https://github.com/donnemartin/system-design-primer"]],
          [["Revisão de pontos fracos identificados no mock",N+"Revis-o-de-pontos-fracos-2e7dabadc8df814a91d3c4ace27d22e0"]],
          [["Revisar: Vault, SOPS, ArgoCD security configs do ambiente real",""],
           ["Transit Gateway e VPC patterns",N+"Transit-Gateway-e-VPC-patterns-2e7dabadc8df8175930df53b92efe5fe"]],
          [["Postmortem formal de um incidente real do trabalho","https://sre.google/sre-book/postmortem-culture/"],
           ["Prática: Setup Prometheus stack no K8s",N+"Pr-tica-Setup-Prometheus-stack-no-K8s-2e7dabadc8df8193929cc835dd9425d6"]],
          [["Will Larson blog: leia 2 posts sobre Staff Engineering","https://lethain.com/"],
           ["Risk assessment",N+"Risk-assessment-2e7dabadc8df816fb8c3db7329f57ae3"]]),
        w("p1w15",15,
          [["Revisão final de System Design — prepare 3 designs do zero","https://github.com/donnemartin/system-design-primer"]],
          [["Killer.sh mock exams — 2ª rodada",N+"Killer-sh-mock-exams-2e7dabadc8df817bafabd1f3618abc51"]],
          [["Revisar EKS best practices aplicadas ao ambiente atual","https://aws.github.io/aws-eks-best-practices/"],
           ["PrivateLink para serviços",N+"PrivateLink-para-servi-os-2e7dabadc8df813b9ff8ff3498bf526c"]],
          [["Criar dashboard de SLOs para 1 serviço real que você opera",""],
           ["Prática: Alertas customizados e dashboards",N+"Pr-tica-Alertas-customizados-e-dashboards-2e7dabadc8df8151a78cd31931b3f35f"]],
          [["Prepare apresentação de uma decisão técnica para o time",""],
           ["Prática: Preparar talk de 15 min",N+"Pr-tica-Preparar-talk-de-15-min-2e7dabadc8df813c945bcf2ab6d813b8"]]),
        w("p1w16",16,
          [["Descanso mental — revisão leve de conceitos-chave",""]],
          [["🏆 REALIZAR EXAME CKA",N+"REALIZAR-EXAME-CKA-2e7dabadc8df811b9b7bc1a96512a014"]],
          [["Revisão pós-exame: lacunas identificadas",""]],
          [["Revisão do roadmap — o que mudou, o que ajustar",""]],
          [["Retrospectiva da Fase 1 — escreva 3 aprendizados principais",""]]),
      ]},
    ]
  },
  // ── FASE 2 ── GitOps/ArgoCD (Meses 5–6, Semanas 17–24) ───────────────────
  {
    id:"p2",num:2,title:"Consolidação",period:"Meses 5–6",cert:"→ CKAD prep iniciado",
    goal:"CKA conquistado. GitOps avançado. Ampliar visão de Staff. Ser referência técnica visível.",
    months:[
      { title:"Mês 5", weeks:[
        w("p2w1",17,
          [["Software Architecture: The Hard Parts cap. 1–2: decomposição e acoplamento","https://www.oreilly.com/library/view/software-architecture-the/9781492086888/"]],
          [["Princípios GitOps (declarativo, versionado, automatizado)",N+"Princ-pios-GitOps-declarativo-versionado-automatizado-2e7dabadc8df81c386d7ecb529685ea3"],
           ["Comparação: Push vs Pull-based deployments",N+"Compara-o-Push-vs-Pull-based-deployments-2e7dabadc8df81488e29d4e67731c639"]],
          [["EKS advanced: Karpenter, cluster autoscaler, spot instances","https://aws.github.io/aws-eks-best-practices/"],
           ["EKS + Karpenter",N+"EKS-Karpenter-2e7dabadc8df812f8cc0d0ee2d688614"]],
          [["Observability Engineering cap. 4–5: instrumentação e structured events","https://www.oreilly.com/library/view/observability-engineering/9781492076438/"],
           ["Dashboard design best practices",N+"Dashboard-design-best-practices-2e7dabadc8df81468593e7915b897a94"]],
          [["The Staff Engineer's Path cap. 1–2: o que Staff significa","https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/"],
           ["O que é uma Internal Developer Platform",N+"O-que-uma-Internal-Developer-Platform-2e7dabadc8df81e1bc73ec53fff61f2a"]]),
        w("p2w2",18,
          [["Software Architecture: The Hard Parts cap. 3–4: granularidade e contratos","https://www.oreilly.com/library/view/software-architecture-the/9781492086888/"]],
          [["Prática: Setup inicial ArgoCD em cluster local",N+"Pr-tica-Setup-inicial-ArgoCD-em-cluster-local-2e7dabadc8df81ccb155e303882f1ec9"],
           ["Sync policies e health checks",N+"Sync-policies-e-health-checks-2e7dabadc8df81a38f3ee424b9226739"]],
          [["FinOps básico: right-sizing, Reserved vs Spot, Cost Explorer","https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html"],
           ["Cloud cost optimization",N+"Cloud-cost-optimization-2e7dabadc8df81b39d86ee9110ba88c8"]],
          [["Observability Engineering cap. 6–7: tracing distribuído, high-cardinality","https://www.oreilly.com/library/view/observability-engineering/9781492076438/"],
           ["Variables, annotations, alerting (Grafana)",N+"Variables-annotations-alerting-2e7dabadc8df81aab792ea07535921d9"]],
          [["The Staff Engineer's Path cap. 3: big-picture thinking","https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/"],
           ["Platform as a Product mindset",N+"Platform-as-a-Product-mindset-2e7dabadc8df814f9740c90b4810fa31"]]),
        w("p2w3",19,
          [["Software Architecture: The Hard Parts cap. 5–6: workflows distribuídos","https://www.oreilly.com/library/view/software-architecture-the/9781492086888/"]],
          [["Applications, Projects, ApplicationSets",N+"Applications-Projects-ApplicationSets-2e7dabadc8df818dba51c894d699c5fd"],
           ["Prática: Deploy multi-ambiente com ArgoCD",N+"Pr-tica-Deploy-multi-ambiente-com-ArgoCD-2e7dabadc8df81119899f7fb7fd7c425"]],
          [["ArgoCD best practices: repo structure, secrets, RBAC produção","https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/"],
           ["SSO e RBAC no ArgoCD",N+"SSO-e-RBAC-no-ArgoCD-2e7dabadc8df812fa455f975d8ed1ab5"]],
          [["OpenTelemetry: spec, SDK, collector, exporters — instrumentar 1 serviço","https://opentelemetry.io/docs/"],
           ["OpenTelemetry overview",N+"OpenTelemetry-overview-2e7dabadc8df817496c6e2670ba95831"]],
          [["The Staff Engineer's Path cap. 4–5: execução e comunicação","https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/"],
           ["Developer Experience (DevEx)",N+"Developer-Experience-DevEx-2e7dabadc8df81198e41e152013d682f"]]),
        w("p2w4",20,
          [["Software Architecture: The Hard Parts cap. 7–8: sagas e transações","https://www.oreilly.com/library/view/software-architecture-the/9781492086888/"]],
          [["Multi-cluster management",N+"Multi-cluster-management-2e7dabadc8df81a8910dd70112ae1451"],
           ["Hooks e Sync Waves",N+"Hooks-e-Sync-Waves-2e7dabadc8df8124bc5ac7579c4e2d0c"]],
          [["Istio avançado: traffic management, canary, circuit breaking","https://istio.io/latest/docs/concepts/traffic-management/"],
           ["Traffic management (Istio)",N+"Traffic-management-2e7dabadc8df81a5a845f29074b55b12"]],
          [["OpenTelemetry: correlacionar traces com métricas e logs","https://opentelemetry.io/docs/"],
           ["Conceitos: spans, traces, context propagation",N+"Conceitos-spans-traces-context-propagation-2e7dabadc8df81689a78eb188dfbcce2"]],
          [["The Staff Engineer's Path cap. 6: impacto de longo prazo","https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/"],
           ["Building consensus",N+"Building-consensus-2e7dabadc8df81139f0bcb5e2a4ec809"]]),
      ]},
      { title:"Mês 6", weeks:[
        w("p2w5",21,
          [["Revisão: qual trade-off arquitetural mais se aplica ao seu ambiente?",""]],
          [["Helm avançado: library charts, sub-charts, values inheritance","https://helm.sh/docs/topics/advanced/"],
           ["Chart development best practices",N+"Chart-development-best-practices-2e7dabadc8df81a1b437e6535bc4ec5a"]],
          [["External Secrets Operator: configuração e boas práticas com Vault","https://external-secrets.io/latest/"],
           ["Vault + External Secrets Operator",N+"Vault-External-Secrets-Operator-2e7dabadc8df8110a2a3e5ee80845d0c"]],
          [["Definir SLOs para 2 serviços adicionais — dashboard unificado",""],
           ["Prática: Dashboard completo para aplicação",N+"Pr-tica-Dashboard-completo-para-aplica-o-2e7dabadc8df81b4a98fe1ee29dc955a"]],
          [["Escreva 1 post técnico interno sobre algo que você resolveu",""],
           ["Escrever blog post técnico",N+"Escrever-blog-post-t-cnico-2e7dabadc8df815b98f0e5210595fc7a"]]),
        w("p2w6",22,
          [["Platform Engineering on Kubernetes cap. 1–4: IDPs e developer workflows","https://www.manning.com/books/platform-engineering-on-kubernetes"]],
          [["OPA/Conftest: escrever policies em Rego, testar, integrar no CI","https://www.conftest.dev/"],
           ["Config Management Plugins (ArgoCD)",N+"Config-Management-Plugins-2e7dabadc8df8145903fd7ce383421f9"]],
          [["Backstage intro: software catalog, plugin architecture, techdocs","https://backstage.io/docs"],
           ["Arquitetura do Backstage",N+"Arquitetura-do-Backstage-2e7dabadc8df813ca137d3cee82b4e0b"]],
          [["Chaos Engineering: princípios, Game Days — proponha 1 internamente","https://principledchaos.org/"]],
          [["Apresente 1 decisão técnica para stakeholders além do squad",""],
           ["Stakeholder management",N+"Stakeholder-management-2e7dabadc8df81cc82b7c2a5c2eb2e3b"]]),
        w("p2w7",23,
          [["Platform Engineering on Kubernetes cap. 5–7: service pipelines, self-service","https://www.manning.com/books/platform-engineering-on-kubernetes"]],
          [["Crossplane introduction",N+"Crossplane-introduction-2e7dabadc8df81de8d89e2326c13db90"],
           ["Compositions e XRDs",N+"Compositions-e-XRDs-2e7dabadc8df8136aec8c48b9be58b2d"]],
          [["RFC formal: Kubechecks + OPA rollout para o squad","https://lethain.com/rfcs-and-design-documents/"],
           ["Prática: Pipeline de promoção entre ambientes",N+"Pr-tica-Pipeline-de-promo-o-entre-ambientes-2e7dabadc8df810abc6ceec83b1da8fe"]],
          [["DORA Metrics: calcule deployment frequency e MTTR do squad","https://dora.dev/research/"],
           ["Arquiteturas: ELK vs Loki vs outros",N+"Arquiteturas-ELK-vs-Loki-vs-outros-2e7dabadc8df810d89f7db1274f93890"]],
          [["Output: documente a plataforma atual como IDP — o que falta?",""],
           ["Prática: Propor mudança técnica significativa",N+"Pr-tica-Propor-mudan-a-t-cnica-significativa-2e7dabadc8df81289cb8ec81cea51a57"]]),
        w("p2w8",24,
          [["Retrospectiva técnica: revise todos os ADRs/RFCs escritos até agora",""]],
          [["Comparação ArgoCD vs Flux",N+"Compara-o-ArgoCD-vs-Flux-2e7dabadc8df816183a9d36503b411a8"],
           ["Arquitetura Flux (Source, Kustomize, Helm controllers)",N+"Arquitetura-Flux-Source-Kustomize-Helm-controllers-2e7dabadc8df811189b0f69119cf15e3"]],
          [["Revisar postura de segurança atual: gaps identificados",""]],
          [["Apresente métricas DORA calculadas para o time com recomendações","https://dora.dev/quickcheck/"],
           ["Loki: arquitetura e LogQL",N+"Loki-arquitetura-e-LogQL-2e7dabadc8df81a98cbae6b8ccbb938a"]],
          [["Retrospectiva da Fase 2 — 3 aprendizados + ajuste no roadmap",""],
           ["Networking com comunidade",N+"Networking-com-comunidade-2e7dabadc8df81f299f1e6b44d8139f7"]]),
      ]},
    ]
  },
  // ── FASE 3 ── CKAD + Observabilidade (Meses 7–10, Semanas 25–40) ──────────
  {
    id:"p3",num:3,title:"Expansão",period:"Meses 7–10",cert:"🎓 CKAD — Meta: Semana 38",
    goal:"CKAD. Observabilidade madura. Impacto fora do squad. Output de conhecimento público.",
    months:[
      { title:"Mês 7", weeks:[
        w("p3w1",25,
          [["Production Kubernetes cap. 1–3: cluster design decisions e trade-offs","https://www.oreilly.com/library/view/production-kubernetes/9781492092292/"]],
          [["Init containers",N+"Init-containers-2e7dabadc8df81dfbf8fd6b9e18a4603"],
           ["Multi-container patterns (sidecar, ambassador, adapter)",N+"Multi-container-patterns-sidecar-ambassador-adapter-2e7dabadc8df819ab216c56307738aa8"]],
          [["DevSecOps: shift-left security, SAST/DAST no CI, Trivy em pipelines","https://trivy.dev/"],
           ["Container security scanning (Trivy)",N+"Container-security-scanning-Trivy-2e7dabadc8df8194b639c5a6913c535a"]],
          [["Observability vs Monitoring",N+"Observability-vs-Monitoring-2e7dabadc8df81df8230eb0f22a7ba39"],
           ["Pilares: Logs, Metrics, Traces",N+"Pilares-Logs-Metrics-Traces-2e7dabadc8df81c69918dc9ef4f47f3a"]],
          [["Accelerate (livro) cap. 1–4: métricas DORA e o que elas significam","https://itrevolution.com/accelerate-book/"],
           ["Participar de meetup/conferência",N+"Participar-de-meetup-confer-ncia-2e7dabadc8df819a8938ce2a3de83458"]]),
        w("p3w2",26,
          [["Production Kubernetes cap. 4–5: networking e storage em produção","https://www.oreilly.com/library/view/production-kubernetes/9781492092292/"]],
          [["Blue/Green deployments",N+"Blue-Green-deployments-2e7dabadc8df81a69a4af0d6f0759bf9"],
           ["Rolling updates, Recreate",N+"Rolling-updates-Recreate-2e7dabadc8df81d185ecd5b39c031ba3"]],
          [["Falco para detecção de ameaças",N+"Falco-para-detec-o-de-amea-as-2e7dabadc8df8143a8d6c3e41756fc44"],
           ["Container isolation e riscos",N+"Container-isolation-e-riscos-2e7dabadc8df81b3ac45f1d80a55a49c"]],
          [["SLIs, SLOs, SLAs e Error Budgets (revisão profunda)",N+"SLIs-SLOs-SLAs-e-Error-Budgets-2e7dabadc8df811e9808c956e5981637"],
           ["Arquitetura e data model Prometheus",N+"Arquitetura-e-data-model-Prometheus-2e7dabadc8df81d39689f6a5ba5ca231"]],
          [["Accelerate cap. 5–8: transformational leadership e cultura","https://itrevolution.com/accelerate-book/"],
           ["Identificar projeto open source para contribuir",N+"Identificar-projeto-open-source-para-contribuir-2e7dabadc8df81e0b811e545a0c137ef"]]),
        w("p3w3",27,
          [["Production Kubernetes cap. 6–7: segurança e multi-tenancy em produção","https://www.oreilly.com/library/view/production-kubernetes/9781492092292/"]],
          [["Jobs e CronJobs",N+"Jobs-e-CronJobs-2e7dabadc8df81528ff5e219a8cfeed7"],
           ["Prática: Implementar cada pattern",N+"Pr-tica-Implementar-cada-pattern-2e7dabadc8df81b3846fe8f28a7dbb32"]],
          [["OPA Gatekeeper em produção: constraint templates, admission webhooks","https://open-policy-agent.github.io/gatekeeper/website/"],
           ["OPA/Gatekeeper policies",N+"OPA-Gatekeeper-policies-2e7dabadc8df81e8a075f9ca56bf9741"]],
          [["Federation e remote write (Prometheus)",N+"Federation-e-remote-write-2e7dabadc8df81b7940decbac5be423c"],
           ["ServiceMonitors e PodMonitors",N+"ServiceMonitors-e-PodMonitors-2e7dabadc8df8107b6c0d3f99a162e9e"]],
          [["Escreva post técnico externo (Medium/Substack) sobre problema resolvido",""],
           ["Prática: Publicar artigo",N+"Pr-tica-Publicar-artigo-2e7dabadc8df819ea96de35ee7a46228"]]),
        w("p3w4",28,
          [["Production Kubernetes cap. 8–10: observabilidade, cost management","https://www.oreilly.com/library/view/production-kubernetes/9781492092292/"]],
          [["Canary releases",N+"Canary-releases-2e7dabadc8df8140a580f0a5bb42881d"],
           ["Prática: Implementar canary com ArgoCD Rollouts",N+"Pr-tica-Implementar-canary-com-ArgoCD-Rollouts-2e7dabadc8df815dae23fa0541cb3c10"]],
          [["Exercício: redesenhe 1 componente da plataforma com foco em segurança",""]],
          [["Prática: Setup Prometheus stack no K8s",N+"Pr-tica-Setup-Prometheus-stack-no-K8s-2e7dabadc8df8193929cc835dd9425d6"],
           ["Recording rules e alerting rules",N+"Recording-rules-e-alerting-rules-2e7dabadc8df81a69416cc225a13e952"]],
          [["Liderar 1 iniciativa cross-squad: plano formal com objetivos e métricas",""],
           ["Project planning",N+"Project-planning-2e7dabadc8df81ac9e39c2f80110aeb5"]]),
      ]},
      { title:"Mês 8", weeks:[
        w("p3w5",29,
          [["GitOps avançado: multi-cluster management, fleet management patterns","https://www.manning.com/books/gitops-and-kubernetes"],
           ["Multi-cluster patterns",N+"Multi-cluster-patterns-2e7dabadc8df8105a6bcf32763bab350"]],
          [["ConfigMaps e Secrets best practices",N+"ConfigMaps-e-Secrets-best-practices-2e7dabadc8df8166963ac40de2bf0a8c"],
           ["Sealed Secrets",N+"Sealed-Secrets-2e7dabadc8df816085a1c082196fa548"]],
          [["Supply chain: Sigstore, cosign, container image signing no pipeline","https://sigstore.dev/"],
           ["Image signing e verification (Cosign, Notary)",N+"Image-signing-e-verification-Cosign-Notary-2e7dabadc8df8163a63ac28368e45d03"]],
          [["Prática: Alertas customizados e dashboards",N+"Pr-tica-Alertas-customizados-e-dashboards-2e7dabadc8df8151a78cd31931b3f35f"],
           ["Variables, annotations, alerting",N+"Variables-annotations-alerting-2e7dabadc8df81aab792ea07535921d9"]],
          [["Mentorar: pair programming com eng. mais júnior",""],
           ["Pair programming efetivo",N+"Pair-programming-efetivo-2e7dabadc8df819799acd15a975cd45b"]]),
        w("p3w6",30,
          [["Kustomize vs Helm: quando usar cada um",N+"Kustomize-vs-Helm-quando-usar-cada-um-2e7dabadc8df817e9db6fa5bffed725b"],
           ["Overlays, patches, transformers",N+"Overlays-patches-transformers-2e7dabadc8df819e94ace55b0c8802b5"]],
          [["External Secrets Operator (profundo)",N+"External-Secrets-Operator-2e7dabadc8df81dabddee86255812c86"],
           ["Prática: Gestão segura de secrets em GitOps",N+"Pr-tica-Gest-o-segura-de-secrets-em-GitOps-2e7dabadc8df81c6b717c6ec0b113eb7"]],
          [["Kubernetes network policies avançadas: Cilium, eBPF basics","https://cilium.io/blog/2021/05/11/cni-benchmark"],
           ["Linux security primitives (namespaces, cgroups, capabilities)",N+"Linux-security-primitives-namespaces-cgroups-capabilities-2e7dabadc8df816ba6b5caed9be94494"]],
          [["Prática: Stack Loki + Grafana no K8s",N+"Pr-tica-Stack-Loki-Grafana-no-K8s-2e7dabadc8df8176aa1befae924f9aa5"],
           ["Fluent Bit / Fluentd para coleta",N+"Fluent-Bit-Fluentd-para-coleta-2e7dabadc8df813a881fece3fd3a3cb0"]],
          [["1 talk em meetup externo OU contribuição open source — planejar",""],
           ["Entender contribution guidelines",N+"Entender-contribution-guidelines-2e7dabadc8df8132bac0fae80218b33d"]]),
        w("p3w7",31,
          [["Prática: Estruturar repo GitOps com Kustomize",N+"Pr-tica-Estruturar-repo-GitOps-com-Kustomize-2e7dabadc8df81feb257d11704a76fb3"],
           ["Components e replacements (Kustomize)",N+"Components-e-replacements-2e7dabadc8df81ad85aefd5f6d1ddfc4"]],
          [["Resource management (requests/limits)",N+"Resource-management-requests-limits-2e7dabadc8df814a952efd49761adcee"],
           ["HPA, VPA, KEDA",N+"HPA-VPA-KEDA-2e7dabadc8df81258e9cded180a7edc0"]],
          [["Revisão de segurança: audit das policies OPA/Gatekeeper em produção",""]],
          [["Prática: Instrumentar aplicação com traces",N+"Pr-tica-Instrumentar-aplica-o-com-traces-2e7dabadc8df8151976cdb0e594f48e9"],
           ["Jaeger / Tempo para armazenamento",N+"Jaeger-Tempo-para-armazenamento-2e7dabadc8df81598fecc62ff991b08c"]],
          [["2ª RFC ou ADR relevante — compartilhe e colete feedback estruturado",""]]),
        w("p3w8",32,
          [["GitHub Actions / GitLab CI para GitOps",N+"GitHub-Actions-GitLab-CI-para-GitOps-2e7dabadc8df81918d13ff633e9d1a3a"],
           ["Prática: Pipeline completo: build → push → GitOps deploy",N+"Pr-tica-Pipeline-completo-build-push-GitOps-deploy-2e7dabadc8df8126a4c4d33c949ff305"]],
          [["Probes: liveness, readiness, startup",N+"Probes-liveness-readiness-startup-2e7dabadc8df81708afbd8a38d400577"],
           ["Prática: Autoscaling baseado em métricas custom",N+"Pr-tica-Autoscaling-baseado-em-m-tricas-custom-2e7dabadc8df8155ae40ed5e23b12653"]],
          [["Forensics básico em containers",N+"Forensics-b-sico-em-containers-2e7dabadc8df816f90bcd33e8d36d625"]],
          [["Auto-instrumentation (OTel)",N+"Auto-instrumentation-2e7dabadc8df8111a8b5f11463770c5a"],
           ["OTel Collector: receivers, processors, exporters",N+"OTel-Collector-receivers-processors-exporters-2e7dabadc8df81af9933d8cf16790b15"]],
          [["Revisão SLOs: todos os serviços com SLO definido dentro do budget?",""]]),
      ]},
      { title:"Mês 9 — CKAD Prep", weeks:[
        w("p3w9",33,
          [["Exercício: redesenhe 1 componente com visão de platform engineering",""]],
          [["Distroless e minimal images",N+"Distroless-e-minimal-images-2e7dabadc8df812f8195f11a497ec5e3"],
           ["Multi-stage builds otimizados",N+"Multi-stage-builds-otimizados-2e7dabadc8df811eb34ad761fed7de9a"]],
          [["Prática: Setup Falco com alertas customizados",N+"Pr-tica-Setup-Falco-com-alertas-customizados-2e7dabadc8df81f2afacd4f8528f0714"]],
          [["Prática: Consolidar metrics, logs e traces com OTel",N+"Pr-tica-Consolidar-metrics-logs-e-traces-com-OTel-2e7dabadc8df81bc937feae6a08052d3"]],
          [["Mentorar: pair programming estruturado com eng. júnior",""],
           ["First contribution (docs, small fix)",N+"First-contribution-docs-small-fix-2e7dabadc8df81318aadfa7a8bca1f87"]]),
        w("p3w10",34,
          [["Prática: Migrar um projeto de ArgoCD para Flux",N+"Pr-tica-Migrar-um-projeto-de-ArgoCD-para-Flux-2e7dabadc8df81b6af4acbfc4df8340b"],
           ["GitRepository, HelmRelease, Kustomization (Flux)",N+"GitRepository-HelmRelease-Kustomization-2e7dabadc8df8122ab0ec320f22ff3db"]],
          [["Revisão completa do currículo CKAD",N+"Revis-o-completa-do-curr-culo-CKAD-2e7dabadc8df8164a352f28cdb586188"],
           ["Speed drills para kubectl",N+"Speed-drills-para-kubectl-2e7dabadc8df814ab143ec71661b9450"]],
          [["Image automation (Flux Image Reflector)",N+"Image-automation-Flux-Image-Reflector-2e7dabadc8df81398a34eaf6e681864f"]],
          [["Chaos experiment: Game Day no ambiente qa — documentar resultados",""]],
          [["Talk em meetup externo OU first PR open source submetido",""],
           ["Prática: PR aceito em projeto relevante",N+"Pr-tica-PR-aceito-em-projeto-relevante-2e7dabadc8df81d39571ec64b19a84f9"]]),
        w("p3w11",35,
          [["Prática: Criar Helm chart para aplicação complexa",N+"Pr-tica-Criar-Helm-chart-para-aplica-o-complexa-2e7dabadc8df81b49a40f5f161762089"],
           ["Hooks, dependencies, library charts",N+"Hooks-dependencies-library-charts-2e7dabadc8df81e39f00d893bec6c792"]],
          [["🎯 Mock exam CKAD no killer.sh — identificar lacunas","https://killer.sh/"],
           ["Mock exams Killer.sh",N+"Mock-exams-Killer-sh-2e7dabadc8df81caa8a3cd41c64694de"]],
          [["Vulnerability scanning pipelines",N+"Vulnerability-scanning-pipelines-2e7dabadc8df811493ccf3f93fe57188"],
           ["Runtime policies",N+"Runtime-policies-2e7dabadc8df8152ab00e466c7109d2e"]],
          [["Prática: Alertas customizados e dashboards",N+"Pr-tica-Alertas-customizados-e-dashboards-2e7dabadc8df8151a78cd31931b3f35f"]],
          [["GitHub profile atualizado",N+"GitHub-profile-atualizado-2e7dabadc8df81c88a16fff707968623"],
           ["Documentar projetos principais",N+"Documentar-projetos-principais-2e7dabadc8df8145be3feb624cdb4c74"]]),
        w("p3w12",36,
          [["Prática: Otimizar imagens existentes",N+"Pr-tica-Otimizar-imagens-existentes-2e7dabadc8df81798c8eeb19c0f4d146"]],
          [["Revisão pontos fracos do mock CKAD + exercícios focados","https://github.com/dgkanatsios/CKAD-exercises"],
           ["Speed drills para kubectl (rodada 2)",N+"Speed-drills-para-kubectl-2e7dabadc8df814ab143ec71661b9450"]],
          [["SBOM (Software Bill of Materials)",N+"SBOM-Software-Bill-of-Materials-2e7dabadc8df81d5a55ef423127f45a4"]],
          [["SLO Review: análise de tendências do quarter — todos os serviços saudáveis?",""]],
          [["Prática: Case study detalhado",N+"Pr-tica-Case-study-detalhado-2e7dabadc8df8106bf4af81feda8db0b"]]),
      ]},
      { title:"Mês 10 — CKAD Sprint", weeks:[
        w("p3w13",37,
          [["Exercício: 5 System Designs do zero sem referência","https://github.com/donnemartin/system-design-primer"]],
          [["🎯 Mock exam CKAD 2 no killer.sh","https://killer.sh/"]],
          [["Prática: Security baseline completo",N+"Pr-tica-Security-baseline-completo-2e7dabadc8df81338b31d3b0842a7f30"]],
          [["Revisão SLOs: error budget burn do trimestre",""]],
          [["ADR: escolha de observabilidade — escrever e partilhar internamente",""]]),
        w("p3w14",38,
          [["Descanso mental — revisão leve de conceitos-chave",""]],
          [["🏆 REALIZAR EXAME CKAD",N+"REALIZAR-EXAME-CKAD-2e7dabadc8df81eb8626f4d7de33c499"]],
          [["Revisão pós-exame: o que falta para o próximo nível?",""]],
          [["Revisão de observabilidade: gaps ainda existentes no ambiente atual",""]],
          [["Retrospectiva da Fase 3 — 3 aprendizados principais",""],
           ["Retrospectiva do Ano 1",N+"Retrospectiva-do-Ano-1-2e7dabadc8df81d8a60ee836241060f2"]]),
        w("p3w15",39,
          [["Post-CKAD: mapear o ecossistema K8s além do exame","https://landscape.cncf.io/"]],
          [["Helm + GitOps patterns",N+"Helm-GitOps-patterns-2e7dabadc8df81548eb8d4d2e7aa5e78"]],
          [["Cloud cost review: análise do trimestre — maiores gastos","https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html"],
           ["Kubecost / OpenCost",N+"Kubecost-OpenCost-2e7dabadc8df812c9e13c9d9795ae401"]],
          [["DORA quarterly: calcular métricas do squad + compare com baseline","https://dora.dev/research/"]],
          [["Prepare talk interno: aprendizados do percurso CKAD para o squad",""],
           ["Demo preparation",N+"Demo-preparation-2e7dabadc8df811cad5ec8e359a6b0ec"]]),
        w("p3w16",40,
          [["Transição para Fase 4: identifique gaps de platform engineering a atacar",""]],
          [["Prática: Migrar Ingress para Gateway API em lab","https://kubernetes.io/docs/concepts/services-networking/gateway/"]],
          [["FinOps: proposta de rightsizing baseada na análise do trimestre",""],
           ["Right-sizing workloads",N+"Right-sizing-workloads-2e7dabadc8df81c692a2f19d3794524c"]],
          [["Retrospectiva de observabilidade: cobertura atual vs target desejado",""]],
          [["Retrospectiva expandida da Fase 3 — roadmap update para os próximos 6m",""]]),
      ]},
    ]
  },
  // ── FASE 4 ── Bridge Senior + Platform Engineering (Meses 11–12, Semanas 41–48)
  {
    id:"p4",num:4,title:"Bridge Senior",period:"Meses 11–12",cert:"→ CKS prep iniciado",
    goal:"Comportamentos de Senior Forte consolidados. Plataforma como produto. Visibilidade interna crescente.",
    months:[
      { title:"Mês 11", weeks:[
        w("p4w1",41,
          [["Platform as a Product mindset",N+"Platform-as-a-Product-mindset-2e7dabadc8df814f9740c90b4810fa31"],
           ["O que é uma Internal Developer Platform",N+"O-que-uma-Internal-Developer-Platform-2e7dabadc8df81e1bc73ec53fff61f2a"]],
          [["CRDs: como funcionam, kubebuilder basics, controller-runtime","https://book.kubebuilder.io/"]],
          [["Software Catalog (Backstage)",N+"Software-Catalog-2e7dabadc8df81ab8cfadd62a00fd3ed"],
           ["Prática: Instalar Backstage e popular catálogo",N+"Pr-tica-Instalar-Backstage-e-popular-cat-logo-2e7dabadc8df8180923de787aa9a7711"]],
          [["Error Budgets na prática: dashboard de SLOs para 2 serviços reais",""],
           ["High availability e scaling (Prometheus/Grafana)",N+"High-availability-e-scaling-2e7dabadc8df8142866bcf6040e10860"]],
          [["Feedback técnico: dar e receber formalmente com 1 colega",""],
           ["Como dar feedback construtivo",N+"Como-dar-feedback-construtivo-2e7dabadc8df81ed8c3ad0a2b9e4f1c6"]]),
        w("p4w2",42,
          [["Developer Experience (DevEx)",N+"Developer-Experience-DevEx-2e7dabadc8df81198e41e152013d682f"],
           ["Golden paths para desenvolvedores",N+"Golden-paths-para-desenvolvedores-2e7dabadc8df814ea5abe2de5d34d6cb"]],
          [["Operator Pattern: reconciliation loop, finalizers, status conditions","https://www.oreilly.com/library/view/kubernetes-operators/9781492048039/"]],
          [["Software Templates (Scaffolding — Backstage)",N+"Software-Templates-Scaffolding-2e7dabadc8df81f3a957d87c2350cc1c"],
           ["Prática: Criar template para microserviço",N+"Pr-tica-Criar-template-para-microservi-o-2e7dabadc8df81e79d34d7967e26fc4d"]],
          [["Reliability reviews: processo formal de revisão de SLOs por serviço",""]],
          [["Mentorar: pair programming semanal com eng. júnior (formalizar)",""],
           ["Code review como ensino",N+"Code-review-como-ensino-2e7dabadc8df816fa950ef016aaee9c3"]]),
        w("p4w3",43,
          [["Métricas de plataforma",N+"M-tricas-de-plataforma-2e7dabadc8df813ab315ff41470acbbd"],
           ["Platform APIs design",N+"Platform-APIs-design-2e7dabadc8df8190b933f493c3a01531"]],
          [["Admission webhooks: mutating e validating — escrever 1 simples","https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"]],
          [["Plugin architecture (Backstage)",N+"Plugin-architecture-2e7dabadc8df81c5bfecd27ee5dbbc70"],
           ["TechDocs para documentação",N+"TechDocs-para-documenta-o-2e7dabadc8df8154926bd6ee9ac1daec"]],
          [["SLO burndown: identificar serviços fora do error budget — plano de ação",""]],
          [["Staff archetype deep dive: qual arquétipo quer ser? Por quê?","https://staffeng.com/guides/staff-archetypes/"],
           ["Staff Engineer path vs Management",N+"Staff-Engineer-path-vs-Management-2e7dabadc8df8179afdeec579b9c4824"]]),
        w("p4w4",44,
          [["Backstage + Crossplane + ArgoCD",N+"Backstage-Crossplane-ArgoCD-2e7dabadc8df81949716c464ced42c90"]],
          [["Simple controller: escrever controller com controller-runtime","https://book.kubebuilder.io/cronjob-tutorial/controller-implementation"]],
          [["Prática: Adicionar plugins relevantes ao Backstage",N+"Pr-tica-Adicionar-plugins-relevantes-2e7dabadc8df8140bb84c12a1baedea5"],
           ["Integração com Git providers",N+"Integra-o-com-Git-providers-2e7dabadc8df81899e39e6596098a4e0"]],
          [["Game Day em staging: chaos experiment + documentação de resultados",""]],
          [["Apresentação interna: decisão técnica relevante do mês para liderança",""],
           ["Prática: Propor mudança técnica significativa",N+"Pr-tica-Propor-mudan-a-t-cnica-significativa-2e7dabadc8df81289cb8ec81cea51a57"]]),
      ]},
      { title:"Mês 12", weeks:[
        w("p4w5",45,
          [["Istio architecture",N+"Istio-architecture-2e7dabadc8df81109503fa162d8bcb39"],
           ["Prática: Setup Istio em cluster",N+"Pr-tica-Setup-Istio-em-cluster-2e7dabadc8df81bd9494e6a47f886d81"]],
          [["Kubernetes Patterns: Operator, Controller, Elastic Scale, Health Probe","https://www.redhat.com/en/engage/kubernetes-containers-architecture-s-201910240918"]],
          [["Istio: Observability features",N+"Observability-features-Istio-2e7dabadc8df81758abcc8a0448184ca"],
           ["Prática: Canary deployment com Istio",N+"Pr-tica-Canary-deployment-com-Istio-2e7dabadc8df815d8b0bdc6c2e7a6f21"]],
          [["Propor Game Day formal para o time — planeamento e execução",""]],
          [["RFC: proposta de IDP incremental para o squad — visão 6 meses",""],
           ["Prática: Planejar projeto de 3 meses",N+"Pr-tica-Planejar-projeto-de-3-meses-2e7dabadc8df81a3adafcffbe171c694"]]),
        w("p4w6",46,
          [["Multi-cluster service mesh",N+"Multi-cluster-service-mesh-2e7dabadc8df816da7b5c589ec851569"],
           ["Security features Istio (mTLS, AuthZ)",N+"Security-features-mTLS-AuthZ-2e7dabadc8df81a0a936d0f0d9f246ad"]],
          [["Multi-cluster GitOps: ApplicationSets com cluster generators em prod","https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/"]],
          [["FinOps: análise de custo do ambiente atual — maiores gastos e otimizações","https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html"],
           ["Prática: Otimizar custos EKS",N+"Pr-tica-Otimizar-custos-EKS-2e7dabadc8df81c5b2f9dea5709deef0"]],
          [["Disaster recovery planning",N+"Disaster-recovery-planning-2e7dabadc8df81dbaf4dd2235fc84808"],
           ["Prática: DR plan para plataforma K8s",N+"Pr-tica-DR-plan-para-plataforma-K8s-2e7dabadc8df814db6bde0847202822c"]],
          [["Retrospectiva arquitetural: 12 meses de decisões — o que mudaria?",""]]),
        w("p4w7",47,
          [["AWS Provider deep dive (Crossplane)",N+"AWS-Provider-deep-dive-2e7dabadc8df81c0860cca46a3114f12"],
           ["Composition Functions (Crossplane)",N+"Composition-Functions-2e7dabadc8df816cbb7de8124ec4a530"]],
          [["Operator avançado: status subresource, conditions, owner references","https://book.kubebuilder.io/"],
           ["Prática: Self-service database provisioning",N+"Pr-tica-Self-service-database-provisioning-2e7dabadc8df818887ecf57777ba9f24"]],
          [["Ambient mesh (sidecar-less — Istio)",N+"Ambient-mesh-sidecar-less-2e7dabadc8df81a3b39bee84acc61609"]],
          [["Reliability: propor processo formal de SLO review para toda a squad",""],
           ["Prática: Setup cost monitoring",N+"Pr-tica-Setup-cost-monitoring-2e7dabadc8df81c7b4c2e03412bf6bae"]],
          [["RFC revisão: iterar sobre o IDP RFC com feedback dos stakeholders",""],
           ["Building consensus",N+"Building-consensus-2e7dabadc8df81139f0bcb5e2a4ec809"]]),
        w("p4w8",48,
          [["GitOps + Crossplane",N+"GitOps-Crossplane-2e7dabadc8df81e8b809f97d9ad328c9"],
           ["Prática: Plataforma self-service completa",N+"Pr-tica-Plataforma-self-service-completa-2e7dabadc8df81e1af9ce75c1bfea262"]],
          [["K8s patterns revisão: todos os padrões estudados — onde aplicar cada?","https://www.redhat.com/en/engage/kubernetes-containers-architecture-s-201910240918"]],
          [["Prática: EKS cluster production-ready",N+"Pr-tica-EKS-cluster-production-ready-2e7dabadc8df81c7a7b3ecf2ddfb5cd8"],
           ["Pod Identity (IRSA evolution)",N+"Pod-Identity-IRSA-evolution-2e7dabadc8df8154af5ec15ee55af9d8"]],
          [["FinOps: proposta formal de otimização de custo para liderança técnica",""],
           ["Cluster autoscaling (Karpenter)",N+"Cluster-autoscaling-Karpenter-2e7dabadc8df8152b23bffbe69c6c5b9"]],
          [["Retrospectiva expandida da Fase 4 — entrada na Fase CKS",""],
           ["Mid-Year Leadership Review",N+"Mid-Year-Leadership-Review-2e7dabadc8df81619330f278b5ae94f5"]]),
      ]},
    ]
  },
  // ── FASE 5 ── CKS + DevSecOps (Meses 13–16, Semanas 49–64) ───────────────
  {
    id:"p5",num:5,title:"CKS + DevSecOps",period:"Meses 13–16",cert:"🎓 CKS — Meta: Semana 62",
    goal:"CKS. DevSecOps mindset consolidado. Impacto cross-team formal. Mentoria ativa.",
    months:[
      { title:"Mês 13", weeks:[
        w("p5w1",49,
          [["Building Microservices cap. 1–4: decomposição, limites de serviço","https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"]],
          [["Mapear currículo CKS",N+"Mapear-curr-culo-CKS-2e7dabadc8df818faa9ad88c00b7383c"],
           ["Identificar gaps de conhecimento",N+"Identificar-gaps-de-conhecimento-2e7dabadc8df8184bc8fc463e12fe797"],
           ["CIS Benchmarks para Kubernetes",N+"CIS-Benchmarks-para-Kubernetes-2e7dabadc8df8186854ee39e4a029b09"]],
          [["DevSecOps pipeline: Trivy, Semgrep, SAST integrados no CI/CD","https://trivy.dev/"],
           ["Prática: Pipeline com scanning e signing",N+"Pr-tica-Pipeline-com-scanning-e-signing-2e7dabadc8df8107a7f2e21f1f78b246"]],
          [["Propor e executar Game Day formal — documentar resultados",""]],
          [["Iniciar mentoria formal: definir objetivos com eng. júnior",""],
           ["Especialização: Definir trilha (Platform/SRE/Security/Data)",N+"Especializa-o-Definir-trilha-Platform-SRE-Security-Data-2e7dabadc8df81d5afc9c65afae7ad76"]]),
        w("p5w2",50,
          [["Building Microservices cap. 5–7: comunicação, resiliência, testes","https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"]],
          [["API Server security",N+"API-Server-security-2e7dabadc8df8121983ac73ab36460f1"],
           ["Prática: Hardening de cluster seguindo CIS",N+"Pr-tica-Hardening-de-cluster-seguindo-CIS-2e7dabadc8df81da9a99d7538a6f608c"]],
          [["Zero Trust em Kubernetes: mTLS, SPIFFE/SPIRE basics","https://spiffe.io/docs/latest/spiffe-about/overview/"],
           ["mTLS e service mesh security",N+"mTLS-e-service-mesh-security-2e7dabadc8df81e3a838eae50e38a309"]],
          [["Chaos: post-mortem do Game Day — lições aprendidas documentadas",""],
           ["Incident command","https://www.notion.so/Incident-command"]],
          [["Contribuição open source: identificar issue em projeto relevante",""],
           ["Especialização: Semana 1-2 da trilha escolhida",N+"Especializa-o-Semana-1-2-da-trilha-escolhida-2e7dabadc8df814497a2d282134cc29a"]]),
        w("p5w3",51,
          [["Building Microservices cap. 8–10: observabilidade, segurança, deploy","https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"]],
          [["Kernel hardening",N+"Kernel-hardening-2e7dabadc8df8178970dd8fc745b1295"],
           ["RBAC avançado e audit logging",N+"RBAC-avan-ado-e-audit-logging-2e7dabadc8df81d89328ed5450b6e73a"],
           ["Node security",N+"Node-security-2e7dabadc8df81d7a4e2e5d40996caa4"]],
          [["Vault Agent Injector para K8s",N+"Vault-Agent-Injector-para-K8s-2e7dabadc8df81b2a7abebab714ada1d"],
           ["HashiCorp Vault deep dive",N+"HashiCorp-Vault-deep-dive-2e7dabadc8df8157b227df67ba947e1d"]],
          [["Reliability: revisão trimestral de SLOs — serviços dentro do budget?",""]],
          [["Liderar 1 iniciativa cross-squad: plano formal com objetivos",""],
           ["Especialização: Semana 3-4 da trilha escolhida",N+"Especializa-o-Semana-3-4-da-trilha-escolhida-2e7dabadc8df81d7b9aed12baa3e0e68"]]),
        w("p5w4",52,
          [["Building Microservices cap. 11–14: migração, organização, futuro","https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"]],
          [["Pod-to-Pod encryption",N+"Pod-to-Pod-encryption-2e7dabadc8df81fcbedbe1327e65912d"],
           ["Network policies para system namespaces",N+"Network-policies-para-system-namespaces-2e7dabadc8df81c58318f2e0d7b6c150"],
           ["Prática: Secure node configuration",N+"Pr-tica-Secure-node-configuration-2e7dabadc8df8162a8d7d263b8e738b7"]],
          [["Prática: Integração completa Vault + K8s",N+"Pr-tica-Integra-o-completa-Vault-K8s-2e7dabadc8df81cca253f11c5227f334"],
           ["Pod Security Standards enforcement",N+"Pod-Security-Standards-enforcement-2e7dabadc8df81e5bfa1f7382e4dfc37"]],
          [["DORA revisão semestral: como o squad evoluiu desde o início?","https://dora.dev/research/"]],
          [["Post técnico externo: DevSecOps na prática — publicar",""],
           ["Especialização: Semana 5-6 da trilha escolhida",N+"Especializa-o-Semana-5-6-da-trilha-escolhida-2e7dabadc8df814bbb22d8ba36e5803d"]]),
      ]},
      { title:"Mês 14", weeks:[
        w("p5w5",53,
          [["Threat modeling: STRIDE, PASTA — modelar 1 serviço real do ambiente","https://owasp.org/www-community/Threat_Modeling"]],
          [["Security contexts avançados",N+"Security-contexts-avan-ados-2e7dabadc8df81fb9f5accd76e074e49"],
           ["Prática: Implementar least privilege",N+"Pr-tica-Implementar-least-privilege-2e7dabadc8df8142b887fa8f5d3c945c"],
           ["Service account security",N+"Service-account-security-2e7dabadc8df81dcad55eaf5e7eeb8d4"]],
          [["Kyverno como alternativa",N+"Kyverno-como-alternativa-2e7dabadc8df816da90ae6e5497b5f9e"],
           ["Prática: Policy-as-Code para compliance",N+"Pr-tica-Policy-as-Code-para-compliance-2e7dabadc8df81cba068f4fe02934c83"]],
          [["Liderar 1 iniciativa cross-squad: plano formal com objetivos e métricas",""]],
          [["Especialização: Semana 7-8 da trilha escolhida",N+"Especializa-o-Semana-7-8-da-trilha-escolhida-2e7dabadc8df81e9bc2fc6f163266f14"]]),
        w("p5w6",54,
          [["Privacy by design: GDPR, data residency, encryption at rest","https://gdpr.eu/"]],
          [["Validating admission webhooks",N+"Validating-admission-webhooks-2e7dabadc8df81439c57f8cba835447a"],
           ["Image digest pinning",N+"Image-digest-pinning-2e7dabadc8df8119b804c79c4dc93d4b"],
           ["Prática: Admission controller customizado",N+"Pr-tica-Admission-controller-customizado-2e7dabadc8df811aa37cd5a163067a82"]],
          [["Network Policies avançadas",N+"Network-Policies-avan-adas-2e7dabadc8df8151a03dcec8c977f07f"],
           ["Prática: Zero-trust networking no cluster",N+"Pr-tica-Zero-trust-networking-no-cluster-2e7dabadc8df81498f44c5a51d42df5d"]],
          [["SLO reviews: reunião formal com stakeholders apresentando métricas",""]],
          [["Especialização: Semana 9-10 da trilha escolhida",N+"Especializa-o-Semana-9-10-da-trilha-escolhida-2e7dabadc8df8152a881d88609355f26"]]),
        w("p5w7",55,
          [["Compliance as code: OPA para governance — escrever policies de compliance","https://www.openpolicyagent.org/docs/latest/"]],
          [["Private registries security",N+"Private-registries-security-2e7dabadc8df81a29c9fe4e9cf8c9762"],
           ["Audit logs analysis",N+"Audit-logs-analysis-2e7dabadc8df814cb528f5fa982c6ac9"],
           ["Behavioral analysis",N+"Behavioral-analysis-2e7dabadc8df8115be03fc325cf93642"]],
          [["Ingress security (WAF, rate limiting)",N+"Ingress-security-WAF-rate-limiting-2e7dabadc8df81668c9fdf3a0894cf1d"]],
          [["Incident response em K8s",N+"Incident-response-em-K8s-2e7dabadc8df81ba9c0cce80bc7ca954"],
           ["Prática: Simular e responder a incidentes",N+"Pr-tica-Simular-e-responder-a-incidentes-2e7dabadc8df81caa48afd50262ac3c5"]],
          [["Especialização: Semana 11-12 da trilha escolhida",N+"Especializa-o-Semana-11-12-da-trilha-escolhida-2e7dabadc8df81c9a709d284f4b42ee3"]]),
        w("p5w8",56,
          [["Security architecture: defense in depth para aplicações cloud-native","https://www.cncf.io/blog/"]],
          [["Falco para detecção de ameaças (avançado)",N+"Falco-para-detec-o-de-amea-as-2e7dabadc8df8143a8d6c3e41756fc44"],
           ["Prática: Setup Falco com alertas customizados",N+"Pr-tica-Setup-Falco-com-alertas-customizados-2e7dabadc8df81f2afacd4f8528f0714"]],
          [["Revisar postura de segurança completa: gaps vs roadmap de correção",""]],
          [["DORA revisão: análise de impacto das últimas 2 fases","https://dora.dev/research/"]],
          [["Especialização: Projeto final da trilha",N+"Especializa-o-Projeto-final-da-trilha-2e7dabadc8df8187b834cbe42dbe137e"]]),
      ]},
      { title:"Mês 15 — CKS Prep", weeks:[
        w("p5w9",57,
          [["Revisão de System Design focada em segurança — threat modeling de 1 sistema",""]],
          [["CKS Mock exams intensivos — 1ª rodada",N+"CKS-Mock-exams-intensivos-2e7dabadc8df81088c7ec11a64fdc154"]],
          [["Revisão de segurança: controles implementados vs CKS curriculum",""],
           ["GCP/Azure: Compute e Kubernetes basics",N+"GCP-Azure-Compute-e-Kubernetes-basics-2e7dabadc8df817c99f6d6471f3beeb5"]],
          [["Chaos experiment avançado: multi-region failure simulation",""]],
          [["Preparar talk técnico para meetup externo",""],
           ["Prática: Preparar talk de 15 min",N+"Pr-tica-Preparar-talk-de-15-min-2e7dabadc8df813c945bcf2ab6d813b8"]]),
        w("p5w10",58,
          [["Revisão de pontos fracos identificados no mock CKS",""]],
          [["Revisão de pontos fracos CKS",N+"Revis-o-de-pontos-fracos-CKS-2e7dabadc8df81a4aeb6edbc3fad704a"],
           ["CKS Mock exams intensivos — exercícios focados",N+"CKS-Mock-exams-intensivos-2e7dabadc8df81088c7ec11a64fdc154"]],
          [["GCP/Azure: Networking differences",N+"GCP-Azure-Networking-differences-2e7dabadc8df819a8358d86fe01e12ed"],
           ["Prática: Deploy básico em segundo cloud",N+"Pr-tica-Deploy-b-sico-em-segundo-cloud-2e7dabadc8df81ba92d8c3bea0881888"]],
          [["SLO reviews: reunião formal com stakeholders apresentando métricas",""]],
          [["Mentoria: revisão de progresso com eng. júnior — ajuste de plano",""],
           ["Networking strategy",N+"Networking-strategy-2e7dabadc8df8188bbf3e70d8bc10751"]]),
        w("p5w11",59,
          [["Threat intel: CVE tracking, NVD, EPSS scores — como priorizar patches","https://nvd.nist.gov/"]],
          [["CKS Mock exams intensivos — 2ª rodada",N+"CKS-Mock-exams-intensivos-2e7dabadc8df81088c7ec11a64fdc154"]],
          [["GCP/Azure: IAM model",N+"GCP-Azure-IAM-model-2e7dabadc8df81dcbe55c18f16dc5427"],
           ["Abstração vs cloud-native",N+"Abstra-o-vs-cloud-native-2e7dabadc8df81ef87c8c9393b2bfe38"]],
          [["SLO para segurança: MTTR de vulnerabilidades, patch compliance rate",""]],
          [["Security roadmap: próximos 6 meses de melhorias à liderança",""],
           ["Target companies/roles",N+"Target-companies-roles-2e7dabadc8df8180afccc03d07f63145"]]),
        w("p5w12",60,
          [["Terraform multi-cloud",N+"Terraform-multi-cloud-2e7dabadc8df81e38532cfd8042abf05"],
           ["Prática: Mesmo workload em 2 clouds",N+"Pr-tica-Mesmo-workload-em-2-clouds-2e7dabadc8df81e393bcee34a2d940ac"]],
          [["CKS: revisão final de todos os domínios","https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist"]],
          [["Prática: Arquitetura hub-spoke",N+"Pr-tica-Arquitetura-hub-spoke-2e7dabadc8df81b2801ff9d39aad8d48"],
           ["Network Firewall",N+"Network-Firewall-2e7dabadc8df811e82c0f37a6bb6d24f"]],
          [["Security chaos: testar controls de segurança em staging",""]],
          [["LinkedIn otimizado",N+"LinkedIn-otimizado-2e7dabadc8df8138ae3fe4ed336802dc"],
           ["Behavioral questions (STAR method)",N+"Behavioral-questions-STAR-method-2e7dabadc8df8113ac79e99316ba054a"]]),
      ]},
      { title:"Mês 16 — CKS Sprint", weeks:[
        w("p5w13",61,
          [["Revisão leve: conceitos-chave de System Design e arquitetura de segurança",""]],
          [["🎯 Mock exam final CKS — avaliar evolução","https://killer.sh/"],
           ["Revisão de pontos fracos CKS (pós-mock final)",N+"Revis-o-de-pontos-fracos-CKS-2e7dabadc8df81a4aeb6edbc3fad704a"]],
          [["AWS Organizations e SCPs",N+"AWS-Organizations-e-SCPs-2e7dabadc8df81508e8cf822f6ad5f5f"],
           ["IAM Identity Center",N+"IAM-Identity-Center-2e7dabadc8df817b871fdbf345f9434f"]],
          [["Apresentar métricas de confiabilidade para liderança técnica",""]],
          [["Retrospectiva de 15 meses: como você mudou como engenheiro?",""],
           ["System design interview practice",N+"System-design-interview-practice-2e7dabadc8df8198a0efc2d4a299fdec"]]),
        w("p5w14",62,
          [["Descanso mental — revisão leve dos domínios CKS",""]],
          [["🏆 REALIZAR EXAME CKS",N+"REALIZAR-EXAME-CKS-2e7dabadc8df81f7b179d302b3ad71d2"]],
          [["Retrospectiva de segurança: o que a jornada CKS ensinou sobre a infra?",""]],
          [["Planejar próxima fase de observabilidade com AI-driven insights",""]],
          [["Retrospectiva da Fase 5 — 3 aprendizados principais",""],
           ["Retrospectiva do Ano 2",N+"Retrospectiva-do-Ano-2-2e7dabadc8df8165af1dcb612f808d2a"]]),
        w("p5w15",63,
          [["Post-CKS: mapa de certificações — o que vem a seguir?","https://landscape.cncf.io/"]],
          [["EKS add-ons management",N+"EKS-add-ons-management-2e7dabadc8df81c2b532dbea3ea7d3ed"],
           ["EKS Anywhere",N+"EKS-Anywhere-2e7dabadc8df81218510f2bbbb75252c"]],
          [["FinOps: revisão anual de custo — 16 meses de otimização",""],
           ["EKS Blueprints",N+"EKS-Blueprints-2e7dabadc8df81a0a9c8fcabf9ceb88f"]],
          [["Reliability annual review: 16 meses de SLOs — tendências e melhorias",""]],
          [["Post externo: retrospectiva pública da jornada CKS — publicar",""],
           ["Prática: Mock interviews",N+"Pr-tica-Mock-interviews-2e7dabadc8df8169b73efaed58e1b24b"]]),
        w("p5w16",64,
          [["Transição Staff Behavior: gaps identificados para atuar como Staff Engineer",""]],
          [["Spot/Preemptible instances",N+"Spot-Preemptible-instances-2e7dabadc8df8134b6c0fb2dd86e5c39"],
           ["Prática: Implementar Karpenter",N+"Pr-tica-Implementar-Karpenter-2e7dabadc8df81948406d2765986a83d"]],
          [["Cloud: Well-Architected review formal do ambiente — relatório completo","https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html"]],
          [["Reliability: programa de SRE — estado atual vs target da Fase 6",""]],
          [["Retrospectiva expandida da Fase 5 — entrada na Staff Behavior",""],
           ["Atualizar plano de desenvolvimento",N+"Atualizar-plano-de-desenvolvimento-2e7dabadc8df8104b9b5ce660fdae550"]]),
      ]},
    ]
  },
  // ── FASE 6 ── Staff Behavior (Meses 17–18, Semanas 65–72) ────────────────
  {
    id:"p6",num:6,title:"Staff Behavior",period:"Meses 17–18",cert:"→ Staff Orbit",
    goal:"Agir como Staff mesmo sem o título. Visibilidade externa. Direção técnica formal.",
    months:[
      { title:"Mês 17", weeks:[
        w("p6w1",65,
          [["A Philosophy of Software Design cap. 1–5: complexidade como métrica de qualidade","https://web.stanford.edu/~ouster/cgi-bin/book.php"]],
          [["Crossplane avançado: composições complexas, múltiplos providers","https://docs.crossplane.io/"],
           ["Kubernetes plugin (Backstage)",N+"Kubernetes-plugin-2e7dabadc8df8178a695d3a76b612a0e"]],
          [["FinOps avançado: chargeback, showback, otimização por time","https://www.finops.org/framework/"]],
          [["Apresentar métricas DORA + SLOs para liderança como business case",""]],
          [["Talk externo: submeter proposta para meetup/conferência",""],
           ["Storytelling técnico",N+"Storytelling-t-cnico-2e7dabadc8df81618605d72b067f1fe2"]]),
        w("p6w2",66,
          [["A Philosophy of Software Design cap. 6–10: módulos, profundidade vs largura","https://web.stanford.edu/~ouster/cgi-bin/book.php"]],
          [["IDP: plano de implementação incremental — documento formal","https://platformengineering.org/blog"]],
          [["AWS re:Invent: selecione 3 talks de platform/infra e anote insights","https://reinvent.awsevents.com/"]],
          [["AI-driven observability: explorar LLM para análise de anomalias",""]],
          [["Contribuição open source: PR submetido em projeto relevante",""],
           ["Prática: PR aceito em projeto relevante",N+"Pr-tica-PR-aceito-em-projeto-relevante-2e7dabadc8df81d39571ec64b19a84f9"]]),
        w("p6w3",67,
          [["Technical vision: escreva a visão técnica da plataforma para 2 anos",""]],
          [["Platform audit: revisão completa do estado atual da plataforma",""]],
          [["Well-Architected review formal: relatório dos 5 pilares para o ambiente","https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html"]],
          [["SLO review semestral: análise de tendências + alertas de longo prazo",""]],
          [["Networking: conectar com 3 Staff Engineers externos via LinkedIn/Slack","https://staffeng.com/"],
           ["Technical deep dives",N+"Technical-deep-dives-2e7dabadc8df814a92c7ef20dfd96e52"]]),
        w("p6w4",68,
          [["A Philosophy of Software Design: síntese — como aplicar no code review diário","https://web.stanford.edu/~ouster/cgi-bin/book.php"]],
          [["K8s ecosystem: service mesh comparison — Istio vs Linkerd vs Cilium Mesh","https://servicemesh.es/"]],
          [["Multi-cloud: trade-offs reais e quando faz sentido",""],
           ["Data replication strategies",N+"Data-replication-strategies-2e7dabadc8df816eb874f08840905ab5"]],
          [["Incident review board: criar processo formal de revisão de incidentes",""],
           ["Prática: Facilitar postmortem",N+"Pr-tica-Facilitar-postmortem-2e7dabadc8df81349207e5ec2386300b"]],
          [["Liderar: facilitar alignment técnico entre 2 times — plano concreto",""],
           ["Definir próximos passos carreira",N+"Definir-pr-ximos-passos-carreira-2e7dabadc8df81b79bd8cac047e4ee1d"]]),
      ]},
      { title:"Mês 18", weeks:[
        w("p6w5",69,
          [["A Philosophy of Software Design cap. 11–15: comentários, naming, TDD","https://web.stanford.edu/~ouster/cgi-bin/book.php"]],
          [["Platform Engineering Community: benchmark do que outros times fazem","https://platformengineering.org/blog"]],
          [["Kubeflow: como plataformas suportam workloads de ML","https://www.kubeflow.org/docs/"]],
          [["Reliability at scale: multi-region SLOs e global load balancing patterns",""]],
          [["Mentoria: 2 engenheiros com sessões regulares e planos formais",""],
           ["Prática: Mentorar colega em tópico específico",N+"Pr-tica-Mentorar-colega-em-t-pico-espec-fico-2e7dabadc8df81c7afa4d7cd1b5cca0e"]]),
        w("p6w6",70,
          [["Organizational design: como plataformas de sucesso são organizadas","https://teamtopologies.com/book"]],
          [["SRE toil automation: identificar e automatizar top 3 toils atuais","https://sre.google/sre-book/eliminating-toil/"]],
          [["AI/ML infra: infrastructure patterns para LLM workloads em Kubernetes","https://www.kubeflow.org/"]],
          [["Reliability: criar processo formal de reliability review para novos serviços",""]],
          [["Talk externo: submeter segundo abstract para conferência técnica",""],
           ["Revisar gaps remanescentes",N+"Revisar-gaps-remanescentes-2e7dabadc8df81a4b8d0dcb4f8e8a3b7"]]),
        w("p6w7",71,
          [["Exercício final: desenhe a arquitetura ideal da plataforma em 3 anos",""]],
          [["Liderar revisão técnica do roadmap de plataforma para o próximo ano",""]],
          [["Revisão de segurança anual: postura atual vs melhores práticas",""]],
          [["Retrospectiva de confiabilidade: 18 meses de SLOs — tendências",""]],
          [["Retrospectiva da Fase 6 — você está agindo como Staff? O que falta?",""],
           ["Documentar journey completo",N+"Documentar-journey-completo-2e7dabadc8df8141a2ffde14565e8bc6"]]),
        w("p6w8",72,
          [["Retrospectiva dos 18 meses: o que mudou na sua forma de pensar e agir?",""]],
          [["Platform handoff: documentar runbooks e decisões para continuidade",""]],
          [["Security: revisão final de postura — entrada na Staff Orbit",""]],
          [["Observabilidade: revisão final — cobertura e maturidade do sistema atual",""]],
          [["Celebrar conquistas",N+"Celebrar-conquistas-2e7dabadc8df816396f9e3342fae2d99"],
           ["Definir metas para próximo ciclo",N+"Definir-metas-para-pr-ximo-ciclo-2e7dabadc8df81f9b694ee690a61dfc2"]]),
      ]},
    ]
  },
  // ── FASE 7 ── Staff Orbit (Meses 19–36, Semanas 73–144) ──────────────────
  {
    id:"p7",num:7,title:"Staff Orbit",period:"Meses 19–36",cert:"🌍 Mercado global",
    goal:"Escalar a organização via plataforma. Definir direção técnica. Impacto em múltiplos times.",
    months:[
      { title:"Meses 19–21: Plataforma em Escala", weeks:[
        w("p7w1",73,
          [["Organizational mapping: identificar todos os stakeholders de plataforma",""],
           ["Definir metas para próximo ciclo (3 anos)",N+"Definir-metas-para-pr-ximo-ciclo-2e7dabadc8df81f9b694ee690a61dfc2"]],
          [["eBPF fundamentals: o que é, por que importa para platform engineering","https://ebpf.io/what-is-ebpf/"]],
          [["Platform strategy doc: escrever o 1-pager de estratégia da plataforma",""]],
          [["SLO federation: múltiplos times, 1 dashboard — implementar",""]],
          [["Mentoria: formalizar estrutura de mentoria para 2 engenheiros",""],
           ["Prática: Mentorar colega em tópico específico",N+"Pr-tica-Mentorar-colega-em-t-pico-espec-fico-2e7dabadc8df81c7afa4d7cd1b5cca0e"]]),
        w("p7w2",77,
          [["Sociotechnical systems: Team Topologies + arquitetura — aplicar no org","https://teamtopologies.com/book"]],
          [["Progressive delivery v2: feature flags + Argo Rollouts analysis","https://argoproj.github.io/argo-rollouts/"]],
          [["Platform observability: golden path para observar novos serviços",""]],
          [["SRE at scale: como Google/Meta aplicam SRE — lições aplicáveis","https://sre.google/books/"]],
          [["Mentoria: expanding — identificar 3º engenheiro para mentorar",""],
           ["Staff Engineer path vs Management",N+"Staff-Engineer-path-vs-Management-2e7dabadc8df8179afdeec579b9c4824"]]),
        w("p7w3",81,
          [["Engineering strategy: como escrever uma engineering strategy eficaz","https://lethain.com/setting-engineering-org-values/"]],
          [["Cluster fleet management: Fleet, ArgoCD multi-cluster, Cluster API","https://cluster-api.sigs.k8s.io/"]],
          [["Compliance automation: SOC2, ISO27001 — controles como código","https://www.vanta.com/"]],
          [["SLO for business: traduzir SLOs técnicos em impacto de negócio real",""]],
          [["Liderar: facilitar quarterly planning técnico para o org",""],
           ["Networking strategy",N+"Networking-strategy-2e7dabadc8df8188bbf3e70d8bc10751"]]),
        w("p7w4",84,
          [["Retrospectiva Meses 19–21: impacto medido — o que mudou no org?",""]],
          [["K8s: deep dive em área específica ainda não dominada","https://landscape.cncf.io/"]],
          [["FinOps: showback dashboard para todas as tribos/times da empresa",""]],
          [["Confiabilidade: relatório trimestral para liderança — formato executivo",""]],
          [["Talk ou publicação: artefato técnico relevante — publicar este mês",""],
           ["Prática: Publicar artigo",N+"Pr-tica-Publicar-artigo-2e7dabadc8df819ea96de35ee7a46228"]]),
      ]},
      { title:"Meses 22–24: Technical Strategy", weeks:[
        w("p7w5",85,
          [["Technology radar: criar tech radar interno para a empresa","https://www.thoughtworks.com/radar"]],
          [["Kubernetes operators: padrões avançados — level-based vs edge-based","https://book.kubebuilder.io/"]],
          [["Container networking: performance tuning, MTU, eBPF acceleration","https://cilium.io/"]],
          [["SRE Book: releitura com olhar crítico — o que mudou na sua prática?","https://sre.google/sre-book/table-of-contents/"]],
          [["Mentoria: 1 dos mentees está pronto para mentorar outros?",""]]),
        w("p7w6",89,
          [["Platform as product v2: incorporar feedback de 6 meses de métricas",""]],
          [["Cluster lifecycle: upgrade strategy, version skew, canary upgrades em prod","https://kubernetes.io/docs/tasks/administer-cluster/cluster-upgrade/"]],
          [["CSPM: cloud security posture management — implementar Prowler ou Wiz","https://github.com/prowler-cloud/prowler"]],
          [["SLO algebra: combining SLOs, dependencies, composite SLOs","https://sre.google/workbook/implementing-slos/"]],
          [["Engineering writing: publicar artigo em newsletter técnica relevante",""],
           ["Escrever blog post técnico",N+"Escrever-blog-post-t-cnico-2e7dabadc8df815b98f0e5210595fc7a"]]),
        w("p7w7",93,
          [["Strategy review: 6 meses de technical strategy — o que mudou?",""]],
          [["Progressive delivery v3: Argo Rollouts + feature flags + análise automática","https://argoproj.github.io/argo-rollouts/"]],
          [["Supply chain: SBOM para toda a plataforma — inventário completo","https://anchore.com/sbom/"]],
          [["SRE toil: revisão semestral de toil — percentagem de automação atual","https://sre.google/sre-book/eliminating-toil/"]],
          [["Conference talk: apresentar (se aceite) ou publicar slides + post",""],
           ["Participar de meetup/conferência",N+"Participar-de-meetup-confer-ncia-2e7dabadc8df819a8938ce2a3de83458"]]),
        w("p7w8",96,
          [["Retrospectiva Meses 22–24: 6 meses de Technical Strategy",""]],
          [["K8s: área ainda não explorada — escolher e estudar profundamente","https://landscape.cncf.io/"]],
          [["Cloud architecture: revisão arquitetural anual — Well-Architected full review","https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html"]],
          [["Reliability: relatório semestral para liderança — formato executivo",""]],
          [["Celebrar: milestones alcançados — reconhecer time e mentees",""],
           ["Celebrar conquistas",N+"Celebrar-conquistas-2e7dabadc8df816396f9e3342fae2d99"]]),
      ]},
      { title:"Meses 25–36: Engineering Excellence e Legado", weeks:[
        w("p7w9",97,
          [["Platform at scale: lições de empresas que escalam plataformas internas","https://platformengineering.org/blog"]],
          [["eBPF observability: Pixie, Hubble — instrumentação sem agente","https://pixielabs.ai/"]],
          [["Multi-region active-active: implementar failover real em staging",""]],
          [["Global SLOs: definir SLOs para serviços multi-region",""]],
          [["Engineering leadership: coaching vs mentoring — quando usar cada um",""],
           ["Atualizar plano de desenvolvimento",N+"Atualizar-plano-de-desenvolvimento-2e7dabadc8df8104b9b5ce660fdae550"]]),
        w("p7w10",109,
          [["Engineering principles: escrever os engineering principles do time",""]],
          [["eBPF security v2: CO-RE, BTF, portabilidade — production ready?","https://ebpf.io/"]],
          [["Platform compliance: SOC2 readiness — o que a plataforma cobre?",""]],
          [["SLO review: todos os serviços alinhados com business expectations?",""]],
          [["Liderar: facilitar engineering all-hands técnico — state of platform",""],
           ["Technical deep dives",N+"Technical-deep-dives-2e7dabadc8df814a92c7ef20dfd96e52"]]),
        w("p7w11",121,
          [["Principal engineer trajectory: Staff → Principal → Distinguished — o caminho","https://staffeng.com/guides/staff-archetypes/"]],
          [["Platform evolution: como a plataforma precisa evoluir nos próximos 12 meses?",""]],
          [["FinOps: análise de custo vs receita — cost center ou profit center?",""]],
          [["Reliability at business level: SLOs mapeados com SLAs para clientes",""]],
          [["Liderar: facilitar annual technical planning para o ano seguinte",""],
           ["Definir metas para próximo ciclo",N+"Definir-metas-para-pr-ximo-ciclo-2e7dabadc8df81f9b694ee690a61dfc2"]]),
        w("p7w12",144,
          [["3-year retrospective: o que mudou desde o Mês 1?",""]],
          [["Contribuição final: o que deixa para a próxima geração de engenheiros?",""]],
          [["Cloud native: onde está o ecossistema? Onde está você?",""]],
          [["SRE final: 36 meses de reliability — legado medido e documentado",""]],
          [["🎯 36 meses completos — reflita, celebre e planeie o próximo capítulo",""],
           ["Celebrar conquistas",N+"Celebrar-conquistas-2e7dabadc8df816396f9e3342fae2d99"]]),
      ]},
    ]
  },
];
export default function StudyPlanner() {
  const [activePhase, setActivePhase] = useState("p1");
  const [completed, setCompleted] = useState({});
  const [expandedWeeks, setExpandedWeeks] = useState({ p1w1: true });
  const [loaded, setLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    try {
      const c = localStorage.getItem("sreplanner-v3-completed");
      const e = localStorage.getItem("sreplanner-v3-expanded");
      if (c) setCompleted(JSON.parse(c));
      if (e) setExpandedWeeks(JSON.parse(e));
    } catch {}
    setLoaded(true);
  }, []);

  const save = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} };
  const toggleItem = (id) => { const n={...completed,[id]:!completed[id]}; setCompleted(n); save("sreplanner-v3-completed",n); };
  const toggleWeek = (id) => { const n={...expandedWeeks,[id]:!expandedWeeks[id]}; setExpandedWeeks(n); save("sreplanner-v3-expanded",n); };

  const expandAll = () => {
    const phase = PHASES.find(p=>p.id===activePhase);
    const n={...expandedWeeks};
    phase.months.forEach(m=>m.weeks.forEach(wk=>{n[wk.id]=true;}));
    setExpandedWeeks(n); save("sreplanner-v3-expanded",n);
  };
  const collapseAll = () => {
    const phase = PHASES.find(p=>p.id===activePhase);
    const n={...expandedWeeks};
    phase.months.forEach(m=>m.weeks.forEach(wk=>{n[wk.id]=false;}));
    setExpandedWeeks(n); save("sreplanner-v3-expanded",n);
  };

  const allItems = PHASES.flatMap(p=>p.months.flatMap(m=>m.weeks.flatMap(wk=>DAYS.flatMap(d=>wk.days[d.key]||[]))));
  const totalItems = allItems.length;
  const completedCount = allItems.filter(i=>completed[i.id]).length;
  const overallPct = totalItems>0 ? Math.round((completedCount/totalItems)*100) : 0;

  const getPStats = (phase) => {
    const items = phase.months.flatMap(m=>m.weeks.flatMap(wk=>DAYS.flatMap(d=>wk.days[d.key]||[])));
    const done = items.filter(i=>completed[i.id]).length;
    return { done, total:items.length, pct: items.length>0 ? Math.round((done/items.length)*100) : 0 };
  };
  const getWStats = (week) => {
    const items = DAYS.flatMap(d=>week.days[d.key]||[]);
    const done = items.filter(i=>completed[i.id]).length;
    return { done, total:items.length, pct: items.length>0 ? Math.round((done/items.length)*100) : 0 };
  };

  const currentPhase = PHASES.find(p=>p.id===activePhase);
  const pc = PC[activePhase];

  if (!loaded) return (
    <div style={{background:"#0c0c0e",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"#475569",fontFamily:"monospace"}}>
      Carregando planner...
    </div>
  );

  return (
    <div style={{fontFamily:"'IBM Plex Mono','Fira Code',monospace",background:"#0c0c0e",minHeight:"100vh",color:"#e2e8f0",display:"flex",height:"100vh",overflow:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Sora:wght@600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:#2a2a32;border-radius:3px;}
        .pb:hover{background:rgba(255,255,255,0.04)!important;}
        .wh:hover{background:#1a1a22!important;}
        .ir:hover{background:rgba(255,255,255,0.03)!important;}
        .lb:hover{opacity:1!important;}
        .cb:hover{background:#1e1e28!important;}
        .sb{width:220px;min-width:220px;background:#0d0d11;border-right:1px solid #1a1a22;display:flex;flex-direction:column;overflow:hidden;transition:transform .25s ease;flex-shrink:0;}
        .wg{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;}
        .sbo{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:99;}
        .hb{display:none;align-items:center;justify-content:center;width:32px;height:32px;background:#141418;border:1px solid #222228;border-radius:6px;cursor:pointer;color:#94a3b8;font-size:16px;flex-shrink:0;}
        @media(max-width:900px){.wg{grid-template-columns:repeat(3,1fr)!important;}}
        @media(max-width:768px){
          .sb{position:fixed;left:0;top:0;height:100vh;z-index:100;transform:translateX(-100%);}
          .sb.open{transform:translateX(0);}
          .sbo.open{display:block;}
          .hb{display:flex;}
          .wg{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:480px){.wg{grid-template-columns:1fr!important;}}
        .notion-badge{display:inline-flex;align-items:center;gap:3px;font-size:8px;padding:1px 4px;background:#ffffff08;border:1px solid #ffffff15;border-radius:3px;color:#888;margin-left:4px;vertical-align:middle;}
      `}</style>

      {/* Sidebar overlay (mobile) */}
      <div className={`sbo${sidebarOpen?" open":""}`} onClick={()=>setSidebarOpen(false)}/>

      {/* Sidebar */}
      <div className={`sb${sidebarOpen?" open":""}`}>
        <div style={{padding:"18px 14px 14px",borderBottom:"1px solid #1a1a22"}}>
          <div style={{fontFamily:"'Sora',sans-serif",fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:2}}>Platform Eng.</div>
          <div style={{fontFamily:"'Sora',sans-serif",fontSize:10,fontWeight:600,color:"#475569",marginBottom:14}}>Staff Roadmap · 3 Anos</div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#475569",marginBottom:5}}>
            <span>Progresso total</span>
            <span style={{color:"#f59e0b",fontWeight:600}}>{overallPct}%</span>
          </div>
          <div style={{height:3,background:"#1a1a22",borderRadius:2}}>
            <div style={{height:"100%",background:"linear-gradient(90deg,#f59e0b,#fbbf24)",borderRadius:2,width:`${overallPct}%`,transition:"width .5s ease"}}/>
          </div>
          <div style={{fontSize:10,color:"#334155",marginTop:5}}>{completedCount}/{totalItems} itens</div>
        </div>
        <div style={{flex:1,overflowY:"auto",paddingTop:4}}>
          {PHASES.map(phase=>{
            const s=getPStats(phase);
            const isA=phase.id===activePhase;
            const c=PC[phase.id];
            return (
              <div key={phase.id} className="pb"
                onClick={()=>{setActivePhase(phase.id);if(window.innerWidth<=768)setSidebarOpen(false);}}
                style={{padding:"9px 14px",borderLeft:`3px solid ${isA?c:"transparent"}`,background:isA?`${c}12`:"transparent",cursor:"pointer",transition:"all .2s"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}>
                  <span style={{fontSize:10,fontWeight:600,color:isA?c:"#64748b"}}>FASE {phase.num}</span>
                  <span style={{fontSize:10,color:s.pct===100?"#22c55e":"#475569"}}>{s.pct}%</span>
                </div>
                <div style={{fontSize:12,color:isA?"#f1f5f9":"#64748b",fontWeight:500,marginBottom:2}}>{phase.title}</div>
                <div style={{fontSize:10,color:"#334155",marginBottom:6}}>{phase.period}</div>
                <div style={{height:2,background:"#1a1a22",borderRadius:1}}>
                  <div style={{height:"100%",borderRadius:1,background:c,width:`${s.pct}%`,opacity:isA?1:0.4,transition:"width .4s ease"}}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main */}
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        {/* Header */}
        <div style={{padding:"14px 20px",borderBottom:"1px solid #1a1a22",background:"#0f0f14",flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <button className="hb" onClick={()=>setSidebarOpen(o=>!o)}>☰</button>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                  <span style={{padding:"2px 8px",background:`${pc}18`,border:`1px solid ${pc}35`,borderRadius:4,fontSize:10,color:pc,fontWeight:600}}>FASE {currentPhase.num} · {currentPhase.period}</span>
                  <span style={{padding:"2px 8px",background:"#141418",border:"1px solid #222228",borderRadius:4,fontSize:10,color:"#64748b"}}>{currentPhase.cert}</span>
                </div>
                <div style={{fontFamily:"'Sora',sans-serif",fontSize:17,fontWeight:700,color:"#f1f5f9",marginBottom:4}}>{currentPhase.title}</div>
                <div style={{fontSize:11,color:"#475569",maxWidth:580}}>{currentPhase.goal}</div>
              </div>
            </div>
            <div style={{display:"flex",gap:6,flexShrink:0}}>
              <button className="cb" onClick={expandAll} style={{padding:"5px 12px",fontSize:10,color:"#94a3b8",background:"#141418",border:"1px solid #222228",borderRadius:5,cursor:"pointer"}}>↓ Expandir tudo</button>
              <button className="cb" onClick={collapseAll} style={{padding:"5px 12px",fontSize:10,color:"#94a3b8",background:"#141418",border:"1px solid #222228",borderRadius:5,cursor:"pointer"}}>↑ Recolher tudo</button>
            </div>
          </div>
          <div style={{display:"flex",gap:6,marginTop:12,flexWrap:"wrap"}}>
            {DAYS.map(d=>(
              <div key={d.key} style={{display:"flex",alignItems:"center",gap:5,padding:"3px 8px",background:"#0d0d11",border:"1px solid #1a1a22",borderRadius:20,fontSize:10}}>
                <span>{d.icon}</span><span style={{color:d.color,fontWeight:500}}>{d.label}</span><span style={{color:"#334155"}}>—</span><span style={{color:"#475569"}}>{d.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{flex:1,overflowY:"auto",padding:"16px 20px"}}>
          {currentPhase.months.map(month=>(
            <div key={month.title} style={{marginBottom:28}}>
              <div style={{fontSize:10,fontWeight:600,color:"#334155",letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:10,paddingBottom:8,borderBottom:"1px solid #141418"}}>
                ◆ {month.title}
              </div>
              {month.weeks.map(week=>{
                const ws=getWStats(week);
                const isExp=expandedWeeks[week.id];
                const allDone=ws.total>0&&ws.done===ws.total;
                return (
                  <div key={week.id} style={{marginBottom:6,border:`1px solid ${isExp?"#1e1e2a":"#161620"}`,borderRadius:8,overflow:"hidden",background:"#0f0f14"}}>
                    <div className="wh" onClick={()=>toggleWeek(week.id)}
                      style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",cursor:"pointer",background:isExp?"#141418":"transparent",transition:"background .15s"}}>
                      <div style={{display:"flex",alignItems:"center",gap:10}}>
                        <div style={{width:26,height:26,borderRadius:5,background:allDone?"#16532d":isExp?`${pc}1a`:"#161620",border:`1px solid ${allDone?"#22c55e40":isExp?`${pc}40`:"#1e1e28"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:600,color:allDone?"#22c55e":isExp?pc:"#475569"}}>
                          {allDone?"✓":week.num}
                        </div>
                        <div>
                          <span style={{fontSize:12,color:isExp?"#e2e8f0":"#64748b",fontWeight:500}}>Semana {week.num}</span>
                          {ws.done>0&&<span style={{fontSize:10,color:allDone?"#22c55e":"#64748b",marginLeft:8}}>{ws.done}/{ws.total}</span>}
                        </div>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:10}}>
                        <div style={{width:60,height:2,background:"#1a1a22",borderRadius:1}}>
                          <div style={{height:"100%",borderRadius:1,background:allDone?"#22c55e":pc,width:`${ws.pct}%`,transition:"width .3s ease"}}/>
                        </div>
                        <span style={{fontSize:10,color:"#2a2a38"}}>{isExp?"▲":"▼"}</span>
                      </div>
                    </div>
                    {isExp&&(
                      <div className="wg" style={{padding:"0 12px 12px"}}>
                        {DAYS.map(day=>{
                          const items=week.days[day.key]||[];
                          const dayDone=items.filter(i=>completed[i.id]).length;
                          return (
                            <div key={day.key} style={{background:"#0b0b10",border:"1px solid #161620",borderTop:`2px solid ${day.color}25`,borderRadius:6,padding:"10px 8px"}}>
                              <div style={{fontSize:10,fontWeight:600,color:day.color,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                <span>{day.icon} {day.label}</span>
                                {items.length>0&&<span style={{opacity:.5}}>{dayDone}/{items.length}</span>}
                              </div>
                              {items.map(item=>{
                                const done=completed[item.id];
                                const isNotion=item.url&&item.url.includes("notion.so");
                                return (
                                  <div key={item.id} className="ir"
                                    style={{display:"flex",alignItems:"flex-start",gap:6,marginBottom:5,padding:"5px 5px",borderRadius:5,background:done?"#0a1f13":"transparent",border:`1px solid ${done?"#16532d30":"transparent"}`,cursor:"pointer",transition:"background .15s"}}
                                    onClick={()=>toggleItem(item.id)}>
                                    <div style={{width:13,height:13,borderRadius:3,border:`1.5px solid ${done?"#22c55e":"#2a2a38"}`,background:done?"#22c55e":"transparent",flexShrink:0,marginTop:2,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .15s"}}>
                                      {done&&<span style={{fontSize:8,color:"#000",fontWeight:700}}>✓</span>}
                                    </div>
                                    <div style={{flex:1,minWidth:0}}>
                                      <div style={{fontSize:10,color:done?"#334155":"#8892a4",lineHeight:1.5,textDecoration:done?"line-through":"none",transition:"all .15s",wordBreak:"break-word"}}>
                                        {item.text}
                                        {isNotion&&<span className="notion-badge">N</span>}
                                      </div>
                                      {item.url&&(
                                        <a href={item.url} target="_blank" rel="noopener noreferrer"
                                          onClick={e=>e.stopPropagation()} className="lb"
                                          style={{fontSize:9,color:isNotion?"#a855f7":day.color,opacity:.55,textDecoration:"none",marginTop:2,display:"inline-block",transition:"opacity .15s"}}>
                                          {isNotion?"→ Notion":"→ recurso"}
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
      </div>
    </div>
  );
}
