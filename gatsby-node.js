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
          }
        }
      }
    `,
  );

  // Create blog post pages.
  result.data.allDatoCmsArticle.nodes.forEach(({ title }) => {
    const slugifyTitle = slugify(title, { lower: true });

    createPage({
      path: `articles/${slugifyTitle}`,
      component: articlePostTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    });
  });
};
