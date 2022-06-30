<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [
        {
          name: '前端知识',
          url: 'frontend-knowledge',
        },
        {
          name: '缓存',
          url: 'browser-cache',
        },
        {
          name: 'eslint+prettier',
          url: 'eslint-prettier',
        },
        {
          name: '埋点',
          url: 'burying-point',
        },
        {
          name: '在浏览器输入url之后发生了什么',
          url: 'what-happens-when-you-type-an-url-in-the-browser-and-press-enter',
        },
      ],
    };
  },
  render() {
    return (
      <div class="home">
        <div class="item-list">
          {this.list.map((item) => {
            return (
              <router-link to={`/post/${item.url}`}>{item.name}</router-link>
            );
          })}
        </div>
        <img src="https://lavas-project.github.io/pwa-book/img/pwa.png" />
      </div>
    );
  },
};
</script>

<style lang="less" scoped>
.home {
  max-width: 1200px;
  margin: auto;
  .item-list {
    width: 100%;
    a {
      width: 100%;
      display: block;
    }
  }
}
</style>
