import React from 'react';

/**
 * Check user agent to determine if page is render by mobile device
 *
 * It's not necessarily correct, but this is probably the best we can do
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  const checkMobile = React.useCallback(() => {
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileRegex.test(navigator.userAgent));
  }, []);

  React.useEffect(() => {
    checkMobile();
  }, [checkMobile]);

  return isMobile;
}
