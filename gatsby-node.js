const path = require('path');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const { setWebpackConfig } = actions;

  if (stage.startsWith('develop')) {
    setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
  }

  setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
