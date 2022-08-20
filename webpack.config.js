module.exports = {
    module: {
        rules : [
            {
              test: /\.(png|jpg|gif)$/i,
              use: [{ loader: 'file-loader'}]
            },
            {
              test: /\.html$/,
              use: [
                { loader: 'file-loader' },
                { loader: 'extract-loader' },
                { loader: 'ref-loader' },
              ]
            }
          ]
    },
}