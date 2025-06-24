# 🚀 Blogie - A Nuxt.js & Prisma Powered Blog

Welcome to Blogie! This is a simple, modern blog platform built to demonstrate a powerful tech stack, as part of the WeDance v4 Prisma challenge.

It features a clean interface for reading posts and a robust backend powered by some of the best tools in the modern web ecosystem.

---

## ✨ Tech Stack

-   **Framework:** [Nuxt.js](https://nuxt.com/) - The Intuitive Vue Framework
-   **UI:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn-vue](https://www.shadcn-vue.com/) - For utility-first styling and beautiful, accessible components.
-   **ORM:** [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM.
-   **Database:** [Supabase](https://supabase.com/) - (using PostgreSQL).
-   **API Layer:** [tRPC](https://trpc.io/) - For end-to-end typesafe APIs.
-   **Deployment:** [Vercel](https://vercel.com/) - For seamless, fast, and reliable hosting.

---

## 🛠️ Getting Started

Follow these instructions to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/[YOUR-GITHUB-USERNAME]/blog-project.git
cd blog-project
```

### 2. Install Dependencies

This project uses `npm`.

```bash
npm install
```

### 3. Set Up Environment Variables

You'll need a Supabase project for your database. Once you have one, create a `.env` file in the root of the project by copying the example below.

```dotenv
# .env

# This is the main connection string for Prisma, used by the server.
# Find this in your Supabase project -> Settings -> Database -> Connection string (URI)
# Make sure to enable connection pooling.
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@[YOUR-SUBABASE-HOST]:5432/postgres?pgbouncer=true"

# This is the direct connection string for Prisma Migrate.
# Same as above, just without the pgbouncer parameter.
DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@[YOUR-SUBABASE-HOST]:5432/postgres"

# Public Supabase credentials (not used in this tRPC setup, but good practice)
# Find these in your Supabase project -> Settings -> API
NUXT_PUBLIC_SUPABASE_URL="https://[YOUR-SUBABASE-HOST].supabase.co"
NUXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR-SUBABASE-ANON-KEY]"
```

### 4. Sync Database Schema

Push the Prisma schema to your Supabase database. This will create the `Post` table.

```bash
npx prisma db push
```

---

## 💻 Development

Start the development server. It will be available at `http://localhost:3000`.

```bash
npm run dev
```

The project is now running! You can open the `dev.db` file with a tool like [Prisma Studio](https://www.prisma.io/studio) to manage your database content.

```bash
npx prisma studio
```

---

## 🚀 Deployment

This project is configured for seamless deployment to [Vercel](https://vercel.com/).

1.  Push your code to a GitHub repository.
2.  Import the repository into Vercel.
3.  Add the same environment variables from your `.env` file to the Vercel project settings.
4.  Deploy! Vercel will automatically detect the Nuxt configuration and build the project.
