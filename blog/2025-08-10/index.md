---
title: 每周博客 - 2025 年现代 Node.js 模式
authors: jim
tags: [nodejs, javascript, esm, web-standards, streams]
---

> 原文： [# Modern Node.js Patterns for 2025](https://kashw1n.com/blog/nodejs-2025/)

自早期以来，Node.js 经历了显著的变革。如果你已经编写 Node.js 多年，你可能亲身见证了这一演变 —— 从充斥回调函数、由 CommonJS 主导的局面，到如今简洁、基于标准的开发体验。

这些变化不仅仅是表面上的，它们代表了我们处理服务器端 JavaScript 开发方式的根本性转变。现代 Node.js 拥抱 Web 标准，减少外部依赖，并提供更直观的开发者体验。让我们探讨这些转变，并理解它们为何对 2025 年你的应用程序至关重要。

{/* truncate */}

## 1. 模块系统：ESM 成为新标准

模块系统或许是你会注意到最大差异的地方。CommonJS 曾很好地为我们服务，但 ES 模块（ESM）已成为明显的赢家，它提供了更好的工具支持并与 Web 标准保持一致。

### 旧方式（CommonJS）

让我们看看我们过去是如何构建模块的。这种方法需要显式的导出和同步的导入：



```js
// math.js

function add(a, b) {

   return a + b;

}

module.exports = { add };

// app.js

const { add } = require('./math');

console.log(add(2, 3));
```

这虽然可行，但存在局限性 —— 没有静态分析，没有树摇（tree-shaking），而且与浏览器标准不一致。

### 现代方式（带有 Node: 前缀的 ES 模块）

现代 Node.js 开发采用 ES 模块，并添加了一个关键部分 —— 用于内置模块的 `node:` 前缀。这种显式命名避免了混淆，使依赖关系清晰明了：



```js
// math.js

export function add(a, b) {

  return a + b;

}

// app.js

import { add } from './math.js';

import { readFile } from 'node:fs/promises';  // 现代的 node: 前缀

import { createServer } from 'node:http';

console.log(add(2, 3));
```

`node:` 前缀不仅仅是一个约定 —— 它向开发者和工具发出了一个明确的信号，即你正在导入 Node.js 内置模块，而不是 npm 包。这防止了潜在的冲突，并使你的代码在依赖关系方面更加明确。

### 顶级 Await：简化初始化

最具颠覆性的功能之一是顶级 await。不再需要为了在模块级别使用 await 而将整个应用程序包裹在一个异步函数中：

```js
// app.js - 无需包装函数的简洁初始化

import { readFile } from 'node:fs/promises';

const config = JSON.parse(await readFile('config.json', 'utf8'));

const server = createServer(/\* ... \*/);

console.log('App started with config:', config.appName);
```

这消除了我们过去随处可见的立即调用异步函数表达式（IIFE）的常见模式。你的代码变得更具线性，也更容易推理。

## 2. 内置 Web API：减少外部依赖

Node.js 大力拥抱 Web 标准，将 Web 开发者已经熟悉的 API 直接引入到运行时中。这意味着更少的依赖和跨环境更高的一致性。

### Fetch API：不再需要 HTTP 库依赖

还记得每个项目都需要 axios、node-fetch 或类似的库来进行 HTTP 请求的日子吗？那些日子已经一去不复返了。Node.js 现在原生包含了 Fetch API：



```js
// 旧方式 - 需要外部依赖

const axios = require('axios');

const response = await axios.get('https://api.example.com/data');

// 现代方式 - 具有增强功能的内置 fetch

const response = await fetch('https://api.example.com/data');

const data = await response.json();
```

但现代方法不仅仅是替换你的 HTTP 库。你还获得了内置的复杂超时和取消支持：



```js
async function fetchData(url) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(5000) // Built-in timeout support
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'TimeoutError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
}
```

这种方法消除了对超时库的需求，并提供了一致的错误处理体验。`AbortSignal.timeout()` 方法特别巧妙 —— 它创建了一个在指定时间后自动中止的信号。

### AbortController：优雅的操作取消

现代应用程序需要优雅地处理取消操作，无论是用户发起的还是由于超时。AbortController 提供了一种标准化的方式来取消操作：



```js
// Cancel long-running operations cleanly
const controller = new AbortController();

// Set up automatic cancellation
setTimeout(() => controller.abort(), 10000);

try {
  const data = await fetch('https://slow-api.com/data', {
    signal: controller.signal
  });
  console.log('Data received:', data);
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('Request was cancelled - this is expected behavior');
  } else {
    console.error('Unexpected error:', error);
  }
}
```

这种模式不仅适用于 fetch，还适用于许多 Node.js API。你可以将同一个 AbortController 用于文件操作、数据库查询以及任何支持取消的异步操作。

## 3. 内置测试：无需外部依赖的专业测试

过去，测试需要在 Jest、Mocha、Ava 或其他框架之间进行选择。Node.js 现在包含了一个功能齐全的测试运行器，无需任何外部依赖即可满足大多数测试需求。

### 使用 Node.js 内置测试运行器进行现代测试

内置测试运行器提供了一个干净、熟悉的 API，感觉现代且完整：



```js
// test/math.test.js
import { test, describe } from 'node:test';
import assert from 'node:assert';
import { add, multiply } from '../math.js';

describe('Math functions', () => {
  test('adds numbers correctly', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  test('handles async operations', async () => {
    const result = await multiply(2, 3);
    assert.strictEqual(result, 6);
  });

  test('throws on invalid input', () => {
    assert.throws(() => add('a', 'b'), /Invalid input/);
  });
});

```

它特别强大之处在于与 Node.js 开发工作流的无缝集成：



```bash
# 使用内置运行器运行所有测试

node --test

# 开发时的监视模式

node --test --watch

# 覆盖率报告（Node.js 20+）

node --test --experimental-test-coverage
```

监视模式在开发过程中特别有价值 —— 当你修改代码时，你的测试会自动重新运行，无需任何额外配置即可提供即时反馈。

## 4. 复杂的异步模式

虽然 async/await 并不新鲜，但围绕它的模式已经显著成熟。现代 Node.js 开发更有效地利用这些模式，并将它们与更新的 API 结合起来。

### 具有增强错误处理的 Async/Await

现代错误处理将 async/await 与复杂的错误恢复和并行执行模式相结合：



```js
import { readFile, writeFile } from 'node:fs/promises';

async function processData() {

   try {

     // 独立操作的并行执行

     const [config, userData] = await Promise.all([

       readFile('config.json', 'utf8'),

       fetch('/api/user').then(r => r.json())

     ]);

     const processed = processUserData(userData, JSON.parse(config));

     await writeFile('output.json', JSON.stringify(processed, null, 2));

     return processed;

   } catch (error) {

     // 带有上下文的结构化错误日志

     console.error('Processing failed:', {

       error: error.message,

       stack: error.stack,

       timestamp: new Date().toISOString()

     });

     throw error;

   }

}
```

这种模式将用于提高性能的并行执行与全面的错误处理相结合。`Promise.all()` 确保独立操作并发运行，而 try/catch 提供了一个带有丰富上下文的单一错误处理点。

### 使用 AsyncIterators 进行现代事件处理

事件驱动编程已经超越了简单的事件监听器。AsyncIterators 提供了一种更强大的方式来处理事件流：



```js
import { EventEmitter, once } from 'node:events';

class DataProcessor extends EventEmitter {

   async *processStream() {

     for (let i = 0; i < 10; i++) {

       this.emit('data', `chunk-${i}`);

       yield `processed-${i}`;

       // 模拟异步处理时间

       await new Promise(resolve => setTimeout(resolve, 100));

     }

     this.emit('end');

   }

}

// 作为异步迭代器消费事件

const processor = new DataProcessor();

for await (const result of processor.processStream()) {

   console.log('Processed:', result);

}
```

这种方法特别强大，因为它将事件的灵活性与异步迭代的控制流结合起来。你可以按顺序处理事件，自然地处理背压，并干净地退出处理循环。

## 5. 与 Web 标准集成的高级流

流仍然是 Node.js 最强大的功能之一，但它们已经发展到拥抱 Web 标准并提供更好的互操作性。

### 现代流处理

流处理通过更好的 API 和更清晰的模式变得更加直观：



```js
import { Readable, Transform } from 'node:stream';

import { pipeline } from 'node:stream/promises';

import { createReadStream, createWriteStream } from 'node:fs';

// 用简洁、专注的逻辑创建转换流

const upperCaseTransform = new Transform({

   objectMode: true,

   transform(chunk, encoding, callback) {

     this.push(chunk.toString().toUpperCase());

     callback();

   }

});

// 用强大的错误处理处理文件

async function processFile(inputFile, outputFile) {

   try {

     await pipeline(

       createReadStream(inputFile),

       upperCaseTransform,

       createWriteStream(outputFile)

     );

     console.log('File processed successfully');

   } catch (error) {

     console.error('Pipeline failed:', error);

     throw error;

   }

}
```

带有 promises 的 `pipeline` 函数提供自动清理和错误处理，消除了流处理中许多传统的痛点。

### Web 流互操作性

现代 Node.js 可以与 Web 流无缝协作，提高与浏览器代码和边缘运行时环境的兼容性：



```js
// 创建一个 Web 流（与浏览器兼容）

const webReadable = new ReadableStream({

   start(controller) {

     controller.enqueue('Hello ');

     controller.enqueue('World!');

     controller.close();

   }

});

// 在 Web 流和 Node.js 流之间转换

const nodeStream = Readable.fromWeb(webReadable);

const backToWeb = Readable.toWeb(nodeStream);
```

这种互操作性对于需要在多个环境中运行或在服务器和客户端之间共享代码的应用程序至关重要。

## 6. 工作线程：CPU 密集型任务的真正并行性

JavaScript 的单线程特性并不总是适合 CPU 密集型工作。工作线程提供了一种在保持 JavaScript 简单性的同时有效利用多个核心的方法。

### 无阻塞的后台处理

工作线程非常适合那些否则会阻塞主事件循环的计算密集型任务：



```js
// worker.js - 隔离的计算环境

import { parentPort, workerData } from 'node:worker_threads';

function fibonacci(n) {

   if (n < 2) return n;

   return fibonacci(n - 1) + fibonacci(n - 2);

}

const result = fibonacci(workerData.number);

parentPort.postMessage(result);
```

主应用程序可以委托繁重的计算，而不会阻塞其他操作：



```js
// main.js - 非阻塞委托

import { Worker } from 'node:worker_threads';

import { fileURLToPath } from 'node:url';

async function calculateFibonacci(number) {

   return new Promise((resolve, reject) => {

     const worker = new Worker(

       fileURLToPath(new URL('./worker.js', import.meta.url)),

       { workerData: { number } }

     );

     worker.on('message', resolve);

     worker.on('error', reject);

     worker.on('exit', (code) => {

       if (code !== 0) {

         reject(new Error(`Worker stopped with exit code ${code}`));

       }

     });

   });

}

// 你的主应用程序保持响应

console.log('Starting calculation...');

const result = await calculateFibonacci(40);

console.log('Fibonacci result:', result);

console.log('Application remained responsive throughout!');
```

这种模式允许你的应用程序利用多个 CPU 核心，同时保持熟悉的 async/await 编程模型。

## 7. 增强的开发体验

现代 Node.js 通过内置工具优先考虑开发者体验，这些工具以前需要外部包或复杂的配置。

### 监视模式和环境管理

开发工作流通过内置的监视模式和环境文件支持得到了显著简化：



```json
{

   "name": "modern-node-app",

   "type": "module",

   "engines": {

     "node": ">=20.0.0"

   },

   "scripts": {

     "dev": "node --watch --env-file=.env app.js",

     "test": "node --test --watch",

     "start": "node app.js"

   }

}
```

`--watch` 标志消除了对 nodemon 的需求，而 `--env-file` 则移除了对 dotenv 的依赖。你的开发环境变得更简单、更快：


```js
// .env 文件通过 --env-file 自动加载

// DATABASE_URL=postgres://localhost:5432/mydb

// API_KEY=secret123

// app.js - 环境变量立即可用

console.log('Connecting to:', process.env.DATABASE\_URL);

console.log('API Key loaded:', process.env.API\_KEY ? 'Yes' : 'No');
```

这些功能通过减少配置开销和消除重启周期，使开发更加愉快。

## 8. 现代安全和性能监控

安全和性能已成为首要关注点，内置了用于监控和控制应用程序行为的工具。

### 增强安全性的权限模型

实验性权限模型允许你限制应用程序可以访问的内容，遵循最小权限原则：



```bash
# 以受限制的文件系统访问运行

node --experimental-permission --allow-fs-read=./data --allow-fs-write=./logs app.js

# 网络限制

node --experimental-permission --allow-net=api.example.com app.js

# 上述 allow-net 功能尚未可用，PR 已合并到 node.js 仓库，将在未来版本中可用
```

这对于处理不受信任的代码或需要展示安全合规性的应用程序特别有价值。

### 内置性能监控

性能监控现在已内置到平台中，消除了对外部 APM 工具进行基本监控的需求：



```js
import { PerformanceObserver, performance } from 'node:perf\_hooks';

// 设置自动性能监控

const obs = new PerformanceObserver((list) => {

   for (const entry of list.getEntries()) {

     if (entry.duration > 100) { // 记录缓慢操作

       console.log(`Slow operation detected: ${entry.name} took ${entry.duration}ms`);

     }

   }

});

obs.observe({ entryTypes: ['function', 'http', 'dns'] });

// 为你自己的操作添加工具

async function processLargeDataset(data) {

   performance.mark('processing-start');

   const result = await heavyProcessing(data);

   performance.mark('processing-end');

   performance.measure('data-processing', 'processing-start', 'processing-end');

   return result;

}
```

这提供了对应用程序性能的可见性，无需外部依赖，帮助你在开发早期识别瓶颈。

## 9. 应用程序分发和部署

现代 Node.js 通过单可执行应用程序和改进的打包等功能使应用程序分发更加简单。

### 单可执行应用程序

你现在可以将你的 Node.js 应用程序捆绑到一个单一的可执行文件中，简化部署和分发：



```bash
# 创建一个自包含的可执行文件

node --experimental-sea-config sea-config.json
```

配置文件定义了你的应用程序如何被捆绑：



```json
{

   "main": "app.js",

   "output": "my-app-bundle.blob",

   "disableExperimentalSEAWarning": true

}
```

这对于 CLI 工具、桌面应用程序或任何你希望分发应用程序而无需用户单独安装 Node.js 的场景特别有价值。

## 10. 现代错误处理和诊断

错误处理已经超越了简单的 try/catch 块，包括结构化错误处理和全面的诊断。

### 结构化错误处理

现代应用程序受益于结构化、上下文相关的错误处理，提供更好的调试信息：



```js
class AppError extends Error {

   constructor(message, code, statusCode = 500, context = {}) {

     super(message);

     this.name = 'AppError';

     this.code = code;

     this.statusCode = statusCode;

     this.context = context;

     this.timestamp = new Date().toISOString();

   }

   toJSON() {

     return {

       name: this.name,

       message: this.message,

       code: this.code,

       statusCode: this.statusCode,

       context: this.context,

       timestamp: this.timestamp,

       stack: this.stack

     };

   }

}

// 带有丰富上下文的用法

throw new AppError(

   'Database connection failed',

   'DB_CONNECTION_ERROR',

   503,

   { host: 'localhost', port: 5432, retryAttempt: 3 }

);
```

这种方法为调试和监控提供了更丰富的错误信息，同时在你的应用程序中保持一致的错误接口。

### 高级诊断

Node.js 包含复杂的诊断功能，帮助你了解应用程序内部的情况：



```js
import diagnostics_channel from 'node:diagnostics_channel';

// 创建自定义诊断通道

const dbChannel = diagnostics_channel.channel('app:database');

const httpChannel = diagnostics_channel.channel('app:http');

// 订阅诊断事件

dbChannel.subscribe((message) => {

   console.log('Database operation:', {

     operation: message.operation,

     duration: message.duration,

     query: message.query

   });

});

// 发布诊断信息

async function queryDatabase(sql, params) {

   const start = performance.now();

   try {

     const result = await db.query(sql, params);

     dbChannel.publish({

       operation: 'query',

       sql,

       params,

       duration: performance.now() - start,

       success: true

     });

     return result;

   } catch (error) {

     dbChannel.publish({

       operation: 'query',

       sql,

       params,

       duration: performance.now() - start,

       success: false,

       error: error.message

     });

     throw error;

   }

}
```

这种诊断信息可以被监控工具消费、记录用于分析或用于触发自动补救措施。

## 11. 现代包管理和模块解析

包管理和模块解析变得更加复杂，更好地支持单体仓库、内部包和灵活的模块解析。

### 导入映射和内部包解析

现代 Node.js 支持导入映射，允许你创建清晰的内部模块引用：



```json
{

   "imports": {

     "#config": "./src/config/index.js",

     "#utils/\*": "./src/utils/\*.js",

     "#db": "./src/database/connection.js"

   }

}
```

这为内部模块创建了一个清晰、稳定的接口：



```js
// 干净的内部导入，在你重新组织时不会中断

import config from '#config';

import { logger, validator } from '#utils/common';

import db from '#db';
```

这些内部导入使重构更容易，并清楚地区分内部和外部依赖。

### 用于灵活加载的动态导入

动态导入支持复杂的加载模式，包括条件加载和代码拆分：



```js
// 根据配置或环境加载功能

async function loadDatabaseAdapter() {

   const dbType = process.env.DATABASE_TYPE || 'sqlite';

   try {

     const adapter = await import(`#db/adapters/${dbType}`);

     return adapter.default;

   } catch (error) {

     console.warn(`Database adapter ${dbType} not available, falling back to sqlite`);

     const fallback = await import('#db/adapters/sqlite');

     return fallback.default;

   }

}

// 条件功能加载

async function loadOptionalFeatures() {

   const features = [];

   if (process.env.ENABLE_ANALYTICS === 'true') {

     const analytics = await import('#features/analytics');

     features.push(analytics.default);

   }

   if (process.env.ENABLE_MONITORING === 'true') {

     const monitoring = await import('#features/monitoring');

     features.push(monitoring.default);

   }

   return features;

}
```

这种模式允许你构建能够适应其环境并只加载实际需要的代码的应用程序。

## 前进的道路：现代 Node.js（2025）的主要收获

当我们审视 Node.js 开发的当前状态时，几个关键原则浮现出来：



*   拥抱 Web 标准：使用 `node:` 前缀、fetch API、AbortController 和 Web 流，以获得更好的兼容性并减少依赖

*   利用内置工具：测试运行器、监视模式和环境文件支持减少了外部依赖和配置复杂性

*   采用现代异步模式：顶级 await、结构化错误处理和异步迭代器使代码更具可读性和可维护性

*   战略性地使用工作线程：对于 CPU 密集型任务，工作线程提供真正的并行性，而不会阻塞主线程

*   采用渐进式增强：使用权限模型、诊断通道和性能监控来构建健壮、可观察的应用程序

*   优化开发者体验：监视模式、内置测试和导入映射创造了更愉快的开发工作流

*   为分发做计划：单可执行应用程序和现代打包使部署更加简单

Node.js 从一个简单的 JavaScript 运行时转变为一个全面的开发平台，这是令人瞩目的。通过采用这些现代模式，你不仅仅是在编写当代代码 —— 你正在构建更易于维护、性能更好且与更广泛的 JavaScript 生态系统保持一致的应用程序。

现代 Node.js 的美妙之处在于它在进化的同时保持了向后兼容性。你可以逐步采用这些模式，它们可以与现有代码一起工作。无论你是开始一个新项目还是现代化一个现有项目，这些模式都为更健壮、更愉快的 Node.js 开发提供了清晰的路径。

随着我们进入 2025 年，Node.js 继续发展，但我们在这里探索的基础模式为构建在未来几年仍将保持现代和可维护的应用程序提供了坚实的基础。

