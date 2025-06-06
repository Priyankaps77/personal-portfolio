// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

const CustomDoc = class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};

export default CustomDoc;
