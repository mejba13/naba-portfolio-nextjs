'use client'

import Script from 'next/script'
import { personalInfo, experiences, education, skills } from '@/data/portfolio'

export function SEOSchema() {
  // Person Schema - Main structured data for Rabiul Islam Naba
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://rabiulnaba.com/#person',
    name: personalInfo.name,
    givenName: 'Rabiul Islam',
    familyName: 'Naba',
    jobTitle: personalInfo.title,
    description: personalInfo.shortBio,
    url: 'https://rabiulnaba.com',
    image: {
      '@type': 'ImageObject',
      url: `https://rabiulnaba.com${personalInfo.profileImage}`,
      width: 420,
      height: 420,
    },
    email: `mailto:${personalInfo.email}`,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh',
    },
    sameAs: [
      personalInfo.social.linkedin,
      personalInfo.social.facebook,
      personalInfo.social.twitter,
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Bangladesh University of Engineering and Technology (BUET)',
        url: 'https://www.buet.ac.bd',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'CIPS - The Chartered Institute of Procurement & Supply',
        url: 'https://www.cips.org',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Bachelor of Engineering in Industrial Engineering',
        credentialCategory: 'degree',
        educationalLevel: 'Bachelor',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'Bangladesh University of Engineering and Technology (BUET)',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Diploma in Procurement and Supply',
        credentialCategory: 'diploma',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'CIPS - The Chartered Institute of Procurement & Supply',
        },
      },
    ],
    knowsAbout: [
      'Supply Chain Management',
      'Procurement',
      'Strategic Sourcing',
      'Vendor Management',
      'Logistics',
      'Contract Negotiation',
      'Inventory Optimization',
      'Industrial Engineering',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Fervent Multiboard Industries Ltd.',
      url: 'https://ferventbd.com/',
    },
  }

  // ProfilePage Schema
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://rabiulnaba.com/#profilepage',
    name: `${personalInfo.name} - Professional Portfolio`,
    description: personalInfo.shortBio,
    url: 'https://rabiulnaba.com',
    mainEntity: {
      '@id': 'https://rabiulnaba.com/#person',
    },
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
  }

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://rabiulnaba.com/#website',
    name: `${personalInfo.name} - Portfolio`,
    description: 'Professional portfolio of Rabiul Islam Naba, Head of Supply Chain & Procurement Specialist',
    url: 'https://rabiulnaba.com',
    publisher: {
      '@id': 'https://rabiulnaba.com/#person',
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://rabiulnaba.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  // Organization Schema for current employer
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://ferventbd.com/#organization',
    name: 'Fervent Multiboard Industries Ltd.',
    url: 'https://ferventbd.com/',
    description: 'Wood-based panel manufacturing company in Jamalpur Economic Zone, Bangladesh',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh',
    },
    employee: {
      '@id': 'https://rabiulnaba.com/#person',
    },
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rabiulnaba.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://rabiulnaba.com/#about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Experience',
        item: 'https://rabiulnaba.com/#experience',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Skills',
        item: 'https://rabiulnaba.com/#skills',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Education',
        item: 'https://rabiulnaba.com/#education',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact',
        item: 'https://rabiulnaba.com/#contact',
      },
    ],
  }

  // ItemList Schema for Work Experience
  const experienceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Professional Experience',
    description: 'Work history of Rabiul Islam Naba',
    numberOfItems: experiences.length,
    itemListElement: experiences.map((exp, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'OrganizationRole',
        roleName: exp.role,
        startDate: exp.period.split(' - ')[0],
        endDate: exp.current ? undefined : exp.period.split(' - ')[1],
        description: exp.description,
        memberOf: {
          '@type': 'Organization',
          name: exp.company,
          url: exp.companyUrl,
        },
      },
    })),
  }

  // FAQPage Schema for common questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Rabiul Islam Naba?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: personalInfo.fullBio,
        },
      },
      {
        '@type': 'Question',
        name: 'What is Rabiul Islam Naba\'s current role?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Rabiul Islam Naba currently serves as the ${personalInfo.title} at Fervent Multiboard Industries Ltd., where he oversees end-to-end supply chain operations.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What qualifications does Rabiul Islam Naba have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rabiul holds a Bachelor of Engineering in Industrial Engineering from BUET (Bangladesh University of Engineering and Technology) and a Diploma in Procurement and Supply from CIPS (The Chartered Institute of Procurement & Supply).',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Rabiul Islam Naba?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You can reach Rabiul Islam Naba via email at ${personalInfo.email} or phone at ${personalInfo.phone}. He is based in ${personalInfo.location}.`,
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="profilepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="experience-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceListSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
