[Passo a passo - Instalação manual](https://docs.expo.dev/router/installation/#manual-installation)

Instalando o expo router:
```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

Altere o main no package.json:
```json
{
  "main": "expo-router/entry"
}
```

Adicone, em app.json, em expo { }:
```json
"scheme": "{NOME DO APP}",
```

Verifique se seu babel está configurado corretamente:
```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

Rode o projeto limpando o cache:
```bash
npx expo start -c
```

Caso o web seja usado para web também:

Instale:
```bash
npx expo install react-native-web react-dom
```

Adicione no app.json:
```json
{
  "web": {
    "bundler": "metro"
  }
}
```