import React from 'react';
import s from './ContributeDataDrivenPage.module.css'

const ContributeDataDrivenPage: React.FC = () => {
  return (
    <a className={s.ContributeDataDrivenPage} href="/contribute/site-intro/#how-to-update-data-driven-pages">
      <strong>缺少内容？</strong> 点击这里贡献数据
    </a>
  );
}

export default ContributeDataDrivenPage;
