import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      "adult": false,
      "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      "belongs_to_collection": null,
      "budget": 63000000,
      "genres": [
      {
      "id": 18,
      "name": "Drama"
      }
      ],
      "homepage": "http://www.foxmovies.com/movies/fight-club",
      "id": 550,
      "imdb_id": "tt0137523",
      "original_language": "en",
      "original_title": "Fight Club",
      "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      "popularity": 93.958,
      "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      "production_companies": [
      {
      "id": 711,
      "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
      "name": "Fox 2000 Pictures",
      "origin_country": "US"
      },
      {
      "id": 508,
      "logo_path": "/7cxRWzi4LsVm4Utfpr1hfARNurT.png",
      "name": "Regency Enterprises",
      "origin_country": "US"
      },
      {
      "id": 4700,
      "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
      "name": "The Linson Company",
      "origin_country": "US"
      },
      {
      "id": 25,
      "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      "name": "20th Century Fox",
      "origin_country": "US"
      },
      {
      "id": 20555,
      "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
      "name": "Taurus Film",
      "origin_country": "DE"
      }
      ],
      "production_countries": [
      {
      "iso_3166_1": "DE",
      "name": "Germany"
      },
      {
      "iso_3166_1": "US",
      "name": "United States of America"
      }
      ],
      "release_date": "1999-10-15",
      "revenue": 100853753,
      "runtime": 139,
      "spoken_languages": [
      {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
      }
      ],
      "status": "Released",
      "tagline": "Mischief. Mayhem. Soap.",
      "title": "Fight Club",
      "video": false,
      "vote_average": 8.44,
      "vote_count": 27917
    }
  ]);

  const settingsLG = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image, index) => {
            <div className="w-full h-56 md:h-80 py-3" key={index} >
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>;
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image, index) => {
            <div className="w-full h-96 px-2 py-3" key={index} >
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>;
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;