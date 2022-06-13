const dealContent = (html) => {
  if (!isHtml(html)) return;
  const childNodes = html.childNodes || [];
  for (let i = 0; i < childNodes.length; i++) {
    const cnode = childNodes[i];
    if (isHtml(cnode)) {
      if (cnode.nodeName.toLowerCase() === 'a') {
        console.log('这是自定义a标签');
      } else if (cnode.nodeName.toLowerCase() === 'div') {
        dealContent(cnode);
      }
    }
  }
};

const isHtml = (html) => {
  if (html?.nodeType === 1) return true;
  return false;
};

const dealDiyData = (cnode) => {
  const type = cnode.getAttribute('selected-n');
  const data = {
    key: cnode.innerText,
    value: '',
    code: '',
  };

  switch (type) {
    case 'link':
      data.value = `<[[${cnode.lastChild && cnode.lastChild.nodeValue}](${
        cnode.href
      })]>`;
      break;
    case 'user':
      // 用户
      const userId = cnode.id.split('user-')[1];
      data.value = ` <[${cnode.innerText.trim()},${
        cnode.id.split('user-')[1]
      }]>`;
      data.code = userId;

      break;
    case 'stock':
      // 股票

      data.value = ` <[${cnode.innerText}]>`;
      data.code = cnode.innerText.match(/\(([\s\S]*)\)/)[1];

      break;
    case 'portfolio':
      data.value = ` <[%${cnode.innerText.substring(
        1,
        cnode.innerText.length - 1
      )}%]>`;

      data.code = cnode.innerText.match(/\(([\s\S]*)\)/)[1];

      break;
    default:
      break;
  }

  console.log('data', data);
};
