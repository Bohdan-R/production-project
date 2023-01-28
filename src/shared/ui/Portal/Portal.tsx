import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactChild | React.ReactNode;
    element?: HTMLElement
}

function Portal({ children, element = document.body }: PortalProps) {
  /* const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector('#portal'))
    : null; */
  return createPortal(children, element);
}

export default Portal;
