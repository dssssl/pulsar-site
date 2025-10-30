import React from 'react';

import Button from '@site/src/components/ui/Button/Button';
import Parallax from './Parallax/Parallax';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import s from './ShortInfo.module.css';
import ScreenTitle from '../ui/ScreenTitle/ScreenTitle';

const versions = require("@site/versions.json");
const latestVersion = versions[0];

const ShortInfo: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={`${s.block}`}>
      <div className={`${s.container} ${s.short_container}`}>
        <Parallax>
          <div className={s.docs_container}>
            <h1 className={s.header}>
              <span className={s.title}>Apache Pulsar™</span><br />
              <span className={s.subtitle}>云原生的分布式消息与流式平台</span>
            </h1>
            <span className={s.text}>Apache Pulsar 是面向云环境构建的开源分布式消息与流式处理平台。</span>

            <div className={s.buttons}>
              <Button
                title='浏览文档'
                variant='action'
                href={`${siteConfig.baseUrl}docs/${latestVersion}`}
              />
              <Button
                title='快速开始'
                variant='regular'
                href={`${siteConfig.baseUrl}docs/${latestVersion}/concepts-overview`}
              />
            </div>

            <p className={s.case_studies}>
              Pulsar 在不同规模的数百家公司中稳定运行，每秒可处理数百万条消息。
              <br />
              <a href="/case-studies">查看案例研究</a>
            </p>
          </div>
        </Parallax>
      </div>

      <div className={s.fullsize_container}>
        <div className={s.blur} />

        <div className={s.container}>
          <div className={s.info_container}>
            <ScreenTitle>
              什么是 Pulsar
            </ScreenTitle>

            <p>
              Apache Pulsar 是一体化的消息与流式平台。
              消息既可以逐条消费并确认，也可以以流式方式消费，端到端延迟<strong>低于 10 毫秒</strong>。
              分层架构支持在数百个节点之间<strong>快速扩展</strong>，并且<strong>无需迁移存量数据</strong>。
            </p>

            <p>
              Pulsar 内置<strong>多租户</strong>能力，可实现资源隔离和访问控制，支持跨地域的<strong>地理复制</strong>、<strong>分层存储</strong>以及六种官方客户端语言。
              单个集群最多可支撑一百万个独立主题，帮助简化应用架构。
            </p>

            <p>
              Pulsar 是 Apache 软件基金会的十大活跃项目之一，拥有充满活力的社区与用户，覆盖初创公司到大型企业。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShortInfo;
