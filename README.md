This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## TODO
- Fix the slider stuttering and height issue with mobile in [slider pages](components/home/FeaturedSliderItem.jsx)
- maybe one day i will fix the useEffect in detail
- denies entries to [enter.jsx](pages/enter.jsx) if already have an account and username
- Finish implementing the paypal's checkout thing
  - Maybe create a card thing myself with hoisted field rather than paypal's default
- Work on the detail's page [recommendation](pages/[gameSlug]/index.jsx)
  - Also add case if game is already own or in cart in the add to cart
- This is the "if you have nothing to do then do these things" list
  - Work on making a next/image specialized component will ya
- Next project make sure everything is modular ok? (admin)
- The admin editor for in page is unoptimized might need to work on that
- Joined at and updated at for users btw