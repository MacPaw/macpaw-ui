import Layout from '../internal/Layout/Layout';
import '../src/ui.scss';

export default function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}