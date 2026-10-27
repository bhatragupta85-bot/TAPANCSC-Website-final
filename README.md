# TAPANCSC Website

A responsive, static website for **TAPANCSC — Digital Service Center**. It is built with plain HTML, CSS and JavaScript and does not require a framework, database or build tool.

## Files

- `index.html` — website structure, metadata and content
- `styles.css` — responsive styling and visual design
- `script.js` — searchable/filterable services, sample price guide, detailed document lists, official links, service dialog, mobile menu, FAQs and enquiry form behavior

## Preview locally

1. Extract the ZIP file (if you received the ZIP).
2. Open the `TAPANCSC-Website` folder.
3. Double-click `index.html` to open it in a browser.
4. For a better developer preview, open the folder in VS Code and use the Live Server extension.

## Important: configure contact details before publishing

Open `script.js` and edit the configuration at the top:

```js
const TAPANCSC_CONFIG = {
  phone: "",       // Example: +919876543210
  whatsapp: "",    // Digits only, including country code: 919876543210
  email: ""        // Your public enquiry email
};
```

Use your real contact information only. If WhatsApp is configured, the form prepares an enquiry in WhatsApp. Otherwise, if an email is configured, it opens an email draft. If neither is configured, the form attempts to copy the enquiry text and explains what is missing. The form is not connected to a server and does not save enquiries to a database.

## Edit the address or service list

- Find the contact address in `index.html` and update it if needed.
- Edit the `services` array in `script.js` to add, remove or change service cards, sample prices, official/portal fee notes, required documents, estimated time, steps and official links.
- Every `priceTag`/`centerFee` entry is a sample or guidance unless it specifically describes an official tariff. Replace suggested shop prices with your actual approved rates before publishing. Do not label sample prices as government fees.
- Official references used in the guide include UIDAI (Aadhaar), Income Tax Department (PAN), and Odisha e-District (certificates). Re-check live pages before publishing because fee schedules and document requirements can change.
- The website deliberately does not include product listings or a shopping cart.

## Publish

You can upload these static files to Netlify, GitHub Pages, Cloudflare Pages or another static host. Upload `index.html`, `styles.css` and `script.js` together, keeping their filenames and folder relationship intact.

## Notes

- Service descriptions and checklists are general examples. Confirm the current official requirements, fees and center authorization before offering a listed service.
- The website does not claim government affiliation, guaranteed approvals or a live connection to government portals.
- Never collect or ask a visitor to submit passwords, OTPs, PINs or payment credentials through this form.
