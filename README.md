# Pre-requisites
## Install the following:
- [Git](https://git-scm.com/downloads)
- [Node and NPM](https://nodejs.org/en/download/)
- [Meteor](https://www.meteor.com/install)
- [VSCode](https://code.visualstudio.com/download) or any text editor

# Setting up

Open your terminal in any directory then clone the repository by entering:
```
git clone https://github.com/janzkyle23/junk-terror-bill-blast.git && cd junk-terror-bill-blast
```

Download the npm dependencies by running:
```
npm install
```
# Allow email to send via third-party apps
To be able to send emails using your email address, you need to do the following:
1. In your browser, open google.com and log-in to your Google account
2. Click your profile icon located at upper-right corner of page then click **Manage your Google Account**
3. Go to Security, and under **Less secure app access**, click **Turn on access**
4. Turn on **Allow less secure apps**. You may turn it off later after you're done using this system.

# Running the code

To send an email blast with all the email address listed in the csv file located in private folder, replace the `email` and `password` in the command below with your own email address and password then run it in terminal.

```
meteor run MAIL_URL="smtp://<email>:<password>@smtp.gmail.com:587"
```

To change the email template, go to server/main.js and replace the value of `text` inside `sendEmail()` function.

In case of error during email sending, press ctrl+c to stop the process then re-run the app using the command above. This will not re-send an email to those who have been already emailed.