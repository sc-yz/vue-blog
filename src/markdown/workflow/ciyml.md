```yml
name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false
      - name: Install and Build
        run: |
          npm install
          npm run build
           cp dist/index.html dist/404.html
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.DEPLOY_KEY }}
          # REPOSITORY_NAME: sc-yz/sc-yz.github.io
          BRANCH: gh-pages-test
          FOLDER: dist

```