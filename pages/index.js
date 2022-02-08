import Layout from "../components/Layout";
import MyImage from "../components/MyImages";
import MyContext from "store/my-context";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Authorization from "HOC/Authorization";
import Image from "next/image";

function Home() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  const ctx = useContext(MyContext);

  const { search } = ctx;

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = process.env.NEXT_PUBLIC.API_KEY;
      setIsLoading(
        <Image
          className="loading"
          src="/images/loading.gif"
          alt="loading"
          width={400}
          height={160}
        />
      );
      const res = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${search}`
      );
      if (!res.ok) return setIsLoading("Failed to load data");

      const { hits } = await res.json();
      setIsLoading("");
      setdata(hits);
    };
    try {
      fetchData();
    } catch (error) {
      setIsLoading("Failed to load data");
    }
  }, [search]);

  return (
    <Layout>
      <div>
        <MyImage data={data} isLoading={isLoading} />
        {!isLoading && data.length === 0 && (
          <h1 className="message">Picture not found</h1>
        )}
      </div>
    </Layout>
  );
}

export default Authorization(Home);
