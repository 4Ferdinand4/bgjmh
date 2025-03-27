# Class Webpage Project

This project is a comprehensive web application designed for a class, featuring various functionalities to enhance the learning experience. Below is an overview of the project's structure and components.

## Project Structure

```
class-webpage-project
├── assets
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── scripts.js
│   └── images
├── pages
│   ├── calendar.html
│   ├── chat.html
│   ├── contact-list.html
│   ├── learning-resources.html
│   ├── login.html
│   ├── news.html
│   ├── photo-album.html
│   ├── registration.html
│   ├── shared-cloud.html
│   ├── timetable.html
│   └── cheating-calculator.html
├── index.html
└── README.md
```

## Features

1. **Registration Form**: Users can register by providing their username, password, and email. Upon submission, an email is sent to admin@bgjmh.com for confirmation.

2. **Login Form**: A secure login form for confirmed users to access restricted content.

3. **Timetable**: A structured timetable displaying subjects from Monday to Friday.

4. **Chat Section**: A real-time chat feature for confirmed users to communicate.

5. **Calendar**: Users can add events related to test dates, with a form for submissions.

6. **Photo Album**: A section for users to upload and view images, with usernames displayed next to each photo.

7. **Shared Cloud**: A space for users to upload notes categorized by subjects.

8. **Cheating Probability Calculator**: A tool that calculates the probability of getting caught cheating based on user inputs.

9. **News Section**: Displays updates from Edupage (requires API integration).

10. **Contact List**: A list of classmates with editable details for confirmed users.

11. **Learning Resources**: A compilation of resources with descriptions and links, editable by users.

## Setup Instructions

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to view the landing page.
3. Ensure you have a backend set up to handle email sending, user authentication, file uploads, and API integration for the news section.

## Backend Functionality Needed

- **Email Sending**: For registration confirmation emails.
- **User Authentication**: To manage user sessions and access control.
- **File Uploads**: For the photo album and shared cloud features.
- **API Integration**: To fetch news updates from Edupage.

This project aims to provide a user-friendly interface for students to interact, learn, and manage their academic responsibilities effectively.