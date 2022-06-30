<!--
 * @Author: kian
 * @Date: 2021-09-20 13:47:40
 * @LastEditors: kian
 * @LastEditTime: 2021-09-20 16:21:33
 * @Description: 
-->

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

<!-- <route-meta>
{
  "sidebar": false
}
</route-meta> -->
