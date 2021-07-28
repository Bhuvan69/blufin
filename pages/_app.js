import '../styles/globals.scss';
import { Container } from 'next/app';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {

    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    );
}

MyApp.propTypes = {
    Component: PropTypes.element.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
