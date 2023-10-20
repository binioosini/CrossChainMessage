'use client'

import { Card, Title, Text, Grid, Col } from "@tremor/react";
import { useChainId } from "@thirdweb-dev/react";
import SubRead from "./subRead";

export default function Read() {
  const contract = "0xc5FcADba8aC0c0A9981991C686562Ae56a0171FA";
  const chainId = useChainId();

  
  return (
    <Grid numItemsLg={4} className="gap-6 mt-8 mb-8">
      <Col numColSpanLg={4}>
        <Card className="h-16 w-60">
          {chainId === 1442 ? (
            <SubRead contractAddress={contract} />
          ) : (
            <div className="h-auto text-center">
              <Title>Switch to read msg</Title>
            </div>
          )}
        </Card>
      </Col>
    </Grid>
  );
}
