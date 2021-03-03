import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";

export const lolcat = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";

const ProductsList = ({ products }) => {

  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  //const [count, setCount] = useState(lolcat);
  console.log(products)
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
      {products.map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >

          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className="rounded-t-lg bg-white pt-2 pb-2">
                <img
                  className="crop mx-auto"
                  src={getStrapiMedia(_product.image.formats.thumbnail.url)}
                  alt={_product.title}
                />
              </div>
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  {_product.title}
                </h4>
                <div className="mt-1 text-sm text-gray-700">
                  {_product.record === null ? 'no music' : `path is ${_product.record.url}`}
                  <br/>
                  {_product.users_permissions_user === null ? '@Mr.nobody' : `@${_product.users_permissions_user.username}`}
                  <br/>
                  {_product.description}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
