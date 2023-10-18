'use client'

import React, { useState } from "react";
import { Card, Text, Grid, Col, TextInput, Button } from "@tremor/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Write() {
  // Initialize contract and contract write functions
  const { contract } = useContract("0xE5D4684634630765E61eb93171e2759733FC0eb5");
  const { mutateAsync: sendMsg } = useContractWrite(contract, "sendMsg");
  
  // Initialize state for the message input
  const [message, setMessage] = useState('');
  
  // Destination chain and address
  const destinationChain = "polygon-zkevm";
  const destinationAddress = 0xc5FcADba8aC0c0A9981991C686562Ae56a0171FA;

  // Handle message input change
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the message through the contract
      const tx = await sendMsg({ args: [destinationChain, destinationAddress, message] });

      console.log("Msg transaction hash:", tx.hash);
    } catch (error) {
      console.error("Msg failed:", error);
    }
  };

  return (
    <main>
      <Grid numItemsLg={4} className="gap-6 mt-8">
      <Col numColSpanLg={4}>
        <Card className="h-auto">
          <Text className="mb-4">Write the message you want</Text>            
          <TextInput 
            placeholder="Write a message"
            value={message}
            onChange={handleMessageChange}
          />
          <Button 
            onClick={handleSubmit}
            className="mt-4"
          >
            Send
          </Button>
        </Card>
        </Col>
      </Grid>
    </main>
  );
}
