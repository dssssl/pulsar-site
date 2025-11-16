import React from 'react';
import s from './HowPulsarWorks.module.css'
import ScreenTitle from '../ui/ScreenTitle/ScreenTitle';

// SVGO breaks the illustration. To fix it, we import it as is.
import illustrationDesktop from '!!raw-loader!./img/illustration-desktop.svg';
import illustrationMobile from '!!raw-loader!./img/illustration-mobile.svg';

import BookkeeperIcon from './img/bookkeeper.svg';
import BrokersIcon from './img/brokers.svg';
import ZookeeperIcon from './img/zookeeper.svg';
import ProducerAndConsumerIcon from './img/producer-and-consumer.svg';
import Slider from '@site/src/components/ui/Slider/Slider';

const cards: CardProps[] = [
  {
    title: '生产者与消费者',
    image: <ProducerAndConsumerIcon />,
    children: (
      <p>
        一个 Pulsar 客户端同时包含生产者与消费者。
        生产者向某个主题写入消息。
        消费者从主题读取消息，并且可以逐条确认，也可以一次性确认到特定消息为止。
      </p>
    )
  },
  {
    title: 'Apache ZooKeeper',
    image: <ZookeeperIcon />,
    children: (
      <p>
        Pulsar 和 BookKeeper 使用 Apache ZooKeeper 保存节点间协调所需的元数据，
        例如每个主题包含的账本列表、账本的分段信息以及主题分片到 Broker 的映射。
        ZooKeeper 集群通常由三个节点组成，具备高可用与副本机制。
      </p>
    )
  },
  {
    title: 'Pulsar Broker',
    image: <BrokersIcon />,
    children: (
      <p>
        各个主题（即分区）会分布在不同的 Pulsar Broker 上。
        Broker 接收某个主题的消息后，会将其追加写入托管在 BookKeeper 集群上的活动虚拟文件（即账本）。
        Broker 从缓存（通常）或 BookKeeper 读取消息并投递给消费者，同时接收确认并写入 BookKeeper。
        Broker 自身是无状态的，不依赖本地磁盘。
      </p>
    )
  },
  {
    title: 'Apache BookKeeper',
    image: <BookkeeperIcon />,
    children: (
      <p>
        Apache BookKeeper 由一组称为 bookie 的节点构成。
        每个虚拟文件（即账本）会被切分为连续的分段，默认每个分段会复制到 3 个 bookie 上（由客户端，也就是 Broker，完成复制）。
        由于无需在节点之间迁移数据，运维人员可以快速新增 bookie。
        新增节点会立即分担写入压力。
      </p>
    )
  }
];

const HowPulsarWorks: React.FC = () => {
  return (
    <section className={s.HowPulsarWorks}>
      <div className={s.Container}>
        <ScreenTitle>Pulsar 如何运作</ScreenTitle>

        <div dangerouslySetInnerHTML={{ __html: illustrationDesktop }} className={s.IllustrationDesktop} />
        <div dangerouslySetInnerHTML={{ __html: illustrationMobile }} className={s.IllustrationMobile} />

        <div className={s.CardsDesktop}>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <div className={s.CardsMobile}>
          <Slider slidesToShow={1}>
            {cards.map((card, i) => {
              return (
                <Card key={i} {...card} />
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  image: React.ReactNode;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={s.Card}>
      <div className={s.CardImage}>
        {props.image}
      </div>
      <h3 className={s.CardTitle}>{props.title}</h3>
      <div className={s.CardContent}>{props.children}</div>
    </div>
  );
}

export default HowPulsarWorks;

