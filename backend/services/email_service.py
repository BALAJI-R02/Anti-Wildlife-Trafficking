import smtplib
from email.message import EmailMessage

def report_to_government(content):
    msg = EmailMessage()
    msg.set_content(f"⚠️ Wildlife trafficking ad detected:\n\n{content}")
    msg['Subject'] = "🚨 Wildlife Trafficking Alert"
    msg['From'] = "your_email@gmail.com"
    msg['To'] = "wildlife.department@gov.example"

    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.starttls()
            smtp.login('your_email@gmail.com', 'your_app_password')
            smtp.send_message(msg)
    except Exception as e:
        print("Error sending email:", e)
