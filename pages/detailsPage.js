import React from "react";
import DestinationLoc from "../components/DestinationLoc";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const router = useRouter();
  const { data } = router.query;
  const [destinationData, setDestinationData] = useState([]);

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setDestinationData([parsedData]); // Wrap in array as requested
      } catch (error) {
        console.error("Error parsing data:", error);
      }
    }
  }, [data]);

  return (
    <Layout>
      <DestinationLoc selected={destinationData} />
    </Layout>
  );
};

export default DetailsPage;
