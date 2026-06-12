import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const output = resolve('public/Abhishek_Gupta_CV.pdf')

const escapePdf = (value) => value
  .replaceAll('\\', '\\\\')
  .replaceAll('(', '\\(')
  .replaceAll(')', '\\)')

const text = (font, size, x, y, value) =>
  `BT /${font} ${size} Tf ${x} ${y} Td (${escapePdf(value)}) Tj ET`

const lines = [
  text('F2', 24, 54, 780, 'ABHISHEK GUPTA'),
  text('F1', 11, 54, 760, 'Frontend Developer | React Developer'),
  text('F1', 9, 54, 742, 'Mumbai, India | +91 98334 97153 | abhishekshah15137@gmail.com'),
  text('F1', 9, 54, 728, 'github.com/Abhishek10440 | linkedin.com/in/abhishek-gupta-932bb53a1'),

  text('F2', 13, 54, 694, 'PROFESSIONAL SUMMARY'),
  text('F1', 10, 54, 676, 'Frontend developer specializing in React.js and responsive, accessible web applications.'),
  text('F1', 10, 54, 662, 'Experienced with REST APIs, modern UI development, and full-stack project workflows.'),

  text('F2', 13, 54, 628, 'TECHNICAL SKILLS'),
  text('F2', 10, 54, 610, 'Frontend:'),
  text('F1', 10, 112, 610, 'HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap'),
  text('F2', 10, 54, 594, 'Backend:'),
  text('F1', 10, 112, 594, 'Node.js, Express.js'),
  text('F2', 10, 54, 578, 'Database:'),
  text('F1', 10, 112, 578, 'MongoDB, MySQL'),
  text('F2', 10, 54, 562, 'Tools:'),
  text('F1', 10, 112, 562, 'Git, GitHub, VS Code, Postman'),

  text('F2', 13, 54, 528, 'PROJECTS'),
  text('F2', 10, 54, 510, 'AI Chat Bot React'),
  text('F1', 9, 54, 496, 'Conversational chatbot built with React and integrated with AI APIs.'),
  text('F2', 10, 54, 474, 'E-Commerce Fake API'),
  text('F1', 9, 54, 460, 'React ecommerce frontend with product listings and cart flows using a REST API.'),
  text('F2', 10, 54, 438, 'GoDDell Store'),
  text('F1', 9, 54, 424, 'Retail ecommerce demo featuring product browsing, filtering, and Context API.'),
  text('F2', 10, 54, 402, 'XAI Healthcare Demonstrator'),
  text('F1', 9, 54, 388, 'Explainable AI demonstrator for healthcare use cases.'),
  text('F2', 10, 54, 366, 'Silent Signal'),
  text('F1', 9, 54, 352, 'Signal processing visualization and demonstration project.'),

  text('F2', 13, 54, 318, 'EDUCATION'),
  text('F2', 10, 54, 300, 'B.Sc. Computer Science | 2023 - 2026'),
  text('F1', 10, 54, 284, 'Completed with a focus on web development | CGPA: 7.2'),

  text('F2', 13, 54, 250, 'ACHIEVEMENTS'),
  text('F1', 10, 54, 232, '- Built and deployed a production-ready conversational AI chatbot.'),
  text('F1', 10, 54, 216, '- Published multiple projects on GitHub demonstrating frontend and full-stack skills.'),
]

const stream = `${lines.join('\n')}\n`
const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}endstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
]

let pdf = '%PDF-1.4\n'
const offsets = [0]

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf))
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`
})

const xrefOffset = Buffer.byteLength(pdf)
pdf += `xref\n0 ${objects.length + 1}\n`
pdf += '0000000000 65535 f \n'
offsets.slice(1).forEach((offset) => {
  pdf += `${String(offset).padStart(10, '0')} 00000 n \n`
})
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`

mkdirSync(dirname(output), { recursive: true })
writeFileSync(output, Buffer.from(pdf))
