# Trilogy API Lab - Full Stack Project

## Overview
This project is a full-stack CRUD application built for the Trilogy API Lab. It features a MongoDB + Express back-end and a React front-end, combined into one repo. The app allows users to manage a list of movie trilogies, including creating, reading, updating, and deleting entries.

---

## Features

### Meets All Lab Requirements

- **Express API:** Built with `express` and `mongoose`
- **Single Model:** `Trilogy` model includes title, director, releaseYears (array), genre, and isComplete (boolean)
- **CRUD Routes Implemented:**
  - `POST /trilogies` → Create a new trilogy
  - `GET /trilogies` → Read all trilogies
  - `PUT /trilogies/:id` → Update a trilogy
  - `DELETE /trilogies/:id` → Delete a trilogy
- **CORS Enabled:** Allows requests from the frontend
- **Seed Script (`seed.js`)** to quickly populate the database

### Level-Up: React Frontend

- **Vite + React:** Frontend app lives inside `/client` folder
- **TrilogyList Component:** Fetches and displays all trilogies using `fetch()`
- **Clean, minimal JSX UI:** All data is pulled directly from the API

### Additional Enhancements

 All CRUD operations tested using browser `fetch()` in the console (documented in `test.html` and in project notes)

- **Custom `test.html`**: Used as an optional, manual way to test API calls
- **Seed Script Commentary:** Written with thought and humor
- **Organized Folder Structure**: `/client` for frontend, root folder for backend, MVC-style model folder.
 For normal full-stack apps, the front end and backend are built independently. I did this and was able to (mv trilogy-frontend trilogy-api/client) in my terminal, to turn this project in with only one main repo/source. Continued below...
- **Combined Repo:** Both frontend and backend live in one GitHub repo for simple turn-in and demo

---

### Reflections
This project helped reinforce my understanding of Express, MongoDB, and React with the support of my instructors and classmates at General Assembly.
