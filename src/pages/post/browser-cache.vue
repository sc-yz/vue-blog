<script>
export default {
  components: {
    BrowserCache: () => import('@/markdown/browser/browser-cache.md'),
  },
  render() {
    return (
      <div class="markdown-body">
        <BrowserCache />
      </div>
    );
  },
};
</script>
