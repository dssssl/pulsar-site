import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

import ContentCard, { ContentCardProps } from "../../shared/ContentCard/ContentCard";
import ContentCardsLayout from "../../shared/ContentCard/ContentCardsLayout";

import Slider from '@site/src/components/ui/Slider/Slider';
import BrowserOnly from "@docusaurus/BrowserOnly";

import Button, { ButtonVariant } from "@site/src/components/ui/Button/Button";

import s from "./HowToContribute.module.css";

type ActionButtonProps = {
  id: string;
  text: string;
  href: string;
  type: "primary" | "normal" | "link" | "transparentWhite" | "transparentBlack";
  isExternal?: boolean;
};

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  if (props.type === "link") {
  }

  let buttonVariant: ButtonVariant;
  switch (props.type) {
    case "primary":
      buttonVariant = "action";
      break;
    case "normal":
      buttonVariant = "regular";
      break;
    case "transparentBlack":
      buttonVariant = "transparentBlack";
      break;
    case "transparentWhite":
      buttonVariant = "transparentWhite";
      break;
  }

  return (
    <div className={s.ActionButton}>
      <Button
        variant={buttonVariant}
        target={props.isExternal ? "_blank" : undefined}
        href={props.href}
        title={props.text}
      />
    </div>

  );
};

const HowToContribute: React.FC = () => {
  const actions: ActionButtonProps[] = [
    {
      id: "contributing-to-the-project",
      href: useBaseUrl("/contribute"),
      text: "贡献指南",
      type: "transparentBlack",
    },
    {
      id: "develop-coding-conventions",
      href: useBaseUrl("/contribute/develop-coding-conventions"),
      text: "编码约定",
      type: "transparentBlack",
    },
  ];
  const contentCards: ContentCardProps[] = [
    {
      format: "column",
      title: "参与项目贡献",
      image: {
        src: useBaseUrl("/img/community_blt.svg"),
      },
      description: (
        <div>
          Pulsar 拥有丰富的贡献机会——可以撰写示例/教程、构建新的面向用户的库、开发 Pulsar IO Connector、完善文档等。
        </div>
      ),
    },
    {
      format: "column",
      title: "报告缺陷",
      image: {
        src: useBaseUrl("/img/community_bug.svg"),
      },
      description: (
        <div>
          如果遇到问题，首先请在用户邮件列表或 Stack Overflow 寻求帮助。<br />
          若确认可能是 Pulsar 的缺陷，可发送至开发者邮件列表或在 GitHub 提交 Issue。请尽可能提供详细信息，包括 Pulsar 版本与运行环境。
        </div>
      ),
    },
    {
      format: "column",
      title: "报告安全漏洞",
      image: {
        src: useBaseUrl("/img/community_shld.svg"),
      },
      description: (
        <div>
          要报告 Pulsar 的安全漏洞，请联系 <a href="https://www.apache.org/security/projects.html">Apache 安全团队</a>。<br />
          相关流程详见 <a href="https://www.apache.org/security/" target="_blank">官方说明</a>。向 <a href="mailto:security@apache.org">security@apache.org</a> 报告时，可以抄送 <a href="mailto:private@pulsar.apache.org">private@pulsar.apache.org</a>，直接联系 Apache Pulsar PMC（私有邮件列表）。
        </div>
      ),
    },
  ];

  return <div>
    <div className={s.HowToContributeDesktop}>
      <ContentCardsLayout cards={contentCards} columns={3} />
    </div>
    <div className={s.HowToContributeMobile}>
      <div className={s.Slider}>
        <BrowserOnly>
          {() => (
            <Slider slidesToShow={1}>
              {(contentCards || []).map((card) => (
                <div key={card.title} className={s.Card}>
                  <ContentCard {...card} />
                </div>
              ))}
            </Slider>
          )}
        </BrowserOnly>
      </div>
    </div>
    <div className={s.Actions}>
      {(actions || []).map((action) => (
        <ActionButton key={action.id} {...action} />
      ))}
    </div>
  </div>;
};

export default HowToContribute;
