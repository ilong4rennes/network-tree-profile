# Network Tree Profile

A simple React application to create a “Network Tree Profile” form. Users can enter their details, agree to terms, and submit the form.

## Features
1. **Smooth Scrolling** within the form container if content exceeds the viewport height.  
2. **Form Validation**: The "Create Account" button is disabled until all fields are filled and the checkbox is checked.  
3. **Console Logging**: On submission, the form data is logged to the console.  
4. **Links**: Privacy Policy and Terms of Service links open in new tabs.  

---

## Prerequisites
- **Node.js** (v14+ recommended)
- **npm**

Check your installed versions with:
```bash
node -v
npm -v
```

---

## Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/ilong4rennes/network-tree-profile.git
   ```

2. **Navigate to the Project Directory**  
   ```bash
   cd network-tree-profile
   ```

3. **Install Dependencies**  
   ```bash
   npm install
   ```

---

## Usage

1. **Start the Development Server**  
   ```bash
   npm start
   ```
   This will automatically open [http://localhost:3000](http://localhost:3000) in your default browser.

2. **Fill Out the Form**  
   - Enter First Name, Last Name, Email, Phone, and agree to terms.
   - The “Create Account” button becomes enabled once all fields are valid.

3. **Submit**  
   - Click “Create Account.”
   - Check your browser’s console to see the logged form data.

---

## Building for Production

To create an optimized production build, run:
```bash
npm run build
```
This will generate a `build` folder with static files ready to be served.

---

## License

This project is for demonstration purposes. You may adapt it to your needs.  
