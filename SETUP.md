# SETUP.md

## What you need

1. Bring a laptop.
2. Install Node.js. Node lets your laptop run the app's tools.
3. Use a Google account made with a parent's email.
4. Ask your parent to help with that account.
5. Install VS Code. VS Code is an app for editing code.

## Get the code

Git is a tool that keeps copies of code. A repo is a project saved online.

1. Ask your coach for the starter repo link.
2. Open Terminal. Terminal is an app where you type commands.
3. Clone the repo with this command.
   A clone is your own copy of the code.

   ~~~sh
   git clone PASTE_STARTER_REPO_URL
   ~~~

4. Open the new folder.

   ~~~sh
   cd skyline-starter
   ~~~

5. Install the app's packages. Packages are helper code the app needs. npm is the tool that gets them.

   ~~~sh
   npm install
   ~~~

## Make your Firebase project

Firebase is Google's toolbox for sign-in and saving data. Firebase Console is the website for changing Firebase settings.

1. Open [Firebase Console](https://console.firebase.google.com/).
2. Choose Add project.
3. Give your project a name.
4. Turn Google Analytics off. Analytics counts how people use an app.
5. Create your project.

![Screenshot placeholder: project name](docs/setup/01-create-project.png)

![Screenshot placeholder: Analytics switched off](docs/setup/02-analytics-off.png)

6. Open Authentication in the left menu. Authentication controls who can sign in.
7. Choose Get started.
8. Turn on Google sign-in.
9. Choose your support email.
10. Save Google sign-in.

![Screenshot placeholder: Google sign-in on](docs/setup/03-google-sign-in.png)

11. Turn on Anonymous sign-in. It makes a guest account without a password.
12. Save Anonymous sign-in.
13. Check that both sign-in switches are on. They are two separate switches.

![Screenshot placeholder: Anonymous sign-in on](docs/setup/04-anonymous-sign-in.png)

14. Open Firestore Database in the left menu. Firestore is the database where scores are saved.
15. Choose Create database.
16. Choose production mode. This starts the database with rules that block access until you publish rules.
17. Pick a location near your class.
18. Create the database.

![Screenshot placeholder: Firestore production mode](docs/setup/05-firestore-production.png)

19. Open the Rules tab. Rules decide who can read or change database data.
20. Replace the rules with the rules below.
21. Choose Publish.

These rules let anyone read and write anything. That's on purpose. You'll fix it in class.

~~~text
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
~~~

![Screenshot placeholder: open rules published](docs/setup/06-firestore-rules.png)

22. Go to Project Overview.
23. Choose the Web icon.
24. Give your web app a name. A web app runs in a browser.
25. Choose Register app.

![Screenshot placeholder: web app registered](docs/setup/07-web-app.png)

26. Copy the Firebase config shown on the screen.

![Screenshot placeholder: Firebase web config](docs/setup/08-web-config.png)

## Connect it

Firebase config is the settings that connect this app to your Firebase project.

1. Open the project folder in VS Code.
2. Open src/firebase-config.js.
3. Replace each value that starts with PASTE_ with the matching value from your config.
4. Keep the quotes around each value.
5. Save the file.

## Run it

1. Start the app.

   ~~~sh
   npm run dev
   ~~~

2. Open http://localhost:5173 in your browser. Localhost is your own laptop.
3. Sign in as a guest.
4. Play one run.
5. Open Firestore Database in Firebase Console.
6. Open the Data tab.
7. Check that scores has your score.
8. Open your score to see its runs subcollection.

A subcollection is a small group of documents inside another document.

![Screenshot placeholder: saved score and runs](docs/setup/09-saved-score.png)

## Stuck?

1. If you see auth/operation-not-allowed, turn on Anonymous sign-in.
2. If you see auth/unauthorized-domain, add localhost under Authentication, Settings, Authorized domains. An authorized domain is a website Firebase allows sign-in from.

![Screenshot placeholder: localhost authorized](docs/setup/10-authorized-domain.png)

3. If you see permission denied, check that you published the open rules above.
4. If the page is blank, press F12 and check the Console tab. It shows messages about code problems.
5. If the app says Almost there, check that every PASTE_ value was replaced.

## Screenshots to capture

1. docs/setup/01-create-project.png — Show the project name in the Create project screen.
2. docs/setup/02-analytics-off.png — Show Analytics switched off before you create the project.
3. docs/setup/03-google-sign-in.png — Show Google sign-in enabled in Authentication.
4. docs/setup/04-anonymous-sign-in.png — Show Anonymous sign-in enabled in Authentication.
5. docs/setup/05-firestore-production.png — Show production mode selected while creating Firestore.
6. docs/setup/06-firestore-rules.png — Show the open rules in the Rules tab after Publish.
7. docs/setup/07-web-app.png — Show the registered web app in Project Overview.
8. docs/setup/08-web-config.png — Show the config snippet for your web app.
9. docs/setup/09-saved-score.png — Show your score document and its runs subcollection in Firestore Data.
10. docs/setup/10-authorized-domain.png — Show localhost in Authentication's Authorized domains list if you need that fix.
