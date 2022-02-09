# haha

my vscode plugins

## [Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

## Prettier

    右键设置js格式化

    ```js
     "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
    ```

    注意: 如果格式化没有生效，没有设置规则，可能的原因:1、vscode没有配置任何规则 2、项目没有安装依赖

## Vetur

    右键选择`使用..格式化文档`，配置Vetur为默认的格式化程序

    ```js
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    }
    ```

    注意： 当vscode只存在prettier时，可以格式化vue文件，添加Vetur之后，vue格式化不生效，进行上述操作
