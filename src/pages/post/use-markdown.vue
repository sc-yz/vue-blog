<script>
export default {
  components: {
    EslintPrettier: () => import('@/markdown/architecture/eslint-prettier.md'),
  },
  render() {
    return (
      <div class="markdown-body">
        <EslintPrettier />
      </div>
    );
  },
};
</script>
