# Thuvitha Yogathasan — Portfolio

A responsive personal portfolio website for Thuvitha Yogathasan, a Business Information Systems undergraduate preparing for Business Analyst and technology-related internship opportunities.

## Highlights

- Responsive layout for desktop, tablet, and mobile
- Professional profile, education, skills, projects, and certification sections
- View and download links for the CV
- Expandable project cards and certificate previews
- Static, dependency-free website suitable for Vercel deployment

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server.

## Deploy on Vercel

1. Create a new Vercel project and import this GitHub repository.
2. Set the project root to this folder.
3. Use the default static-site settings; no build command is required.
4. Deploy.

The included `vercel.json` applies clean URLs and a basic security header.

## Project structure

```text
├── index.html                         # Main page
├── style.css                          # Core styling
├── certificates.css                   # Certification section styling
├── projects.css                       # Project section styling
├── script.js                          # Mobile navigation behavior
├── profile.jpeg                       # Professional portrait
├── Thuvitha-Yogathasan-CV.pdf         # Downloadable CV
├── certificate-*.jpeg                 # Certificate previews
└── vercel.json                        # Vercel configuration
```

## Security

This project contains no API keys, passwords, tokens, or environment files. The `.gitignore` prevents common secret and local-system files from being committed.
