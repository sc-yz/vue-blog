const sanitizeHtml = require('sanitize-html');

export default function filterHtml(str) {
  const reg = {
    allowedTags: [
      'span',
      'p',
      'a',
      'b',
      'i',
      'em',
      'strong',
      'blockquote',
      'ul',
      'li',
      'ol',
      'dl',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'sup',
      'sub',
      'img',
    ],
    allowedAttributes: {
      a: ['href', 'target'],
      img: ['src'],
    },
    // 转换标签
    transformTags: {
      ol: 'ul',
      dl: 'ul',
      div: 'p',
      section: 'p',
    },
  };
  const html = sanitizeHtml(str, reg);
  return html;
}
