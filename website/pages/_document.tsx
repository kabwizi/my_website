import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head />
        <meta
          name="description"
          content="Bonjour! Je me nomme Serge Kabwizi. Je suis un programeur indépendant full stack et je me specialise dans la conception d’application mobile et de site web sur mesure"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React js, Next js, Node js, Flutter, Dart, Full stack, Front end, Back end"
        />
        <meta name="author" content="Kabwizi Serge" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
