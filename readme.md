parcel + phina.js electron example
---

# How to use

## clear

clear all cache files and build code.  
remove `build`, `.cache` directory.

```
npm run clear
```

## dev

build and host code on `http://localhost:1234`.  
run `npm run clear` before building.

```
npm run dev
```

## ele:dev

run `npm run dev`, and run electron and load `http://localhost:1234`.

```
npm run ele:dev
```

## build

build code.  
product code output to `build` directory.  
run `npm run clear` before building.

```
npm run build
```

## pack

run `npm run build`, and pack code to electron app.

```
npm run pack
```
