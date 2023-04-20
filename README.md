# 简介 
这里是部署了我的个人网页，包含我的博客文章，我的网页作品和Android Apps。

# 网页原型
这个UI原型是我用Figma绘制的，手法比较拙劣，但是可以看出来大概思路。
|首页|博客列表|一些图片|
|:----:|:----:|:----:|
|![](/docs/homepage.png)|![](/docs/blogs.png)|![](/docs/wonderfulworld.png)|

# 博客
因为这里部署的是简单的静态网页，博文选择使用Markdown是个好主意，但是编辑内容我个人喜欢使用Notion，所以还是想要找个工具来将Notion的内容转为静态网页，然后更新到这里。
- Notion转静态页面我准备使用 [Notablog](https://github.com/dragonman225/notablog)
- 运行 `npm i -g notablog` 全局安装`notablog`
- 运行 `notablog generate ./public/blog` 生成静态页面，当页面内容有更新时，该指令可以重复执行。
- 因为生成页面只作为网页的一部分，暂时先用iframe嵌套一下，或者修改notablog源码

# 首页
手写静态页面太繁琐了，利用React来写更快速一些，使用[create-react-app](https://create-react-app.dev/)来创建react app，参考[react-gh-pages](https://github.com/gitname/react-gh-pages)流程来部署.

- `npx create-react-app zheng_blog --template typescript` to create the react project.
- `npm install gh-pages --save-dev` in the project folder.
- `npm start` to run it locally in `http://localhost:3000`
- `npm run deploy` to deploy to Github Pages.

# 参考
- https://docs.github.com/zh/pages
- https://aptrinh.js.org/notion-blogging.html
- https://react.dev/
- https://create-react-app.dev/docs/deployment#github-pages
- https://github.com/gitname/react-gh-pages