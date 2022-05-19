import { useLocation } from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Logo from '@site/static/img/logo-md.svg';
import OriginalFooter from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import React, { ComponentProps, useEffect, useState } from 'react';

type Props = ComponentProps<typeof FooterType>;

export default function Footer(props: Props): JSX.Element {
  const isBrowser = useIsBrowser();
  const isDev =
    process.env.NODE_ENV === 'development' ||
    !isBrowser ||
    new URL(window.location.href).hostname !== 'resoto.com';

  const [timestamp, setTimestamp] = useState(new Date().getTime());
  const location = useLocation();
  useEffect(() => {
    setTimestamp(new Date().getTime());
  }, [location]);

  return (
    <>
      <Logo className="companyLogo" />
      {isDev ? null : (
        <>
          <img
            src={`https://static.scarf.sh/a.png?x-pxid=7341e2b9-4c79-40ee-b2a9-c4b5ad3b9fb3&${timestamp}`}
            referrerPolicy="no-referrer-when-downgrade"
            alt=""
            style={{
              height: '1px',
              border: '0',
              marginBottom: '-1px',
            }}
          />
        </>
      )}
      <OriginalFooter {...props} />
    </>
  );
}
