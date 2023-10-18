'use client'

import { useSwitchChain } from "@thirdweb-dev/react";
import { Text, Button } from "@tremor/react";
import { PolygonZkevmTestnet } from "@thirdweb-dev/chains";

export default function SwitchNetwork() {
  const switchChain = useSwitchChain();
  return (
    <>
    <Button className="mt-4" onClick={() => switchChain(PolygonZkevmTestnet.chainId)}>
      Switch to polygon to read the msg
    </Button>
    <Text>
      After click switch button switch your wallet to Polygon ZkevmTestnet
    </Text>
    </>
    

  );
}