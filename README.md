# Pre-requisites

- Download and install any text editor
- Install [Node and NPM](https://nodejs.org/en/download/)
- Install [Meteor](https://www.meteor.com/install)

# Setting up

Go to your preferred directory then clone the repository:

```
git clone https://github.com/janzkyle23/junk-terror-bill-blast.git
cd junk-terror-bill-blast
```

Download the npm dependencies by running:

```
npm install
```

# Running the code

To send an email blast with all the email address listed in csv file located under private folder, replace the `email` and `password` below with your email address and password then run it in terminal.

```
meteor run MAIL_URL="smtp://<email>:<password>@smtp.gmail.com:587"
```

To change the email template, go to server/main.js and replace the value of `text` inside `sendEmail()` function.
