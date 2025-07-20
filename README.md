
markdown
Copy code
# 🏡 ALX Listing App

A clean and responsive Airbnb-style property listing application built with **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**.

This project allows users to view property listings, check descriptions, see reviews, and simulate bookings. It was built as part of the ALX Frontend Capstone project.

---

## 🔧 Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)

---

## 📁 Folder Structure

```bash
.
├── components/              # UI components (Cards, Booking, etc.)
│   ├── common/             # Reusable common components
│   └── booking/            # Booking form and order summary
├── constants/              # Sample data and config constants
├── interfaces/             # TypeScript types and interfaces
├── pages/                  # Next.js pages (property detail, booking, etc.)
│   └── property/           # Dynamic [id] pages for each property
├── public/assets/          # Static images and icons
└── styles/                 # Global styles if any
🚀 Getting Started
Clone the repository and install dependencies:

bash
Copy code
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
npm install
npm run dev
The app will be running on http://localhost:3000.

📦 Features
🏠 Property detail pages with images, amenities, and descriptions

⭐ User reviews with ratings

📅 Booking section with order summary

💡 Dynamic routing using Next.js

🧪 Development Notes
All components are written using functional React with TypeScript.

The project uses mocked data for listings, reviews, and booking info.

No backend integration — ideal for frontend architecture and UI logic demonstration.

📄 License
This project is licensed for educational use as part of the ALX Software Engineering program.

✨ Author
Built by Odokwo Edikan — ALX Frontend Track