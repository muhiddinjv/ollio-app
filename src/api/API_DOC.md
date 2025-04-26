## How to use

```javascript
import { DefaultApi } from './api/generated_api';
import axios from 'axios';

const instance = axios.create({ baseURL: '/v1', timeout: 3000 });
const api = new DefaultApi(undefined, '', instance);
```