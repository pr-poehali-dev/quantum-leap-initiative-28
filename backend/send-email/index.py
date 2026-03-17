import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет письмо с формы обратной связи NovoStep на почту владельца."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    message = body.get('message', '').strip()

    if not name or not email or not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните все поля'})
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    sender = 'RIpgap1@gmail.com'
    recipient = 'RIpgap1@gmail.com'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта NovoStep от {name}'
    msg['From'] = sender
    msg['To'] = recipient

    html = f"""
    <html><body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 32px; border-top: 4px solid #ef4444;">
        <h2 style="color: #111; margin-top: 0;">Новая заявка с сайта NovoStep</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 100px;">Имя:</td><td style="padding: 8px 0; font-weight: bold;">{name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email:</td><td style="padding: 8px 0;"><a href="mailto:{email}" style="color: #ef4444;">{email}</a></td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 6px; border-left: 3px solid #ef4444;">
          <p style="color: #666; margin: 0 0 6px 0;">Сообщение:</p>
          <p style="margin: 0; white-space: pre-wrap;">{message}</p>
        </div>
      </div>
    </body></html>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
