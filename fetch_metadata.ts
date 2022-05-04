import { programs } from "@metaplex/js";
import { Cluster, clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
const {
  metadata: { Metadata },
} = programs;

const connection = new Connection(clusterApiUrl("mainnet-beta"));

(async function getMetadata() {
  let mintPubkey = new PublicKey(
    "EPr4X3pqEMT7Eeu8YH9bt7uTD2PQ96rDP6NGU5PVoXaD"
  );
  let tokenmetaPubkey = await Metadata.getPDA(mintPubkey);
  const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
  console.log(JSON.stringify(tokenmeta.data.data, null, 2));
  return tokenmeta.data.data;
})();
