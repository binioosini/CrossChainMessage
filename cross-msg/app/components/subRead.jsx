import React from "react";
import { Card, Title, Text } from "@tremor/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function SubRead({contractAddress}) {

  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "message", [])

  return (
    <div>
      {/* Display allowance data in a card */}
      {isLoading ? (
        <Card className="h-auto text-center">
          <Title>Loading...</Title>
        </Card>
      ) : (
        <Card className="h-auto text-center">
          <Title>msg</Title>
          <Text className="mt-4">{data.toString()}</Text>
        </Card>
      )}
    </div>
  );
}