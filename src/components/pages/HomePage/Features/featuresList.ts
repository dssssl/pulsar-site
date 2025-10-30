import Scalability from './pictures/scalability.svg';
import MessagingAndStreaming from './pictures/messaging&streaming.svg';
import GeoReplication from './pictures/geoReplication.svg';
import MultiTenancy from './pictures/multiTenancy.svg';
import Balancing from './pictures/balancing.svg';
import MultiLanguage from './pictures/multiLanguage.svg';
import Integrations from './pictures/integrations.svg';
import ServerlessFunctions from './pictures/serverlessFunctions.svg';
import SupportsUp from './pictures/supportsUp.svg';

const featuresList = [
  {
    picture: Scalability,
    title: '极速水平扩展',
    text: '通过水平扩展应对激增的负载。独特的架构与独立的存储层让集群能够在数秒内扩容，应对突发流量。',
    viewBox: '0 0 300 128',
  },
  {
    picture: MessagingAndStreaming,
    title: '低延迟的消息与流式处理',
    text: '既支持逐条确认（类似 RabbitMQ），也支持按分区累积确认（类似偏移量）。可在数百节点规模下支撑分布式任务队列或保持顺序的数据流，并保持小于 10 毫秒的低延迟。',
    viewBox: '0 0 300 128',
  },
  {
    picture: GeoReplication,
    title: '无缝的地理复制',
    text: '通过跨地域复制保护业务免受整个可用区故障的影响。可在远距离 Pulsar 集群之间灵活配置复制策略，并独特地支持客户端自动故障转移到健康集群。',
    viewBox: '0 0 125 128',
  },
  {
    picture: MultiTenancy,
    title: '多租户一等公民',
    text: '借助租户在同一集群内服务整个组织。通过租户策略对数据与操作进行访问控制，并在需要最大限度的邻噪隔离时将特定 Broker 绑定给指定租户。',
    viewBox: '0 0 250 128',
  },
  {
    picture: Balancing,
    title: '自动负载均衡',
    text: '新增或移除节点后，Pulsar 会自动对主题分片进行负载均衡。热点分片会被自动拆分并均匀分布到各个 Broker。',
    viewBox: '0 0 125 128',
  },
  {
    picture: MultiLanguage,
    title: '官方多语言支持',
    text: '官方维护的 Pulsar 客户端覆盖 Java、Go、Python、C++、Node.js 与 C#。',
    viewBox: '0 0 125 128',
  },
  {
    picture: Integrations,
    title: '官方第三方集成',
    text: 'Pulsar 官方维护与 MySQL、Elasticsearch、Cassandra 等主流系统的连接器，可轻松实现数据源与数据汇的双向流动。',
    viewBox: '0 0 125 128',
  },
  {
    picture: ServerlessFunctions,
    title: '无服务器函数',
    text: '使用 Pulsar Functions 原生编写并部署函数，支持用 Java、Go 或 Python 处理消息，无需部署完整应用，并内置 Kubernetes 运行时。',
    viewBox: '0 0 175 128',
  },
  {
    picture: SupportsUp,
    title: '支持百万级主题',
    text: "凭借独特架构，Pulsar 在单个集群中即可支撑多达一百万个主题，避免将多路数据复用到一个主题，从而简化应用架构。",
    viewBox: '0 0 150 128',
  },
];

export default featuresList;