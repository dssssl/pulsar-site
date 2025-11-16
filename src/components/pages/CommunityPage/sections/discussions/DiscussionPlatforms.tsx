import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Button, { ButtonVariant } from "@site/src/components/ui/Button/Button";
import s from "./DiscussionPlatforms.module.css";
import Slider from '@site/src/components/ui/Slider/Slider';
import BrowserOnly from "@docusaurus/BrowserOnly";

type ActionButtonProps = {
  id: string;
  text: string;
  href: string;
  type: "primary" | "normal" | "link";
  isExternal?: boolean;
};

export type ContentCardProps = {
  title: string;
  description: React.ReactNode;
  image?: {
    src: string;
  };
  actions?: ActionButtonProps[];
};

const ContentCard: React.FC<ContentCardProps> = (props) => {
  return (
    <div className={s.DiscussionPlatformCard}>
      {props.image && (
        <div className={s.DiscussionPlatformCardImage}>
          <img src={props.image.src} />
        </div>
      )}
      <div className={s.DiscussionPlatformCardText}>
        <h3>{props.title}</h3>
        <div>{props.description}</div>
      </div>
      <div className={s.DiscussionPlatformCardActions}>
        {(props.actions || []).map((action) => (
          <ActionButton key={action.id} {...action} />
        ))}
      </div>
    </div>
  );
};

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  if (props.type === "link") {
  }

  let buttonVariant: ButtonVariant;
  switch (props.type) {
    case "primary":
      buttonVariant = "transparentBlack";
      break;
    case "normal":
      buttonVariant = "clean";
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

const DiscussionPlatforms: React.FC = () => {
  const platforms: ContentCardProps[] = [
    {
      title: "Slack 社区",
      description: (
        <span>
          适用于即时沟通与实时讨论。<br />
          你可以在 <a href="https://www.linen.dev/s/apache-pulsar" target="_blank">Linen</a> 搜索 Slack 历史记录。
        </span>
      ),
      actions: [
        {
          id: "join-slack",
          text: "加入 Slack",
          href: "https://communityinviter.com/apps/apache-pulsar/apache-pulsar",
          type: "primary",
          isExternal: true,
        },
        {
          id: "launch-slack",
          text: "打开 Slack",
          href: "https://apache-pulsar.slack.com/",
          type: "normal",
          isExternal: true,
        },
        {
          id: "history-slack",
          text: "查看历史记录",
          href: "https://www.linen.dev/s/apache-pulsar",
          isExternal: true,
          type: "normal",
        },
      ],
      image: {
        src: useBaseUrl("/img/community_sl.svg"),
      },
    },
    {
      title: "开发者邮件列表",
      description: (
        <div>
          用于讨论 Pulsar 的开发问题与技术提案。
        </div>
      ),
      actions: [
        {
          id: "subscribe",
          text: "订阅",
          href: "mailto:dev-subscribe@pulsar.apache.org?subject=subscribe&body=subscribe",
          type: "primary",
        },
        {
          id: "showarchives",
          text: "查看归档",
          href: "https://lists.apache.org/list.html?dev@pulsar.apache.org",
          isExternal: true,
          type: "normal",
        },
      ],
      image: {
        src: useBaseUrl("/img/community_email.svg"),
      },
    },
    {
      title: "社区会议",
      description: (
        <span>
          社区会议每两周一次（周四召开），用于讨论新提案、未合并的 PR，并分享开放议题。
        </span>
      ),
      actions: [
        {
          id: "learnmore",
          text: "了解详情",
          href: "https://github.com/apache/pulsar/wiki/Community-Meetings",
          type: "primary",
          isExternal: true,
        },
      ],
      image: {
        src: useBaseUrl("/img/community_grp.svg"),
      },
    },
    {
      title: "GitHub Discussions",
      description: (
        <div>
          欢迎在此提问、分享想法或寻求支持——尤其适合不习惯邮件列表的同学。
        </div>
      ),
      actions: [
        {
          id: "new-discussion",
          text: "发起讨论",
          href: "https://github.com/apache/pulsar/discussions/new/choose",
          type: "primary",
          isExternal: true,
        },
        {
          id: "open",
          text: "浏览讨论",
          href: "https://github.com/apache/pulsar/discussions",
          type: "normal",
          isExternal: true,
        },
      ],
      image: {
        src: useBaseUrl("/img/community_gh.svg"),
      },
    },
    {
      title: "Stack Overflow",
      description: (
        <span>
          如需技术问答，请在 Stack Overflow 上使用 apache-pulsar 标签提问。
        </span>
      ),
      actions: [
        {
          id: "as",
          text: "提问",
          href: "https://stackoverflow.com/questions/ask?tags=apache-pulsar",
          type: "primary",
          isExternal: true,
        },
        {
          id: "visit",
          text: "查看问题",
          href: "https://stackoverflow.com/questions/tagged/apache-pulsar",
          type: "normal",
          isExternal: true,
        },
      ],
      image: {
        src: useBaseUrl("/img/community_stack.svg"),
      },
    },
  ];

  return (
    <div>
      <div className={s.DiscussionPlatformDesktop}>
        <div className={s.DiscussionPlatformCards}>
          {(platforms || []).map((card) => (
            <ContentCard {...card} key={card.title} />
          ))}
        </div>
      </div>
      <div className={s.DiscussionPlatformMobile}>
        <div className={s.Slider}>
          <BrowserOnly>
            {() => (
              <Slider slidesToShow={1}>
                {(platforms || []).map((card) => (
                  <div key={card.title} className={s.Card}>
                    <ContentCard {...card} />
                  </div>
                ))}
              </Slider>
            )}
          </BrowserOnly>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPlatforms;
