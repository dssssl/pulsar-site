import React, { useState } from "react";
import Layout from "@theme/Layout";
import Cards from "./Cards/Cards";
import * as data from '@site/data/ecosystem';
import Input from "@site/src/components/ui/Input/Input";
import Select from "@site/src/components/ui/Select/Select";
import Page from "@site/src/components/ui/Page/Page";
import s from './EcosystemPage.module.css';
import ContributeDataDrivenPage from "../../ui/ContributeDataDrivenPage/ContributeDataDrivenPage";

type CategoryFilterOption = data.Category | 'any';
const categoryFilterOptions = ['any', ...data.categories] as const;

const EcosystemPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = React.useState<CategoryFilterOption>('any');

  return (
    <Layout
      title={`生态系统`}
      description="了解 Apache Pulsar 的生态工具与扩展"
      wrapperClassName="LandingPage"
    >
      <Page>
        <section className={s.Header}>
          <h1>生态系统</h1>
          <p>要构建更优秀的流式数据管道和事件驱动应用，你可以使用 Pulsar 强大的扩展能力，例如 <a href="/docs/next/io-overview">Connector</a>、协议处理器、工具等。同时也可使用 <a href="/docs/next/client-libraries">客户端库</a> 开发应用。</p>
          <p>本页面列出了内置与第三方工具。请注意，部分第三方工具尚未经过社区的全面验证，可能与预期不同。仅包含具有 <a href="https://opensource.org/licenses">OSI 认可许可证</a> 的开源组件。</p>
          <ContributeDataDrivenPage />
        </section>

        <section>
          <form>
            <div className={s.Filters}>
              <Select<data.Category | 'any'>
                value={categoryFilter}
                onChange={setCategoryFilter}
                list={categoryFilterOptions.map((option) => ({
                  type: 'item',
                  value: option,
                  title: option === 'any' ? '全部分类' : data.categoryLabels[option]
                }))}
              />

              <Input placeholder="搜索" value={searchQuery} onChange={setSearchQuery} clearable />
            </div>

            <div>
              {categoryFilter === 'any' && <Cards search={searchQuery} resources={Object.values(data.resources).flat()} />}
              {data.categories.map((category) => {
                if (categoryFilter === category) {
                  return <Cards key={category} search={searchQuery} resources={data.resources[category]} />
                }
              })}
            </div>
          </form>
        </section>
      </Page>
    </Layout>
  );
}

export default EcosystemPage;
