# lerna 多包管理工具

- packages 基础包位置
- projects 前端项目包位置

```
# 初始化项目及更新项目后重新读json配置
lerna init 
# 安装包和执行prepare命令
lerna bootstrap 
# 发布npm包
lerna publish 
# 执行包命令
lerna run serve --scope record --stream
```