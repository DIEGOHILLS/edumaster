# EduMaster - Interactive Learning Platform

> A modern, feature-rich educational platform with gamification, social learning, and comprehensive analytics.

## 🎓 Overview

EduMaster is a full-featured learning management system built with React, TypeScript, and Tailwind CSS. It provides an engaging experience for both students and instructors with features like live sessions, study groups, forums, leaderboards, and detailed analytics.

## ✨ Key Features

### 👨‍🎓 For Students
- **Course Management** - Browse, enroll, and track progress
- **Live Sessions** - Interactive classes with real-time chat
- **Leaderboard & Gamification** - Earn points, badges, and climb rankings
- **Study Groups** - Collaborate in public or private groups
- **Discussion Forums** - Ask questions and help peers
- **Virtual Currency** - Earn coins and redeem rewards
- **Calendar Integration** - Track deadlines and sessions
- **Achievements System** - Unlock badges as you learn

### 👨‍🏫 For Instructors
- **Analytics Dashboard** - Revenue, engagement, and performance metrics
- **Feedback Management** - View and respond to student reviews
- **Course Insights** - Completion rates, quiz scores, retention data
- **Student Progress Tracking** - Monitor individual and cohort progress

### 🎨 Design & UX
- **Modern UI** - Beautiful gradients, shadows, and micro-interactions
- **Dark/Light Mode** - Full theme support with persistence
- **Responsive Design** - Optimized for all screen sizes
- **Smooth Animations** - Framer Motion powered transitions
- **Accessible** - WCAG compliant with proper ARIA labels
- **SEO Optimized** - Meta tags, semantic HTML, proper structure

## 🏗️ Architecture

### Tech Stack
- **React 18** + **TypeScript** - Type-safe component development
- **Vite** - Lightning-fast build tool
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - High-quality component library
- **Framer Motion** - Production-ready animations
- **Tanstack Query** - Server state management
- **Lucide React** - Beautiful icon library

### Project Structure
```
src/
├── components/
│   ├── courses/          # Course cards, skeletons
│   ├── dashboard/        # Dashboard widgets
│   ├── layout/           # Sidebar, header, search
│   └── ui/              # Reusable UI components
├── data/                # Mock data & constants
├── hooks/               # Custom React hooks
├── lib/                 # Utilities & helpers
├── pages/              # Route components
├── types/              # TypeScript definitions
└── index.css           # Design system tokens
```

## 🎨 Design System

### Semantic Color Tokens
All colors use HSL and follow a semantic naming convention:
```css
--primary         /* Brand color */
--secondary       /* Secondary surfaces */
--accent         /* Accent elements */
--success/warning/info  /* Status colors */
--background/foreground /* Base colors */
```

### Predefined Gradients
```css
--gradient-brand  /* Primary gradient */
--gradient-warm   /* Warm accent */
--gradient-cool   /* Cool accent */
--gradient-success /* Success state */
```

### Animation Classes
- `animate-fade-in` - Fade in with slide up
- `animate-scale-in` - Scale in effect
- `animate-slide-up` - Slide up transition
- `animate-pulse-slow` - Subtle pulse

## 🚦 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Dashboard | Student overview |
| `/courses` | Courses | Course catalog |
| `/leaderboard` | Leaderboard | Rankings & rewards |
| `/study-groups` | StudyGroups | Collaborative groups |
| `/forums` | Forums | Discussion boards |
| `/sessions` | Sessions | Live classes |
| `/calendar` | CalendarPage | Events & deadlines |
| `/instructor` | InstructorDashboard | Instructor analytics |
| `/feedback` | FeedbackDashboard | Student feedback |
| `/settings` | SettingsPage | User preferences |
| `*` | NotFound | 404 page |

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 Best Practices Implemented

### Component Architecture
✅ Small, focused, reusable components  
✅ TypeScript for all files  
✅ Proper component composition  
✅ Separation of concerns  

### Performance
✅ React.lazy for code splitting  
✅ useMemo for expensive computations  
✅ useCallback for stable references  
✅ Skeleton loading states  
✅ Optimized re-renders  

### Accessibility
✅ Semantic HTML elements  
✅ ARIA labels and roles  
✅ Keyboard navigation  
✅ Screen reader support  
✅ Color contrast compliance  

### SEO
✅ Descriptive meta tags  
✅ Canonical URLs  
✅ Open Graph protocol  
✅ Twitter Cards  
✅ Structured semantic HTML  

## 📦 Key Components

### `<AppSidebar />`
Collapsible sidebar with role-based navigation, tooltips on collapse, and smooth transitions.

### `<SearchCommand />`
Command palette (⌘K) for quick navigation using cmdk library.

### `<CourseCard />`
Reusable course card with progress tracking, hover effects, and category-based gradients.

### `<StatsCards />`
Grid of animated statistics with gradient icons and responsive layout.

## 🔮 Future Enhancements

- [ ] Quiz builder with multiple question types
- [ ] Video player with playback controls
- [ ] File upload manager with progress tracking
- [ ] Course versioning and drafts
- [ ] Real-time chat for live sessions
- [ ] Peer code review system
- [ ] A/B testing for course elements
- [ ] Offline mode with local storage
- [ ] AI-powered course recommendations
- [ ] Automated certificate generation

---

## 📝 Lovable Project Info

**Project URL**: https://lovable.dev/projects/ee9c16b3-65b9-4095-9be2-ed1a3f7503bc

### Deployment
Simply open Lovable and click Share → Publish to deploy your changes.

### Custom Domain
Navigate to Project > Settings > Domains to connect your custom domain.  
[Learn more](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
