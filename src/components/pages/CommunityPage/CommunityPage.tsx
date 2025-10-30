import React, { useMemo } from "react";
import Layout from "@theme/Layout";
import s from "./CommunityPage.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import team from "@site/data/team";
import communityNumbers from "@site/data/community-numbers";
import DiscussionPlatforms from "./sections/discussions/DiscussionPlatforms";
import HowToContribute from "./sections/how-to-contribute/HowToContribute";
import Section from "./shared/Section/Section";
import ProjectGovernance from "./sections/project-governance/ProjectGovernance";
import Slider from '@site/src/components/ui/Slider/Slider';
import BrowserOnly from "@docusaurus/BrowserOnly";
import Button from "@site/src/components/ui/Button/Button";
import _ from 'lodash'

export default function CommunityPage(): JSX.Element {
  // Shuffle the team members so that the order is different each time the page is loaded
  const pmcMembers = useMemo(() => _.shuffle(team.pmc), [team.pmc]);
  const committers = useMemo(() => _.shuffle(team.committers), [team.committers]);

  const teamPmcSets = useMemo(() => _.chunk(pmcMembers, 5), [pmcMembers]);
  const teamCtrsSets = useMemo(() => _.chunk(committers, 5), [committers]);

  return (
    <Layout title={"社区"} description={"了解 Apache Pulsar 社区并加入我们"} wrapperClassName="LandingPage">
      <section className={s.CommunityHeader}>
        <div className={s.CommunityContent}>
          <h1>欢迎加入 Pulsar 社区</h1>
          <p className={s.Paragraph}>
            Apache Pulsar 社区汇聚了来自全球的开发者与使用者，他们将 Pulsar 应用于实时工作负载。无论你对分布式系统有怎样的热情，我们都期待你的参与与贡献。
          </p>
        </div>
      </section>

      <section className={s.CommunityAbout}>
        <div className={s.CommunityContent}>
          <h2>关于社区</h2>

          <div>
            <p className={s.SmallParagraph}>
              Pulsar 社区由项目管理委员会（PMC）成员、提交者以及贡献者组成。提交者拥有项目源码的直接访问权限，负责推动代码演进。贡献者通过提交补丁和建议，由提交者评审后改善项目。提交者和贡献者的人数没有上限。
            </p>

            <div className={s.Slider}>
              <BrowserOnly>
                {() => (
                  <Slider centerMode={window.innerWidth > 800} slidesToShow={2}>
                    {[
                      {
                        img: useBaseUrl("/img/community-image-6.jpg"),
                        alt: "Apache Pulsar 社区照片",
                      },
                      {
                        img: useBaseUrl("/img/community-image-1.jpg"),
                        alt: "Apache Pulsar 社区照片",
                      },
                      {
                        img: useBaseUrl("/img/community-image-3.jpg"),
                        alt: "Apache Pulsar 社区照片",
                      },

                      {
                        img: useBaseUrl("/img/community-image-2.jpg"),
                        alt: "Apache Pulsar 社区照片",
                      },
                      {
                        img: useBaseUrl("/img/community-image-5.jpg"),
                        alt: "Apache Pulsar 社区照片",
                      },
                      {
                        img: useBaseUrl("/img/community-image-4.jpg"),
                        alt: "Apache Pulsar 社区照片",
                      },
                    ].map((slide, i) => (
                      <div key={i} className={s.Slide}>
                        <img className={s.SlideImage} alt={slide.alt} src={slide.img} />
                      </div>
                    ))}
                  </Slider>
                )}
              </BrowserOnly>
            </div>
          </div>

          <div className={s.AfterCommunitySlider}>
            <div>
              <h3>
                成功的开源项目离不开众人的协作。
              </h3>
            </div>
            <div>
              <p className={s.SmallParagraph}>
                有人编写代码或文档，有人负责测试、提交补丁和建议。<br />
                现在就加入我们吧！<br />
                你的每一次贡献都弥足珍贵。
              </p>
              <p className={s.SmallParagraphTop}>
                阅读 <a href="https://www.apache.org/foundation/policies/conduct" className="secondary-cta" target="_blank">Apache 行为准则</a> 与 <a href="https://www.apache.org/foundation/policies/conduct#reporting-guidelines" className="secondary-cta" target="_blank" >报告指南</a>。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.CommunityDiscussions}>
        <div className={s.CommunityDiscussionsBlur} />
        <div className={s.CommunityContent}>
          <Section title="交流渠道" anchor="section-discussions">
            <p>
              请勿在公共渠道报告安全相关问题。<br />
              如有安全事件，请按照 <a href={`${useBaseUrl("security")}#security-policy`}>安全策略</a> 的指引联系 <a href="https://www.apache.org/security/">ASF 安全团队</a>。<br />
              <br />
            </p>
            <DiscussionPlatforms />
          </Section>
        </div>
      </section>

      <div className={s.CommunityContribute}>
        <div className={s.CommunityContent}>
          <Section title="如何贡献" anchor="section-contribute">
            <HowToContribute />
          </Section>
        </div>
      </div>


      <div className={s.CommunityProjectGovernance}>
        <div className={s.CommunityContent}>
          <Section title="项目治理" anchor="section-governance">
            <ProjectGovernance />
          </Section>
        </div>
      </div>

      <div className={s.CommunityMembers}>
        <div className={s.CommunityContent}>
          <Section anchor="section-community" title="社区成员">
            <BrowserOnly>
              {() => (
                <>
                  <p className={s.CommunityMembersBig}>
                    Pulsar 社区由 PMC 成员、提交者与贡献者共同组成。
                  </p>
                  <p className={s.CommunityMembersSmall}>
                    获取最新名单，请访问 <a href="https://projects.apache.org/committee.html?pulsar" target="_blank" >Apache Pulsar Committee</a>。
                  </p>
                  <br />
                  <h4>{pmcMembers.length} 位 PMC 成员</h4>
                  <div>
                    <Slider centerMode={true} slidesToShow={1}>
                      {teamPmcSets.map((teamSet, index) => (
                        <div className={s.CommunityMembersSlider} key={`pmc_${index}`}>
                          <div className={s.CardWrapper}>
                            <div className={s.CommunityMembersCard}>
                              <ul>
                                {teamSet.map((member) => (
                                  <li key={member.apacheId}>
                                    <div>{member.name}</div>
                                    <div>{member.apacheId}</div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <h4>{committers.length} 位提交者</h4>
                  <div>
                    <Slider centerMode={true} slidesToShow={1}>
                      {teamCtrsSets.map((teamSet, index) => (
                        <div className={s.CommunityMembersSlider} key={`committers_${index}`}>
                          <div className={s.CardWrapper}>
                            <div className={s.CommunityMembersCard}>
                              <ul>
                                {teamSet.map((member) => (
                                  <li key={member.apacheId}>
                                    <div>{member.name}</div>
                                    <div>{member.apacheId}</div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </>
              )}
            </BrowserOnly>
          </Section>
        </div>
      </div>

      <div className={s.CommunityMembersMetrics}>
        <div className={s.CommunityContent}>
          <Section title="社区活力" anchor="community-numbers">
            <div className={s.CommunityMembersMetricsCards}>
              {communityNumbers.map((card) => (
                <div key={card.title} className={s.CommunityMembersMetricsCard}>
                  <div className={s.CommunityMembersMetricsCardContent}>
                    <div>{card.value}</div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      <div className={s.JoinCommunityCta}>
        <div className={s.CommunityContent}>
          <div className={s.JoinCommunityCtaContent}>
            <div>
              <h2>成为社区的一员</h2>
              <p>
                想继续为社区添砖加瓦吗？查看贡献指南、活动和交流渠道，与全球 Pulsar 爱好者携手共建生态。
              </p>
            </div>
            <div>
              <Button
                title="加入社区"
                href="#section-discussions"
                variant="negativefull"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
