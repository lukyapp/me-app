'use server';

export async function contactFormSubmitAction(formData: FormData) {
  // In a real application, this would send the data to a backend
  console.log('Form submitted:', formData);
  alert('Thank you for your message! I will get back to you soon.');

  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  } as const;

  console.log('rawFormData : ', rawFormData);
}
