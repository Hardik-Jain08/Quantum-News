# Quantum News Dashboard

**A futuristic, responsive dashboard for managing news articles, blogs, and payouts.**

---

## **Overview**
The Quantum News Dashboard is a modern web application built using the latest technologies to provide:
- Advanced filtering and searching of news articles and blogs.
- Admin functionality for managing payouts per article/blog.
- Export capabilities for payout reports.
- Seamless user authentication with role-based access.
- An intuitive UI with dark and light mode toggle.

---

## **Features**

### 1. **Filtering and Searching**
- **Filters**:
  - Filter articles by **Author**.
  - Filter by **Date Range**.
  - Filter by **Type** (e.g., News, Blogs).
- **Global Search Bar**:
  - Quickly search articles by keywords.



### 2. **Admin Payout Management**
- Admins can set a **payout rate** for articles and blogs.
- Automatically calculate total payouts based on the number of articles and rates.
- **Data Persistence**:
  - Payout rates are stored in **localStorage** to retain data across sessions.

![image](https://github.com/user-attachments/assets/ebfa5360-beca-4c98-b5f8-38497a7f7d07)

### 3. **Export Functionality**
- Export filtered articles and payout data as:
  - **PDF** using `jsPDF`.
  - **CSV** using `xlsx`.
  - Option to integrate with **Google Sheets**.
  
![image](https://github.com/user-attachments/assets/d5b085a4-4175-43b0-9fc1-593c0c732239)


### 4. **Dark Mode and Light Mode Toggle**
- Easily switch between dark and light themes.
- Theme preference is saved using `localStorage`.

![image](https://github.com/user-attachments/assets/2155d9da-c1cb-405e-9053-af152a5a6af5)

![image](https://github.com/user-attachments/assets/0542d9a5-ec91-4cc0-b32a-e4b63d22fc59)


### 5. **Analytics Dashboard**
- Visualize article performance and trends using:
  - Charts and graphs.
  - Metrics like total views, engagement rates, and top-performing categories.

![{258798F0-01ED-4BA7-BEF8-CB9DB3A52DF2}](https://github.com/user-attachments/assets/4af2fff0-5f43-4294-9666-9eca141ee2ee)

### 6. **User Authentication and Role Management**
- Integrated with **Clerk** for seamless authentication.
- Role-based access:
  - Admins can access **Payouts** and **Analytics** pages.
  - Regular users can only view articles and blogs.

![image](https://github.com/user-attachments/assets/5e9f1640-2a0e-4472-adc5-1f4b0c1e9ef4)



---

## **Technologies Used**

### **Frontend**
- **Next.js** (App Router): Framework for building modern, scalable web apps.
- **React**: UI library for building interactive user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### **State Management**
- **Redux Toolkit**: Simplified state management and logic.

### **Authentication**
- **Clerk**: For authentication, session management, and role-based access.

### **Export Functionality**
- **jsPDF**: For generating PDF reports.
- **xlsx**: For generating CSV reports.

### **Date Utilities**
- **date-fns**: For date parsing and manipulation.

---
