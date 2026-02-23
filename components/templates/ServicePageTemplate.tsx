'use client';

import React from 'react';
import Link from 'next/link';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Stethoscope, Coins, Building2 } from 'lucide-react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  features: Feature[];
  steps: Step[];
  benefits: string[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  serviceSlug: string; // For breadcrumbs and "see also" links
}

export const ServicePageTemplate: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  features,
  steps,
  benefits,
  faqs,
  testimonials,
  serviceSlug,
}) => {
  const allServices = ['knowledge-sharing', 'consultations', 'rewards', 'white-label'];
  const seeAlso = allServices.filter(s => s !== serviceSlug);

  return (
    <div className="px-6 md:px-16">
      {/* Breadcrumbs */}
      <nav className="text-gray-500 text-sm py-4">
        <Link href="/">Home</Link> &gt; <Link href="/services">Services</Link> &gt; <span className="text-gray-800">{title}</span>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">{subtitle}</p>
        <Link href="/contact" className="mt-6 inline-block bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700">
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 border rounded-lg text-center">
              <div className="mb-4 text-teal-600">{f.icon}</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="p-6 border rounded-lg text-center">
              <Badge className="mb-2">{i + 1}</Badge>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Benefits</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center space-x-2">
              <Check className="text-teal-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <Link href="/contact" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700">
          Get Started
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">FAQs</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <p className="text-gray-600">"{t.content}"</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* See Also */}
      <section className="py-16 md:py-24">
        <h2 className="text-2xl font-bold mb-4">See Also</h2>
        <ul className="flex space-x-4">
          {seeAlso.map(s => (
            <li key={s}>
              <Link href={`/services/${s}`} className="text-teal-600 hover:underline capitalize">
                {s.replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};