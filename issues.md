# Issues Report — Tackles App

## Bugs Fixed


### 1. OTP Array Length Mismatch
**Location:** src/Screens/AdminOtp.tsx

**Problem:**  
The OTP state starts with 4 empty strings, but useFocusEffect resets it to 5 strings, and the check compares against a 5-character string '11111'. Because of this, only 4 input boxes show on the first load. So the user cannot type 5 digits at the start.

**Fix:**  
Changed the initial state to have 5 empty strings so it matches the reset and the expected OTP length.

---

### 2. Wrong Date Sent on Booking Submission
**Location:** src/Screens/ServiceBookingScreen.tsx

**Problem:**  
The form checks that the user selected a date before submitting. But when sending the data, the code uses `new Date().toISOString()` which is the current date, not the one the user picked. So the user's selected date is ignored and today's date is sent to the backend.

**Fix:**  
Changed `new Date().toISOString()` to `date.toISOString()` so the date the user actually picked is sent.



## Setup Notes
- The project was missing a `.env.example` file. Build failed with a Gradle error because `AIRTABLE_API_KEY` was not set. So added demo key on .env file. 
- Tested on Android physical device with `npm run android`.