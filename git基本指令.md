# git的基本指令

## 先设置你的个人信息(如果之前设置好了就不用设置了)
```
git config --global user.name  // 设置用户名
git config --global user.password // 设置密码
git config --global user.email  // 设置邮箱
 
git config --globale credential.store // 保存账户信息到git的配置文件 
git config --list  // 查看git配置信息
```

## 将项目添加到远程仓库
```
cd project  // 切到你的项目文件夹
git init // 初始化 git 生成， 在项目文件夹中生成 .git 文件夹
git remote add origin xxxxxxxxxx  // 关联到远程仓库地址
git add . // 将项目文件夹下所有文件缓存到 git 缓存区
git commit -m '描述' // 将所有文件commit到已经关联的远程仓库
git push -u // 将commit 推送到 master主分支下
```

## 删除项目某个文件
```
$ git pull origin master 将远程仓库里面的项目拉下来

$ dir  查看有哪些文件夹

$ git rm -r --cached Photo\ albums  删除Photo albums文件夹(这里的文件夹名有空格命令行需要用"\ "来拼接）

$ git commit -m '删除了Photo albums文件夹t'  提交,添加操作说明

$ git push -u