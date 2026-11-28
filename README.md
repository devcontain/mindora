# Mindora

**Your Learning Space**

Mindora is a web-based learning application designed to create,
organize and study knowledge through interactive flashcards.

The application combines a modern Angular frontend with a PHP
backend and persistent MariaDB storage.

## Features

- Personal learning environment
- Individual user accounts
- Topic and subject management
- Flashcard creation and editing
- Flashcard explanations and examples
- Solo training
- Partner training
- Vocabulary list
- Randomized learning sessions
- WhiteCard and GreenCard learning directions
- 60 selectable SVG icons
- Persistent database storage
- Responsive user interface

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Angular 22 | Frontend framework |
| TypeScript | Application logic |
| SCSS | Styling and responsive design |
| PHP | Backend and REST-style API |
| MariaDB | Persistent data storage |
| Apache | Web server |
| Git | Version control |

## Application Architecture

The application separates the presentation layer, application
logic and persistent data storage.

### Frontend

- Standalone Angular components
- Angular Signals
- Computed signals
- Dependency injection
- Angular Router
- Reusable components
- Centralized services
- TypeScript data models

### Backend

- PHP-based API
- Session-based authentication
- Server-side input validation
- Prepared SQL statements
- CSRF protection
- Login rate limiting
- User-specific access control
- Protected backend files
- Authenticated Angular application delivery

### Database

Learning content is organized into three hierarchical levels:

    User
    └── Topic
        └── Subject
            └── Flashcard

Each user manages an independent collection of learning content.

Topics, subjects and flashcards can be created, edited and deleted.
Subjects and flashcards can also be moved between their respective
parent elements.

## Project Structure

    mindora/
    ├── public/
    │   ├── assets/
    │   │   └── svg/
    │   └── fonts/
    ├── scripts/
    │   └── generate-import.ts
    └── src/
        └── app/
            ├── core/
            ├── data/
            ├── features/
            ├── models/
            └── shared/

## Local Development

Install dependencies:

```bash
npm ci
```

Start the Angular development server:

```bash
ng serve
```

The frontend development server is available at:

    http://localhost:4200/

Full application functionality requires a configured PHP backend
and MariaDB database.

## Production Build

```bash
ng build
```

The compiled application is generated in the `dist/` directory.

The production environment separates public resources from
protected application and backend files.

## Design

Mindora follows a minimal visual design focused on readability,
consistency and distraction-free learning.

- Custom color palette
- Locally hosted typography
- SVG-based icon system
- Responsive layouts
- Reusable interface elements

## Project Status

The application is deployed and operational in a private
production environment.

Access requires an authorized user account.

## Author

Sebastian Peters

Frontend Development · Angular · TypeScript

Portfolio: https://devcontain.de