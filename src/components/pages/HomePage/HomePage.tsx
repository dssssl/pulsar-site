import React from 'react';

import Layout from "@theme/Layout";
import Features from './Features/Features';
import ShortInfo from './ShortInfo/ShortInfo';
import Users from './Users/Users';
import communityNumbers from "@site/data/community-numbers";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Slider from '@site/src/components/ui/Slider/Slider';
import BrowserOnly from "@docusaurus/BrowserOnly";

import cases from '@site/data/usecases';
import Button from '@site/src/components/ui/Button/Button';

import s from './HomePage.module.css';
import HowPulsarWorks from './HowPulsarWorks/HowPulsarWorks';

const HomePage = () => {

  const makeiconclass = (iconname) => {
    let icon = '';
    switch(iconname){
      case 'user': icon = s.user; break;
      case 'arrow': icon = s.arrow; break;
      case 'speech': icon = s.speech; break;
      case 'check': icon = s.check; break;
    }
    return icon;
  }

  return (
    <Layout
      title={"Apache Pulsar"}
      description={"Apache Pulsar 是一款面向云环境构建的开源分布式消息与流式处理平台。"}
      wrapperClassName="LandingPage"
    >
      <div className={s.Page}>
        <div className={s.Background}></div>
        <div className={s.FirstScreen}>
          <ShortInfo />
        </div>
        <div className={s.OtherScreens}>
          <Features />
          <HowPulsarWorks />

          <section className={s.UseCases}>
            <div className={s.CommunityContent}>
              <div>
                <h2>Pulsar 使用场景</h2>
                <p>独特与常见场景的组合让 Pulsar 在众多消息系统中脱颖而出。</p>
              </div>
              <div className={s.Slider}>
                <BrowserOnly>
                  {() => (
                    <Slider centerMode={window.innerWidth > 1000} slidesToShow={2} invertMode={true}>
                      {cases.map((scase, i) => (
                        <div key={i} className={s.Slide+' '+s.SlideCommunity}>
                          <div>
                            <div className={makeiconclass(scase.icon)}></div>
                            <h3>{scase.title}</h3>
                            <div className={s.SlideMB}>{scase.smallText}</div>
                            <div>
                                <Button title='了解详情' href={'/use-cases#case'+i} variant='transparentBlack' />
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  )}
                </BrowserOnly>
              </div>
            </div>
          </section>

          <section className={s.CommunityNumbers}>
            <div className={s.CommunityNumbersBlur} />
            <div className={s.CommunityContent}>
              <div>
                <h2>值得信赖的 Pulsar 社区</h2>
                <p>加入我们，立即开始贡献</p>
              </div>
            </div>
            <div className={s.CommunityContent}>
              <div className={s.CommunityNumbersContainer}>
              {communityNumbers.map((number, i) => (
                <div key={i}>
                  {(number.isLink) ? 
                    <a title={number.linkTitle} href={number.link} target='_blank' className={s.CommunityNumbersBig}>{number.number}{(number.icon) ? <img src={useBaseUrl(number.icon)} /> : <span className={s.CommunityNumbersBigSymbol}>+</span>}</a>
                    :
                    <div className={s.CommunityNumbersBig}>{number.number}{(number.icon) ? <img src={useBaseUrl(number.icon)} /> : <span className={s.CommunityNumbersBigSymbol}>+</span>}</div>
                  }
                  <span className={s.CommunityNumbersBigTitle}>{number.title}</span>
                  {number.linkTitle ? <div className="margin-top--lg"><Button title={number.linkTitle} href={number.link} target='_blank' variant='transparentBlack' /></div> : ''}
                </div>
              ))}
              </div>
            </div>
          </section>

          <Users />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
