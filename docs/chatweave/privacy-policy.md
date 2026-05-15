---
title: Chatweave Privacy Policy / 涌言隐私政策
---

# Chatweave Privacy Policy / 涌言隐私政策

> 最后更新日期：2026-05-15  
> Last updated: 2026-05-15

## 中文版

### 1. 适用范围与运营者信息
本隐私政策适用于 Chatweave（涌言）移动应用（以下简称"本应用"）及其相关功能。

**运营者/数据控制者**：Chatweave 由独立开发者（GitHub ID: can-dy-jack）开发并维护。
- 开发者邮箱：kartjimc@gmail.com
- GitHub 项目：https://github.com/can-dy-jack/ChatWeave

本隐私政策用于说明我们如何处理与你相关的信息。

### 2. 我们处理的信息
根据你的使用方式，本应用可能处理以下信息：

- 账号与配置信息：你在应用内填写的模型配置（如模型名称、接口地址、API Key、系统提示词等）。
- 会话内容：你在聊天中输入的文本、上传的图片（如使用视觉模型时）以及模型返回内容。
- 本地设置数据：主题、语言、界面偏好、工具开关、会话列表等本地存储数据。
- 设备与网络必要信息：
  - **主动收集**：你使用内置工具（如天气查询、网络搜索、IP 查询）时，本应用会调用对应第三方服务 API，会将相关请求信息（如查询参数、位置等）发送到该第三方。
  - **被动产生**：当你向第三方 AI 服务（如 OpenAI、Anthropic 等）发送消息时，网络请求自然产生的 HTTP 头、IP 信息等会按照该第三方的协议规则传输，这不是我们的主动收集而是通信自身属性。

说明：
- 本应用默认将上述核心配置与会话数据保存在你的设备本地。
- 我们不会主动向自建服务器上传你的聊天内容用于训练或分析。
- 当你连接第三方 AI 服务时，你的请求数据会发送至你选择的第三方服务商，受该服务商的隐私政策约束。

### 3. 信息使用目的
我们处理信息主要用于：

- 提供与维护聊天功能（消息发送、流式响应、历史记录）。
- 支持多模型切换、智能体配置和工具调用。
- 保存你的个性化设置，提升使用体验。
- 进行必要的故障排查与稳定性保障。

### 4. 第三方服务与数据传输
你主动启用相关功能时，本应用会与第三方服务进行通信。常见场景包括：

- 你配置的 AI 模型服务商接口（如 OpenAI 兼容服务、Anthropic、Gemini 或其他你选择的服务）。
- 内置工具可能访问的外部服务（如天气查询、网络搜索、IP 查询等）。

请注意：
- 第三方服务商会按照其自身隐私政策处理数据。
- 我们建议你在使用前阅读对应服务商的隐私条款。
- 如你配置自定义网关或代理，请自行确认其合规性与安全性。

具体第三方 SDK / 服务清单（按当前版本功能）：

| 名称 | 用途 | 隐私政策 / 条款链接 |
| --- | --- | --- |
| OpenAI SDK（openai） | 调用 OpenAI 兼容模型接口 | https://openai.com/policies/privacy-policy |
| Anthropic SDK（@anthropic-ai/sdk） | 调用 Anthropic 模型接口 | https://www.anthropic.com/privacy |
| Google Generative AI SDK（@google/generative-ai） | 调用 Gemini 模型接口 | https://policies.google.com/privacy |
| Exa（exa-js） | 内置网页搜索工具（可选） | https://exa.ai/privacy |
| Tavily（@tavily/core） | 内置网页搜索工具（可选） | https://tavily.com/privacy |
| OpenWeatherMap | 天气工具数据服务（可选） | https://openweather.co.uk/privacy-policy |
| ipinfo.io | IP/地理信息工具数据服务（可选） | https://ipinfo.io/privacy-policy |
| ip-api.com | IP/地理信息工具数据服务（可选） | https://ip-api.com/docs/legal |

补充说明：
- 截至本版本，本应用未集成 AdMob、Firebase Analytics、Bugly 等广告、统计或崩溃上报 SDK。
- 若你在应用中自行配置其他第三方模型网关或服务，该第三方的数据处理规则以其官方隐私政策为准。

### 5. 数据存储与安全
- 本应用使用设备本地存储保存必要数据。
- 我们会采取合理措施保护数据安全，但任何互联网传输或电子存储都无法保证绝对安全。
- 请妥善保管你的设备与 API Key，避免泄露风险。

### 6. 你的权利与选择
你可以随时：

- 在应用内修改或删除智能体配置、会话记录与偏好设置。
- 停止使用特定第三方模型或工具功能。
- 卸载应用以停止后续数据处理（已发送至第三方的数据受其规则约束）。
- 通过应用设置中的"清除缓存/数据"功能删除所有本地存储的信息。

### 7. 数据删除、导出与更正流程

**数据删除请求**：
- 应用内删除：你可以在应用内直接删除单个会话、智能体或所有数据。
- 用户发起请求：若你需要更完整的删除确认或有其他疑问，请发邮件至 kartjimc@gmail.com，标题写明"数据删除请求"，包含必要的身份验证信息（如应用安装 ID 或注册邮箱）。我们承诺在收到请求后 15 个工作日内完成处理和回复。

**数据导出请求**：
- 本应用提供"导出/导入配置"功能，你可以直接导出本地配置数据（包括智能体、会话、偏好设置）为 JSON 文件。
- 若需要其他格式的导出，请发邮件至 kartjimc@gmail.com，标题写明"数据导出请求"，我们将协助你获取可用的导出方案。

**数据更正请求**：
- 你可以在应用内直接修改你的智能体配置、系统提示词等信息。
- 若涉及本应用记录的你的其他个人信息，请发邮件至 kartjimc@gmail.com，标题写明"数据更正请求"，说明需要更正的具体内容。

**响应方式与期限**：
- 所有请求回复通过电子邮件进行。
- 标准处理时间：15 个工作日。
- 如因技术限制无法完全满足请求，我们会在回复中详细说明原因和替代方案。

### 8. 未成年人说明
本应用面向一般用户，不针对未满 14 周岁（或你所在司法辖区规定年龄）的儿童提供专门服务。若你是监护人并认为儿童向本应用提交了信息，请联系我们处理。

### 9. 隐私政策更新
我们可能根据产品功能或法律法规要求更新本政策。更新后将通过应用内页面或其他合理方式提示。继续使用本应用即表示你理解并同意更新后的政策内容。

### 10. 联系我们
如你对本隐私政策有疑问、意见或请求，请通过以下方式联系：

- **联系邮箱**：kartjimc@gmail.com
- **产品名称**：Chatweave（涌言）
- **开发者 GitHub**：https://github.com/can-dy-jack/ChatWeave

---

## English Version

### 1. Scope and Operator Information
This Privacy Policy applies to the Chatweave mobile application ("the App") and explains how information is handled when you use the App.

**Operator/Data Controller**: Chatweave is developed and maintained by an independent developer (GitHub ID: kartjim).
- Developer Email: kartjimc@gmail.com
- GitHub Project: https://github.com/can-dy-jack/ChatWeave

### 2. Information We Process
Depending on how you use the App, we may process the following:

- Account and configuration data: model settings you enter in the App, such as model name, endpoint, API key, and system prompt.
- Conversation content: text you send, images you upload (for vision-capable models), and model responses.
- Local preference data: theme, language, UI preferences, tool toggles, and conversation metadata stored on your device.
- Necessary device/network data:
  - **Actively collected**: When you use built-in tools (such as weather lookup, web search, IP lookup), the App calls corresponding third-party APIs and sends relevant request information (such as search parameters, location, etc.) to that third party.
  - **Passively generated**: When you send messages to third-party AI services (such as OpenAI, Anthropic, etc.), network request metadata such as HTTP headers and IP information naturally occur during transmission according to that third party's protocol rules. This is not our active collection but an inherent property of communication.

Notes:
- Core configuration and conversation data are stored locally on your device by default.
- We do not proactively upload your chat content to our own servers for training or analysis.
- When you connect to third-party AI providers, your request data is transmitted to those providers, governed by their privacy policies.

### 3. Why We Use Information
We process information to:

- Provide and maintain core chat features (sending messages, streaming responses, and history).
- Support multi-model switching, agent configuration, and tool calling.
- Save your preferences to improve user experience.
- Perform necessary troubleshooting and reliability improvements.

### 4. Third-Party Services and Transfers
When you enable related features, the App may communicate with third-party services, including:

- AI model endpoints you configure (such as OpenAI-compatible services, Anthropic, Gemini, or other providers you choose).
- External services used by built-in tools (such as weather lookup, web search, and IP lookup).

Please note:
- Third-party providers process data under their own privacy policies.
- You should review those policies before use.
- If you use a custom gateway or proxy, you are responsible for its compliance and security.

Specific third-party SDKs/services used in the current version:

| Name | Purpose | Privacy policy / legal link |
| --- | --- | --- |
| OpenAI SDK (`openai`) | Access OpenAI-compatible model endpoints | https://openai.com/policies/privacy-policy |
| Anthropic SDK (`@anthropic-ai/sdk`) | Access Anthropic model endpoints | https://www.anthropic.com/privacy |
| Google Generative AI SDK (`@google/generative-ai`) | Access Gemini model endpoints | https://policies.google.com/privacy |
| Exa (`exa-js`) | Built-in web search tool (optional) | https://exa.ai/privacy |
| Tavily (`@tavily/core`) | Built-in web search tool (optional) | https://tavily.com/privacy |
| OpenWeatherMap | Weather tool data service (optional) | https://openweather.co.uk/privacy-policy |
| ipinfo.io | IP/geolocation tool data service (optional) | https://ipinfo.io/privacy-policy |
| ip-api.com | IP/geolocation tool data service (optional) | https://ip-api.com/docs/legal |

Additional notes:
- As of this version, the App does not integrate AdMob, Firebase Analytics, Bugly, or other ad/analytics/crash-reporting SDKs.
- If you configure additional third-party model gateways or services, their own privacy policies apply to related data processing.

### 5. Storage and Security
- The App uses on-device local storage for necessary data.
- We implement reasonable safeguards, but no transmission or storage method is absolutely secure.
- Keep your device and API keys secure to reduce disclosure risk.

### 6. Your Choices and Rights
You may at any time:

- Modify or delete agent settings, conversation history, and preferences in the App.
- Stop using specific third-party models or tool features.
- Uninstall the App to stop further processing (data already sent to third parties is governed by their policies).
- Delete all locally stored information via the "Clear cache/data" feature in the App settings.

### 7. Data Deletion, Export, and Correction Process

**Data Deletion Requests**:
- In-app deletion: You can delete individual conversations, agents, or all data directly within the App.
- User-initiated requests: If you need additional confirmation of deletion or have other questions, please email kartjimc@gmail.com with the subject line "Data Deletion Request," including necessary identity verification information (such as app installation ID or registration email). We commit to processing and responding within 15 business days of receiving your request.

**Data Export Requests**:
- The App provides "export/import configuration" functionality, allowing you to directly export local configuration data (including agents, conversations, and preferences) as a JSON file.
- For other export formats, please email kartjimc@gmail.com with the subject line "Data Export Request," and we will assist you in obtaining available export options.

**Data Correction Requests**:
- You can modify your agent configurations, system prompts, and other settings directly within the App.
- For corrections related to other personal information recorded by the App, please email kartjimc@gmail.com with the subject line "Data Correction Request," specifying the exact content to be corrected.

**Response Methods and Timeline**:
- All request responses are provided via email.
- Standard processing time: 15 business days.
- If we cannot fully satisfy a request due to technical limitations, we will provide a detailed explanation of the reasons and alternative solutions in our response.

### 8. Children
The App is intended for general audiences and is not specifically directed to children under 14 (or the minimum age in your jurisdiction). If you are a parent or guardian and believe a child submitted information, please contact us.

### 9. Policy Updates
We may update this Privacy Policy to reflect product changes or legal requirements. Updated versions will be provided via in-app pages or other reasonable means. Continued use of the App after updates indicates your understanding and acceptance.

### 10. Contact
If you have questions, comments, or requests regarding this Privacy Policy, contact us at:

- **Email**: kartjimc@gmail.com
- **Product**: Chatweave
- **Developer GitHub**: https://github.com/can-dy-jack/ChatWeave
