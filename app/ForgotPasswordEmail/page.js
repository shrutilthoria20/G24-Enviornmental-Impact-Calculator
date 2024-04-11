import React from "react";
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
import { Body } from "@react-email/body";


export default function ForgotPasswordEmail({ params }) {  
  return (
    <Html>      
      <Body>
      <Heading as="h2"> Hello, {params.name} </Heading>
      <Text>
        We received the reset password request. If it's not you then pls ignore it.
      </Text>
      <Button 
        // pX={40}
        // pY={40}
        href={params.url}
        style={{ background: "#000", color: "#FFFFFF",padding:5,}}>
        Click Me
      </Button>
      <Hr />
      <Heading as="h3">Regards</Heading>
      <Text>Shrutil Thoria</Text>
      </Body>
    </Html>
  );
}
