import smtplib
from email.mime.text import MIMEText
from config.settings import EMAIL_HOST, EMAIL_PORT, EMAIL_ADDRESS, EMAIL_PASSWORD

def send_alert(report_details):
    msg = MIMEText(f"Fake Wildlife Ad Detected:\n\n{report_details}")
    msg["Subject"] = "Urgent: Fake Wildlife Ad Alert"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = "govt_official@example.com"

    try:
        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.sendmail(EMAIL_ADDRESS, "govt_official@example.com", msg.as_string())
        return "Email Sent!"
    except Exception as e:
        return f"Error sending email: {e}"
