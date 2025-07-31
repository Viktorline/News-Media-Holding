# 📰 News Media Holding - Test Task

Modern web application for displaying a news feed with infinite scroll and responsive design.

## 🛠️ Technologies

- React 19
- TypeScript
- Redux Toolkit
- Ant Design
- React Infinite Scroll
- Axios
- Vite

## 📱 Responsiveness

The application adapts to different screen sizes:

- **Desktop (1280px+)** - 3 news columns
- **Tablet (720px-1279px)** - 2 news columns
- **Mobile (<720px)** - 1 news column

## 🔌 API

Uses [DummyJSON API](https://dummyjson.com/) for test data:

- `GET /posts?limit=10&skip={skip}` - get news list

## 🚀 Quick Start

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview build

```bash
npm run preview
```
