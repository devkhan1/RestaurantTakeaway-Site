# Spice Garden Restaurant Demo Website

## Overview

This is a full-stack restaurant demo website built as a presentation showcase for Indian cuisine restaurants. Originally developed for a real restaurant, all sensitive business details have been replaced with randomized demo data to create a safe presentation environment. The application features a modern React frontend with a Node.js/Express backend, showcasing menu systems, online reservations, and essential restaurant business functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using restaurant-themed colors (gold, burgundy, saffron)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API architecture
- **Development**: Hot reload with tsx for TypeScript execution
- **Production**: esbuild for server bundling

### Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized schema definition in `/shared` directory
- **Validation**: Zod schemas for runtime type checking
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Database Schema
- **Menu Items**: Comprehensive menu system with categories, pricing, dietary information, and spice levels
- **Reservations**: Customer booking system with contact details, date/time, and status tracking

### API Endpoints
- `GET /api/menu` - Fetch all menu items
- `GET /api/menu/category/:category` - Filter menu by category
- `GET /api/menu/:id` - Get specific menu item
- `POST /api/reservations` - Create new reservation
- `GET /api/reservations` - List reservations (admin)
- `PATCH /api/reservations/:id/status` - Update reservation status

### Frontend Pages
- **Home Page**: Comprehensive single-page application with multiple sections
  - Hero section highlighting 2-story venue and York Road location
  - Special offers banner featuring Christmas deals and B.Y.O policy
  - About section emphasizing facilities (car park, accessibility, events)
  - Featured menu items with improved categorization
  - Reservation form with enhanced validation
  - Gallery showcasing restaurant spaces and cuisine
  - Contact information with event hosting details
- **Menu Page**: Dedicated full menu with filtering by categories
  - Complete dish catalog with authentic images
  - Category-based filtering (starters, mains, bread, rice, desserts)
  - Spice level indicators and dietary badges
  - Enhanced ordering information and contact options

### UI Features
- Responsive design optimized for mobile and desktop
- Interactive navigation with smooth scrolling
- Form validation with user feedback
- Toast notifications for user actions
- Loading states and error handling

## Data Flow

1. **Menu Display**: Frontend fetches menu data via React Query, caches results, and displays categorized items
2. **Reservations**: Form submissions are validated client-side with Zod, sent to API, and stored in database
3. **State Management**: React Query handles caching, background updates, and synchronization
4. **Error Handling**: Comprehensive error boundaries and user feedback mechanisms

## External Dependencies

### Core Technologies
- React ecosystem (React, React DOM, React Hook Form)
- TanStack Query for server state
- Drizzle ORM with PostgreSQL adapter
- Express.js with TypeScript support
- Zod for schema validation

### UI/UX Libraries
- Tailwind CSS for styling
- Radix UI for accessible component primitives
- Lucide React for icons
- shadcn/ui for pre-built components

### Development Tools
- Vite for frontend build tooling
- esbuild for server bundling
- tsx for TypeScript execution
- PostCSS and Autoprefixer

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Features**: Hot reload, development error overlay, Vite HMR
- **Port**: 5000 with automatic external port mapping

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Command**: `npm run build && npm start`

### Platform Configuration
- **Replit**: Configured for Node.js 20 with PostgreSQL 16
- **Auto-scaling**: Deployment target set to autoscale
- **Environment**: Production/development environment detection

### Database Management
- **Development**: Local PostgreSQL or Neon serverless
- **Schema Updates**: `npm run db:push` for schema synchronization
- **Connection**: Environment variable `DATABASE_URL` required

## Recent Changes

```
Recent Updates:
- June 24, 2025: Comprehensive website redesign and enhancement
  - Fixed header transparency issue for better readability while scrolling
  - Updated all menu item images with authentic Indian food photos
  - Improved header design with better visibility and B.Y.O alcohol highlighting
  - Enhanced hero section with better text readability and restaurant details
  - Updated Christmas/seasonal offers banner with festive design
  - Expanded about section highlighting 2-story venue, car park, accessibility
  - Complete menu overhaul with better categorization and proper images
  - Added dedicated full menu page with filtering capabilities
  - Enhanced gallery with restaurant-specific images and facility highlights
  - Improved contact section emphasizing event hosting capabilities
  - Added navigation between home and menu pages
  - Fixed LSP errors and improved code stability
  - Better mobile responsiveness and visual hierarchy
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```