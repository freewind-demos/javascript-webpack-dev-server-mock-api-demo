const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    before(app) {
      app.use('/hello/:name', (req, res) => {
        console.log('### req.params', req.params);
        const name = req.params.name;
        res.send({
          hello: name
        })
      })
    }
  },
  plugins: [new HtmlWebpackPlugin()],
}
