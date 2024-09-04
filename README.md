# project1

# **My Scheduling App**

## **Project Overview**

My Scheduling App is a simple web-based application that allows users to log in, set their availability for specific days or the entire week, and enables admins to view and schedule sessions based on that availability. The application is designed with a focus on user-friendly navigation, responsive design, and basic session management.

## **Features**

- **User Login:** Simple login functionality where users can log in using their email.
- **Dynamic User Availability Input:** Users can dynamically input and update their availability for different days of the week.
- **Admin Dashboard:** Admins can view all user availabilities and schedule sessions accordingly.
- **Responsive Design:** The app is designed to work across various devices, including desktops, tablets, and smartphones.

## **Project Structure**

```
my-scheduling-app/
│
├── index.html              # Login Page
├── availability.html       # User Availability Page
├── admin-dashboard.html    # Admin Dashboard Page
├── styles.css              # CSS Styles
├── login.js                # JavaScript for Login
├── availability.js         # JavaScript for Availability
└── admin-dashboard.js      # JavaScript for Admin Dashboard
```

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone https://github.com/yourusername/my-scheduling-app.git
cd my-scheduling-app
```

### **2. Open the Project**

Since this is a static project, you can directly open the `index.html` file in your browser.

1. **For Development:**
   - Open the project in your preferred code editor.
   - Modify the files as needed.

2. **For Testing:**
   - Right-click the `index.html` file and select "Open with" -> "Browser".
   - Navigate between the pages using the provided links.

### **3. Available Pages**

- **Login Page:** `index.html`
- **User Availability Page:** `availability.html`
- **Admin Dashboard Page:** `admin-dashboard.html`

## **How to Use**

1. **Login:**
   - Enter your email and click "Login" to proceed to the availability page.

2. **Set Availability:**
   - On the Availability Page, select a day and enter start and end times.
   - Click "Submit" to save your availability.
   - You can navigate to the Admin Dashboard or return to the Login page.

3. **Admin Dashboard:**
   - View a list of user availabilities.
   - Navigate back to the Availability Page or Logout.

## **Customization**

- **Modify Styles:**
  - You can update the `styles.css` file to change the appearance of the pages.

- **Add Functionality:**
  - Modify the JavaScript files (`login.js`, `availability.js`, `admin-dashboard.js`) to add more dynamic behavior or connect to a backend server.

## **Technologies Used**

- **HTML5:** For structuring the content.
- **CSS3:** For styling and layout.
- **JavaScript:** For adding interactivity.

## **Future Improvements**

- **Backend Integration:** Implement a Node.js backend with a MongoDB database to persist user data and availability.
- **Session Management:** Add session handling for logged-in users.
- **Notifications:** Implement email or SMS notifications for scheduled sessions.
- **User Authentication:** Use OAuth or JWT for more secure user authentication.




For questions or support, please contact:
- **Your Name:** yourname@example.com
- **GitHub:** [yourusername](https://github.com/yourusername)

---

This `README.md` file provides a clear overview of the project, instructions for setting it up, and information on how to use and customize the application.
