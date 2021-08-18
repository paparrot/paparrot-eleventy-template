![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=paparrot)
[![paparrot-github-action](https://github.com/paparrot/paparrot-eleventy-template/actions/workflows/main.yml/badge.svg)](https://github.com/paparrot/paparrot-eleventy-template/actions/workflows/main.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Paparrot

Simple personal site built with [Eleventy](https://11ty.dev) and hosted on [Vercel](https://vercel.com). Template based on [Fernfolio](https://fernfolio.netlify.app/).

![image](https://user-images.githubusercontent.com/59335849/129950145-4229ff99-7172-4811-b94a-fc72faa3c06b.png)

### <pre>🖥 [Demo](https://paparrot-eleventy-template.vercel.app/)</pre>

## ✔️ Features

- [x] Full customization from Forestry CMS
- [x] RSS-feed
- [x] Progressive web app (offline reading available)
- [x] Google Analytics
- [x] Yandex.Metrika
- [x] Working form based on FormSpark and protected with reCAPTCHA
- [x] Working comments based on Cusdis
- [x] Socials link
- [x] Dark mode
- [ ] Social media buttons

## 🚀 Quick Start

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&project-name=paprrot-portfolio&repo-name=paparrot-portfolio&redirect-url=https%3A%2F%2Fforestry.io%2F&demo-title=Paparrot&demo-description=A%20statically%20generated%20personal%20site%20build%20with%20Eleventy&demo-url=https%3A%2F%2Fpaparrot-eleventy-template.vercel.app%2F&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fpaparrot%2Fpaparrot-eleventy-template%2Fmaster%2Fstatic%2Fimg%2Fscreenshot%2520vercel.png)

### 1. Click the "Deploy" button above

![image](https://user-images.githubusercontent.com/59335849/129957010-d04965ed-fd76-4169-9150-05c695575b1e.png)
Now, connect with you Github (or Gitlab, Bitbucket) account, check "Create private repository" and type your new repository name. All your files will be there.

![image](https://user-images.githubusercontent.com/59335849/129957223-66944a52-fccb-4715-a9e5-03fc4ba47141.png)
You can skip this block.

![image](https://user-images.githubusercontent.com/59335849/129957360-70c4a159-555d-4662-87a2-3f538980ba72.png)
Wait while your repository will be deployed on Vercel.

### 2. Connect with Forestry

Now, go to [Forestry CSM](https://forestry.io) and sing up with your git-provider (Github, Gitlab, Bitbucket), log in, and click to "Add Site" button.
![image](https://user-images.githubusercontent.com/59335849/129957915-55482051-f3e6-464b-afa2-524ce35f793f.png)
Select the 11ty (our site was build with this static generator), select your git provider.
![image](https://user-images.githubusercontent.com/59335849/129958155-db33de40-4728-4243-871e-a2cc7fdf2ce1.png)
Connect with private repos (click to "Not showing private repos" button).
Select name of repo that you deployed in first step and select main (or master) branch.

### 3. Edit some content

Now you can edit your site data. Click to sections in sidebar and type perfect content!

### 4. Setup local environment

- Clone the repo locally `git clone https://github.com/paparrot/paparrot-eleventy-template.git`
- Navigate to root folder `cd paparrot-eleventy-template`
- Install the goods `npm install`
- Run it `npm start`
- You should now be able to see everything running on localhost:8080
- When you commit to local git branches husky start the prettier and stylelint, after this it start build project. If no one error, you can commit.
- Github actions make this test too, for correct commits from Forestry

## 💻 Development Scripts

**`npm start`**

> Run 11ty with hot reload at localhost:8080

**`npm run build`**

> Generate minified production build

Use this as the "Publish command" if needed by hosting such as Netlify.

**`npm run stylelint`**

> Run stylelint with --fix option only on css files

**`npm run prettier`**

> Run prettier code formatter

Checkout the Eleventy [Command Line Usage docs](https://www.11ty.dev/docs/usage/) for more options

## Bug reports, feature requests, etc

This is an ongoing project and I welcome contributions and suggestions! Feel free to submit a PR or issue.
