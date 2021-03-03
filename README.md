# Blockchain-based music NFT's platform

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features
- 2 Collection types: Product, Category
- Created products
- Created categories
- Permissions set to `true` for product and category
- Responsive design using Tailwind css
- Slug system
- Publication system (draft & published)
- Role based access controls
- Payments handled with Snipcart

The template is using [Snipcart](https://snipcart.com/) which allows you setup a shopping cart on any website. They wrote a [tutorial](https://snipcart.com/blog/strapi-nuxt-ecommerce-tutorial) teaching you how to create this website but selling cupcakes!

Payment will not work on localhost, we are redirecting you to this [tutorial](https://snipcart.com/blog/develop-a-snipcart-powered-website-locally-using-ngrok) if you want to test payment locally.

## Getting Started

First, run the back (backend folder)
```bash
yarn develop
```

Then the front (frontend folder)
```bash
yarn develop
```

Open [http://localhost:1337/admin](http://localhost:1337/admin) with your browser to see the backend.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Techno
Back
- Strapi / Node

Front
- React + Next.Js
- Tailwind css
- react-h5-audio-player

## Front to do list

- The soundbar should play the songs of the product when clicking on each product song
- Register / connexion user process
- Uploading music process



