# IELTS Course Landing Page – 10 Minute School

This is a fully responsive product landing page for the **IELTS Course by Munzereen Shahid**, built as part of the **Frontend Engineer (Level 1)** assessment.

Live Page: [https://10minuteschool.com/product/ielts-course/](https://ielts-course-with-munzereen.vercel.app/)

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **SEO & Metadata**: Dynamic using API data
- **Deployment**: Vercel
- **Bonus**: ISR (Incremental Static Regeneration), SSR (Server-side Rendering)

---

## ✅ Features Implemented

- **Course Title & HTML Description**
- **Course Trailer**: YouTube embed from API
- **Course Instructors**: Rendered from section type `instructor`
- **Course Features**: `features` section
- **What You Will Learn**: `pointers` section
- **About This Course**: `about` section
- **Checklist Items**
- **Call to Action (CTA)**: from API
- **Localization Ready**: API supports `lang=en/bn`
- **Dynamic SEO**: Using `generateMetadata()` from API’s SEO field
- **Default Price Used**: 1000 (as per instruction)

---
## 🧪 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/ielts-course-landing.git
cd ielts-course-landing

# Install dependencies
npm install

# Run locally
npm run dev
