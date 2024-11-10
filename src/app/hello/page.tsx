import { pinata } from "../lib/pinata"

async function getData() {

    const url = await pinata.gateways.createSignedURL({cid: "bafkreibpuwcjcl7wp3eeoqvwqoufifdtnlt5c6ojbgkdhjiouiutstrpdi",
        expires: 30,
    });

    return url;
}

export default async function HelloRoute() {
const data = await getData()

  return (
    <div>
      <img src={data} alt="image"  />
    </div>
  )
}
