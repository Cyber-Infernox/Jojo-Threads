# Jojo-Threads

Threading all the way...

Threads is a lightweight, user-friendly messaging application designed for seamless communication. It enables users to create threads of conversations, making it easy to follow discussions on various topics. Whether you're collaborating with a community or chatting with friends, Threads offers a clean and intuitive interface to keep your conversations organized and accessible.

## Features

- **Threaded Conversations**: Organize messages into threads for easy tracking and navigation.
- **Real-time Messaging**: Enjoy instant communication with real-time message updates.
- **User Profiles**: Customize your profile with personal information and avatar.
- **Notifications**: Stay updated with push notifications for new messages and mentions.
- **Search Functionality**: Quickly find specific messages or threads.

## Project Structure

This repository contains the code for the Jojo-Threads project.

- `my-app`: Contains the project folders and files.

## Prerequisites

- Node.js
- Next.js
- Clerk
- Uploadthing
- MongoDB
- Visual Studio Code or any preferred code editor

## Getting Started

### Backend Setup

1. **Clone the repository:**

   Open an empty folder where you want to clone the repository

   ```sh
   git clone https://github.com/Cyber-Infernox/Jojo-Threads.git
   cd Jojo-Threads
   cd my-app

2. **Install dependencies:**

   ```sh
   npm install

3. **Set up environment variables:**

   Create a .env.local file inside the "my-app" folder with the specific keys:

   ```sh
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   MONGODB_URL=your_mongodb_connection_string_here
   UPLOADTHING_SECRET=your_uploadthing_secret_here
   UPLOADTHING_APP_ID=your_uploadthing_app_id_here
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_next_public_clerk_publishable_key_here
   CLERK_SECRET_KEY=your_clerk_secret_key_here
   NEXT_CLERK_WEBHOOK_SECRET=your_next_clerk_webhook_secret_here
   ```

4. **Start the app:**

   ```sh
   npm run dev

## Key Points

### Environment Variables:
Ensure you have set up the necessary environment variables in the `.env.local` file before starting the app.

### External Services:
Visit [Clerk](https://clerk.com/) and [UploadThing](https://uploadthing.com/) to obtain the required keys for authentication and image uploading.

### MongoDB:
Make sure to replace `your_mongodb_connection_string_here` with your actual MongoDB connection string from MongoDB Atlas.

## License
This project is licensed under the MIT License.
