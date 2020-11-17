module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["@babel/preset-env", {
              targets: {
                browsers: ['chrome 78']
              }
            }]],
            plugins: []     //class ->plugin -> function ，经过编译后，es6中的class变成es5中function
          }
        }
      }
    ]
  }
}