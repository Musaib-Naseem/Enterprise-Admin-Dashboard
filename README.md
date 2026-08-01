# Enterprise Admin Dashboard

A modern, enterprise-grade admin dashboard built with **React**, **TypeScript**, and **Vite**. This project demonstrates scalable frontend architecture, authentication, reusable UI components, state management, API integration, and comprehensive testing using modern React best practices.

---

## 🚀 Features

### Authentication
- Login with JWT authentication
- Session persistence using localStorage
- Automatic session restoration on refresh
- Protected routes
- Form validation with React Hook Form & Zod
- Toast notifications for authentication feedback

### UI Components
- Reusable Button
- Reusable Input
- Reusable Card
- Reusable Modal
- Reusable Spinner
- Reusable Badge

### State Management
- Redux Toolkit
- RTK Query for API requests
- Authentication state management

### Routing
- React Router v7
- Nested layouts
- Protected navigation

### Testing
- Unit tests for reusable UI components
- Redux reducer tests
- RTK Query API tests with mocked responses
- Utility function tests
- React Testing Library
- Vitest

---

## 🛠️ Tech Stack

### Core
- React 19
- TypeScript
- Vite

### Styling
- Tailwind CSS

### Routing
- React Router

### State Management
- Redux Toolkit
- RTK Query

### Forms & Validation
- React Hook Form
- Zod

### HTTP Client
- Axios

### UI Libraries
- React Icons
- React Toastify

### Testing
- Vitest
- React Testing Library
- JSDOM

---

## 📁 Project Structure

```text
src/
│
├── app/
├── components/
│   ├── Badge/
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   ├── Modal/
│   └── Spinner/
│
├── features/
│   └── auth/
│
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── store/
├── test/
├── types/
├── utils/
│
├── App.tsx
└── main.tsx
```

---

## 🧪 Test Coverage

### UI Components
- Button
  - renders children
  - handles click events
  - disabled state
  - variant styling

- Input
  - renders label
  - placeholder
  - error message
  - onChange

- Modal
  - opens
  - closes
  - renders children

- Card
- Badge
- Spinner

### Redux
- loginSuccess
- logout
- setLoading

### RTK Query
- Login success
- Login failure
- 401 Unauthorized
- 500 Server Error

### Utilities
- Permission validation
- Workflow validation

---

## ⚡ Getting Started

### Clone

```bash
git clone https://github.com/your-username/enterprise-admin-dashboard.git
```

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## 🧪 Run Tests

```bash
npm run test
```

Watch mode

```bash
npm run test -- --watch
```

---

## 📌 Current Progress

- ✅ Project setup
- ✅ Routing
- ✅ Authentication
- ✅ JWT session restoration
- ✅ Protected routes
- ✅ Reusable UI components
- ✅ Redux Toolkit
- ✅ RTK Query
- ✅ Form validation
- ✅ Component testing
- ✅ Redux testing
- ✅ RTK Query testing

---

## 🚧 Upcoming Features

- Role-based authorization
- Admin/User permissions
- Navigation based on roles
- Dashboard analytics
- User management
- Product management
- Orders module
- Settings module
- Theme switcher
- Performance optimizations

---

## 📄 License

Licensed under the MIT License.