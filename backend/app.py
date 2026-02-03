from flask import Flask, request, jsonify
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv
load_dotenv()



app = Flask(__name__)


# 🔹 Email Configuration (Replace with your details)
app.config.update(
    MAIL_SERVER='smtp.gmail.com',  # Gmail SMTP Server
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USERNAME='sarathyv056@gmail.com',  # Replace with your email
    MAIL_PASSWORD='vpel juey lolw qrzp',  # Replace with your app password
    MAIL_DEFAULT_SENDER='sarathyv056@gmail.com'
)

mail = Mail(app)

@app.route('/report', methods=['POST'])
def send_report():
    """Handles wildlife trafficking reports and sends email notifications."""
    data = request.get_json()
    report_message = data.get('message', '')

    if not report_message:
        return jsonify({'error': 'Message cannot be empty'}), 400

    try:
        msg = Message(
            subject="🚨 Wildlife Trafficking Report",
            recipients=['sarathyv056@gmail.com'],
            body=f"🚨 Wildlife Trafficking Alert 🚨\n\nReport:\n{report_message}"
        )
        mail.send(msg)
        return jsonify({'success': 'Report sent successfully!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
