# Markdown to PDF Converter

This Node.js application allows you to convert a Markdown file into a PDF document with customizable styling. It uses the `markdown-it` library for Markdown parsing, `puppeteer` for PDF generation, and custom markers for creating sections in your Markdown content.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone or download this repository to your local machine.

2. Navigate to the project directory in your terminal.

3. Install the required dependencies using npm:

```bash
npm install
```

## Usage

1. Create your Markdown content in a file (e.g., `document.md`) and style your sections using the custom markers described below.

2. Customize the styling of your sections by editing the `style.css` file.

3. Run the Node.js script to generate the PDF:

```bash
node index.js
```

1. The PDF will be generated as `output.pdf` in the same directory as your script.

## Custom Sections

You can create custom sections in your Markdown file using the `markdown-it-container` plugin. To create a section, use the following format:

```markdown
::: section

## Section Title

This is the content of the section.

:::
```

You can use the same title for multiple sections, and the plugin will still work as expected. Sections can also be nested by using standard Markdown headings within the outer section.

## Example

Here's an example `document.md` file with custom sections:

```markdown
::: section

## Introduction

This is the introduction to your document.

::: section

## Chapter 1

The first chapter of your document.

::: section

### Section 1.1

A subsection within Chapter 1.

:::
:::

::: section

## Chapter 2

The second chapter of your document.

:::
```

## Style Notes

It is recommended that you use the `@page` directive as seen in the sample [style.css file](./style.css) for controlling print (PDF) layout concerns such as page gutters.

To avoid unusual page breaks in your PDF you may wish to wrap a section as described above, and use the CSS: `break-inside: avoid-page;` rule.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [markdown-it](https://github.com/markdown-it/markdown-it)
- [puppeteer](https://github.com/puppeteer/puppeteer)
- [markdown-it-container](https://github.com/markdown-it/markdown-it-container)
