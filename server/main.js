import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';
import { Email } from "meteor/email";
import { Papa } from "meteor/harrison:papa-parse";

Meteor.startup(() => {
  // get csv file from /private directory
  const emailsCSV = Assets.getText("test.csv");
  const emailsTable = Papa.parse(emailsCSV).data;

  // Get emails of existing users in db
  let emailedUsers = [];
  Meteor.users.find({})
    .fetch()
    .map((user) =>
      emailedUsers.push(...user.emails.map((email) => email.address))
    );

  const from = process.env.MAIL_URL.substr(
    8,
    process.env.MAIL_URL.indexOf(":")
  );
  const subject = "Test ";

  (function sendEmail(i) {
    Meteor.setTimeout(() => {
      let memberRow = emailsTable[i];
      let email = memberRow[0];
      let password = 'password';
      let text = `
      We call for the rejection of Senate Bill No. 1083, or the Anti-Terror Bill, for its overbroad definition of what terrorism is, and for violating the 1987 Philippine Constitution.

      Article XIII - Social Justice and Basic Human Rights, Section 1 states, ‘The Congress shall give highest priority to the enactment of measures that protect and enhance the right of all the people to human dignity, reduce social, economic, and political inequalities, and remove cultural inequities by equitably diffusing wealth and political power for the common good.’
      
      Using political power to silence those who voice out their issues and concerns is not using it for the common good, it’s exploitation of the power entrusted to them. The bill’s vague definition of what terrorism means could easily be misinterpreted and used to suit their own agenda.
`;
      while (true) {
        try {
          if (!emailedUsers.includes(email)) {
            console.log(`Emailing ${email}`);
            Email.send({ from, to: email, subject, text });
            console.log(`email sent to ${email}`);
          }
          break;
        } catch (err) {
          console.log(err);
        }
      }

      i++;
      if (i < emailsTable.length) sendEmail(i);
    }, 3000);
  })(0);
});
