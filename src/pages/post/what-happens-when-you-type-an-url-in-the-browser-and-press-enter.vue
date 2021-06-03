<script>
export default {
  components: {
    whatHappensWhenYouTypeAnUrlInTheBrowserAndPressEnter: () =>
      import(
        '@/markdown/browser/what-happens-when-you-type-an-url-in-the-browser-and-press-enter.md'
      ),
  },
  render() {
    return (
      <div class="markdown-body">
        <whatHappensWhenYouTypeAnUrlInTheBrowserAndPressEnter />
      </div>
    );
  },
};
</script>
