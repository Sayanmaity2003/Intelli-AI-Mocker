# AI Interview Mocker 🚀

AI Interview Mocker is an innovative platform designed to help users prepare for interviews with real-time AI-driven interactions. With integrated speech-to-text functionality and video-based mock interviews, users can simulate realistic interview experiences like never before.

## Features ✨

- **Next.js** for a fast and efficient web experience
- **Tailwind CSS + Shadcn & HyperUI** for a sleek and responsive UI
- **Clerk authentication** for secure user management
- **React Webcam & Gemini API** for real-time interaction
- **Speech-to-text** using `react-hook-speech-to-text`
- **PostgreSQL + Drizzle ORM** for efficient database management
- **Stripe integration** for seamless payments
- **User-friendly UI** designed with lucid.dev & logoipsum.com

## Tech Stack 🛠️

- **Frontend:** Next.js, Tailwind CSS, Shadcn, HyperUI
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL with Drizzle ORM
- **Authentication:** Clerk
- **AI Integration:** Gemini API
- **Speech-to-Text:** react-hook-speech-to-text
- **Payments:** Stripe
- **Deployment:** Vercel

## Getting Started 🚀

### Prerequisites

Ensure you have the following installed:
- Node.js (>=16.x)
- PostgreSQL database

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ai-interview-mocker.git
   cd ai-interview-mocker
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file and add the necessary configurations:
   ```env
   DATABASE_URL=your_postgres_database_url
   CLERK_SECRET_KEY=your_clerk_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Run database migrations:
   ```sh
   npx drizzle-kit push
   ```

5. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Deployment 🌍

The project is deployed on **Vercel**. To deploy your own version:

1. Push your code to GitHub
2. Connect the repo to Vercel
3. Add environment variables in the Vercel dashboard
4. Deploy and enjoy!

## Contribution 🤝

Contributions are welcome! To contribute:

1. Fork the repo
2. Create a new branch (`feature-new-feature`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-new-feature`)
5. Open a pull request

## License 📜

This project is licensed under the MIT License.

## Acknowledgments 💡

- **lucid.dev & logoipsum.com** for UI design inspiration
- **Clerk & Stripe** for authentication and payments
- **Google Gemini API** for AI-powered interactions

## Author 📝

- **Sayan Maity**
- **Email:** sayanmaity2003@gmail.com

---


