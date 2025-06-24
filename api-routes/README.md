# 📡 Next.js API Routes & Middleware

This project demonstrates how to use **API Routes** in Next.js along with **Middleware** powered by `NextResponse`. It's part of my learning journey into building full-stack applications using the Next.js framework.

---

## 📘 What Are API Routes in Next.js?

API Routes in Next.js let you create backend endpoints inside your app using the `pages/api/` directory. Each file in this directory automatically becomes a serverless function that handles HTTP requests like GET, POST, etc.

### ✅ Features:
- Built-in REST endpoints — no external server needed.
- Request/response handled using `req` and `res` objects (like Node.js).
- Fully server-side: never shipped to the browser.
- Supports dynamic routes like `[id].js` or `[...params].js`.

#### 🧪 Example:
```js
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js API!' });
}
```
# Important impors:
```js
import {NextResponse} from 'next/server'
```

NextResponse: NextResponse is a utility class from next/server used primarily in Middleware for modifying HTTP requests and responses.

💡 Use cases:
Authentication redirects

Setting headers and cookies

Geolocation-based routing

A/B testing and bot filtering
