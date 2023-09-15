import { generatePdf } from 'html-pdf-node';

export const generate = () =>
  new Promise<string>((resolve, reject) => {
    generatePdf(
      {
        content: `<body> <h1> Hello World </h1> </body>`,
      },
      {
        width: 1280,
        height: 720,
        printBackground: true,
      },
      (err: Error, buffer: Buffer) => {
        if (err) {
          return reject(err);
        }

        return resolve(buffer.toString('base64'));
      },
    );
  });
