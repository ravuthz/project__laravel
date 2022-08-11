```
The settings for any Gmail or Google Apps account are these:

Incoming Mail (IMAP) Server - Requires SSL
imap.gmail.com
Port: 993
Requires SSL:Yes

Incoming Mail (POP3) Server - requires SSL:
pop.gmail.com
Use SSL: Yes
Port: 995

Outgoing Mail (SMTP) Server - Requires TLS or SSL
smtp.gmail.com
Port: 465 or 587
Requires SSL: Yes
Requires authentication: Yes
Use same settings as incoming mail server

Full Name or Display Name: [your name]
Account Name or User Name: your full Gmail address (user...@gmail.com). Google Apps users, please enter user...@your_domain.com
Email address: your full Gmail address (user...@gmail.com) Google Apps users, please enter user...@your_domain.com
Password: your Gmail password

If your client does not support SMTP authentication, you won't be able to send mail through your client using your Gmail address.

Also, if you're having trouble sending mail but you've confirmed that encryption is active for SMTP in your mail client, try to configure your SMTP server on a different port: 465 or 587.
```

```
MAIL_DRIVER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=kokopon.kh@gmail.com
MAIL_PASSWORD="kokopon123!@#"
MAIL_ENCRYPTION=tls
MAIL_FROM_NAME=Admin
MAIL_FROM_ADDRESS=kokopon.kh@gmail.com
```