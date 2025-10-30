# 文档翻译分工计划

> 目标：将 `docs/` 下的 289 篇原始文档拆分为 3 组并行翻译；当前机器负责约 1/3，其余两组交由其他机器。

## 当前机器（机器 A）—负责范围
- 已完成：`docs/about.md`
- 接下来的翻译范围：
  - `docs/adaptors-*.md`
  - `docs/admin-api-*.md`
  - `docs/architecture-*.md`
  - `docs/client-*.md`, `docs/cli-*.md`
  - `docs/concepts-*.md`, `docs/cookbook-*.md`
  - `docs/develop-*.md`, `docs/ecosystem-*.md`, `docs/faq-*.md`
  - Pulsar IO 连接器文档中按字母 `io-a*` 至 `io-h*`

## 机器 B —建议分配
- 核心范围：
  - `docs/functions-*.md`
  - `docs/getting-started-*.md`, `docs/helm-*.md`
  - `docs/kubernetes-*.md`, `docs/metrics-*.md`
  - Pulsar IO 连接器文档 `io-i*` 至 `io-r*`
  - 相关教程：`docs/tutorials-*.md`, `docs/tools-*.md`

## 机器 C —建议分配
- 核心范围：
  - `docs/reference-*.md`, `docs/release-*.md`
  - `docs/schema-*.md`, `docs/transactions-*.md`, `docs/storage-*.md`
  - `docs/security-*.md`, `docs/tiered-storage-*.md`
  - 其他剩余的 Pulsar IO 连接器文档 `io-s*` 至 `io-z*`
  - `docs/upgrade-*.md`, `docs/usecase-*.md`

> 注：完成 `docs/` 主干翻译后，再根据版本需求同步 `versioned_docs/` 中对应版本的内容。
