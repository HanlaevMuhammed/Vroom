// pages/api/proxy.js
import { createProxyMiddleware } from 'http-proxy-middleware';

// Здесь создаём прокси для обработки запросов
export default function handler(req, res) {
  const proxy = createProxyMiddleware({
    target: 'https://drom.ru/auto/', // Замените на нужный сервер
    changeOrigin: true,
    pathRewrite: { '^/api/proxy': '' }, // Убираем '/api/proxy' из пути запроса
  });

  return proxy(req, res); // Прокси передаёт запрос дальше
}

