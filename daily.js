const sample = require('lodash/sample');
const fs = require('fs');

function run() {
  try {
    const readme = fs.readFileSync('./README.md', 'utf-8');
    const Point = '</details>';
    const index = readme.indexOf(Point);
    const before = readme.substring(0, index + 10);
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = now.getDate();
    day = day < 10 ? `0${day}` : day;
    const date = `${year}-${month}-${day}`;
    const quotation = fs.readFileSync('./motto.md', 'utf-8');
    const quotations = quotation.split('\n').filter(it => it.startsWith('>'));
    const dayily = sample(quotations);
    const newReadme = `${before}
<!-- 
${date}
${dayily}
-->
`;

    fs.writeFileSync('./README.md', newReadme);
    console.log('Update Success!');
  } catch (error) {
    console.log(error.message);
  }
}

run();
