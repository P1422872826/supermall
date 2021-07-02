#git的基本指令

##先设置你的个人信息(如果之前设置好了就不用设置了)
```
git config --global user.name ''
git config --global user.password ''
git config --global user.email ''
<!-- 保存账户信息到git的配置文件 -->
git config --globale credential.store
git config --list  // 查看git配置信息


##管理项目
cd project  // 切到你的项目文件夹
git init // 初始化 git 生成， 在项目文件夹中生成 .git 文件夹
git remote add origin xxxxxxxxxx  // 关联到远程仓库地址
git add . // 将项目文件夹下