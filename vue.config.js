module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // vue cli3 自动帮你写了一个 '@': './src'
        'assets': '@/assets',
        'commonJs': '@/commonJs',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
