

## adding swagger
npm install swagger-jsdoc swagger-ui-express

## converting to ts
npm install typescript --save-dev
npx tsc --init
npm install --save-dev @types/express

npm i --save-dev @types/pg
Additionally, ensure that your tsconfig.json file is configured properly to include type definitions from node_modules. You can check if "node_modules/@types" is included in the typeRoots array in your tsconfig.json file. If not, you can add it like this:

```json
{
  "compilerOptions": {
    "typeRoots": ["node_modules/@types"]
  }
}
```

npm i --save-dev @types/swagger-jsdoc
npm i --save-dev @types/swagger-ui-express


## Error
    This module is declared with 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.

Use 
import express = require('express'); //! import express from 'express';
import * as express from 'express';
INSTEAD OF
import express, { Application } from 'express';


the above is caused since I used tsc index.ts
when we compile using name of file as in here "index.ts" instead of just running "tsc" to compile, the compiler doesn't read tsconfig.json where I've set "allowSyntheticDefaultImports": true & "esModuleInterop": true which is what is needed to use default imports

  That is so annoying that tsc ignores tsconfig.json when called with a specific file argument. – hlovdal