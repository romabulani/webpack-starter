import axios from "axios";

const getQuote = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get("https://api.quotable.io/random", config);
    console.log(res);
    document.getElementById("quote").innerHTML = res.data.content;
  } catch (e) {
    console.error(e);
    document.getElementById("quote").innerHTML =
      "An apple a day keeps the doctor away!";
  }
};

export default getQuote;
