module.exports = {
    // ...
    module: {
      rules: [
        // ...
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'img/'
              }
            },
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                fallback: require.resolve('file-loader'),
                publicPath: '/'
              }
            }
          ]
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'media/'
              }
            }
          ]
        }
      ]
    }
  }