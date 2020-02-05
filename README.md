- Creating the project directory
- `npm init -y`
- Created two directories
  - `src` - source
  - `lib` - compiled output
- Learnt Compilers
  - [Babel](https://babeljs.io/)
  - [Typescript](https://www.typescriptlang.org/)
- Setup Babel using [CLI](https://babeljs.io/setup)
  - Learnt [Preset ENV](https://babeljs.io/docs/en/babel-preset-env)
  - Learnt [Typescript Preset](https://babeljs.io/docs/en/babel-preset-typescript)
- Setup build script at package.json `babel src -d lib --extensions ".ts"`
- Browsers need to read compiled code from `lib`. If Import statements are used, we need the module attribute in the script tag

```html
<script type="module" src="../lib/<your_file>.js"></script>
```

- Modules can be run only using http server

```sh
npx http-server lib
```
