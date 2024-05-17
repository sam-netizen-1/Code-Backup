import { createTransport } from 'nodemailer';

const { EMAIL_PASSWORD } = process.env;

const transport = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lennie.rolfson@ethereal.email',
        pass: EMAIL_PASSWORD
    }
});

export const sendEmail = async (
    to: string | string[],
    subject: string,
    message: string
) => {
    try {
        await transport.sendMail({
            to,
            subject,
            text: message,
            from: "admin@bookManagement.com"
        });

        return true;
    } catch (e) {
        throw e;
    }
}