# learn npm workspaces

## Commands

### create workspace

```bash
npm init -w (@<scope>/)<workspace>
```

### install npm package to local workspace

```bash
npm i -w (@<scope>/)<workspace> <package>
```

## Memo

### TypeScript

- TypeScript project reference is difficult to work with eslint and jest.
- Dependencies among local workspaces doesn't work if you want to directly import ts file from other local workspaces.
  - Using `paths` of `tsconfig.json` is an option to import ts file from them.
