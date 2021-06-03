<script>
export default {
  components: {
    ServiceWorker: () => import('@/markdown/browser/service-worker.md'),
  },
  render() {
    return (
      <div class="markdown-body">
        <ServiceWorker />
      </div>
    );
  },
};
</script>
