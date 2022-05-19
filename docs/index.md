<style>
h1, h2 {
border: none;
}
</style>
<h2 align="center">Hi there, 👋 I'm <a href="https://github.com/draco-china">Draco!</a> 😎</h2>

---

<div style="display: flex; justify-content: space-between; align-items: center;flex-wrap: wrap;">
  <img height="170px" src="https://github-readme-stats.vercel.app/api/top-langs/?username=draco-china&text_color=586069&layout=compact&hide_border=true&bg_color=fff&title_color=0366d6&count_private=true&include_all_commits=true" alt="top-langs"/>
   <img src="https://github-readme-stats.vercel.app/api?username=draco-china&count_private=true&show_icons=true&icon_color=222&title_color=0366d6&text_color=586069&bg_color=fff&hide=issues&hide_border=true&include_all_commits=true" alt="api"/>
</div>

---

## 联系方式

- 手机：18573420525
- Email：draco.coder@gmail.com
- QQ：81627198
- 微信号：draco-china

---

## 个人信息

- Draco / 男 / 1996
- 自考本科 / 北京外国语大学
- 工作年限：7.5 年
- 技术博客：[https://draco.icu](https://draco.icu)
- Github：[https://github.com/draco-china](https://github.com/draco-china)

---

## 工作经历

### 盈合（深圳）机器人与自动化科技有限公司 （ 2021 年 8 月 ~ 至今 ）

#### 其他后台项目

RMS 叉车机器人 / 站岗机器人

- 运用技术： React / Hooks / UMI@3 / Antd / HTML5 / CSS3
- 项目总结： CRUD 项目，没啥好写的，复杂功能通过组件封装调用

#### 机器人地图编辑器

- 产品背景： 构建以组件为基础的通用功能模块，实现向业务提供功能支持，如机器人建图及路径规划，机器人任务编排
- 负责模块： 独立完成
- 运用技术： React / Hooks / G6 / X6 / Xflow
- 项目总结： 需要同时了解不同机器人的业务功能, 将业务共性抽离，提供以高扩展性的通用功能模块
- 界面预览： ![界面预览](./images/20220519164646.jpg)
- 功能脑图： ![功能脑图](./images/robot-editor.png)

#### 前端技术基础建设

- 前端技术文档
- 项目模板
  - 微前端项目
  - 服务端渲染项目
  - 通用后台管理项目
  - 简单基础页面项目
- 业务组件
  - SplitBox 拆分面板
  - FeedBackButton 反馈按钮
  - FormListSelect 数据列表选择器
- Hooks
  - useBeforeUnload 当用户尝试重新加载或关闭页面时显示浏览器警报，支持路由拦截，暂不支持自定义弹窗 UI，重加载页面和关闭页面不支持自定义提示语
  - usePermission 跟踪浏览器 API 权限状态
  - useSearchParam 获取 `URLSearchParams` 的值
- umi 插件开发
  - sso 单点登录 基于 umi 开发，使 sso 配置化
  - openapi 基于 umi openapi 源码修改使其支持 proto3 协议生成 service 类
- 工具类
  - 代码规范
  - SSO 单点登录
  - 常用正则
  - WEB 坐标 与 Ros 坐标 互转
  - 常用加密方法

### 自主研发 （ 2021 年 1 月 ~ 2021 年 6 月 ）

#### 31 原创设计 https://31desgin.com

- 产品背景： 为首饰原创设计师提供设计平台，并为用户提供定制生产
- 负责事项： 团队建设 / 前端研发 / 需求分析 / 市场调研
- 运用技术： React / Hooks / Redux / UMI@3 / Antd / HTML5 / CSS3

### 深圳市天元云科技有限公司 （ 2017 年 12 月 ~ 2020 年 12 月 ）

#### NAP-Paas 平台

- 产品背景： 通过建立统一备份管理平台，打通备份恢复流程，客户提需求审批后，自动化执行，并返回执行结果并可视化展示；通过在平台内部建立数据备份规则，来落地行业数据备份规范和内部备份管理规则；通过平台自动化恢复验证功能，满足季度恢复验证要求。
- 功能模块： 工作流 / 资源管理 / CMDB
- 负责模块： 工作流 / 资源管理 / CMDB
- 项目总结： 先进性 / 架构合理性 / 易用性 / 经济性 / 规范性 / 可扩展性
- 运用技术： React / Hooks / Redux / UMI@3 / Qankun / Antd / HTML5 / CSS3
- 技术要点： Micro Frontends / Hooks
- 项目总结： 该项目中主要负责项目工程化及开发，由于使用微前端架构，跟领导及负责人沟通后使了 umi-qiankun 搭建，一开始最担忧的问题是父子应用的通信及父子应用公共模块的处理，最后通过多种方案解决了这些，比如：
  通过借鉴 antd pro components 封装了公司内部业务组件库，提高了项目的开发效率、减少维护成本，然后将这些组件通过子应用的模式引入到父子应用中。
  父子通信通过父应用的 window 存储数据, 一开始事件通信通过 websocket 实现，后续 umi api 支持后将其重构

#### NAP-防火墙智能策略平台 1.x (Vue) 2.x（React）

- 产品背景： NAP 网络自动化运维平台是由深圳天元云科技有限公司自主研发的产品，NAP 可统一主流网络设备的配置模型，提供完善的配置管理接口，并通过编排引擎支持一系列复杂的防火墙策略管理场景，为企业客户打造一个可扩展的企业级运维自动化平台。
- 功能模块： 应用中心 (16 个应用)、设备管理、拓扑、编排、系统权限、许可证。
- 负责模块： 设备管理、拓扑、编排、系统权限、许可证、应用中心（防火墙策略开通、下发、搜索、配置对比 …..）
- 项目总结： 深入理解用户需求，跟踪用户详细数据，对产品持续优化，使用新技术或框架来打磨产品，一步步将产品打磨到客户满意，最终与客户签单。
- 项目难点：拓扑图编辑器
  - 在 1.0 中使用 G3 渲染, 由负责人开发
  - 在 2.x 中使用了 Ant G6 2.x 版本，当前社区也有开源的 GGEditor, 这里并没有选用开源的 GGEditor, 主要原因是 GGEditor 通过封装 Ant G6 2.x 所暴露出来的 API 无法满足业务需求，因此自己基于 Ant G6 2.x 版本 API 封装了符合公司业务需求的拓扑图编辑器，相对于 1.0，使用体验大幅度提升，客户满意度明显提高

### 深圳市智汇无疆科技有限公司 （ 2016 年 10 月 ~ 2017 年 11 月 ）

#### 基因家园-官网(2.0)

- 产品背景： 基因家园（Gene family）是深圳无疆智汇科技有限公司倾力打造，以基因为核心的健康服务平台。基因家园聚焦以基因科技为核心的生命健康资讯、产品和服务，致力于成为基因健康领域第一平台。
- 功能模块： 企业门户、资讯服务、产品介绍及购买
- 负责模块： 企业门户、资讯服务、产品介绍及购买
- 项目总结： 按设计稿还原设计、并持续优化用户体验。
- 运用技术： Webpack / ES6 / SCSS / Vue / Vuex / HTML5 / CSS3
- 技术要点： 响应式布局

#### 酒胆微信传播页

- 产品背景： 一个用于推广酒精检测产品的传播页。
- 功能模块： 活动页面、分享
- 负责模块： 活动页面、分享
- 项目总结： 按设计稿还原设计、并持续优化用户体验。
- 运用技术： Nuxt.js / HTML5 / CSS3

#### 基因家园-酒胆轻应用(3.0)

- 产品背景： 一个用户酒精检测后查看报告结果轻应用
- 功能模块： 登录、检测报告、报告分享
- 负责模块： 登录、检测报告、报告分享
- 项目总结： 按设计稿还原设计、并持续优化用户体验。
- 运用技术： Nuxt.js / HTML5 / CSS3 / SCSS
- 技术要点：. 重力感应 / 图片合成

### 深圳市三维度科技有限公司 （ 2014 年 07 月 ~ 2016 年 09 月 ）

#### 三维度 供应商平台

- 项目介绍： 一个提供给供应商的管理商品平台
- 功能模块： 商品信息管理、商品管理、订单管理、售后管理
- 负责模块： 商品管理、订单管理、售后管理
- 项目总结： 按设计稿还原设计、并持续优化用户体验。
- 运用技术： Node / EJS / HTML / CSS

#### 三维度 卖家中心

- 项目介绍： 一个提供给商家管理商品的后台系统
- 功能模块： 商品信息管理、交易管理、商品管理、订单管理、店铺管理、物流管理、评价管理、售后管理
- 负责模块： 商品信息管理、交易管理、商品管理、订单管理、售后管理
- 项目总结： 按设计稿还原设计、并持续优化用户体验。
- 运用技术： Spring / Hibernate / SQLServer 2012/ Node / EJS / HTML / CSS

#### 三维度官网

- 项目介绍： 一个提供给供应商的管理商品平台
- 功能模块： 商品信息管理、商品管理、订单管理、售后管理
- 负责模块： 商品管理、订单管理、售后管理
- 项目总结： 按设计稿还原设计、并持续优化用户体验。
- 运用技术： Bootstrap / Jquery / HTML / CSS

---

## 技能清单

- Web 开发：HTML / CSS / Javascript / Typescript / Node.js
- Web 框架：Express / Koa / Nest / Umi / Nuxt
- 前端框架：React / Vue / Antd / Element / Jquery / Bootstrap
- 前端工具：Webpack / Gulp / Less / Scss
- 数据库相关：MongoDB / MySQL
- 版本管理、文档和自动化部署工具：Git / Svn
- 单元测试：Mocha / Karma
- 自动化工具：Jenkins / Travis.CI
