'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <form className="space-y-4" onSubmit={handleSubmit(() => undefined)}>
      <Input placeholder="Your name" aria-label="Name" {...register('name')} />
      {errors.name && <p className="text-xs text-red-500">Name is required.</p>}
      <Input placeholder="Email" type="email" aria-label="Email" {...register('email')} />
      {errors.email && <p className="text-xs text-red-500">Valid email is required.</p>}
      <Textarea placeholder="Tell me about your project..." aria-label="Message" {...register('message')} />
      {errors.message && <p className="text-xs text-red-500">Message should be at least 10 characters.</p>}
      <Button type="submit">Send inquiry</Button>
      {isSubmitSuccessful && <p className="text-sm text-green-600">Thanks! I will reply soon.</p>}
    </form>
  );
}
