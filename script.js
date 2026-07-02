/* Color variables for a dark grey + yellow theme */
:root {
  /* Base surfaces */
  --bg: #121212;           /* dark grey background */
  --panel: #1f1f1f;        /* slightly lighter grey for cards */
  --text: #f4f4f4;         /* soft off-white text */
  --muted: #b0b0b0;        /* muted text */
  --border: #2a2a2a;       /* subtle borders */

  /* Accent colors: warm yellow */
  --accent: #f5c84c;       /* main yellow accent */
  --accent-dark: #d8aa26;  /* deeper yellow for hover */

  /* Shadows */
  --shadow: 0 12px 30px rgba(0, 0, 0, 0.55);
}

/* Optional alternate theme if you want to keep the toggle.
   Right now the toggle still works by adding/removing .dark,
   but both themes are dark. You can later define a light version. */
body.dark {
  --bg: #0c0c0c;
  --panel: #181818;
  --text: #f8f8f8;
  --muted: #a8a8a8;
  --border: #262626;
  --accent: #ffd35a;
  --accent-dark: #e1b739;
  --shadow: 0 14px 34px rgba(0, 0, 0, 0.7);
}

/* Page base */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  transition: background 0.3s ease, color 0.3s ease;
}

/* Top bar */
.topbar {
  background: #181818;
  border-bottom: 1px solid var(--border);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: var(--shadow);
}

.brand h1 {
  margin: 0;
  font-size: 1.4rem;
}

.brand p {
  margin: 0.2rem 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}

/* Navigation */
.nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav a {
  text-decoration: none;
  color: var(--accent);
  font-weight: bold;
  font-size: 0.95rem;
}

.nav a:hover {
  color: var(--accent-dark);
}

/* Main layout */
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem;
}

/* Hero section: dark grey + yellow gradient */
.hero {
  background: radial-gradient(circle at top left, #f5c84c 0%, #1f1f1f 40%, #121212 100%);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
}

.hero h2 {
  margin-top: 0;
  font-size: 2rem;
}

.hero p {
  color: var(--muted);
}

/* Panels */
.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
}

/* Form styling */
form {
  display: grid;
  gap: 0.9rem;
}

label {
  font-weight: bold;
}

input, textarea, select {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #181818;
  color: var(--text);
  font-size: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #707070;
}

/* Button styling */
button {
  background: var(--accent);
  color: #121212;
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
}

button:hover {
  background: var(--accent-dark);
  transform: translateY(-1px);
}

/* Preview box */
.preview-box {
  min-height: 180px;
  border: 2px dashed var(--border);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #181818;
  color: var(--muted);
  text-align: center;
  padding: 1rem;
}

.preview-box img,
.preview-box video {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 12px;
}

/* Feed layout */
.feed-grid {
  display: grid;
  gap: 1rem;
}

.post-card,
.sale-card {
  background: #181818;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

/* Post media area */
.post-media {
  width: 100%;
  min-height: 220px;
  background: linear-gradient(135deg, #1f1f1f, #121212);
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-media img,
.post-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Placeholder text */
.placeholder p {
  color: var(--muted);
  padding: 1rem;
  text-align: center;
}

/* Post content */
.post-content {
  padding: 1rem;
}

.post-content h3 {
  margin-top: 0;
}

.post-content p {
  color: var(--muted);
}

/* Tag label on posts */
.tag {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(245, 200, 76, 0.18);
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: bold;
}

/* Sales section */
.sale-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.sale-card {
  padding: 1rem;
}

.price {
  color: var(--accent);
  font-size: 1.2rem;
  font-weight: bold;
}

/* Quick actions */
.actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Footer */
footer {
  text-align: center;
  padding: 1.25rem;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

/* Responsive design */
@media (max-width: 700px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero h2 {
    font-size: 1.6rem;
  }
}
