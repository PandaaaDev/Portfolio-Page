import { NextResponse } from 'next/server';
const sgMail = require('@sendgrid/mail');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail(email) {
	return emailRegex.test(email);
}
export async function POST(req) {
	const API_KEY = process.env.EMAIL_API_KEY.toString();
	const EMAIL_TO = process.env.EMAIL_TO.toString();
	const EMAIL_FROM = process.env.EMAIL_FROM.toString();

	sgMail.setApiKey(API_KEY);
	const { name, email, message } = await req.json();
	if (!name || !email || !message) {
		return NextResponse.json({ status: 'missing fields' });
	}
	if (!isValidEmail(email)) {
		return NextResponse.json({ status: 'invalid email' });
	}

	const msg = {
		to: EMAIL_TO,
		from: EMAIL_FROM,
		subject: `New message from ${email}`,
		text: message,
		html: `<h1> New message from: ${name}</h1>
		<div>${message}</div>	
		`,
	};
	return sgMail
		.send(msg)
		.then(() => {
			return NextResponse.json({ status: 'Email Sent!', error: null });
		})
		.catch((error) => {
			return NextResponse.json({ status: 'error', error: error.toString() });
		});
	// return NextResponse.json({ status: 'ok' });
}
