// vue.config.js
/*module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[hash:8].[ext]'
      })
      .end();
  }
};*/

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   chainWebpack: (config) => {
//     // Add loader for images
//     config.module
//       .rule('images')
//       .use('url-loader')
//       .loader('url-loader')
//       .tap((options) => Object.assign(options, { limit: 10240 }));

//     // Add loader for HEIC files
//     config.module
//       .rule('heic')
//       .test(/\.(heic)$/i)
//       .use('file-loader')
//       .loader('file-loader')
//       .options({
//         name: 'assets/[name].[hash:8].[ext]',
//       });
//   },
// };

// try 2
// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     // Add loader for images
//     config.module
//       .rule('images')
//       .use('url-loader')
//       .loader('url-loader')
//       .tap((options) => Object.assign(options, { limit: 10240 }));

//     // Add loader for HEIC files
//     config.module
//       .rule('heic')
//       .test(/\.(heic)$/i)
//       .use('file-loader')
//       .loader('file-loader')
//       .options({
//         name: 'assets/[name].[hash:8].[ext]',
//       });
//   },
// });

// try 2
// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     // Add loader for images
//     config.module
//       .rule('images')
//       .use('url-loader')
//       .loader('url-loader')
//       .tap((options) => {
//         // Check if options object exists
//         if (!options) {
//           options = {};
//         }
//         // Merge options and return
//         return Object.assign(options, { limit: 10240 });
//       });

//     // Add loader for HEIC files
//     config.module
//       .rule('heic')
//       .test(/\.(heic)$/i)
//       .use('file-loader')
//       .loader('file-loader')
//       .options({
//         name: 'assets/[name].[hash:8].[ext]',
//       });
//   },
// });

// try 4
// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     // Add loader for images
//     config.module
//       .rule('images')
//       .test(/\.(png|jpe?g|gif|webp)$/i)
//       .use('file-loader')
//       .loader('file-loader')
//       .options({
//         name: 'assets/[name].[hash:8].[ext]',
//       });

//     // Add loader for HEIC files
//     config.module
//       .rule('heic')
//       .test(/\.(heic)$/i)
//       .use('file-loader')
//       .loader('file-loader')
//       .options({
//         name: 'assets/[name].[hash:8].[ext]',
//       });
//   },
// });

// tryt 5
// const { defineConfig } = require('@vue/cli-service');
// const path = require('path');
// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     const imagesRule = config.module.rule('images');
//     imagesRule.uses.clear();
//     imagesRule
//       .use('url-loader')
//       .loader('url-loader')
//       .tap(options => Object.assign(options, { limit: 10240 })) // Adjust the limit based on your needs
//       .end();
//   },
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, 'src'),
//       },
//     },
//   },
// });

// try 6
// const path = require('path');

// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('images')
//       .use('url-loader')
//       .tap(options =>
//         Object.assign(options, {
//           limit: 10240,
//         })
//       );
//   },
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, 'src'),
//       },
//     },
//   },
// };
