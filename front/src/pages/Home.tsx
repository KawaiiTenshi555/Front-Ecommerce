import React, { useRef, useContext } from "react";
import Layout from "../components/Layout";
function Home() {

  const features = [
    {
      name: "Informatique",
      description: "Des produits informatiques de qualité",
    },
    {
      name: "Maison",
      description:
        "De la chambre au salon, des produits pour toute la maison",
    },
    {
      name: "Automobile",
      description: "Pour améliorer votre voiture ou moto",
    },
    {
      name: "Vêtement",
      description: "Des vêtements tendances pour toute la famille",
    },
  ];


  return (
    <>
      <Layout>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ZenMarket
            </h2>
            <p className="mt-4 text-gray-500">
              ZenMarket est un site de vente en ligne de produit. Nous vous proposons une large gamme de produit de qualité.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
            <a href="/">
              <img
                src="https://th.bing.com/th/id/R.9b3ea13bc18da88b4e7129aa549a5315?rik=RazMJ0yMD0o1gw&riu=http%3a%2f%2fwww.iclub-informatique.fr%2fwp-content%2fuploads%2f2020%2f07%2ficlub-informatique-slider-scaled.jpg&ehk=yWDnm51uZaBLpHLV9sa3xwYJBgbyG4bk0av%2bUQq90Bo%3d&risl=&pid=ImgRaw&r=0"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100 w-60 h-60 p-6 shadow-xl border hover:border-2 border-red-700 hover:shadow-2xl"
              />
            </a>
            <a href="/">
              <img
                src="https://th.bing.com/th/id/OIP.H-IpUf1YatkF-HiMerUPLAHaEZ?rs=1&pid=ImgDetMain"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100 w-60 h-60 p-6 shadow-xl border hover:border-2 border-red-700 hover:shadow-2xl"
              />
            </a>
            <a href="/">
              <img
                src="https://wallup.net/wp-content/uploads/2019/09/709918-1950-buick-roadmaster-convertible-classic-cars.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100 w-60 h-60 p-6 shadow-xl  border hover:border-2 border-red-700 hover:shadow-2xl"
              />
            </a>
            <a href="/">
              {" "}
              <img
                src="https://www.modeintextile.fr/wp-content/uploads/2016/05/ERGO.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100 w-60 h-60 p-6 shadow-xl  border hover:border-2 border-red-700 hover:shadow-2xl"
              />
            </a>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default Home;