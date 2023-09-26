const puppeteer = require('puppeteer');
const markdownIt = require('markdown-it')();
const container = require('markdown-it-container');
const fs = require('fs-extra');

['header', 'footer', 'section'].forEach((tag) => {
  markdownIt.use(container, tag, {
    render: function (tokens, idx) {
      if (tokens[idx].nesting === 1) {
        return `<${tag}>`;
      } else {
        return `</${tag}>`;
      }
    },
  });
});

(async () => {
  // Read the Markdown and CSS files
  const markdownContent = await fs.readFile('document.md', 'utf-8');
  const cssContent = await fs.readFile('style.css', 'utf-8');

  // Create an HTML document with the Markdown content and CSS styling
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${cssContent}</style>
    </head>
    <body>
      ${markdownIt.render(markdownContent)}
    </body>
    </html>
  `;

  // Launch a headless Chromium browser using puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the HTML content of the page
  await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

  // Generate a PDF from the rendered HTML
  await page.pdf({ path: 'output.pdf', format: 'A4' });

  // Close the browser
  await browser.close();

  console.log('PDF generated successfully as "output.pdf"');
})();
