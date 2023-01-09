import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../../context/context";
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import Columnchart from "./Columnchart";
import Doughnutchart from "./Doughnutchart";

export default function AllChart() {
  const { githubRepos } = useContext(GithubContext);

  // collecting total type of language use for creating project and counting stars
  const accumulateLanguages = githubRepos.reduce((accumulator, item) => {
    const { language, stargazers_count } = item;
    if (!language) {
      return accumulator;
    }
    if (!accumulator[language]) {
      accumulator[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      accumulator[language] = {
        ...accumulator[language],
        value: accumulator[language].value + 1,
        stars: accumulator[language].stars + stargazers_count,
      };
    }
    return accumulator;
  }, {});

  // Sorting out most 5 used language

  const mostUsedLanguage = Object.values(accumulateLanguages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 6);

  // Sort out most achieving stars each language
  const mostStarsObtainingLanguage = Object.values(accumulateLanguages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 6);

  //Extract stars and forks

  let { stars, forks } = githubRepos.reduce(
    (accumulator, item) => {
      const { stargazers_count, name, forks } = item;
      accumulator.stars[stargazers_count] = {
        label: name,
        value: stargazers_count,
      };
      accumulator.forks[forks] = { label: name, value: forks };
      return accumulator;
    },
    {
      stars: {},
      forks: {},
    }
  );

  stars = Object.values(stars).slice(-6).reverse();
  forks = Object.values(forks).slice(-6).reverse();
  // Dummy Data for visualize chart
  const chartData = [
    {
      label: "Javascript",
      value: "30",
    },
    {
      label: "React",
      value: "20",
    },
    {
      label: "Redux",
      value: "10",
    },
    {
      label: "Typscript",
      value: "10",
    },
  ];
  return (
    <section className="section ">
      <div className="section-center flex gap-2 flex-wrap h-[45%] ">
        <Piechart data={mostUsedLanguage} />
        <Barchart data={stars} />
        <Doughnutchart data={mostStarsObtainingLanguage} />
        <Columnchart data={forks} />
      </div>
    </section>
  );
}
