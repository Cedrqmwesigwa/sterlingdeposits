# Sterling Contractors Website

This is the official website for Sterling Contractors, a hardware and contracting business based in Kampala, Uganda. The website is designed to build trust with clients, showcase our work, and facilitate contact and project inquiries, including the handling of deposits.

## Technologies Used

*   **Next.js:** A React framework for building performant server-rendered and static websites.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapid styling.
*   **shadcn/ui:** A collection of reusable components built with Tailwind CSS and Radix UI.
*   **Firebase:** Used for backend services including:
    *   **Authentication:** For secure admin login (Google Sign-In).
    *   **Firestore:** A NoSQL cloud database to store project details, testimonials, etc.
    *   **Cloud Storage:** For storing uploaded project images.
*   **Resend:** An email API for sending contact form submissions.

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd sterling-contractors-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a file named `.env.local` in the root of your project and add the following variables. You will need to obtain the values for Firebase, Resend, and Google Analytics from their respective dashboards.

```env
# Resend API Key - Get your free key from resend.com
RESEND_API_KEY=REPLACE_WITH_YOUR_RESEND_API_KEY

# Email address to receive contact form submissions
NEXT_PUBLIC_CONTACT_EMAIL=mctyptys@gmail.com

# Firebase Project Configuration - Get this from your Firebase project settings
NEXT_PUBLIC_FIREBASE_API_KEY=REPLACE_WITH_YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=REPLACE_WITH_YOUR_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=REPLACE_WITH_YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=REPLACE_WITH_YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=REPLACE_WITH_YOUR_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=REPLACE_WITH_YOUR_FIREBASE_APP_ID

# Google Analytics Measurement ID
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=REPLACE_WITH_YOUR_GA_MEASUREMENT_ID
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 5. Run the Production Build

To build the project for production deployment:

```bash
npm run build
```

This command optimizes the application for production, including minifying code, optimizing images, and generating static assets.

## Project Structure

Key files and directories:

*   `src/app`: Contains your page routes (`page.tsx` for root, `services/page.tsx`, `about/page.tsx`, `projects/page.tsx`).
*   `src/components`: Reusable UI components.
*   `src/components/layout`: Layout components like Header and Footer.
*   `src/components/sections`: Larger sections used on pages.
*   `src/lib/firebase.ts`: Firebase initialization and configuration.
*   `src/app/api/send-email/route.ts`: API route for handling contact form submissions.
*   `public`: Static assets like your logo (`sterling logo.jpg`).
*   `.env.local`: Your environment variables (requires manual setup).

## Core Pages Implemented

*   **Homepage (`/`)**: Introduction to Sterling Contractors, services overview, project showcase, testimonials, and contact section.
*   **Services (`/services`)**: Detailed descriptions of hardware and contracting services.
*   **About Us (`/about`)**: The story, mission, and values of the company.
*   **Projects (`/projects`)**: A gallery showcasing completed work.

---

This README provides a solid foundation for understanding and working with the Sterling Contractors website project. Remember to replace the placeholder values in your `.env.local` file with your actual credentials before running the project.
