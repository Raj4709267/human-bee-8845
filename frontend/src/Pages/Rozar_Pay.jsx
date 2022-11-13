import React, { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle ,Heading,useToast } from "@chakra-ui/react";

const Rozar_Pay = () => {
  const toast = useToast()
  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: total_prize*1000, //  = INR 1
    name: "Fashion Club",
    description: "some description",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function(response) {
      toast({
        title: 'Your Payment is Success.',
        description: "We've working on your order for you.",
        status: 'success',
        position: "top",
        duration: 9000,
        isClosable: true,
      })
      navigate("/")
    },
    prefill: {
      name: "Mohammad Javed",
      contact: "9517197442",
      email: "javed233638@demo.com"
    },
    notes: {
      address: "some address"
    },
    theme: {
      color: "#F37254",
      hide_topbar: false
    }
  };
  return (
    <div>
<Heading>ROzar Pay Dummy</Heading>
<button onClick={() => openPayModal(options)} className={styles.checkoutBtn}>Save details and Pay</button>

    </div>
  )
}

export default Rozar_Pay