// Layout for Next
import React, { Fragment } from 'react';
import Head from 'next/head';

const Layout = props => (
    <Fragment>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
            <title>{props.pageTitle || 'Baseball Chat'}</title>
        </Head>
            {props.children}
    </Fragment>
);

export default Layout;