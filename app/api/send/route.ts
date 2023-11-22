import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";

export async function POST(request: any) {
  try {
    const title = "sminasij efef";
    const message = "lorem ipsum";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "saminchandeepa@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
      attachments: [
        {
          filename: "project.pdf",
          path: "C:/Users/Samin Chandeepa/Desktop/Project.pdf",
          contentType: "application/pdf",
        },
      ],
    });

    const mailOption = {
      from: "saminchandeepa@gmail.com",
      to: "adomicarts@gmail.com",
      subject: "Send Email Tutorial",
      html: `
        <html>
          <head>
            <style>
              /* Add your inline styles here */
              body {
                font-family: 'Arial', sans-serif;
              }
              h3 {
                color: #333;
              }
              li {
                list-style-type: square;
                margin-bottom: 10px;
              }
            </style>
          </head>
          <body>
            <h3>Hello Augustine</h3>
            <ul>
              <li className=" text-cyan-600"> title: ${title}</li>
              <li> message: ${message}</li>
            </ul>
          </body>
        </html>
      `,
    };

    // Send mail and handle errors
    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );

    // --------------

    // const generatePDFContent = () => {
    //   return new Promise((resolve) => {
    //     const doc = new PDFDocument();
    //     const chunks: any = [];

    //     // Add content to the PDF
    //     doc.fontSize(16).text("Hello, this is a generated PDF!", 100, 100);

    //     // Capture PDF chunks as buffers
    //     doc.on("data", (chunk: any) => {
    //       chunks.push(chunk);
    //     });

    //     // When the PDF is finished, resolve the promise with the concatenated buffer
    //     doc.on("end", () => {
    //       const pdfBuffer = Buffer.concat(chunks);
    //       resolve(pdfBuffer);
    //     });

    //     // Finalize the PDF
    //     doc.end();
    //   });
    // };

    // const sendPDFByEmail = async (pdfContent: any) => {
    //   // Create a nodemailer transporter
    //   const transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //       user: "saminchandeepa@gmail.com",
    //       pass: process.env.NEXT_PUBLIC_PASSWORD,
    //     },
    //   });

    //   // Define email options
    //   const mailOptions = {
    //     from: "saminchandeepa@gmail.com",
    //     to: "adomicarts@gmail.com",
    //     subject: "Generated PDF",
    //     text: "Attached is the generated PDF.",
    //     attachments: [
    //       {
    //         filename: "generated-pdf.pdf",
    //         content: pdfContent,
    //         encoding: "base64",
    //       },
    //     ],
    //   };

    //   // Send the email
    //   await transporter.sendMail(mailOptions);
    // };

    // const pdfContent = await generatePDFContent();
    // console.log("pdfContent");

    // // Send the PDF via email
    // await sendPDFByEmail(pdfContent);

    // return NextResponse.json(
    //   { message: "Email Sent Successfully" },
    //   { status: 200 }
    // );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
