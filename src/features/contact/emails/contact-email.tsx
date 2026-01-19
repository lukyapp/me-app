import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission</Heading>
          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>This email was sent from your portfolio contact form.</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  marginBottom: '64px',
  borderRadius: '8px',
  maxWidth: '600px',
};

const heading = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '0 0 20px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const section = {
  marginBottom: '16px',
};

const label = {
  color: '#6b7280',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 4px',
};

const value = {
  color: '#1a1a1a',
  fontSize: '16px',
  margin: '0',
};

const messageStyle = {
  color: '#1a1a1a',
  fontSize: '16px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: '#f9fafb',
  padding: '12px',
  borderRadius: '6px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '0',
};
