# Mental Health Resource Finder

This web application helps users find mental health resources on topics such as stress, depression,anxiety, and wellness using data from the MyHealthfinder API.

# Features

- Search mental health resources by category
- Optional filters: Age, Sex, and Pregnancy status
- Clean UI and responsive design
- External links to official resources and images (when available)

## Live Demo

Deployed on **Vercel**: [https://your-vercel-link.vercel.app](https://playing-api.vercel.app/)

---

##  Local Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mental-health-resource-finder.git
   cd mental-health-resource-finder
2. **Open in browser**
Just open index.html in your browser

Deployment Instructions (Vercel)

1.Push your code to GitHub.
2.Visit https://vercel.com and import your repo.
3.Add a vercel.json if needed for custom configs.
4.Click Deploy.

API Used
MyHealthfinder API

Documentation

Public API by the U.S. Department of Health & Human Services
Challenges Faced
CORS issues: Solved by ensuring proper use of the API and avoiding unnecessary proxies.

Nested data: Managed normalization of inconsistent structures using conditional checks and fallback logic.

 Acknowledgments
MyHealthfinder API for providing public health data.

Inspired by public health UI designs.

 Project Structure
pgsql
Copy code
mental-health-resource-finder/
├── index.html
├── styles.css
├── script.js
├── vercel.json
└── README.md
Built With
HTML, CSS

Vanilla JavaScript

Vercel for hosting






