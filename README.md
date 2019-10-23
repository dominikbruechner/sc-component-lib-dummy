# Zum Import
## zur package.lock hinzu
```
npm add ../sc-component-lib/
```

## symlinks im webpack deaktivieren
```
module.exports = {
    chainWebpack: config => config.resolve.set('symlinks', false)
}
```

## Code-Beispiel in Vue-Native-App zur Verwendung
```
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <custom-button />
  </div>
</template>
<script>
import CustomButton from 'sc-component-lib'
export default {
  name: 'app',
  components: {
    CustomButton
  }
}
</script>
```


# sc-component-lib

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
