# vue + express + mongodb + docker 部署的前后端分离的项目

[在线预览](http://175.24.20.162:8080) 

## 实现的功能
1. pc和移动端的兼容
2. 新闻和体育资讯内容的爬取和展示
3. 商品模块
4. 后台管理系统对数据的curd（点击蓝色导航条hupu标识进入，管理系统没有完成移动端的适配）
5. node编写restful api
6. 帖子的发布和浏览
7. echart的引入和使用，更加直观的展示数据
8. docker实现应用的镜像化和容器化，实现应用的一键部署


## 目录结构
  - client  
    使用的是vue和一些第三方的组件库开发
  - server 
    express+mongodb开发接口
  - docker-compose.yml  
    docker的快速部署项目，通过dockerfile文件生成前后端的镜像，docker-compose命令行生成容器，安装依赖并运行，实现线上部署
  
