import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { MainScreen } from "../src/components/main-screen";
import { IDataProps, Quiz } from "../src/components/quiz";
import { Spinner } from "../src/components/spinner";
import { Statistics } from "../src/components/statistics";
import { getData } from "../src/helpers/getData";

const randomArr = (arr: Array<string | any>) => {
  const cloneArr = [...arr];
  return Array(4)
    .fill("")
    .map(() => {
      const randomIndex = Math.floor(Math.random() * cloneArr.length);
      const [item] = cloneArr.splice(randomIndex, 1);

      return {
        name: item.name.common,
        flag: item.flags.png,
        capital: item.capital?.[0] || "any capital",
      };
    });
};

const themes = ["capital", "flag", "countryName"];

const Home: NextPage = () => {
  const [bigData, setBigData] = useState(null);
  const [data, setData] = useState<IDataProps[]>([]);
  const [theme, setTheme] = useState("");
  const [infoAboutGame, setInfoAboutGame] = useState({
    counter: 0,
    right: 0,
    wrong: 0,
  });

  const changeInfo = (isRight: boolean) =>
    isRight ? 
      setInfoAboutGame((prev) => ({ ...prev, counter: ++prev.counter, right: ++prev.right })) : setInfoAboutGame((prev) => ({ ...prev, counter: ++prev.counter, wrong: ++prev.wrong }))
  
  const restartGame = () => setInfoAboutGame((prev) => ({ right: 0, wrong: 0, counter: 0 }))
  
  useMemo(() => {
    getData().then((res) => res.json().then((res) => setBigData(res)));
  }, []);

  useLayoutEffect(() => {
    if (infoAboutGame.counter < 10) {
      bigData && setData(randomArr(bigData));
      setTheme(themes[Math.floor(Math.random() * themes.length)]);
     }
  }, [bigData, infoAboutGame]);

  return (
    <>
      <Head>
        <title>MyQuiz</title>
        <meta name="description" content="Quiz by Maslov Oleg, created by Next.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainScreen>
          {data.length === 0 ? (
            <Spinner />
        ) : (infoAboutGame.counter < 10 ? (
          <Quiz
          changeInfo={changeInfo}
          rightAnswer={data[Math.floor(Math.random() * data.length)]}
          theme={theme}
          data={data}
        />
          ) : (<Statistics restartGame={restartGame} data={infoAboutGame} />)
          )}

      </MainScreen>
    </>
  );
};

export default Home;
