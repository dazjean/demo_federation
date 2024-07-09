仓库是[csdn介绍模块联邦的示例代码](https://blog.csdn.net/weixin_50794208/article/details/130730839)，host和remote分别为两个独立的webpack项目，使用vue2+webpack5（federation），为了演示，仅配置了简单的webpack。

# 启动
首先请先安装依赖`npm i`

然后先启动remote再启动host
1. remote根目录下执行 `npx webpack serve --open`
2. host根目录下执行`npx webpack serve --open`# demo_federation
