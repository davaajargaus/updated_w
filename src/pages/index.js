import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card, Header, Mid } from "@/comp/Bs";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`https://valorant-api.com/v1/agents?limit=9`)
      .then((response) => response.json())
      .then((data) => setDatas(data.data));
  }, []);

  return (
    <>
      <main>
        <div>
          <div className="big_container">
            <div className="mid_container">
              <Header />
              <Mid />
              <div className="last_container">
                <div className="cards">
                  {datas.map((value) => {
                    return value?.fullPortraitV2 && <Card boos={value} />;
                  })}
                </div>
                <button href="" className="next">
                  NEXT
                </button>
                <div className="about"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
