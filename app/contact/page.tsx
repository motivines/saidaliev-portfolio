import { ContactForm } from '@/components/forms/contact-form';

export default function ContactPage() {
  return (
    <div className="container grid gap-8 py-10 md:grid-cols-2">
      <div>
        <h1 className="section-title">Contact</h1>
        <p className="mt-3 text-muted-foreground">Share your brief, timeline, and goals. I usually reply within 24 hours.</p>
      </div>
      <ContactForm />
    </div>
  );
}
