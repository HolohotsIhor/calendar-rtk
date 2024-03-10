const { addWebpackModuleRule, override } = require('customize-cra');

module.exports = override(
    // Добавляем правило для файлов Stylus
    addWebpackModuleRule({
        test: /\.styl$/,
        use: [
            'style-loader',
            'css-loader',
            'stylus-loader'
        ]
    })
);