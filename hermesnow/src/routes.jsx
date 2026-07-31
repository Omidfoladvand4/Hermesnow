import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";

import Home from "./pages/Home";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./components/Signup"));
const Mynews = lazy(() => import("./pages/Mynews"));
const News = lazy(() => import("./pages/News"));
const Category = lazy(() => import("./pages/Category"));
const NewsEditor = lazy(() => import("./pages/NewsEditor"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Account = lazy(() => import("./pages/Account"));
const Setting = lazy(() => import("./pages/Setting"));
const Topnews = lazy(() => import("./pages/Topnews"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
       <Loader />
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/your-news" element={<Mynews />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="/category/:subject" element={<Category />} />
        <Route path="/top-news" element={<Topnews />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/news-editor" element={<NewsEditor />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}