module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://re.fjcredit.com/dapi',
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '/api' // pathRewrite方法重写url, 这样配置出来的url为http://localhost:8081/api/seller
          '^/api': '/' // pathRewrite方法重写url, 这样配置出来的url为http://localhost:8081/seller
        }
      }
    }
  }
}
