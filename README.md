# Csvupload
Csv Upload this project uses node.js and mongoDB for storing  and rendering the csv files to display the data in the frontend.
## Overview
This project provides a simple web application to upload CSV files, display the uploaded file on the home page, and view the file data in a table format. It supports filtering the data by search and implements pagination for detailed viewing. The project is built using the MVC architecture pattern and utilizes MongoDB as the database. Multer middleware is used to handle file uploads and store them locally in the Express app. Validation for uploading CSV files is implemented both on the frontend and backend. EJS templates are used for rendering layouts.

## Features
- **CSV File Upload:** Easily upload CSV files through the web interface with validation on both frontend and backend.
- **File Display:** Uploaded files are displayed on the home page.
- **Data Viewing:** View the uploaded CSV data in a table format.
- **Search Filtering:** Filter the displayed data by search.
- **Pagination:** Navigate through data with pagination, holding up to 100 records per page.
- **MVC Architecture:** The project follows the MVC pattern for a structured and maintainable codebase.
- **MongoDB Database:** Utilizes MongoDB to store and manage data.
- **Multer for File Storage:** Multer middleware is used for handling file uploads and storing them locally in the Express app.
- **EJS Templates:** Uses EJS templates for rendering layouts.

## Tech Stack
[![Languages Used](https://skillicons.dev/icons?i=js,html,css,bootstrap,nodejs,express,mongodb)](https://skillicons.dev)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **File Handling:** Multer
- **Frontend:** HTML, CSS, JavaScript, EJS
- **Architecture Pattern:** MVC (Model-View-Controller)
- **Responsive Design:**Bootstrap

### Prerequisites

- Node.js installed
- MongoDB installed and running
## Getting Started

### Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/csv-upload-project.git

2. Navigate to the project directory:
```bash 
cd csv-upload-project
```

3. Install dependencies:
```bash 
npm install
```

4. Set up MongoDB:
- Install MongoDB if not already installed.
- Start MongoDB service.

5. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```
    DB_URI=your_mongodb_connection_string
    PORT=3000
    ```
6. Start the application:
```bash
    npm start
```
The application should now be running on `http://localhost:3000`.

## Usage
1. Access the application through `http://localhost:3000`.
2. Navigate to the upload page to upload a CSV file with validation for file type and size.
3. Once uploaded, the file will be displayed on the home page.
4. Click on the file name to view the data in a table format.
5. Use the search bar to filter the displayed data.
6. Navigate through pages using the pagination controls to view up to 100 records per page.


## ConnectMe 
[![Linkedin](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/mdirfanul/)
