# Create creat-react-app (TS)

- npx create-react-app base-react-app --template typescript
- add config to tsconfig.json
  ```
  "baseUrl": "src"
  ```
- install prettier
  ```
  npm i -D prettier eslint-config-prettier
  ```
- create prettierrc & prettierignore
  ```
  echo > .prettierignore
  echo > .prettierrc
  ```
  - add ignore file to prettier
    ```
    /node_module
    ```
- config eslint
  - create .eslintrc.json file
    ```
    echo > .eslintrc.json
    ```
- add scripts to format code
  ```
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
  ```
  ***
- add libs for life coding
  ```
  npm i react-router-dom axios formik npm install @mui/material @mui/styled-engine-sc styled-components @fontsource/roboto @mui/icons-material lodash
  ```
  ***
- Axios

  - create folder
    ```
    mkdir > services -> mkdir > networking
    ```
  - create files

    ```
    api.ts config axios instance
    ```

    ```
    user.services.ts
    ```

  ***

- React-Router-Dom

  ```
  npm i react-router-dom
  ```

  - config router

  ```

  ```
