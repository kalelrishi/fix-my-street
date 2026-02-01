# Fix My Street 🏙️

Fix My Street is a citizen-centric web application that allows people to report and support public infrastructure issues such as potholes, garbage accumulation, and faulty streetlights. The platform helps municipalities prioritize issues based on public feedback.

---

## ✨ Features

- 📸 Upload a photo to report an issue  
- 📍 Automatic GPS location detection  
- 👍 One-click support system (one user = one support)  
- 📊 Public issues list with priority visibility  
- 🧑‍💼 Admin dashboard to update issue status  
- 🎨 Clean yellow-themed professional UI  
- ✨ Smooth page transition animations  

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Handling:** Browser Local Storage (Prototype)
- **Deployment:** Vercel

---

## 📁 Pages Overview

| Page | Description |
|------|------------|
| Home | Landing page with navigation |
| Report Issue | Upload issue photo with auto-detected location |
| Public Issues | View and support reported issues |
| Admin Panel | Update issue progress |

---

## ⚙️ How It Works (Prototype)

- Issues are stored using browser `localStorage`
- Users can support an issue once to indicate importance
- Admin updates issue status (Reported / In Progress / Resolved)
- Changes are reflected instantly in the UI

> ⚠️ This is a frontend prototype and does not use a backend.

---

## 🚧 Limitations

- No backend or database integration  
- Data is browser-specific  
- Admin authentication is simulated  
- Not production-ready  

---

## 🔮 Future Improvements

- Backend integration with database
- Real time updating of feedback
- Secure admin authentication
- Real-time issue synchronization
- Map-based issue visualization
- Notification system
- Real time updating of feedback

---

## 🚀 Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with  
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
