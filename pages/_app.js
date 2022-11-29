import Layout from '../components/layout/layout';
import '../styles/globalStyle.scss';

function MyApp({ Component, paageProps }) {
    return (
        <Layout>
            <Component {...paageProps} />
        </Layout>
    );
}
export default MyApp;
