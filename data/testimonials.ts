export type Testimonial = {
  company: string;
  author: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    author: "Greg Methvin",
    company: "Iterable",
    text:
      "Pulsar 独特地同时支持流式和队列场景，并提供丰富功能，足以替代我们架构中使用的多种分布式消息技术。Pulsar 覆盖了我们在 Kafka、RabbitMQ 与 SQS 上的全部需求，让我们能够专注于围绕同一个统一系统构建经验和工具。",
  },
  {
    author: "Weisheng Xie",
    company: "Orange Financial",
    text:
      "Pulsar 是构建我们统一数据处理栈的理想选择。配合 Spark 等统一计算引擎，Apache Pulsar 明显提升了我们风控决策部署的效率，使我们能够为商户和消费者提供安全、便捷且高效的服务。",
  },
  {
    author: "Kirill Merkushev",
    company: "Vivy",
    text:
      "我们重点关注的特性包括分层存储（因为我们计划实现无限保留，对事件溯源非常重要）、灵活的订阅模型（当前使用独占订阅，未来还想体验按键订阅）、支持证书与 JWT 等多种认证方式以及简便的部署体验。",
  },
  {
    author: "Jowanza Joseph",
    company: "One Click Retail",
    text:
      "得益于 Pulsar 将消息与流处理独特地结合在一起，我们得以用一个在 Kubernetes 环境下无缝运行的解决方案替换多套系统。",
  },
  {
    author: "Dongliang Jiang",
    company: "Appen China",
    text:
      "Apache Pulsar 在我们的 AI 数据平台中发挥着关键作用，作为数据湖连接所有业务能力，并让各个组件实现解耦。",
  },
  {
    author: "Hang Chen",
    company: "BIGO",
    text:
      "Apache Pulsar 的分层架构以及低延迟并保证持久化、水平扩展、多租户等特性，帮助我们解决了大量生产问题。我们使用 Apache Pulsar 构建消息处理系统，尤其应用在实时 ETL、短视频推荐以及实时数据报表场景。",
  },
  {
    author: "Rocky Jin",
    company: "EMQ",
    text:
      "Apache Pulsar 原生支持无服务器函数，数据一到就可以以流式方式处理，并提供线程、进程、容器等灵活的部署选项。我们只需关注计算逻辑，而无需面对复杂的配置和运维，让流式平台能够更快、更便捷地搭建。",
  },
  {
    author: "Bin Liu",
    company: "Ksyun",
    text:
      "借助 Pulsar，我们可以轻松扩容或合并分区，并处理数以百万计的主题。",
  },
];

export default testimonials;
