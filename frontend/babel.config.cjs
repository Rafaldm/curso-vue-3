module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { esmodules: true },
      modules: false // preserva import/export para o webpack
    }]
  ]
};
