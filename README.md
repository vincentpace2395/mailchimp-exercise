Prerequisites: 
    Make sure you have node.js version 12 or 14 and above installed.
        You can check node version by running node -v 

Steps to Install Cypress and Run tests:
    1. Navigate to root of project directory and run 'npm init -y'
    2. Once step 1 wraps up, run 'npm install cypress'
    3. Once step 2 wraps up, you can check version of cypress by running 'npx cypress -v'
    4. Run 'npx cypress open'
        * Running 'npx cypress open' will open your Cypress window where you can then select        spec_files in order to run the tests housed within that spec file *

    If you would like to run tests in headless mode, you can run 'npx cypress run' instead of npx cypress open.    

Links for reference:     
    For online documentation on Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

    For youtube video on installing Cypress: https://www.youtube.com/watch?v=1wlK2WhpphY&t=612s