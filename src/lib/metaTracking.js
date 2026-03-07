const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
const CAPI_ENDPOINT = import.meta.env.VITE_META_CAPI_ENDPOINT || '/api/meta/events';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : undefined;
}

function ensureFbqLoaded() {
  if (window.fbq) return;

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
}

function eventId(eventName) {
  return `${eventName}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function initMetaPixel() {
  if (!PIXEL_ID || window.__metaPixelInitialized) return;
  ensureFbqLoaded();
  window.fbq('init', PIXEL_ID);
  window.__metaPixelInitialized = true;
}

export function trackEvent(eventName, customData = {}) {
  const id = eventId(eventName);

  if (PIXEL_ID && window.fbq) {
    window.fbq('track', eventName, customData, { eventID: id });
  }

  const payload = {
    event_name: eventName,
    event_id: id,
    event_source_url: window.location.href,
    action_source: 'website',
    custom_data: customData,
    user_data: {
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc'),
    },
  };

  fetch(CAPI_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});

  return id;
}

export function trackPageView() {
  return trackEvent('PageView');
}
