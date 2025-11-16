import React, { useEffect } from 'react';
import s from './UseCasesPage.module.css';
import Layout from '@theme/Layout';
import cases from '@site/data/usecases';
import Case, { CaseProps } from './Case/Case';

const UseCasesPage: React.FC = () => {
  useEffect(() =>{
    const updateSidebarLinks = () => {
      let currentCase = 0;
      let allcases = document.querySelectorAll('.'+s.UseCasesPageCase);
      let allcaselinks = document.querySelectorAll('.'+s.UseCasesPageCaseLink);
      if(allcases.length > 0 && allcaselinks.length > 0 && allcaselinks.length == allcases.length){
        allcases.forEach((e,i) => {
          let postop = e.getBoundingClientRect().top
          if(postop < 96) currentCase = i;
        });
        allcaselinks.forEach((e,i) => {
          if(currentCase == i) e.classList.add(s.active);
          else e.classList.remove(s.active)
        });
      }
    }
    window.addEventListener('load', updateSidebarLinks);
    window.addEventListener('scroll', updateSidebarLinks);
  }, [])
  return (
    <Layout
      title='Pulsar 使用场景'
      description='独特与常见场景的组合让 Pulsar 在众多消息系统中脱颖而出。'
    >
        <div className={s.UseCasesPageHeader}>
          <div>
            <h1>Pulsar 使用场景</h1>
            <h2>独特与常见场景的组合让 Pulsar 在众多消息系统中脱颖而出。</h2>
          </div>
        </div>
        <div className={s.UseCasesPage}>
          <div className={s.UseCasesPageSidebar}>
            <div>
              {cases.map((scase, i) => (
                <a href={`#case${i}`} key={i} className={s.UseCasesPageCaseLink}>{scase.title}</a>
              ))}
            </div>
          </div>
          <div className={s.UseCasesPageContent}>
            {cases.map((scase, i) => (
              <div id={`case${i}`} key={i} className={s.UseCasesPageCase}>
                <Case {...scase} />
              </div>
            ))}
          </div>
      </div>
    </Layout>
  );
}

export default UseCasesPage;


