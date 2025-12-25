# Hexo个人博客开发文档

## 1. 项目概述

本项目是基于Hexo静态博客框架搭建的个人技术博客，使用NexT主题，支持Markdown写作、代码高亮、搜索功能和Git部署。

### 技术栈
- Node.js v20.17.0
- Git v2.44.0
- Hexo 7.3.0
- NexT主题 8.26.0

## 2. 环境要求

### 安装Node.js
- 下载地址：https://nodejs.org/
- 版本要求：v20.17.0或更高
- 验证安装：
  ```bash
  node --version
  npm --version
  ```

### 安装Git
- 下载地址：https://git-scm.com/
- 版本要求：v2.44.0或更高
- 验证安装：
  ```bash
  git --version
  ```

## 3. 项目初始化

### 安装Hexo CLI
```bash
npm install -g hexo-cli
```

### 初始化Hexo项目
```bash
hexo init .
npm install
```

## 4. 项目结构

```
.
├── _config.yml          # Hexo配置文件
├── _config.landscape.yml # 默认主题配置
├── package.json         # 项目依赖
├── scaffolds/           # 模板文件
│   ├── draft.md
│   ├── page.md
│   └── post.md
├── source/              # 源码目录
│   └── _posts/          # 博客文章
├── themes/              # 主题目录
│   └── next/            # NexT主题
└── public/              # 生成的静态文件
```

## 5. 配置文件

### Hexo主配置文件 (_config.yml)

```yaml
# 网站基本信息
title: 个人技术博客
subtitle: '技术分享与成长记录'
description: '专注于前端开发、AI技术和个人成长的博客'
keywords: 博客, 前端开发, AI技术, 个人成长, 技术分享
author: 开发者
author_description: '全栈开发者，热爱技术与分享'
language: zh-CN
timezone: Asia/Shanghai

# URL配置
url: https://yourdomain.com
permalink: :year/:month/:day/:title/
pretty_urls:
  trailing_index: false
  trailing_html: false

# 主题设置
theme: next

# 部署配置
deploy:
  type: git
  repo: https://github.com/yourusername/yourblog.git
  branch: gh-pages
```

## 6. 主题设置

### 安装NexT主题

```bash
git clone https://github.com/next-theme/hexo-theme-next themes/next
```

或者使用npm安装：

```bash
npm install hexo-theme-next
# 然后复制主题文件到themes/next目录
mkdir -p themes/next
Copy-Item -Recurse -Force node_modules/hexo-theme-next/* themes/next/
```

### 主题配置

主题配置文件位于 `themes/next/_config.yml`，主要配置项包括：

- **Scheme设置**：选择主题样式（Muse, Mist, Pisces, Gemini）
- **菜单配置**：自定义导航菜单
- **侧边栏设置**：配置侧边栏显示内容
- **社交链接**：添加社交媒体链接
- **评论系统**：配置Disqus、Gitalk等评论系统
- **代码高亮**：选择代码高亮样式

## 7. 插件安装

### 常用插件

```bash
# Git部署插件
npm install hexo-deployer-git

# 搜索插件
npm install hexo-generator-search

# RSS订阅插件
npm install hexo-generator-feed

# 代码高亮插件
npm install hexo-prism-plugin
```

### 插件配置

在 `_config.yml` 中添加插件配置：

```yaml
# 搜索插件配置
search:
  path: search.xml
  field: post
  content: true
  format: html

# RSS插件配置
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub: 
  content: 
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
```

## 8. 内容创建

### 创建博客文章

```bash
hexo new "文章标题"
```

### 文章格式

```markdown
---
title: 文章标题
date: 2025-12-24 16:50:00
tags: [标签1, 标签2]
categories: [分类]
---

# 文章内容

使用Markdown语法编写文章内容...
```

## 9. 本地预览

### 生成静态文件

```bash
hexo generate
# 或简写
hexo g
```

### 启动本地服务器

```bash
hexo server
# 或简写
hexo s

# 指定端口
hexo s -p 4001
```

### 访问地址

```
http://localhost:4000
```

## 10. 部署

### 部署到GitHub Pages

1. 确保已配置好 `_config.yml` 中的deploy部分
2. 执行部署命令：

```bash
hexo deploy
# 或简写
hexo d

# 生成并部署
hexo g -d
```

### 其他部署方式

- **GitLab Pages**：配置类似GitHub Pages
- **Vercel**：使用Vercel CLI部署
- **Netlify**：连接GitHub仓库自动部署

## 11. 开发流程

1. **创建文章**：`hexo new "文章标题"`
2. **编写内容**：使用Markdown编辑器编写文章
3. **本地预览**：`hexo s`，访问http://localhost:4000查看效果
4. **生成静态文件**：`hexo g`
5. **部署上线**：`hexo d`

## 12. 维护与更新

### 更新Hexo

```bash
npm update hexo
```

### 更新主题

```bash
cd themes/next
git pull
```

### 更新插件

```bash
npm update
```

## 13. 常见问题

### 端口被占用

```bash
# 查看端口占用
netstat -ano | findstr :4000
# 或使用不同端口
hexo s -p 4001
```

### 主题样式异常

- 检查主题配置文件
- 清除缓存：`hexo clean`
- 重新生成：`hexo g`

### 插件加载失败

- 检查插件安装是否正确
- 查看插件文档，确保配置正确
- 更新插件版本

## 14. 优化与扩展

### SEO优化

- 设置合适的title、description和keywords
- 配置sitemap插件
- 添加robots.txt文件
- 优化文章URL结构

### 网站性能优化

- 启用主题的minify选项
- 优化图片大小
- 使用CDN加速静态资源
- 启用浏览器缓存

### 功能扩展

- 添加评论系统
- 集成Google Analytics
- 添加站点统计
- 实现深色模式
- 添加RSS订阅

## 15. 参考资源

- **Hexo官方文档**：https://hexo.io/docs/
- **NexT主题文档**：https://theme-next.js.org/
- **Markdown语法**：https://guides.github.com/features/mastering-markdown/
- **GitHub Pages**：https://pages.github.com/

## 16. 贡献指南

欢迎提交Issue和Pull Request来改进这个博客项目。

## 17. 许可证

本项目采用MIT许可证。
