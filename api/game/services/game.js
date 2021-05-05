'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */
const axios = require('axios')
const slugify = require('slugify')

function Exception(e) {
  return { e, data: e.data && e.data.errors && e.data.errors };
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function setImage({ image, game, field = "cover" }) {
  try {
    const url = `https:${image}_bg_crop_1680x655.jpg`;
    const { data } = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(data, "base64");

    const FormData = require("form-data");
    const formData = new FormData();

    formData.append("refId", game.id);
    formData.append("ref", "game");
    formData.append("field", field);
    formData.append("files", buffer, { filename: `${game.slug}.jpg` });

    console.info(`Uploading ${field} image: ${game.slug}.jpg`);

    await axios({
      method: "POST",
      url: `http://${strapi.config.host}:${strapi.config.port}/upload`,
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    });
  } catch (error) {
    console.log("setImage", Exception(e));
  }
}

async function getGameInfo(slug) {
  try {
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const body = await axios.get(`https://www.gog.com/game/${slug}`);
    const dom = new JSDOM(body.data);

    const ratingElement = dom.window.document.querySelector(
      ".age-restrictions__icon use"
    );

    const description = dom.window.document.querySelector(".description");
    return {
      rating: ratingElement
        ? ratingElement
            .getAttribute("xlink:href")
            .replace(/_/g, "")
            .replace(/[^\w-]+/g, "")
        : "BR0",
      short_description: description.textContent.trim().slice(0, 160),
      description: description.innerHTML,
    };
  } catch (e) {
    console.log("getGameInfo", Exception(e));
  }
}

async function getByName(name, entityName) {
  const item = await strapi.services[entityName].find({ name });
  return item.length ? item[0] : null;
}

async function create(name, nameEntity) {
  const item = await getByName(name, nameEntity)

  if (!item) {
    return await strapi.services[nameEntity].create({ name: name, slug: slugify(name).toLowerCase() })
    .then(res => res)
    .catch(err => err)
  }
}

async function createGames(products) {
  await Promise.all(
    products.map(async (product) => {
      const item = await getByName(product.title, "game");
      if (!item) {
        console.info(`Creating: ${product.title}...`);
        const game = await strapi.services.game.create({
          name: product.title,
          slug: product.slug.replace(/_/g, "-"),
          price: product.price.amount,
          release_date: new Date(
            Number(product.globalReleaseDate) * 1000
          ).toISOString(),
          
          categories: await Promise.all(
            product.genres.map((name) => getByName(name, "category"))
          ),
          platforms: await Promise.all(
            product.supportedOperatingSystems.map((name) =>
              getByName(name, "platform")
            )
          ),
          developers: [await getByName(product.developer, "developer")],
          publisher: await getByName(product.publisher, "publisher"),
          ...(await getGameInfo(product.slug)),
        });

        await setImage({ image: product.image, game })
        await Promise.all(
          product.gallery.slice(0, 5).map(url => setImage({ image: url, game, field: "gallery" }))
        )

        await timeout(2000);

        return game;
      }
    })
  );
}

module.exports = {
  populate: async (params) => {
    try {
      console.log('serviço')
      const gogApiUrl = 'https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity'
      const { data: { products } } = await axios.get(gogApiUrl)
      console.log(products.length)
      products.forEach(async (game) => {
        await create(game.publisher, 'publisher')

        game.genres.forEach(async (cat) => {
          await create(cat, 'category')
        })

        const developers = game.developer.split(', ')
        developers.forEach(async (dev) => {
          await create(dev, 'developer')
        })

        game.supportedOperatingSystems.forEach(async (platform) => {
          await create(platform, 'platform')
        })
      })
      await createGames(products)
    } catch(e) {
      console.log("populate", Exception(e));
    }
  }
};
