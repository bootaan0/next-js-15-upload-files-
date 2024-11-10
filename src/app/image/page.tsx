import { pinata } from "../lib/pinata"

async function getData() {

    const url = await pinata.gateways.createSignedURL({cid: "",
        expires: 30,
    });

    return url;
}

export default async function HelloRoute() {
const data = await getData()

  return (
    <div>
      {data.map((index) => (
        <div key={index}>
            {data}
        </div>
      ))}
    </div>
  )
}
