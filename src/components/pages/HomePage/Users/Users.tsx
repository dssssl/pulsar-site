import React from 'react';
import _ from 'lodash'

import Button from '@site/src/components/ui/Button/Button';
import Slider from '@site/src/components/ui/Slider/Slider';
import testimonials from '@site/data/testimonials';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Quote from './img/quote.svg';
import s from './Users.module.css';
import ScreenTitle from '../ui/ScreenTitle/ScreenTitle';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Users: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const shuffledTestimonials = React.useMemo(() => _.shuffle(testimonials), [testimonials]);

  return (
    <section className={s.block}>
      <div className={s.container}>
        <div className={s.title_container}>
          <ScreenTitle>
            Pulsar 用户
          </ScreenTitle>

          <span className={s.text}>
            Pulsar 在生产环境中支撑数百万主题、每秒数百万条消息，如今已有成千上万的企业使用它处理实时工作负载。
          </span>

          <div className={s.link_button}>
            <Button
              title='查看案例研究'
              variant='regular'
              href={`${siteConfig.baseUrl}case-studies`}
            />
          </div>
        </div>
        <BrowserOnly>
          {() => (
            <Slider centerMode={window.innerWidth > 1000} slidesToShow={2}>
              {Object.values(shuffledTestimonials).flat().map((caseStudy, i) => (
                <div key={i} className={s.slide}>
                  <div className={s.slide_container}>
                    <Quote className={s.quote} />

                    <span className={s.slider_text}>
                      {caseStudy.text}
                    </span>

                    <span className={s.author}>
                      {caseStudy.author}
                    </span>

                    <span className={s.platform}>
                      {caseStudy.company}
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </BrowserOnly>
      </div>
    </section>
  )
}

export default Users;
