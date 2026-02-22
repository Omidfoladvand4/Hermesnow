# HermesNow News Platform

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![Supabase](https://img.shields.io/badge/Supabase-2.0-3ecf8e.svg)
![Formik](https://img.shields.io/badge/Formik-2.4.0-6c47ff.svg)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646cff.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A modern, full-featured news platform built with React and Supabase. This project provides a complete news management system with dynamic content editing, image upload capabilities, and real-time preview.

![Dashboard Preview](screenshot-dashboard.png)
![Editor Preview](screenshot-editor.png)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Storage Setup](#-storage-setup)
- [Usage Guide](#-usage-guide)
- [Components](#-components)
- [Contexts & Hooks](#-contexts--hooks)
- [Pages](#-pages)
- [API Services](#-api-services)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

### Core Features
- **Dynamic News Editor**: Create rich news content with multiple element types (headings, paragraphs, images, quotes, lists)
- **Real-time Preview**: See changes instantly before publishing
- **Image Upload**: Direct upload to Supabase Storage with preview
- **Category Management**: Organize news by categories
- **Responsive Design**: Fully responsive across all devices

### Editor Capabilities
- Add/remove content elements dynamically
- Customize colors for each element
- Reorder elements with up/down controls
- Support for various content types:
  - Headings (h1, h2)
  - Paragraphs
  - Images
  - Blockquotes
  - Lists
  - Videos

### User Features
- Authentication system
- User profile management
- News categorization
- Live news updates
- PDF export functionality
- Dark/Light theme support

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Library | 18.2.0 |
| **React Router DOM** | Routing | 6.x |
| **Formik** | Form Management | 2.4.0 |
| **Yup** | Validation | 1.2.0 |
| **Styled Components** | Styling | 6.0.0 |
| **Vite** | Build Tool | 4.4.0 |

### Backend & Services
| Technology | Purpose | Version |
|------------|---------|---------|
| **Supabase** | Database & Storage | 2.39.0 |
| **PostgreSQL** | Database | - |

### State Management
- React Context API
- Custom Hooks

---

## 📁 Project Structure

```
hermesnow/
├── public/                      # Static assets
│   └── images/                   # Public images
├── src/
│   ├── assets/                    # Images, fonts, etc.
│   ├── components/                 # Reusable UI components
│   │   ├── AudioPlayer.jsx
│   │   ├── Avatar.jsx
│   │   ├── BackButton.jsx
│   │   ├── Button.jsx
│   │   ├── CategoryBox.jsx
│   │   ├── CategoryBoxes.jsx
│   │   ├── ImageBox.jsx
│   │   ├── ImageUploader.jsx
│   │   ├── Loader.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Logo.jsx
│   │   ├── MenuItem.jsx
│   │   ├── Modal.jsx
│   │   ├── Navigations.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Signup.jsx
│   │   ├── Slider.jsx
│   │   ├── TabBar.jsx
│   │   └── Title.jsx
│   ├── contexts/                   # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── NewsContext.jsx
│   │   └── ThemeContext.jsx
│   ├── features/                    # Feature-based modules
│   │   ├── auth/
│   │   ├── news/
│   │   ├── notifications/
│   │   ├── pdf/
│   │   └── setting/
│   ├── hooks/                       # Custom React hooks
│   │   ├── useFetch.js
│   │   ├── useGetUsers.js
│   │   ├── useLocalStorage.js
│   │   ├── useLogin.js
│   │   ├── useModal.js
│   │   ├── useSignup.js
│   │   └── useUserManagement.js
│   ├── layout/                      # Layout components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── Menu.jsx
│   │   └── Sidbar.jsx
│   ├── lib/                         # External service configs
│   │   └── supabaseClient.js
│   ├── pages/                        # Application pages
│   │   ├── Account.jsx
│   │   ├── Category.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Live.jsx
│   │   ├── Login.jsx
│   │   ├── Mynews.jsx
│   │   ├── News.jsx
│   │   ├── NewsEditor.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ProductInfo.jsx
│   │   ├── Setting.jsx
│   │   └── Topnews.jsx
│   ├── services/                     # API services
│   │   └── api.js
│   ├── ui/                           # UI-specific components
│   │   ├── footer/
│   │   ├── header/
│   │   └── menu/
│   ├── utils/                        # Utility functions
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── routes.jsx
│   ├── .env                          # Environment variables
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/omidfooladvand/hermesnow.git
cd hermesnow
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Build for production**
```bash
npm run build
# or
yarn build
```

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | ✅ |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | ✅ |

---

## 🗄️ Database Setup

### Create News Table

Run this SQL in your Supabase SQL editor:

```sql
CREATE TABLE News (
  id BIGSERIAL PRIMARY KEY,
  NewsTitle TEXT NOT NULL,
  NewsSubject TEXT NOT NULL,
  NewsMainText TEXT NOT NULL,
  MainImage TEXT,
  Country TEXT NOT NULL,
  Journalist TEXT NOT NULL,
  Video TEXT,
  Content JSONB DEFAULT '[]'::jsonb,
  NewsDate TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  IsTrend BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_news_subject ON News(NewsSubject);
CREATE INDEX idx_news_date ON News(NewsDate DESC);
CREATE INDEX idx_news_trend ON News(IsTrend) WHERE IsTrend = TRUE;
```

### Create Users Table (if using authentication)

```sql
CREATE TABLE users (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 📦 Storage Setup

1. Go to **Storage** in your Supabase dashboard
2. Create a new bucket named `News_Images`
3. Make it **Public**
4. Set up storage policies:

```sql
-- Allow public access to view images
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'News_Images');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'News_Images');

-- Or allow public upload (if no auth)
CREATE POLICY "Public Upload"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'News_Images');
```

---

## 📖 Usage Guide

### Creating a News Article

1. Navigate to **NewsEditor** page
2. Fill in the required fields:
   - News Title
   - News Subject/Category
   - News Summary
   - Country
   - Journalist Name
3. Upload main image using the ImageUploader
4. Add video URL (optional)
5. Build your content using the Element Manager:
   - Click on element cards (h1, h2, p, img, quote, list)
   - Each element can be customized with:
     - Text content
     - Color picker
     - Position (up/down buttons)
   - Elements can be removed anytime

### Managing News

- View all news on the **Home** page categorized by subject
- Access detailed news view in **News** page
- Manage your news in **Mynews** page
- View trending news in **Topnews** page

### User Features

- Register/Login through the authentication system
- Customize your profile in **Account** settings
- Change theme in **Setting** page
- Export news as PDF

---

## 🧩 Key Components

### ImageUploader Component
Handles image uploads to Supabase Storage with preview functionality.

```jsx
<ImageUploader
  value={imageUrl}
  onChange={(url) => setImageUrl(url)}
  bucketName="News_Images"
/>
```

### ElementManager Component
Manages dynamic content elements in the news editor.

### CategoryBoxes Component
Displays news grouped by categories on the homepage.

### ProtectedRoute Component
Protects routes that require authentication.

---

## 🔄 Contexts & Hooks

### Contexts
- **AuthContext**: Manages user authentication state
- **NewsContext**: Handles global news data and operations
- **ThemeContext**: Controls light/dark theme switching

### Custom Hooks
- **useFetch**: Generic data fetching hook
- **useLocalStorage**: Local storage management
- **useModal**: Modal state management
- **useLogin/Signup**: Authentication hooks
- **useUserManagement**: User operations

---

## 📄 Pages Overview

| Page | Description |
|------|-------------|
| **Home** | Main landing page with categorized news |
| **NewsEditor** | Create and edit news articles |
| **News** | View individual news articles |
| **Dashboard** | Admin dashboard for management |
| **Category** | Browse news by category |
| **Live** | Live news updates |
| **Topnews** | Trending and popular news |
| **Mynews** | User's personal news |
| **Account** | User profile management |
| **Setting** | Application settings |
| **Login/Signup** | Authentication pages |

---

## 🔌 API Services

The `services/api.js` file handles all Supabase interactions:

- News CRUD operations
- User management
- Storage operations
- Real-time subscriptions

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Omid Fooladvand** - Frontend Developer & UI Designer

- **GitHub**: [@omidfooladvand](https://github.com/omidfooladvand)
- **LinkedIn**: [Omid Fooladvand](https://linkedin.com/in/omidfooladvand)
- **Email**: omid.fooladvand@gmail.com

---

## 🙏 Acknowledgments

- Supabase for the amazing backend platform
- React community for the ecosystem
- All contributors and users of HermesNow

---

**HermesNow** - Modern News Platform | Built with ❤️ using React and Supabase