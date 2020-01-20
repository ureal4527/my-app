# Movie App 2019

React JS Fundamentals Course (2019 Update!)
ReactJS   // 설정 
1. nodeJS 설치
 // https://nodejs.org/ko/download/
 $ node -v
 v12.14.1

2. npm 설치   // nodejs 설치시 같이
 $ npm -v
 6.13.4

3. npx 설치
$ npm install npx -g
C:\Users\sgm\AppData\Roaming\npm\npx -> C:\Users\sgm\AppData\Roaming\npm\node_modules\npx\index.js
+ npx@10.2.0
added 484 packages from 651 contributors in 20.193s

4. git
$ git --version
git version 2.23.0.windows.1

cmd -> 내위치 이동
$ d:
$ cd D:\코드\ReactJS
$ npx create-react-app my-app
cd my-app
  npm start

Happy hacking!
$ code my-app

// README.md 
# Movie App 2019

React JS Fundamentals Course (2019 Update!)
// package.json
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",     //삭제
    "eject": "react-scripts eject"  //삭제
  },

// Start
Compiled successfully!

You can now view my-app in the browser.

  http://localhost:3000/              // URL

Note that the development build is not optimized.
To create a production build, use npm run build.
------------------------------------------------------
//github 설정하기
//vscode terminal
> git init
//github 홈페이지 Repository 만들기 
name : my-app 
url 복사 : https://github.com/ureal4527/my-app
> git remote add origin https://github.com/ureal4527/my-app
> git add .
> git commit -m "https://github.com/ureal4527/my-app"
>git commit -m "#1.0 Creating your first React App"
> git push origin master
//commit
> git add *
> git commit -m "https://github.com/ureal4527/my-app"
> git push origin master
-------------------------------------------------------------------
"https://github.com/ureal4527/momenterm"
git commit -m "#1.0 Creating your first momenterm App"

> npm i prop-types

> npm i axios

https://yts.lt    // movie API
=> https://yts-proxy.now.sh/list_movies.json
