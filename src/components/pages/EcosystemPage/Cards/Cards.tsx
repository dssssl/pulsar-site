import React from "react";
import s from './Cards.module.css';
import * as data from '@site/data/ecosystem';

const sourceOrSinkLabelMap: Record<string, string> = {
  'Sink': 'Sink（写入端）',
  'Source': 'Source（读取端）',
  'Source and Sink': 'Source & Sink（双向）',
  'N/A': 'N/A',
  '': ''
};

const Card: React.FC<data.Resource> = (props) => {
  const sourceOrSink = sourceOrSinkLabelMap[props.source_or_sink] ?? props.source_or_sink;
  return (
    <div className={s.Card}>
      <h3><a href={props.link}>{props.name}</a></h3>
      {props.description && <p>{props.description}</p>}
      <h5>{sourceOrSink}</h5>
      <a href={props.link} target="_blank">查看详情</a>
    </div>
  );
};

export type CardsProps = {
  search: string,
  resources: data.Resource[]
};

const Cards: React.FC<CardsProps> = (props) => {
  const resources = props.resources.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));

  const filteredRes = resources.filter((r) => {
    return (r.name && r.name.toLowerCase().includes(props.search.toLowerCase())) || (r.description && r.description.toLowerCase().includes(props.search.toLowerCase()));
  });

  if (!filteredRes.length) {
    return (
      <section>
        <h3>未找到符合条件的资源。</h3>
      </section>
    );
  }
  return (
    <section className={s.Cards}>
      {filteredRes.map((props, idx) => (
        <Card key={idx} {...props} />
      ))}
    </section>
  );
}

export default Cards;
