import React from "react";
import { ContentCardProps } from "../../shared/ContentCard/ContentCard";
import ContentCardsLayout from "../../shared/ContentCard/ContentCardsLayout";

const ProjectGovernance: React.FC = () => {
  const cards: ContentCardProps[] = [
    {
      description: (
        <div>
          <p>
            项目管理委员会（PMC）<br />
            Apache Pulsar 由独立的 PMC 治理，该组织负责项目管理工作。
          </p>
          <p>
            PMC 成员负责确定技术方向、投票引入新的提交者与 PMC 成员、制定政策，以及就软件发行进行正式表决。
          </p>
          <p>
            了解更多：<a href="https://community.apache.org/projectIndependence" title="Project independence overview" target="_blank">项目独立性概述</a>、<a href="https://www.apache.org/foundation/governance/pmcs.html" title="PMCs" target="_blank">PMC 介绍</a>、<a href="https://www.apache.org/foundation/voting.html" title="Voting process" target="_blank">投票流程</a>以及 <a href="https://www.apache.org/theapacheway/index.html" title="The Apache way guidelines" target="_blank">Apache 之道</a>。
          </p>
        </div>
      ),
    },
  ];

  return <ContentCardsLayout cards={cards} columns={1} />;
};

export default ProjectGovernance;
