# Getting Started

This app allows you to display a list of countries obtained from an API, with the ability to navigate between country pages and view detailed information about each country by clicking on it. It is built with React, Next.js, and uses Axios to make HTTP requests.

## Installation

1. **Clone the repository**  
   First, clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/MatiasBidart/assesment.git
   ```
2. **Install dependencies**
Navigate to your project directory and run the following command to install all the necessary dependencies:
```bash
    cd your_repository
    npm install
    #If you prefer to use Yarn, run:
    yarn install
```
3. **Set up the API**
The application makes requests to a local API. Ensure that the backend is running at http://localhost:4000 (you can configure the server as needed). If you don't have a sample API, you will need to create one or modify the URL in the components.
4. **Start the application**
Once the dependencies are installed, run the following command to start the app in development mode:
```bash
    npm run dev
    # or
    yarn dev
```
# Using the Application
## Home Page
When you access the home page (/), the app displays a paginated list of countries. You can navigate between pages using the "Previous" and "Next" buttons.

## View Country Details
By clicking the name of any country in the list, you will be redirected to a detail page for that country, where you can view its flag and more information (such as neighboring countries, if available).

## Pagination
The list of countries is divided into several pages. Each page shows up to 6 countries, and you can navigate forward or backward using the pagination buttons.

## Project Structure
/components: Contains reusable components for the app (e.g., CountryRow, PopulationChart).
/pages: Contains the pages of the app, such as the country list page and the country details page.
/styles: Contains the CSS files for the app's styling.

## Technologies Used
- React: For building the user interface.
- Next.js: React framework for server-side rendering and routing.
- Axios: For making HTTP requests to the API.
- Tailwind CSS: Used for styling.

## Main Dependencies
- react
- next
- axios
- tailwindcss

## Additional Configuration
If you need to modify the configuration or API endpoints, make sure to update the URLs in the relevant components, such as in the CountryList or CountryRow files, where Axios is used to fetch data from the API.

# API Endpoints
## GET /api/v1/countries
Fetches a list of all available countries.

Response:
200 OK: Returns a list of countries with basic details like name, country code, and flag.
Example response:
```json
[
  {
    "name": "Argentina",
    "countryCode": "AR",
    "flagURL": "https://flagcdn.com/w320/ar.png"
  },
  {
    "name": "Brazil",
    "countryCode": "BR",
    "flagURL": "https://flagcdn.com/w320/br.png"
  },
  ...
]
```

## # GET /api/v1/countries/:countryCode
```json
{
  "country": "Argentina",
  "countryCode": "AR",
  "flagURL": "https://flagcdn.com/w320/ar.png",
  "population": 45195777,
  "area": 2780400,
  "listOfBorderCountries": [
    {
      "commonName": "Chile",
      "countryCode": "CL"
    },
    {
      "commonName": "Brazil",
      "countryCode": "BR"
    }
  ],
  "populationData": [
    {
      "year": 1990,
      "population": 31420000
    },
    {
      "year": 2000,
      "population": 36800000
    },
    {
      "year": 2010,
      "population": 40000000
    }
  ]
}
```