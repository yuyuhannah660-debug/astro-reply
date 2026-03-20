/**
 * 配置文件 - 星座话术助手
 * 请在使用前配置您的DeepSeek API密钥
 *
 * 使用步骤：
 * 1. 访问 https://platform.deepseek.com/api_keys 获取API密钥
 * 2. 将下面的 DEEPSEEK_API_KEY 替换为您的实际密钥
 * 3. 保存文件并重新编译小程序
 *
 * 注意：将API密钥直接放在前端代码中存在安全风险，建议用于演示或学习。
 * 生产环境应使用云函数转发请求，保护API密钥。
 */

// DeepSeek API配置
// 获取地址：https://platform.deepseek.com/api_keys
const CONFIG = {
  // 请替换为您的DeepSeek API密钥
  DEEPSEEK_API_KEY: 'sk-131f2318760843d084410a5c9412dc10',

  // API端点
  DEEPSEEK_API_URL: 'https://api.deepseek.com/v1/chat/completions',

  // 使用的模型
  MODEL: 'deepseek-chat',

  // 温度参数（控制随机性，0-1）
  TEMPERATURE: 0.7,

  // 最大token数
  MAX_TOKENS: 500,

  // 超时时间（毫秒）
  TIMEOUT: 30000
};

// 导出配置
module.exports = CONFIG;