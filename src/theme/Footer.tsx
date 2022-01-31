import { useLocation } from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Logo from '@site/static/img/logo-md.svg';
import OriginalFooter from '@theme-original/Footer';
import React, { useEffect, useState } from 'react';

export default function Footer(): JSX.Element {
  const isBrowser = useIsBrowser();
  const isDev =
    process.env.NODE_ENV == 'development' ||
    (isBrowser && window.location.href.includes('localhost'));

  const [timestamp, setTimestamp] = useState(new Date().getTime());
  const location = useLocation();
  useEffect(() => {
    setTimestamp(new Date().getTime());
  }, [location]);

  return (
    <>
      <Logo className="footer__logo" />
      {isDev || !isBrowser ? (
        <OriginalFooter />
      ) : (
        <>
          <img
            src={`https://static.scarf.sh/a.png?x-pxid=7341e2b9-4c79-40ee-b2a9-c4b5ad3b9fb3&${timestamp}`}
            alt=""
            style={{ height: '1px', width: '1px' }}
          />
          <OriginalFooter />
        </>
      )}
    </>
  );
}
