// analytics code borrowed from noun.market

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

type GTagEvent = {
  action: string
  category?: string
  label?: string
  value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (!GA_TRACKING_ID) {
    return
  }

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category = '', label = '', value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
