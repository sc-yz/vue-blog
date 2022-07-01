<script>
export default {
  components: {
    Webpack: () => import('@/markdown/tool/webpack.md'),
  },
  render() {
    return (
      <div class="markdown-body">
        <Webpack />
      </div>
    );
  },
};
</script>
