import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieLayoutHoc from "../layout/Movie.layout";
import axios from "axios";
import { MovieContext } from "../context/Movie.context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import Cast from "../components/Cast/Cast.Component";

// Create an axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // replace with your actual API base URL
  params: {
    api_key: "31e2291d638799d6d8e7352e470aaada", // replace with your actual API key
  },
});

const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      try {
        const getCast = await axiosInstance.get(`/movie/${id}/credits`);
        setCast(getCast.data.cast);
      } catch (error) {
        console.error("Error fetching cast data: ", error);
      }
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      try {
        const getSimilarMovies = await axiosInstance.get(`/movie/${id}/similar`);
        setSimilarMovies(getSimilarMovies.data.results);
      } catch (error) {
        console.error("Error fetching similar movies: ", error);
      }
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      try {
        const getRecommendedMovies = await axiosInstance.get(
          `/movie/${id}/recommendations`
        );
        setRecommendedMovies(getRecommendedMovies.data.results);
      } catch (error) {
        console.error("Error fetching recommended movies: ", error);
      }
    };
    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      try {
        const getMovie = await axiosInstance.get(`/movie/${id}`);
        setMovie(getMovie.data);
      } catch (error) {
        console.error("Error fetching movie data: ", error);
      }
    };
    requestMovie();
  }, [id]);

  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 4,
        },
      },
    ],
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">About the Movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable Offers</h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Cards* on BookMyShow Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Cards* on BookMyShow Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Recommended Sliders */}
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Cast Slider */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
          <Slider {...settingsCast}>
            {cast.map((castData) => (
              <Cast
                key={castData.cast_id}
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <PosterSlider
          config={settings}
          title="BMS XCLUSIVE Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
