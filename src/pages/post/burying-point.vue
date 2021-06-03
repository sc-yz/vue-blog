<script>
export default {
  components: {
    BuryingPoint: () => import('@/markdown/architecture/burying-point.md'),
  },
  render() {
    return (
      <div class="markdown-body">
        <BuryingPoint />
      </div>
    );
  },
};
</script>
