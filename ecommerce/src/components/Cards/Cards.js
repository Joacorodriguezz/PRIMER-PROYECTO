import React from "react";
import Card from "./Card";


const cards = [
  {
    id: 1,
    title: "Fazt Web",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Samsumg A13",
    image: "https://carrefourar.vtexassets.com/arquivos/ids/246912/8806094152043_01.jpg?v=637906892672600000" ,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Iphone 14 Pro",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: "https://carrefourar.vtexassets.com/arquivos/ids/246912/8806094152043_01.jpg?v=637906892672600000",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    url: "https://youtube.com/fazttech",
  },

];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;