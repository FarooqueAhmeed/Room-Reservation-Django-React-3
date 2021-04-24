import React from "react";
import {Link} from 'react-router-dom';
import {Box,Image,Badge } from "@chakra-ui/react"
export default function Room({ room }) {
    const {cover_image, title, price_per_night, room_slug,is_booked} = room
  return (


    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">

       <Link to={`/single-room/${room_slug}`}>
    <Image src={cover_image} alt="" />
    </Link>

    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          New
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {is_booked === true ? 'Reserved' : 'Book Now'}

        </Box>
      </Box>

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {title}
      </Box>

      <Box>
      $ {price_per_night}
       
      </Box>

     
    </Box>
  </Box>












// {/* 


//     <div className="card room"> 
    
//       <Link to={`/single-room/${room_slug}`}>
//         <img className="card-img-top img-fluid room-image" src={cover_image} alt="" />
//       </Link>
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
    
       

//         <p className="card-text font-weight-bold">$ {price_per_night}</p>
//       </div>
//     </div> */}





  );
}
