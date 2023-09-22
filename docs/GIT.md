# GIT 命令使用

在我们工作和学习中，我们经常会使用到 git 它来管理我们的项目版本和协作开发，下面是一些我个人学习 git 时做的笔记，浅显易懂，适合初学者

### git init

- 首先在打开你的项目文件夹，点击鼠标右键，选择 `Git Bash Here`选项

* 弹出命令行窗口后输入 `git init` 命令创建版本库

```bash
git init
```

### git clone

- 克隆⼀个指定项目到本地。指定的项目可以是本地文件系统或者由 HTTP 或 SSH 指定的远程路径

```bash
git clone 'https://......'

```

### git config user.name

- 针对当前项目配置用户名。使⽤`--global`参数将配置全局用户名

```bash
//全局登录git账号
git config global user.name "...."
git config
```

### git add

- 输入`git add .`命令将指定目录的所有修改加⼊到暂存区 中

* 输入`git add index.js` 将指定文件 index.js 的修改加入到暂存区中

```bash
//将当前目录下所有修改过的文件添加到暂存区
git add .

//对修改后的index.js文件添加到暂存区，其他修改文件不动
git add index.js
```

### git commit

- 输入`git commit -m 'message'` 提交暂存区的修改，message 可以填写本次提交的说明

```bash
git commit -m 第一次上传文件
```

### git status

- 查看当前项目下的文件状态，文件是否有修改，文件有无添加到暂存区，

### git remote

-

```bash
//查看远程仓库的地址
git remote -v
```

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
