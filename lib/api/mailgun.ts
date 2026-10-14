

interface MailgunEmailOptions {
  to: string;
  from: string;
  subject: string;
  html: string;
  text?: string;
}

interface MailgunResponse {
  id: string;
  message: string;
}

export async function sendMailgunEmail(
  options: MailgunEmailOptions
): Promise<MailgunResponse> {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;

  if (!apiKey || !domain) {
    throw new Error("Mailgun API key and domain are required");
  }

  const auth = btoa(`api:${apiKey}`);
  const url = `https://api.mailgun.net/v3/${domain}/messages`;

  const formData = new URLSearchParams();
  formData.append("from", options.from);
  formData.append("to", options.to);
  formData.append("subject", options.subject);
  formData.append("html", options.html);
  if (options.text) {
    formData.append("text", options.text);
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(`Mailgun API error (${response.status}): ${responseText}`);
  }

  return JSON.parse(responseText) as MailgunResponse;
}
