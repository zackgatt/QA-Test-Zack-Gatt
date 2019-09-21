# QA Test Zack Gatt

## Install Cypress ##

Run npm install cypress --save-dev

## Run cypress GUI ##

Run 'npx cypress open', wait for the GUI to open (may have to run 'npx cypress open' e few times for verification) and press 'Run all Specs' on the top right corner.
Results are shown on the right side of the chrome instance that is opened and the steps of the process can be seen after test are all done.

## Get html and Json reports ## 
 Run npm install --save-dev mocha@5.2.0  mochawesome mochawesome-merge mochawesome-report-generator
 
 Then run 'npx cypress run' and wait for the tests to finish, afterwards navigate to the results folder and the html and json 
files can be found. Also videos and printscreens of the process can be found in their rescpective folders.
