import http from 'k6/http';
import { sleep } from "k6";

export let options = {
  duration: "1h",
  vus: 50,
  rps: 1000,
}

export default function () {
  const randomNum = Math.random();
  let low = 100;
  const high = 10000100;
  if (randomNum > 0.2) {
    low = 9009100;
  }
  const num = Math.floor(randomNum * (high - low + 1)) + low;
  http.get(`http://localhost:3001/api/watches/${num}/photos`);
  sleep(1);
}
