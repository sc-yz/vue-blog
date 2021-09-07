const { merge } = require('webpack-merge');

const base = {
  extensions: ['.mjs', '.js', '.jsx', '.vue', '.json'],
  obj: {
    name: {
      first: 'w',
      last: 'aq',
    },
  },
};

const news = {
  extensions: ['.json'],
  obj: {
    name: {
      first: 'l',
      last: 'l',
    },
  },
};

const output = merge(
  { fruit: 'apple', color: 'red' },
  { fruit: 'strawberries' }
);

const newsOld = merge(base, news);
console.log(newsOld);
