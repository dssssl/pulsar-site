import React, { ReactNode } from 'react';

export type UseCase = {
    icon: 'user' | 'arrow' | 'speech' | 'check';
    title: string;
    text: string;
    smallText: string;
    docsLink: string;
    caseLink: boolean;
};
const useCases: UseCase[] = [
    {
        icon: "user",
        title: "全公司统一的消息平台",
        text: "<p>许多公司会采用多种消息技术（如 Kafka、ActiveMQ、RabbitMQ 等），有时由不同团队分别负责其服务。有些公司希望整合这些技术，改用一个集中管理的消息平台，同时又能为各团队保留足够的自助与灵活性。</p><p>Pulsar 能够实现这一目标：<ul><li>覆盖全部消息场景：流处理、消息队列等。</li><li>多租户、细粒度访问控制、地理复制以及对 K8s 的支持，使其成为理想的多租户平台。</li></ul></p><p>整合后的额外价值包括：<ul><li>简化运维，组织只需学习一套技术并维护一个系统即可服务多个团队。</li><li>加速团队与系统之间的集成。过去在不同系统之间（如 Kafka 与 RabbitMQ）构建桥接既耗时又降低效率，统一平台后集成微服务更加容易。</li><li>所有服务运行在同一平台上，能够构建服务目录，提升发现效率。</li></ul></p>",
        smallText: "许多公司会采用多种消息技术（如 Kafka、ActiveMQ、RabbitMQ 等），有时由不同团队分别负责这些服务。",
        docsLink: "concepts-overview/",
        caseLink: true
    },
    {
        icon: "check",
        title: "任务队列",
        text: "<p>在许多公司中，需要任务队列系统来提交任务并确保执行完成（包括出错处理），同时限制某些任务的处理能力，并将任务分发给一组工作进程。典型场景包括视频转码、生成图片缩略图、UI 中按钮点击需在不到 10 毫秒内返回但在后台执行的操作等。</p><p>Pulsar 通过共享订阅与逐条确认原生支持这些能力。共享订阅可以在大量消费者之间无序分发消息，而逐条确认允许消费者标记某条消息已完成。</p><p>Pulsar 的水平扩展能力进一步放大了这一特性，尤其是能够快速扩容。由于设计上避免了数据迁移，新加入的节点可以立即承担负载。</p>",
        smallText: "许多公司都需要任务队列系统来提交并可靠执行任务，同时具备错误处理能力。",
        docsLink: "cookbooks-message-queue/",
        caseLink: false
    },
    {
        icon: "arrow",
        title: "可扩展的 RPC",
        text: "<p>在微服务架构中，服务之间需要持续通信。常见方式是直接调用 API，但这需要<ul><li>服务发现系统，将新实例注册到可用实例列表中；</li><li>负载均衡系统，在实例之间分摊调用；</li><li>网络规则，定义哪些服务可以访问哪些网络；</li><li>集中配置系统，统一管理服务地址；</li><li>重试与熔断机制，处理请求失败。</li></ul></p><p>借助 Apache Pulsar，还可以通过主题与消息实现间接 API 调用。每个服务拥有一个由所有实例共享的主题，用于负载均衡请求；每个请求方拥有一个独立主题用于接收响应。服务 A 的实例 1 向服务 B 的共享主题发送消息，服务 B 随后将响应发送到与实例 1 关联的主题。</p><p>其他消息系统也能实现类似方案，但 Pulsar 具备显著优势：<ul><li>当系统扩展到 5000 甚至 5 万个实例时，为每个实例准备一个响应主题在其他系统里要么做不到，要么成本极高，因此很多人只能将所有服务响应复用到少量主题中，迫使实例读取并过滤大部分消息，代价昂贵。</li><li>Pulsar 支持水平扩展，面对请求洪峰时可在几分钟内完成扩容。</li></ul></p>",
        smallText: "在微服务场景下，可扩展的 RPC 通过主题实现间接 API 通信，既简化负载均衡，又避免复杂的网络规则，还能通过共享主题与独立响应主题高效支撑成千上万实例。",
        docsLink: "concepts-broker-load-balancing-benefits/#scalability",
        caseLink: false
    },
    {
        icon: "speech",
        title: "关键任务应用",
        text: "<p>对于关键任务应用来说，必须提供最高级别的容错能力。Pulsar 将以下特性集成在同一系统中，从而独具优势：<ul><li>消息会复制到多个 BookKeeper 节点。RabbitMQ 或 ActiveMQ 等系统在设计之初并未提供这一能力，多数情况下是在后台复制但写入已经返回成功。</li><li>当写入应用收到确认时，消息已经落盘，即使机器突然断电也不会丢失数据。有些系统更看重性能而无法让你在可靠性之间权衡，而 Pulsar 允许根据场景自由选择。</li></ul></p><p>这类能力非常适合银行、支付、订单等场景，它们希望彻底消除持有副本的节点同时重启并导致内存数据丢失的风险。Pulsar 正是为这些需求而生。</p>",
        smallText: "关键任务应用需要最高级别的容错保障，Pulsar 将多项能力融合在一个系统里：",
        docsLink: "security-overview/",
        caseLink: false
    },
];

export default useCases;
