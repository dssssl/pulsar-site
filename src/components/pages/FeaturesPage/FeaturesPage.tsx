import React from 'react';
import s from './FeaturesPage.module.css'
import Card, { CardProps } from './Card/Card';
import Layout from '@theme/Layout';
const versions = require("@site/versions.json");
import Button from '@site/src/components/ui/Button/Button';
const latestVersion = versions[0];

const cards: CardProps[] = [
  {
    className: s.RapidHorizontalScalabilityCard,
    rightContent: (
      <div className={s.RapidHorizontalScalabilityCardMainContent}>
        <h3>极速水平扩展</h3>
        <p>
          借助独特的<a target='_blank' href='https://pulsar.apache.org/docs/concepts-architecture-overview/'>架构设计</a>与分离的存储层，集群可以在几秒钟内横向扩展，应对突发的流量高峰。
        </p>
      </div>
    ),
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          Apache Pulsar 服务器（Broker）不会把收到的消息写入本地磁盘，而是写入另一个名为 <a target='_blank' href='https://bookkeeper.apache.org/'>Apache BookKeeper</a> 的系统——一个多节点的分布式追加写虚拟存储（Ledger）。因此 Broker 是无状态的；当遇到突发流量时，只需在几秒钟内新增节点并自动分配主题即可，无需在 Pulsar 内部搬移任何数据（下方会提到负载均衡功能）。<br />
          主题由一系列 Ledger 组成。活动 Ledger 会按照可配置的大小或时间滚动关闭，并创建新的 Ledger。<br />
          Apache BookKeeper 同样可以在几秒钟内扩容。新增节点时无需迁移数据。由于正在写入的主题会不断切换活动 Ledger，新的 BookKeeper 节点会通过统一的选择策略承载新的文件，从而立即分担写入压力。也就是说，新节点能够立刻帮助缓解突发流量。
        </p>
      )
    }
  },
  {
    className: s.LowLatencyCard,
    leftContent: (
      <div className={s.LowLatencyCardMainContent}>
        <h3>低延迟的消息与流式处理</h3>
        <p>
          既可逐条确认（类似 RabbitMQ），也可按分区累积确认（类似偏移量）。支持分布式工作队列或大规模（数百节点）、低于 10 毫秒延迟的顺序数据流等用例。
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      bottomContent: (
        <div>
          <p className={s.LowLatencyCardSingleColumn}  style={{ marginBottom: '2rem', marginTop: '2rem'}}>
            Pulsar 支持将消息写入主题或分区主题（按分区划分的主题）。消息可以通过多种方式消费：
          </p>
          <div className={s.LowLatencyCardSingleColumn}>
            <ul>
              <li>
                <p className={s.SmallText}><a href='https://pulsar.apache.org/docs/4.0.x/concepts-messaging/#failover--partitioned-topics' target='_blank' title='Streaming'>流式处理：</a> 按分区、保持顺序消费，并按分区累积确认特定消息 ID，类似 Apache Kafka 的工作方式。</p>
              </li>
              <li style={{ paddingTop: '2rem'}}>
                <p className={s.SmallText}><a href='https://pulsar.apache.org/docs/4.0.x/concepts-messaging/#shared' target='_blank' title='Messaging'>消息队列：</a> 无序消费，可逐条确认消息，类似 RabbitMQ 的用法。无论分区数量多少，都能同时运行大量消费者，非常适合分布式工作队列（作业）和加速机器学习工作负载。</p>
              </li>
              <li style={{ paddingTop: '2rem' }}>
                <p className={s.SmallText}><a href='https://pulsar.apache.org/docs/4.0.x/concepts-messaging/#key_shared' target='_blank' title='Messaging in-order'>按键顺序的消息：</a> 按消息键保持顺序，可按需扩展消费者数量。Broker 会将不同键平均分配给消费者，同一键的消息始终由同一个消费者接收，从而保证按键顺序处理。</p>
              </li>
            </ul>
          </div>
          <div className={s.LowLatencyCardSingleColumn} style={{ marginTop: '2rem', paddingBottom: '7rem'}}>
            <p className={s.SmallText}>
              Pulsar 在消息写入和端到端延迟上都能维持低于 10 毫秒的延迟，并可扩展到数百节点的大型集群。
            </p>
          </div>
        </div>
      )
    }
  },
  {
    className: s.SupportManyTopicsCard,
    leftContent: (
      <div className={s.SupportManyTopicsCardMainContent}>
        <h3>单集群支持 100 万主题</h3>
        <p>
          Pulsar 独特的架构使单个集群即可承载高达 100 万个主题，无需将多条流复用到同一主题即可简化系统架构。
        </p>
      </div>

    ),
    showMore: {
      position: 'left',
      leftContent: (
        <p className={s.SmallText}>
          Pulsar 将消息持久化到 Apache BookKeeper 中的虚拟追加写文件（Ledger）。由于并非每个主题都对应本地物理文件，因此不会受到文件描述符数量的限制，可轻松支持 100 万个主题，帮助你构建简化的应用架构。与传统系统相比，无需再将多条流复用到一个主题中。<a href="https://www.youtube.com/watch?t=173&v=vE7aKZT9r7k&feature=youtu.be" target="_blank" title="Cogito case study">Cogito 案例</a>（<a href="https://pulsar-summit.org/" target="_blank" title="Pulsar Summit">Pulsar 峰会</a>分享）就是绝佳示例。
        </p>
      )
    }
  },
  {
    className: s.MultiTenancyCard,
    leftContent: (
      <div>
        <h3 className={s.MultiTenancyCardHeader}>多租户，设计之初就支持</h3>
        <p>
          Tenant 层提供用户隔离。可使用 RBAC 赋权，独立配置身份认证插件，并限制租户访问的集群范围。
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      leftContent: (
        <p className={s.SmallText}>
          Pulsar 通过 <a target='_blank' href='https://pulsar.apache.org/docs/concepts-multi-tenancy/'>租户</a> 提供多租户能力。租户可按需创建并配置，划分资源和访问权限。租户由 <a target='_blank' href='https://pulsar.apache.org/docs/concepts-multi-tenancy/#namespaces'>命名空间</a> 组成，命名空间再包含主题。多租户与 <a target='_blank' href='https://pulsar.apache.org/docs/security-authorization/'>细粒度授权</a> 功能协同使用效果最佳。租户具有租户管理员列表，可为特定命名空间或主题授予 produce/consume/functions 等权限。租户还支持配置特定的 <a target='_blank' href="https://pulsar.apache.org/docs/security-overview/#authentication">认证插件</a>，例如一个租户使用 <a target='_blank' href='https://pulsar.apache.org/docs/security-jwt/'>JWT</a>，另一个使用 <a target="_blank" href="https://pulsar.apache.org/docs/security-tls-authentication/">mTLS</a>。<br />
          此外，若一个 Pulsar 实例包含多个集群，可以<a target="_blank" href="https://pulsar.apache.org/docs/admin-api-tenants/#create">限制</a>租户仅使用其中某个集群。租户机制帮助企业内不同部门自助管理数据安全与权限。
        </p>
      )
    }
  },
  {
    className: s.LoadBalancingCard,
    leftContent: (
      <div className={s.LoadBalancingCardMainContent}>
        <h3>自动负载均衡</h3>
        <p>
          增减节点时，Pulsar 会自动为主题分片进行负载均衡。热点分片会被自动拆分并均衡分布到多个 Broker。
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      leftContent: (
        <p className={s.SmallText}>
          Pulsar 支持自动将主题在各 Broker 之间<a target="_blank" href='https://pulsar.apache.org/docs/administration-load-balance/'>负载均衡</a>，使 CPU、内存与流量保持均衡。由于 Broker 无状态，因此当主题在 Broker 之间迁移时无需移动数据。<br />
          Pulsar 支持多达 100 万个主题，均衡单位是主题分片（通过哈希划分的一组主题）。负载均衡器会在 Broker 间移动分片，随之移动该分片下所有主题。<br />
          当分片负载过高时，会<a target='_blank' href='https://pulsar.apache.org/docs/administration-load-balance/'>自动拆分</a>，从而继续分散负载，直至集群达到平衡。
        </p>
      )
    }
  },
  {
    className: s.K8sReadyCard,
    leftContent: (
      <div>
        <h3>K8s 原生（云原生）</h3>
        <p>
          Pulsar 自诞生起即面向云环境。Broker 无状态、BookKeeper 避免数据搬迁，因此节点扩缩容都非常迅速。
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      bottomContent: (
        <div className={s.K8sReadyCardMore}>
        <p className={s.SmallText}>
          <p><strong>原生支持扩缩容：</strong></p>
          <ul>
            <li>
            Broker 无状态（消息存储在 BookKeeper 中），因此扩容时无需迁移数据。结合自动负载均衡，新节点会自动接收均衡后的主题。
            </li>
            <li>
            Apache BookKeeper 在扩容时不会重新分布数据。主题是一串 Ledger，最后一个是活动 Ledger，并会快速轮换，因此新加入的 BookKeeper 节点几乎立即就能分担写入负载。
            </li>
          </ul>
          Pulsar 内置 Helm Chart，涵盖运行所需的所有组件：Broker、BookKeeper、Zookeeper、Function Worker 等。
        </p>
      </div>
      )
    }
  },
  {
    className: s.GeoReplicationCard,
    leftContent: (
      <div className={s.GeoReplicationCardMain}>
        <h3>无缝跨地域复制</h3>
        <p>通过跨地域复制抵御整个可用区故障。灵活配置跨远程 Pulsar 集群的复制策略，并支持客户端自动故障转移。</p>
      </div>
    ),
    showMore: {
      position: 'left',
      bottomContent: (
        <div className={s.GeoReplicationCardColumns}>
          <div>
            <p className={s.SmallText}>
              Pulsar 支持 <a target='_blank' href='https://pulsar.apache.org/docs/concepts-architecture-overview/'>Pulsar 实例</a> 的概念：由多个 Pulsar 集群组成，并通过全局元数据存储（如 ZK）互相感知。你可以在集群之间定义 <a target='_blank' href='https://pulsar.apache.org/docs/concepts-replication/#replication-mechanisms'>复制策略</a>，例如 <a target='_blank' href='https://pulsar.apache.org/docs/concepts-replication/#active-active-replication'>主备</a> 或多活等，实现开箱即用的跨地域复制，获得冗余和容灾能力。
            </p>
          </div>
          <div>
            <p className={s.SmallText}>
              集群不仅会复制消息数据，还会复制 <a target='_blank' href='https://pulsar.apache.org/docs/administration-geo/#replicated-subscriptions'>订阅</a>（消费者确认状态）。<br />
              Pulsar 客户端还支持 <a target='_blank' href='https://pulsar.apache.org/docs/concepts-cluster-level-failover/'>自动故障转移</a>。当检测到主集群不可用（通过指定 URL），会自动切换到备集群。由于数据和消费状态均已复制，切换后即可无缝续读。
            </p>
          </div>
        </div>
      )
    }
  },
  {
    className: s.LanguagesCard,
    leftContent: (
      <div className={s.LanguagesCardMain}>
        <h3>官方多语言客户端</h3>
        <p>
          官方维护 Java、Go、Python、C++、Node.js 与 C# 客户端。
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      leftContent: (
        <div className={s.LanguagesCardMore}>
          <p className={s.SmallText}>
            Pulsar 官方维护 Java、Go、Python、C++、Node.js 与 C# 客户端。各语言支持的功能矩阵可在客户端文档中查看。<br />
            社区还提供由第三方开发的非官方客户端，如原生 Node.js、.NET、Haskell、PHP、Rust 和 Scala 等。
          </p>
        </div>
      )
    }
  },
  {
    className: s.TieredStorageCard,
    leftContent: <h3>分层存储，留存无限历史（S3/GCS 等）</h3>,
    rightContent: <p>通过将 BookKeeper 的历史数据无缝下沉至对象存储（如 S3），以极低成本保留全部数据，同时兼顾性能与高可用。</p>,
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          主题由多个 Ledger 构成，只有最新的 Ledger 对写入开放，其余 Ledger 均为不可变状态。<br />
          Pulsar <a target='_blank' href="https://pulsar.apache.org/docs/tiered-storage-overview/">支持</a> 将这些不可变的 Ledger 下沉到分层存储（S3、GCS、Azure Blob 等），并可<a target='_blank' href='https://pulsar.apache.org/reference/#/4.0.x/config/reference-configuration-broker?id=managedledgeroffloaddeletionlagms'>配置</a> 下沉后的 Ledger 在 BookKeeper 中保留的时间。<br />
          该能力让你以低成本实现无限保留。<br />
          Pulsar 会根据 Ledger 所在位置在 BookKeeper 或分层存储之间无缝切换读取，对客户端完全透明。它非常适合将“冷数据”迁移到低成本存储，因为这类数据通常访问频率较低，对读取性能要求也较低。
        </p>
      )
    }
  },
  {
    className: s.SchemaRegistryCard,
    leftContent: <h3>内置模式注册表</h3>,
    rightContent: <p>支持对主题进行模式校验，并为每个新版本执行前向与后向兼容性检查，避免数据格式错误。</p>,
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          Pulsar 内置 <a target='_blank' href='https://pulsar.apache.org/docs/schema-overview/'>模式注册表</a>，可为主题中的消息定义模式。注册表支持演进模式，并内置 <a target='_blank' href='https://pulsar.apache.org/docs/4.0.x/schema-understand/#schema-compatibility-check'>兼容性检查</a>，避免生产或消费不兼容的数据。支持多种模式语言，包括 Avro 与 Protobuf。
        </p>
      )
    }
  },
  {
    className: s.AccessControlCard,
    leftContent: <h3>细粒度访问控制</h3>,
    rightContent: <p>Pulsar 支持用户认证，并可对特定命名空间或主题配置消费、生产等精细权限。</p>,
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          Pulsar 引入 <a target="_blank" href="https://pulsar.apache.org/docs/security-overview/">用户</a> 与权限列表的概念，可针对命名空间或主题配置权限。通过 <a target='_blank' href='https://pulsar.apache.org/reference/#/4.0.x/config/reference-configuration-broker?id=superuserroles'>配置</a> 超级管理员后，可授予其全局权限。每个租户还维护 <a target="_blank" href="https://pulsar.apache.org/docs/admin-api-tenants/#update">租户管理员列表</a>，用于 <a target='_blank' href='https://pulsar.apache.org/docs/admin-api-permissions/'>授予命名空间或主题权限</a>。<br />
          权限包括：生产消息、消费消息、运行函数以及安装 Connector、Sink 与 Source 等。该机制帮助团队自助管理应用数据的访问权限。
        </p>
      )
    }
  },
  {
    className: s.MessagePersistencyCard,
    leftContent: <h3>消息持久性有保障</h3>,
    rightContent: <p>Pulsar 写入 BookKeeper 会确保落盘（fsync），带来极高的故障韧性；如需更高吞吐量可按需关闭。</p>,
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          Pulsar 接收消息后，会通过客户端并行写入默认的 3 个 BookKeeper 节点，至少 2 个节点写入成功才算成功，并向客户端确认。<br />
          BookKeeper 默认将消息写入磁盘的 <a target='_blank' href='https://bookkeeper.apache.org/docs/getting-started/concepts#journals'>日志（journal）</a>，再写入内存，然后才向客户端返回成功。关键在于 BookKeeper 会在 fsync 成功后才算写入成功，并通过批量 fsync 平衡性能。<br />
          这种默认行为非常适合“不丢消息”的场景。如需更高吞吐量，可<a target='_blank' href='https://github.com/apache/bookkeeper/blob/f8d81f7eb861235d5516f7781f6eac70702b3c69/conf/bk_server.conf#L354-L360'>关闭</a> fsync，依赖多副本保障，并由 BookKeeper 的“修复”机制在后台同步数据。
        </p>
      )
    }
  },
  {
    className: s.SeparateComputeFromStorageCard,
    leftContent: (
      <div className={s.SeparateComputeFromStorageCardMain}>
        <h3>计算与存储彻底分离</h3>
        <p style={{ marginBottom: '2rem' }}>Pulsar 独特架构使你可以分别选择最合适的计算与存储实例类型，并支持查询引擎直接从 BookKeeper 并行读取。</p>
      </div>
    ),
    showMore: {
      position: 'left',
      leftContent: (
        <p className={s.SmallText}>
          Pulsar 内置 <a href="https://pulsar.apache.org/docs/4.0.x/io-overview/" target="_blank" title="Pulsar IO">Pulsar IO</a> 框架，便于编写与运行 Connector，将第三方系统数据写入 Pulsar 主题，或把 Pulsar 中的消息写到第三方系统。<br /><br />
          Pulsar 官方维护多种热门 Connector，如 MySQL、Elasticsearch、Cassandra 等，完整列表请参见 <a href='https://pulsar.apache.org/docs/4.0.x/io-connectors/' target='_blank' title='here'>官方文档</a>。<br /><br />
          Pulsar IO 构建在 Pulsar Functions 之上，因此 Connector（无论 Sink 还是 Source）本质都是一个 Pulsar Function，可由 Pulsar Function Worker 按所选运行时（线程、进程或 K8s Pod）运行，并支持并行度配置，将负载均匀分配到多个实例上。
        </p>
      )
    }
  },
  {
    className: s.ServerlessFunctionsCard,
    rightContent: (
      <div className={s.ServerlessFunctionsCardMainContent}>
        <h3>原生无服务器函数</h3>
        <p>
          使用 Pulsar Functions 编写并部署轻量函数。无需部署完整应用，即可用 Java、Go 或 Python 处理消息。内置 Kubernetes 运行时。
        </p>
      </div>
    ),
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          Pulsar 擅长接收消息、以多种方式消费并按需保留。对于简单转换，你不必编写复杂应用或引入 Spark、Flink 等重量级流处理框架。<br /><br />
          Pulsar 提供轻量级流处理框架 <a target='_blank' href='https://pulsar.apache.org/docs/functions-overview/'>Pulsar Functions</a>，可以用单文件 Java、Go 或 Python 编写函数并部署，由 Pulsar Functions 自动运行。函数会针对指定主题的每条消息执行，并可写入任意主题，非常适合执行消息转换，也可承担机器学习训练等更复杂任务。<br /><br />
          Pulsar Functions 支持配置 <a target='_blank' href='https://pulsar.apache.org/docs/functions-deploy-cluster-parallelism/'>并行度</a>，通过 <a target='_blank' href='https://pulsar.apache.org/docs/functions-concepts/#function-worker'>Function Worker</a> 协调执行，并支持 <a target='_blank' href='https://pulsar.apache.org/docs/4.0.x/functions-concepts/#function-runtime'>线程、独立进程或 K8s</a> 等运行时。
        </p>
      )
    }
  },
  {
    className: s.ConnectorsCard,
    leftContent: (
      <div className={s.ConnectorsCardMainContent}>
        <h3>官方第三方 Connector</h3>
        <p>
          使用 Pulsar Functions 原生编写与部署 Connector，无需庞大应用即可用 Java、Go 或 Python 处理消息，内置 Kubernetes 运行时。
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      leftContent: (
        <p className={s.SmallText}>
          Pulsar 内置的 <a target='_blank' href='https://pulsar.apache.org/docs/io-overview/'>Pulsar IO</a> 简化了 Connector 的开发与部署，可轻松在 Pulsar 与第三方系统之间双向传输数据。<br /><br />
          官方维护多种热门第三方 Connector，例如 MySQL、Elasticsearch、Cassandra 等。完整列表请参见 <a target='_blank' href='https://pulsar.apache.org/docs/io-connectors/'>文档</a>。<br /><br />
          Connector 运行在 Pulsar Functions 之上，由 Function Worker 管理，并支持线程、进程或 K8s Pod 等运行时，也支持设置并行度，在多个实例之间分摊工作量。
        </p>
      )
    }
  },
  {
    className: s.SupportLargeMsgsCard,
    leftContent: (
      <div className={s.SupportLargeMsgsCardMain}>
        <h3>支持超大消息</h3>
        <p>
        通过客户端分片能力，Pulsar 可以优雅地处理超大消息。
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      leftContent: (
        <p className={s.SmallText}>
          遇到超大消息时，Pulsar 客户端会自动分片，将消息切分为多个块，消费者再在客户端侧重新组装，还原成完整消息。
        </p>
      )
    }
  },
  {
    className: s.DelayedMsgCard,
    leftContent: (
      <div className={s.DelayedMsgCardMain}>
        <h3>延迟消息</h3>
        <p>
        可以在写入时设定延迟，延迟结束后才可被消费，适合定时任务与指数退避重试。
        </p>
      </div>
    ),
    showMore: {
      position: 'left',
      leftContent: (
        <p className={s.SmallText}>
          Pulsar 支持为消息设置 <a href='https://pulsar.apache.org/docs/4.0.x/concepts-messaging/#delayed-message-delivery' target='_blank' title='given delay'>延迟</a>，到期后才允许被消费；也可设置具体日期时间，用于调度任务。Pulsar 客户端还可利用该能力实现带指数退避的客户端重试。
        </p>
      )
    }
  },
  {
    className: s.LargeConnectedCard,
    leftContent: <h3>支持海量连接消费者</h3>,
    rightContent: <p>无论分区数量多少，都能支持大量消费者同时连接同一主题。</p>,
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          可以通过 <a href='https://pulsar.apache.org/docs/4.0.x/admin-api-topics/#update' target='_blank' title='increasing the number of partitions'>增加分区</a> 来扩展写入吞吐；消费侧可通过增加消费者数量来扩展，与主题的分区数完全解耦，既适用于 <a href='https://pulsar.apache.org/docs/4.0.x/concepts-messaging/#shared' target='_blank' title='out-of-order consumption'>无序消费</a>，也适用于 <a href='https://pulsar.apache.org/docs/4.0.x/concepts-messaging/#key_shared' target='_blank' title='ordered-by-message-key consumption'>按键有序消费</a>。
        </p>
      )
    }
  },
  {
    className: s.Easy2OperateCard,
    leftContent: <h3>易于运维的协调元数据存储</h3>,
    rightContent: <p>Zookeeper 只是众多元数据存储插件之一。Pulsar 将其与核心系统解耦，便于隔离问题，也为未来的可扩展存储打下基础。</p>,
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          Pulsar 的元数据存储是可插拔的，官方支持 Zookeeper 与 etcd，未来还可由社区扩展。Zookeeper 与 etcd 均拥有十年以上的生产经验。<br />
          架构解耦让你能快速定位元数据相关问题，而无需干扰 Pulsar 自身。
        </p>
      )
    }
  },
  {
    className: s.EasyCard,
    leftContent: <h3>运维工具一应俱全</h3>,
    rightContent: <p>内置 REST API 与 CLI，可执行创建主题、删除命名空间等管理操作。</p>,
    showMore: {
      position: 'right',
      rightContent: (
        <p className={s.SmallText}>
          Pulsar 内置 <a href='https://pulsar.apache.org/docs/4.0.x/admin-api-features/' target='_blank' title='REST API'>REST API</a>，可用于创建主题、删除命名空间等管理操作，并配套 Admin CLI，提供 REST API 之上的易用封装。
        </p>
      )
    }
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <Layout
      title='Pulsar 功能亮点'
      description='Apache Pulsar 功能概览'
    >
      <div className={s.FeaturesPage}>
        <div className={s.Cards}>
          <section className={s.Intro}>
            <h1 className={s.IntroTextA}>
              Pulsar 功能亮点
            </h1>
            <h2 className={s.IntroTextB}>
              消息与流式处理的一体化平台。
            </h2>
            <p className={s.IntroTextC}>
              这些功能共同造就了远不止于消息代理的 Apache Pulsar。
            </p>
          </section>

          {cards.map((card, i) => (
            <div key={i} className={s.Card}>
              <Card {...card} />
            </div>
          ))}
        </div>
        <section className={s.MoreFeats}>
          <div className={s.MoreFeatsChild}>
            <h2>更多能力</h2>
            <div className={s.MoreFeatsGrandChild}>
              <div className={s.FlexibleMessageContent}>
                <p><strong>灵活的消息保留策略</strong><br />
                可按时间、大小或未确认消息量控制。</p>
              </div>
            </div>
            <div className={s.MoreFeatsGrandChild}>
              <div className={s.TopicCompactionContent}>
                <p><strong>主题压缩</strong><br />
                仅保留相同键的最新消息。</p>
              </div>
            </div>
            <div className={s.MoreFeatsGrandChild}>
              <div className={s.MessageDeduplicationContent}>
                <p><strong>消息去重</strong><br />
                生产侧即可实现精确一次。</p>
              </div>
            </div>
            <div className={s.MoreFeatsGrandChild}>
              <div className={s.TransactionsContent}>
                <p><strong>事务</strong><br />
                生产与确认原子化完成。</p>
              </div>
            </div>
          </div>
        </section>
        <section className={s.LinkBarFooter}>
          <div>
            <div className={s.LinkBarFooterLeft}>
              <p>
                <strong>准备好开始了吗？</strong><br />
                查阅文档了解 Pulsar 的工作原理。
              </p>
            </div>
            <div className={s.LinkBarFooterRight}>
              <div>
                <Button
                  title='查看文档'
                  variant='negativefull'
                  href={`/docs/${latestVersion}`}
                />
              </div>
              <div>
                <Button
                  title='浏览用户案例'
                  variant='action'
                  href='/case-studies'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default FeaturesPage;
