module.exports = {
    css: {extract: false},
    chainWebpack: config => {
    // So that we get a single bundle
    config.optimization.delete('splitChunks');
    },
    configureWebpack: config => {
    config.output.libraryExport = 'default';
    }
}