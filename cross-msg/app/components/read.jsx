'use client'

import React from "react";
import { Card, Title, Text, Grid, Col } from "@tremor/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function Read() {
  // Define the contract address and arguments
  const contractAddress = "0xE5D4684634630765E61eb93171e2759733FC0eb5";
  const args = [];

  // Initialize the contract and read data from it
  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "message", args);

  return (
    <Grid numItemsLg={4} className="gap-6 mt-8">
      <Col numColSpanLg={4}>
        <Card>
          {isLoading ? (
            // Display loading message when data is being fetched
            <div className="h-auto text-center">
              <Title>Loading...</Title>
            </div>
          ) : (
            // Display the message from the other chain when data is available
            <div className="h-auto text-center">
              <Title>The Msg in the other chain:</Title>
              <Text className="mt-4">{data.toString()}</Text>
            </div>
          )}
        </Card>
      </Col>
    </Grid>
  );
}
