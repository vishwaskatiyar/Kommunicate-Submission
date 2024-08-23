# E-commerce Store UI Design

## Question 1

### Task Overview
This project involves designing a user interface for an e-commerce store using HTML and CSS, without any external libraries. The design focuses on a clean and modern look while ensuring responsiveness across various devices.

### Implementation Details

#### Specifications
- **Button Height:** 36px
- **Color Code for "Try for Free" Button:** `#2DD35C`
- **Color Code for "E-commerce Store" Text:** `#5553B7`

### Design Features
- A responsive banner that adapts to different screen sizes.
- Two main buttons: "Try for Free" and "Book a Demo," styled for visual appeal.
- Highlighted text for branding purposes.
### Hosted Link
You can view the live demo of the design [here](https://vishwaskatiyar.github.io/Kommunicate-Submission/Question%201/index.html).
---
## Question 2

### Task Overview
The objective of this task is to create a JavaScript function that extracts the value of a specific query parameter from a given URL. This function will take two inputs: a URL string and the name of the parameter whose value needs to be retrieved.

### Task Details
- **Function Name:** `getUrlParameterValue`
- **Inputs:**
  - `url`: A string representing the full URL from which the parameter value needs to be extracted.
  - `parameter`: A string representing the name of the query parameter whose value you want to obtain.
- **Output:** The function should return the value of the specified parameter as a string. If the parameter does not exist, it should return `null`.

---

## Question 3

### Task Overview
The goal of this task is to create a JavaScript function that reverses the digits of a given number. The function will accept a number as input and return its reversed form.

### Task Details
- **Function Name:** `reverseNumber`
- **Input:** A number (`num`) that needs to be reversed.
- **Output:** The reversed number as an integer.

### Implementation Details
The `reverseNumber` function starts by converting the input number into a string. This conversion is crucial because it allows us to treat the number as a sequence of characters, enabling easy manipulation of individual digits.

An empty string, `reversedStr`, is then initialized to hold the reversed digits. The function uses a loop to iterate over the string representation of the number in reverse order, starting from the last digit and moving towards the first.

During each iteration of the loop, the current digit is appended to `reversedStr`. This process effectively builds the reversed version of the original number. After the loop completes, `reversedStr` contains the digits of the original number in reverse order.

Finally, the function converts the reversed string back into an integer using `parseInt` before returning it as the result. This ensures that the output is in the desired format.

### Example Usage
To reverse a number, you can call the function with a specific value, and it will return the reversed number. For instance, if you input the number `1463`, the function will return `3641`.

### Conclusion
This function efficiently reverses the digits of any given number and demonstrates basic string manipulation and control flow in JavaScript.



---
## Question 4

A fullstack Twitter clone built using the MERN stack that allows users to share their thoughts, engage with others, and build a network of followers.

## Project Overview

This project mimics the core functionalities of Twitter, providing a platform where users can:

- Share posts
- Comment on posts
- Follow and unfollow other users
- Manage their profiles

## Key Features

### User Authentication

- **Signup and Signin:** Users can securely create accounts and log in using JWT (JSON Web Tokens) for authentication.

### Post Creation

- Users can share posts that are displayed on their profiles and in the feeds of users who follow them.

### Comments and Engagement

- Each post allows users to leave comments, fostering interaction and discussions.

### Follow/Unfollow Users

- Users can follow others to see their posts in their feeds, enhancing social connectivity.

### Profile Management

- Users can update their profiles, including changing profile pictures and bios, to reflect their personal branding.

## Technology Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Learning Outcomes

- **Fullstack Development:** Enhanced skills in both frontend and backend development.
- **Real-Time Interaction:** Gained insights into handling asynchronous operations through implementing features like comments and user interactions.
- **User Experience Design:** Focused on creating an intuitive and engaging user experience, learning about state management and component architecture in React.

## Installation

To run this project locally, follow these steps:

1.  Repository Details:
   ```bash
   git clone <[(https://github.com/vishwaskatiyar/Twitter-clone-Full-Stack.git)>
   git repositoryLink <(https://github.com/vishwaskatiyar/Twitter-clone-Full-Stack)>
   git hostedLink<(https://twitter-clone-full-stack-1.onrender.com/)>


