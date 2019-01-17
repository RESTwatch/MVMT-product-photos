import http from 'k6/http';
import { sleep } from "k6";

export default function () {
  const low = 100;
  const high = 10000000;
  const num = Math.floor(Math.random() * (high - low + 1)) + low;
  http.get(`http://localhost:3001/api/watches/${num}/photos`);
  sleep(1);
}
