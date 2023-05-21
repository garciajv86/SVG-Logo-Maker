// TODO: Create a function to generate html for index.html file
function generateHTML(answers) {
  let svgElement;

  switch (answers.shape) {
    case "circle":
      svgElement = `
            <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.textContent}</text>
          `;
      break;
    case "square":
      svgElement = `
            <rect x="90" y="40" width="120" height="120" fill="${answers.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.textContent}</text>
          `;
      break;
    default:
      svgElement = `
            <polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.textContent}</text>
          `;
      break;
  }

  const template = `
    <!DOCTYPE html>
    <html>
     <head>
       <meta charset="UTF-8">
       <title>SVG-LogoMaker</title>
    </head>
    <body>
        <svg width ="300" height="200">
          ${svgElement}
        </svg>
    </body>
    </html>
    `;

  return template;
}

//* Export the function so I can Import in to my index.js
module.exports = generateHTML;
