parcel + phina.js electron example
---

# How to use

## clear

clear all cache files and build code.  
remove `dist`, `build`, `.cache` directory.

```
npm run clear
```

## dev

build and host code on `http://localhost:1234`.  
build code output to `dist` directory.

```
npm run dev
```

## build

build code.  
product code output to `build` directory.

```
npm run build
```

## elebuild

build code for electron.
product code output to `elebuild` directory.

```
npm run build
```

## pack

build electron app.  
run `npm run elebuild` and `electron-builder`.  
product application output to `app` directory.

```
npm run pack
```
