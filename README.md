 Mental Health Resource Finder

A responsive web application that helps users find mental health resources based on topics such as stress, depression, anxiety, and medical wellness. The app fetches real-time educational content using the MyHealthfinder API and presents it in a simple and accessible layout.  

This project was built with HTML, CSS, and JavaScript, and deployed using Vercel.

 Live Demo

🔗 [Visit the Live Site](https://playing-api.vercel.app/)  

Features

- Filter mental health resources by:
  - Topic: Stress, Depression, Anxiety, Wellness
  - Age (optional)
  - Sex (optional)
  - Pregnancy status (optional)
- Fetches data dynamically using external API
- Displays relevant articles with titles and links
- Responsive design for mobile and desktop users

Project Structure

mental-health-resource-finder/
│
├── index.html # Main HTML structure
├── styles.css # Styling and layout
├── script.js # Fetching data from the API and DOM manipulation
└── vercel.json # Vercel deployment configuration

Getting Started (Run Locally)

To run the project on your local computer:

Prerequisites

- A modern web browser (e.g. Chrome, Firefox)
- Code editor (e.g., VS Code)
- Internet connection (to fetch live API data)

Steps

1. **Clone the repository**  
   Open a terminal and run:
   ```bash
   git clone https://github.com/your-username/mental-health-resource-finder.git
   cd mental-health-resource-finder
Open the app in your browser
You can either:

Double-click index.html

OR open with Live Server (if using VS Code)

Done! You should see the UI and can begin testing.

 Deployment (Vercel)
The application is deployed using Vercel.

Deploy It Yourself
Create a free account at https://vercel.com

Install Vercel CLI (optional)

bash
Copy
Edit
npm install -g vercel
Deploy your project
In your project folder:

bash
Copy
Edit
vercel
Follow the prompts.

Vercel Configuration
This project includes a vercel.json file to ensure proper routing:

json
Copy
Edit
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
 APIs Used
This project uses public mental health APIs:

1. MyHealthfinder API
Base URL: https://health.gov/myhealthfinder/api/v3/topicsearch.json

Used to fetch educational content based on user-selected filters like topic, age, sex, and pregnancy.

Example Endpoint:

http
Copy
Edit
https://health.gov/myhealthfinder/api/v3/topicsearch.json?topicId=94&age=30&sex=Male&pregnant=No
Technologies Used
HTML5

CSS3

JavaScript (Vanilla)

Vercel for deployment

MyHealthfinder API

 Challenges Faced
CORS & Fetching Issues:
Initially struggled to get API responses due to restrictions. Solved by ensuring the correct API parameters and choosing the right endpoints.

Data Formatting:
The API occasionally returns complex nested JSON. I wrote custom JavaScript to safely access the article titles and summaries.

Empty Results for Certain Filters:
To improve UX, I added fallback messages when no articles are found.

Acknowledgments
Thanks to the U.S. Office of Disease Prevention and Health Promotion for providing the MyHealthfinder API.


License
This project is free and open-source under the MIT License.

