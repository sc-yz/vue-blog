<script>
export default {
  components: {
    useMarkdown: () => import('@/markdown/use-markdown.md'),
  },
  render() {
    return (
      <div class="markdown-body">
        <useMarkdown />
      </div>
    );
  },
};
</script>
