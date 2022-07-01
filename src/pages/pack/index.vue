<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [
        {
          name: 'Webpack',
          url: 'webpack',
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
              <router-link to={`/pack/${item.url}`}>{item.name}</router-link>
            );
          })}
        </div>
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
