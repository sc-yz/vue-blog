const EDITOR_CONFIG = {
  MENU_CONF: {
    // 文字颜色
    color: {
      colors: [],
    },
    // 背景颜色
    bgColor: {
      colors: [],
    },
    // 修改 uploadImage 菜单配置
    uploadImage: {
      // 自定义上传
      async customUpload(file, insertFn) {
        // async customUpload(file, insertFn) {                   // JS 语法
        // file 即选中的文件
        // 自己实现上传，并得到图片 url alt href
        // 最后插入图片
        insertFn(url, alt, href);
      },
    },
    uploadVideo: {
      // 自定义上传
      async customUpload(file, insertFn) {
        // async customUpload(file, insertFn) {                   // JS 语法
        // file 即选中的文件
        // 自己实现上传，并得到视频 url poster
        // 最后插入视频
        insertFn(url, poster);
      },
    },
    // 字体
    fontSize: {
      fontSizeList: [
        // 元素支持两种形式
        //   1. 字符串；
        //   2. { name: 'xxx', value: 'xxx' }

        '12px',
        '16px',
        { name: '24px', value: '24px' },
        '40px',
      ],
    },
    // 行高
    lineHeight: {
      lineHeightList: ['1', '1.5', '2', '2.5'],
    },
  },
};
