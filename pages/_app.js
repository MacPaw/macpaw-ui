import Layout from '../internal/Layout/Layout';
import '../lib/ui.css';

export default function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}