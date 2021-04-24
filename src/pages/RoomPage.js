import React, { useContext } from "react";
import { MyContext } from "../Context";
import RoomsFilter from "../components/RoomsFilter";
import Title from "../components/Title";
import RoomList from "../components/RoomList";
// import Pagination from '../components/Pagination';s
import Footer, {}  from '../components/Footer'
//import { Grid, GridItem } from "@chakra-ui/react"
//import { SimpleGrid,Box } from "@chakra-ui/react"
import {Container,Row,Col  } from 'react-bootstrap'

export default function RoomPage() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const roomsPerpage = 2;
  const contextData = useContext(MyContext);
  const { sortedRooms } = contextData;
  // let lastRoom = roomsPerpage * currentPage;
  // let firstRoom = lastRoom - roomsPerpage;

  // const paginate = (page) => {
  //   setCurrentPage(page);
  // }
  return (
    <>






        
<Container>


    <Title title="Filter Rooms" />

     <RoomsFilter />






    <Title title="Rooms" />
   <div className="room-list">
          {sortedRooms.length === 0 ? (
            <h3> No room found </h3>
          ) : (
            <RoomList rooms={sortedRooms} />
          )}
        </div>

   










</Container>
       


        {/* <Pagination totalNumberofRooms={sortedRooms.length} roomsPerPage={roomsPerpage} paginate={paginate} /> */}
   

    
      <Footer />
    </>
  );
}
