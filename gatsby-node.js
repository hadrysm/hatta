const path = require('path');
const slugify = require('slugify');

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articlePostTemplate = path.resolve(
    `src/templates/ArticlePostTemplate/ArticlePostTemplate.js`,
  );

  const result = await graphql(
    `
      query MyQuery {
        allDatoCmsArticle {
          nodes {
            title
            id
          }
        }
      }
    `,
  );

  // Create blog post pages.
  result.data.allDatoCmsArticle.nodes.forEach(({ title, id }) => {
    const slugifyTitle = slugify(title, { lower: true });

    createPage({
      path: `articles/${slugifyTitle}`,
      component: articlePostTemplate,
      context: {
        id,
      },
    });
  });
};
